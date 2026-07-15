"use client";

import * as React from "react";
import { useRef } from "react";
import hindiLogo from "@/assets/indiefluence-hinid-logo-circle.svg";
import Counter from "@/components/site/counter";
import { Container, CtaLink, Eyebrow } from "@/components/site/primitives";
import { CONTACT, STUDIO_REELS } from "@/data/site";
import { gsap, MOTION_OK, useGSAP } from "@/lib/gsap";

const stats = [
  { value: "80+", label: "Brands built" },
  { value: "7", label: "Countries" },
  { value: "In-house", label: "Content studio" },
];

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const underline = root.current?.querySelector<SVGPathElement>("[data-hero-underline]");
        const tl = gsap.timeline({ delay: 0.1 });
        tl.from('[data-hero="eyebrow"]', { autoAlpha: 0, y: 14, duration: 0.7 }, 0)
          .from("[data-hero-line]", { yPercent: 112, duration: 1.15, stagger: 0.14 }, 0.05)
          .from(
            '[data-hero="sub"], [data-hero="cta"], [data-hero="cred"]',
            { autoAlpha: 0, y: 18, duration: 0.9, stagger: 0.12 },
            0.45
          );
        if (underline) {
          tl.from(underline, { drawSVG: 0, duration: 0.8, ease: "power2.inOut" }, 0.85);
        }
        const logo = root.current?.querySelector<HTMLImageElement>("[data-hero-logo]");
        if (logo) {
          gsap.to(logo, {
            motionPath: {
              path: [
                { x: 0, y: 0 },
                { x: -20, y: -30 },
                { x: -40, y: 5 },
                { x: -15, y: 35 },
                { x: 0, y: 0 },
              ],
              curviness: 1.5,
            },
            duration: 28,
            repeat: -1,
            ease: "none",
          });
        }
      });
    },
    { scope: root }
  );

  const heroReels = STUDIO_REELS.slice(0, 3);

  return (
    <section ref={root} className="relative overflow-hidden pt-[clamp(6.25rem,12vw,9rem)] pb-[clamp(2rem,6vw,4rem)]">
      <img
        data-hero-logo
        src={hindiLogo.src}
        alt=""
        aria-hidden="true"
        width={280}
        height={280}
        className="animate-spin-slow pointer-events-none absolute top-[5.7rem] -right-14 z-0 w-[clamp(118px,18vw,260px)] opacity-45 motion-reduce:animate-none md:top-[7.5rem] md:-right-6 md:opacity-70"
      />
      <Container className="relative z-1">
        <div className="grid gap-[clamp(2rem,5vw,4rem)] lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,.92fr)] lg:items-end">
          <div>
            <div data-hero="eyebrow">
              <Eyebrow>Psychology-led growth studio · est. Kurukshetra</Eyebrow>
            </div>
            <h1 className="mt-4 max-w-[12.5ch] text-6xl leading-[0.9] font-semibold tracking-[-0.04em]">
              <span className="block overflow-hidden pb-[0.08em]">
                <span data-hero-line className="block">
                  From ideas
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.12em]">
                <span data-hero-line className="block">
                  to{" "}
                  <em className="relative not-italic text-brand">
                    impact.
                    <svg
                      viewBox="0 0 200 12"
                      preserveAspectRatio="none"
                      fill="none"
                      aria-hidden="true"
                      className="absolute bottom-[0.02em] left-0 h-[0.09em] w-full"
                    >
                      <path
                        data-hero-underline
                        d="M2 9C40 3 160 3 198 8"
                        stroke="#FBCC03"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </em>
                </span>
              </span>
            </h1>
            <p
              data-hero="sub"
              className="mt-[clamp(1.4rem,3vw,2.2rem)] max-w-[45ch] text-xl leading-normal text-muted-foreground"
            >
              We build brands, campaigns, content and software for businesses that need people to notice, remember and
              act.
            </p>
            <div data-hero="cta" className="mt-6 flex flex-wrap gap-3 md:mt-8">
              <CtaLink href={CONTACT.calUrl} target="_blank" rel="noopener noreferrer">
                Book a meeting
              </CtaLink>
              <CtaLink href="/work" variant="ghost" arrow={false}>
                See our work
              </CtaLink>
            </div>
          </div>

          <div data-hero="cred" className="grid gap-3 lg:pb-2">
            <div className="grid grid-cols-3 gap-2.5 rounded-[22px] border bg-card/70 p-2.5">
              {heroReels.map((src, i) => (
                <video
                  key={src}
                  src={src}
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="aspect-[9/14] w-full rounded-[14px] object-cover"
                  style={{
                    marginTop: i === 1 ? "clamp(1.2rem, 4vw, 2.4rem)" : 0,
                  }}
                />
              ))}
            </div>
            <div className="grid gap-px overflow-hidden rounded-[18px] border bg-border sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="grid gap-1 bg-paper p-4">
                  <Counter
                    value={stat.value}
                    className="font-display text-3xl leading-none font-semibold tracking-[-0.02em]"
                  />
                  <span className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
              <a
                href={CONTACT.timesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="grid gap-1 bg-ink p-4 text-white transition-colors hover:bg-brand"
              >
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-white/65">Featured in</span>
                <b className="font-display text-base leading-tight font-semibold tracking-[-0.01em]">
                  Times of India ↗
                </b>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
