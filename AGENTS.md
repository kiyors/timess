# Project Context & Rules

## Project Overview

- **Project:** Marketing website for **indiefluence.in**.
- **Architecture:** Strictly **frontend-only**. There is NO backend, NO database, and NO custom server. All content consists of static marketing pages and manually added MDX files.
- **Core Framework:** Astro (located in `src/pages` and `src/components`).
- **Documentation & Blog:** Using **Astro Content Collections** for MDX-based blogs (located in `src/content/blog` and configured via `src/content.config.ts`).

## Tooling & Commands

- **Package Manager:** **ALWAYS use `pnpm`** (e.g., `pnpm add`, `pnpm dev`, `pnpm dlx`). Do not use `npm`, `yarn`, or `bun`.
- **Workspace:** Be aware of `pnpm-workspace.yaml` if managing dependencies across packages.
- **Linting & Formatting:** This project uses **oxlint/oxfmt**. Do NOT use, suggest, or install ESLint or Prettier.

## UI & Component System (shadcn/ui & Animations)

This project uses `shadcn/ui` as the foundational design system, augmented by community registries for animations.

1. **Adding Components:** ALWAYS use the CLI to add components: `pnpm dlx shadcn@latest add <component>`. Do not build standard UI elements from scratch.
2. **Third-Party Registries & Animations:** Do NOT write custom animation code (like raw Framer Motion or complex CSS keyframes) if a pre-built registry component exists.
   - **Animated UI:** For animated blocks, sections, or micro-interactions, use components from [Animate UI (animate-ui.com)](https://animate-ui.com/) or similar community registries.
   - **Animated Icons:** Use [Lucide Animated (lucide-animated.com)](https://lucide-animated.com/) to replace standard `lucide-react` icons.
   - **GSAP:** GSAP ([gsap.com](http://gsap.com/)) is allowed and preferred for the Indiefluence 2026 redesign when creating polished page scroll, reveal, timeline, pinned-section, marquee, and interaction animations. Use it intentionally for high-value motion, keep animations performant on mobile, respect reduced-motion preferences, and avoid turning the site into an animation demo.
   - **Restraint:** **DO NOT force animations everywhere.** Only use animated components or icons where it visually makes sense and enhances UX (e.g., hover states, primary CTAs, loading states, success markers).
3. **Strict shadcn/ui Rules:**
   - Use `cn()` for conditional classes.
   - Use semantic colors (e.g., `bg-background`, `text-muted-foreground`), never raw Tailwind colors (like `bg-blue-500`).
   - For forms, always use composition (e.g., `<FieldGroup>`, `<Field>`), never raw `div` tags for layout.
   - Use `size-*` for equal dimensions (e.g., `size-10`, not `w-10 h-10`).

## Project Structure & Existing Skills Map

Before writing new code or generating content, ALWAYS search the following directories to use existing setups rather than inventing new ones:

1. **Pages & Routing (`src/pages`):** Contains the static marketing pages using Astro. Read existing pages to match established layouts.
2. **UI Components (`src/components`):** This is where all **shadcn/ui** and custom components live. React components usually end in `.tsx`, Astro structural elements end in `.astro`.
3. **MDX Content (`src/content`):** Holds the Astro Content Collections. Read existing files in `src/content/blog`, `src/content/work`, and `src/content/services` to understand the required frontmatter structure.
4. **Layouts (`src/layouts`):** Contains the base layout shell `Layout.astro` which wraps all pages.
5. **Utilities (`src/lib`):** Check here for existing helper functions, especially the `cn` utility.
6. **Data (`src/data`):** Look here for static data, config arrays, or marketing copy before hardcoding large blocks of text directly into components.
7. **Hooks (`src/hooks`):** Check here for reusable React hooks before writing custom React logic directly inside UI components.

## Indiefluence 2026 Redesign Brief

Read `PRODUCT.md` for strategic positioning, target audience, and core product purpose.
Read `DESIGN.md` before making UI, content, routing, component, or visual-system changes. It is the design contract for the 2026 Indiefluence redesign and has been validated with:

```bash
pnpm dlx @google/design.md lint DESIGN.md
```

If instructions conflict, follow this order:

1. User request in the active conversation.
2. `PRODUCT.md` for strategy, purpose, and audience.
3. `DESIGN.md` for design and UX decisions.
4. This `AGENTS.md` file for engineering, framework, and tooling rules.
5. Existing codebase conventions.

### Design Direction

The 2026 redesign should make Indiefluence feel like a serious, psychology-led growth studio for businesses. It should be business-friendly, mobile-first, visually alive, and proof-led.

Preserve:

- Indiefluence logo.
- Current brand blue `#395299`.
- Current brand yellow `#FBCC03`.
- Current font stack: Geist, Geist Mono, Inter.
- Psychology-led positioning: "From ideas to impact."

Prioritize:

- Mobile-first layouts.
- Clear routes for business owners and founders.
- Case studies and client proof.
- A dedicated AI Solutions experience.
- Clean, premium maximalism with minimal composition.
- Small useful animations, not constant spectacle.

Avoid:

- Scammy AI/agency aesthetics.
- Generic service-grid-first pages.
- Heavy decorative particles, loud gradients, or overused yellow.
- Raw Tailwind colors when semantic/theme colors or brand tokens exist.
- Custom animation code when an appropriate registry component exists.

### Current Redesign Inputs

Local reference files:

- `indiefluence-v1.html`
- `indiefluence-v2.html`

Interpretation:

- Use short promise, practical modules, section numbers, looping capability strips, strong chapter flow.
- Use `indiefluence-v2.html` as the closer direction.
- Use `indiefluence-v1.html` as content exploration, not the final visual standard.

### Required Site Evolution

Homepage should move from generic service listing to business-entry navigation:

- Are you a D2C brand looking to grow?
- Do you want to launch a startup brand?
- Do you want to expand internationally?
- Need hyperlocal influencer marketing?
- Do you want custom software built?
- Are you a B2B business chasing relevance?
- Want Gen-AI videos and campaigns?

New or revised page priorities:

- Home: hero, capability strip, who-we-help, proof, services, AI teaser, clients, contact.
- AI Solutions: Gen-AI video, AI-native campaigns, custom AI software/agents, automations, honest AI trust section.
- Case Studies/Work: index plus comprehensive MDX-backed case-study detail pages.
- Services: SEO-friendly details, grouped around business outcomes.
- About: psychology-led thinking, craft, team, and operating philosophy.
- Contact: conversion-focused form plus direct phone, email, WhatsApp.

### Verification

For design-system changes:

```bash
pnpm dlx @google/design.md lint DESIGN.md
```

For app changes, choose the narrowest relevant checks available in `package.json`, usually Biome and the Astro build/typecheck flow (`pnpm build` or `npx astro check`).

When changing visual UI, run the local dev server (`pnpm dev`) and inspect mobile and desktop. Mobile quality is the baseline, not an afterthought.
