// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import * as fs from "node:fs";
import { fileURLToPath } from "node:url";
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

  fonts: [
    {
      provider: fontProviders.local(),
      name: "Atkinson",
      cssVariable: "--font-atkinson",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/atkinson-regular.woff"],
            weight: 400,
            style: "normal",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/atkinson-bold.woff"],
            weight: 700,
            style: "normal",
            display: "swap",
          },
        ],
      },
    },
  ],

  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ["astro-takumi", "jsdom", "canvas"],
    },
  },
});
