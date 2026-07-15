// @ts-check

import * as fs from "node:fs";
import { fileURLToPath } from "node:url";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import astroTakumi from "astro-takumi";

import { OgTemplate } from "./src/components/og-template.tsx";

// https://astro.build/config
export default defineConfig({
  site: "https://indiefluence.in",
  outDir: "./build",
  integrations: [
    mdx(),
    sitemap(),
    react(),
    astroTakumi({
      options: {
        fonts: [
          fs.readFileSync(fileURLToPath(import.meta.resolve("@fontsource/inter/files/inter-latin-400-normal.woff"))),
          fs.readFileSync(fileURLToPath(import.meta.resolve("@fontsource/inter/files/inter-latin-500-normal.woff"))),
          fs.readFileSync(fileURLToPath(import.meta.resolve("@fontsource/inter/files/inter-latin-700-normal.woff"))),
          fs.readFileSync(fileURLToPath(import.meta.resolve("@fontsource/inter/files/inter-latin-800-normal.woff"))),
        ],
      },
      render: OgTemplate,
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ["astro-takumi", "jsdom", "canvas"],
    },
  },
});
