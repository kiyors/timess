---
name: "Indiefluence 2026"
description: "Mobile-first redesign direction for Indiefluence: psychology-led marketing, software, AI campaigns, and case-study proof for serious businesses."
colors:
  primary: "#395299"
  primary-deep: "#141D3B"
  primary-hover: "#2C4488"
  accent: "#FBCC03"
  ink: "#0E1326"
  paper: "#EFF1F8"
  surface: "#FFFFFF"
  muted: "#5A6178"
typography:
  display-xl:
    fontFamily: "Geist"
    fontSize: "5.8rem"
    fontWeight: 600
    lineHeight: "0.92"
    letterSpacing: "-0.03em"
  display-lg:
    fontFamily: "Geist"
    fontSize: "3.8rem"
    fontWeight: 600
    lineHeight: "0.96"
    letterSpacing: "-0.03em"
  heading-md:
    fontFamily: "Geist"
    fontSize: "2.2rem"
    fontWeight: 600
    lineHeight: "1.04"
    letterSpacing: "-0.02em"
  body-lg:
    fontFamily: "Inter"
    fontSize: "1.2rem"
    fontWeight: 400
    lineHeight: "1.5"
    letterSpacing: "0px"
  body-md:
    fontFamily: "Inter"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.55"
    letterSpacing: "0px"
  label:
    fontFamily: "Geist Mono"
    fontSize: "0.72rem"
    fontWeight: 500
    lineHeight: "1.1"
    letterSpacing: "0.12em"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  section-mobile: "clamp(4rem, 18vw, 6rem)"
  section-desktop: "clamp(6rem, 10vw, 9rem)"
  gutter: "clamp(1.25rem, 5vw, 3rem)"
  max-width: "1240px"
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  xl: "22px"
  pill: "999px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.15rem"
    typography: "{typography.body-md}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.surface}"
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.15rem"
    typography: "{typography.body-md}"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.15rem"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "clamp(1.4rem, 4vw, 2.4rem)"
  dark-section:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.surface}"
    rounded: "0"
  muted-badge:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.muted}"
    rounded: "{rounded.sm}"
    padding: "0.4rem 0.7rem"
  form-input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.85rem 1rem"
---

# Design System: Indiefluence 2026

## 1. Overview

**Creative North Star: "The Psychology-Led Growth Studio"**

Indiefluence should feel like a 2026 growth studio that happens to understand psychology, creators, software, and AI. The site must speak to business owners, founders, and marketing teams who want a partner, not a flashy vendor. 

The redesign direction is mobile-first, maximal in content and confidence, minimal in composition. This means large useful statements, dense but readable sections, strong proof, clear paths into services, and only enough motion to make the experience feel alive. It should never feel like a scam website, generic agency template, casino page, or AI gimmick landing page.

**Global Layout Philosophy:**
Design mobile first. Every page must be excellent at 360px width before desktop refinements are added.
- Use full-width sections with constrained inner content, not stacked decorative cards.
- Use cards only for repeated items, case studies, service entries, and forms.
- Keep section spacing generous but not empty: mobile sections should feel like intentional chapters.
- Use section numbers (`01`, `02`, `03`) as orientation cues, inspired by Units and v2.
- Use looping horizontal strips for capabilities, audience types, proof snippets, and creator/campaign categories.
- Keep the main nav business-focused: `Who we help`, `Work`, `AI Solutions`, `About`, `Contact`, with `Book a meeting` as the primary CTA.
- Surface contact options early and late: meeting CTA, WhatsApp/phone, email, and a short lead form.

**Key Characteristics:**
- Phone-first browsing and decision-making.
- Confident, specific, and business-friendly tone.
- Small, meaningful animations that clarify interaction or add energy without hiding content.
- Honest, concrete, and founder-friendly copy.

## 2. Colors

Use a restrained brand palette with high contrast. Blue and yellow are accents, not wallpaper.

### Primary
- **Primary** (#395299): The Indiefluence logo blue. Use it for brand emphasis, active navigation, service icons, tags, and selected states.
- **Primary Deep** (#141D3B): For immersive dark sections like "Who we help", AI hero, footer, and major CTA bands.

### Secondary
- **Accent** (#FBCC03): The Indiefluence yellow. Use it for sparing emphasis, highlights, underline strokes, selected chips, and warm CTAs inside dark sections.

### Neutral
- **Ink** (#0E1326): The default text and primary CTA color. It makes the site feel serious and business-facing.
- **Paper** (#EFF1F8): The default page background. It softens the white-heavy current site and makes the brand colors more premium.
- **Surface** (#FFFFFF): Clean white for cards and floating elements.
- **Muted** (#5A6178): For supporting copy, metadata, labels, and secondary contact details.

## 3. Typography

**Display Font:** Geist (with sans-serif)
**Body Font:** Inter (with sans-serif)
**Label/Mono Font:** Geist Mono (with monospace)

**Character:** Headlines should be large, confident, and short. Body copy should be plainspoken and specific. Avoid hype language.

### Hierarchy
- **Display XL** (600, 5.8rem, 0.92): Hero headlines only.
- **Display LG** (600, 3.8rem, 0.96): Primary page or section titles.
- **Heading MD** (600, 2.2rem, 1.04): Sub-section headings and card titles.
- **Body LG** (400, 1.2rem, 1.5): Lead paragraphs and emphasis text.
- **Body MD** (400, 1rem, 1.55): Default body copy.
- **Label** (500, 0.72rem, 1.1): Metadata, badges, counters, and section numbers (uppercase/tracked).

## 4. Elevation

Use low, practical depth. Hover depth should feel like a physical response, not a sales trick.

- Default sections are flat.
- Repeated cards use 1px brand-tinted borders.
- Hover cards can lift by 2-4px and gain a soft shadow.
- Header may use a translucent paper background with blur after scroll.

**The No Glass Rule.** Avoid heavy shadows, glassmorphism everywhere, floating blobs, and decorative orbs.

## 5. Components

The shape language should be modern but controlled. Do not nest cards inside cards.

### Buttons (Primary)
- **Shape:** Fully rounded (999px).
- **Style:** Ink background, Surface text.
- **Hover / Focus:** Transition to Primary Hover color.

### Buttons (Accent & Ghost)
- **Accent:** Accent background, Ink text. Fully rounded.
- **Ghost:** Surface background, Ink text. Fully rounded.

### Cards & Panels
- **Corner Style:** 16-22px radius (lg to xl).
- **Style:** Flat or 1px brand-tinted border. White surface or deep primary for dark sections.
- **Hover:** Soft shadow and 2-4px lift.

### Inputs & Tags
- **Corner Style:** 8-12px radius (md).
- **Style:** Paper background, Ink text.

### Section Bands
- **Corner Style:** Large dark CTA bands may use 22px radius on desktop but can be full-width or softer on mobile.

## 6. Do's and Don'ts

### Do:
- **Do** design for phone-first browsing and decision-making.
- **Do** keep Indiefluence blue, yellow, logo, and fonts.
- **Do** make the site feel confident, specific, and business-friendly.
- **Do** add proof wherever possible: clients, case studies, countries served, media feature, project outputs, campaign examples.
- **Do** use small, meaningful animations that clarify interaction or add energy.
- **Do** keep copy honest, concrete, and founder-friendly.
- **Do** use real client/work visuals when available; generated visuals are acceptable only when they demonstrate AI capabilities clearly.

### Don't:
- **Don't** make the site look like a template marketing agency, crypto funnel, fake AI startup, or loud ad-tech page.
- **Don't** lead only with a generic "What we do" service grid.
- **Don't** overuse yellow backgrounds, spinning elements, huge shadows, or decorative particle noise.
- **Don't** use one-note blue/purple gradients.
- **Don't** hide core navigation inside clever interactions on mobile.
- **Don't** create vague case studies without business context.
- **Don't** promise guaranteed virality, guaranteed ROAS, or impossible AI outcomes.
- **Don't** break mobile text wrapping, button sizing, or scroll readability.
