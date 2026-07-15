# Indiefluence

Marketing website for [indiefluence.in](https://indiefluence.in), built as a static Astro site.

## Stack

- Astro 7
- Astro Content Collections for MDX content
- React islands only where browser interactivity is needed
- Tailwind CSS 4 with shadcn/ui conventions
- GSAP for high-value motion
- oxlint and oxfmt for checks and formatting
- pnpm only

## Architecture

This project is frontend-only. There is no backend, database, or custom server. The build outputs static files to `build/`.

Astro pages live in `src/pages`. Shared UI lives in `src/components`. Static content and marketing data live in `src/content` and `src/data`.

Use `.astro` components for static sections by default. Use `.tsx` components when a component needs React state, browser APIs, form handling, or GSAP hooks. Importing a `.tsx` component in Astro is fine when it is server-rendered, but adding `client:*` hydrates it and ships browser JavaScript.

## Project Structure

```txt
src/
  components/       Astro and React components
  content/          MDX content collections
  data/             Static site copy and config
  layouts/          Base page shell
  lib/              Utilities and shared helpers
  pages/            Astro routes
  styles/           Global CSS and design tokens
```

## Commands

Install dependencies:

```bash
pnpm install
```

Run locally:

```bash
pnpm dev
```

Build static output:

```bash
pnpm build
```

Run project checks:

```bash
pnpm check
```

Format:

```bash
pnpm fmt
```

Lint:

```bash
pnpm lint
```

## Nix Development Environment

The project includes a `flake.nix` development shell with Node.js, pnpm, [prek](https://github.com/j178/prek), oxfmt, oxlint, and nixfmt:

```bash
nix develop
pnpm install
```

If you use direnv, the included `.envrc` enters the flake automatically:

```bash
direnv allow
```

Run all Nix-managed hooks across the repository with:

```bash
nix fmt
```

Run the hooks as a sandboxed flake check with:

```bash
nix flake check
```

The sandboxed check cannot modify files. Use `nix fmt` or `pnpm fmt` when formatting changes need to be applied.

## Git Hooks with prek

The committed `.pre-commit-config.yaml` uses the standard pre-commit configuration format, which prek supports as a drop-in replacement. Install the project dependencies and prek, then install the Git hooks:

```bash
pnpm install
brew install prek
prek install
```

The configuration installs both `pre-commit` and `pre-push` guards by default. The Nix development shell already provides prek, so Nix users only need:

```bash
nix develop
prek install
```

Outside Nix and Homebrew, prek can also be installed with `pipx install prek`, `uv tool install prek`, or `pnpm add -D @j178/prek`.

Run every portable hook manually with:

```bash
prek run --all-files
```

The portable hooks check formatting with oxfmt, lint JavaScript and TypeScript with oxlint, and prevent environment files from being committed. The Nix-managed checks also format `flake.nix` with nixfmt.

## Environment Variables

Client-exposed variables must use Astro's `PUBLIC_` prefix.

```bash
PUBLIC_EMAILJS_SERVICE_ID=
PUBLIC_EMAILJS_TEMPLATE_ID=
PUBLIC_EMAILJS_PUBLIC_KEY=
```

Do not use Next.js-style `NEXT_PUBLIC_*` names in this project.

Real `.env` files must never be committed. Git ignores `.env` and all `.env.*` variants by default, and the commit/push guard blocks them even if they are force-added. Sanitized templates are allowed when their names end in:

```txt
.env.example
.env.sample
.env.template
```

Never place real credentials or secrets in those template files.

## Component Guidelines

- Prefer `.astro` for static layout, cards, sections, lists, and marketing copy.
- Hydrate React only when needed with `client:load`, `client:visible`, or `client:only`.
- Keep static primitives such as links, labels, watermarks, and underlines server-rendered.
- Use `client:visible` for below-the-fold interactive islands.
- Keep GSAP animations purposeful and respect reduced-motion preferences.
- Use existing components and data files before adding new structures.

Current intentionally hydrated areas include the header, WhatsApp widget, EmailJS lead form, smooth scrolling, and GSAP-heavy interactive sections.

## Content

Blog, work, and service content is managed through Astro Content Collections. Check `src/content.config.ts` before adding or editing frontmatter.

MDX content lives under:

```txt
src/content/blog
src/content/work
src/content/services
```

## Design Notes

Read `DESIGN.md` before changing UI, copy structure, visual direction, routes, or components. It is the contract for the Indiefluence 2026 redesign.

Preserve the brand blue `#395299`, brand yellow `#FBCC03`, and the psychology-led positioning: "From ideas to impact."

## Verification

Before shipping meaningful changes, run:

```bash
pnpm check
pnpm build
```

For visual changes, run `pnpm dev` and inspect mobile and desktop. Mobile quality is the baseline.
