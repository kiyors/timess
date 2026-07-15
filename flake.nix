{
  description = "A Nix-flake-based Node.js development environment";

  inputs = {
    nixpkgs.url = "https://flakehub.com/f/NixOS/nixpkgs/0.1"; # unstable Nixpkgs
    git-hooks = {
      url = "github:cachix/git-hooks.nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs =
    { self, ... }@inputs:

    let
      supportedSystems = [
        "x86_64-linux"
        "aarch64-linux"
        "x86_64-darwin"
        "aarch64-darwin"
      ];
      forEachSupportedSystem =
        f:
        inputs.nixpkgs.lib.genAttrs supportedSystems (
          system:
          f {
            pkgs = import inputs.nixpkgs {
              inherit system;
              overlays = [ inputs.self.overlays.default ];
            };
          }
        );
    in
    {
      overlays.default = final: prev: rec {
        nodejs = prev.nodejs;
      };

      checks = forEachSupportedSystem (
        { pkgs }:
        {
          pre-commit-check = inputs.git-hooks.lib.${pkgs.stdenv.hostPlatform.system}.run {
            src = ./.;
            package = pkgs.prek;
            hooks = {
              forbid-env-files = {
                enable = true;
                name = "Prevent committing environment files";
                entry = toString (
                  pkgs.writeShellScript "forbid-env-files" ''
                    echo "Refusing to commit environment file(s):" >&2
                    printf '  - %s\n' "$@" >&2
                    echo "Commit a .env.example, .env.sample, or .env.template file instead." >&2
                    exit 1
                  ''
                );
                files = "(^|/)\\.env($|\\.)";
                excludes = [ "(^|/)\\.env.*\\.(example|sample|template)$" ];
              };
              nixfmt.enable = true;
              oxfmt = {
                enable = true;
                entry = "${pkgs.lib.getExe pkgs.oxfmt} --check";
              };
              oxlint = {
                enable = true;
                entry = pkgs.lib.getExe pkgs.oxlint;
              };
            };
          };
        }
      );

      formatter = forEachSupportedSystem (
        { pkgs }:
        let
          config = self.checks.${pkgs.stdenv.hostPlatform.system}.pre-commit-check.config;
        in
        pkgs.writeShellScriptBin "prek-run" ''
          ${pkgs.lib.getExe config.package} run --all-files --config ${config.configFile}
        ''
      );

      devShells = forEachSupportedSystem (
        { pkgs }:
        {
          default = pkgs.mkShellNoCC {
            packages = with pkgs; [
              nodejs
              nixfmt
              oxfmt
              oxlint
              pnpm
              prek
            ];
          };
        }
      );
    };
}
