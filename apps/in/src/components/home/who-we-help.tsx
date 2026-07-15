"use client";

import { useRef, useState } from "react";
import { Container, CtaLink, Eyebrow, SectionWatermark } from "@/components/site/primitives";
import Reveal from "@/components/site/reveal";
import SplitReveal from "@/components/site/split-reveal";
import { STUDIO_REELS, WHO_WE_HELP } from "@/data/site";
import { gsap, MOTION_OK, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

export default function WhoWeHelp() {
  const [activeIndex, setActiveIndex] = useState(0);
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        // Entrance stagger for tabs
        const tabs = gsap.utils.toArray(".tab-btn", el);
        gsap.fromTo(
          tabs,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          }
        );

        // Scroll spy: Update active tab when cards enter viewport
        const cards = gsap.utils.toArray<HTMLElement>(".audience-card", el);
        cards.forEach((card, i) => {
          ScrollTrigger.create({
            trigger: card,
            start: "top center",
            end: "bottom center",
            onToggle: (self) => {
              if (self.isActive) {
                setActiveIndex(i);
              }
            },
          });
        });
      });
    },
    { scope: root }
  );

  return (
    <section
      id="who"
      ref={root}
      className="relative bg-brand-deep py-[clamp(4.5rem,10vw,8.5rem)] text-white before:absolute before:inset-0 before:bg-[radial-gradient(120%_90%_at_85%_0%,rgba(57,82,153,.55),transparent_60%)] before:content-['']"
    >
      <Container className="relative">
        <div className="relative z-0 mb-[clamp(2.5rem,6vw,4rem)] max-w-[60ch]">
          {/* BIG WATERMARK */}
          <SectionWatermark number="01" onDark className="opacity-90" />

          <Reveal className="relative z-10">
            <SplitReveal className="text-4xl leading-[0.98] tracking-[-0.03em] text-white">
              Tell us who you are.
              <br />
              <em className="not-italic text-amber">We&rsquo;ll show you the way in.</em>
            </SplitReveal>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <div
              role="tablist"
              aria-label="Choose your situation"
              className="flex flex-wrap gap-2.5 lg:sticky lg:top-32 lg:flex-col"
            >
              <Eyebrow onDark className="mb-2 lg:mb-6">
                01 — Who we help
              </Eyebrow>
              {WHO_WE_HELP.map((audience, i) => (
                <button
                  key={audience.key}
                  type="button"
                  role="tab"
                  aria-selected={activeIndex === i}
                  onClick={() => {
                    const card = document.getElementById(`audience-${i}`);
                    if (card) {
                      const offset = 120; // sticky header offset
                      window.scrollTo({
                        top: card.getBoundingClientRect().top + window.scrollY - offset,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className={cn(
                    "tab-btn grid cursor-pointer grid-cols-[2.25rem_1fr] items-center rounded-full border px-3.5 py-3 text-left text-base font-medium opacity-0 motion-reduce:opacity-100",
                    "transition-all duration-400 ease-smooth hover:-translate-y-0.5 lg:w-full",
                    activeIndex === i
                      ? "border-amber bg-amber text-ink"
                      : "border-line-dark bg-white/3 text-white hover:border-white/40"
                  )}
                >
                  <span className="font-mono text-xs tracking-[0.12em] opacity-65">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{audience.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-16 lg:gap-24">
            {WHO_WE_HELP.map((audience, i) => (
              <div
                key={audience.key}
                id={`audience-${i}`}
                className="audience-card grid overflow-hidden rounded-[22px] border border-line-dark bg-linear-to-b from-white/7 to-white/1 md:grid-cols-[0.92fr_1.08fr]"
              >
                <div className="relative min-h-[270px] overflow-hidden bg-ink md:min-h-[420px]">
                  <video
                    src={STUDIO_REELS[i % STUDIO_REELS.length]}
                    muted
                    loop
                    autoPlay
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 size-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-deep via-brand-deep/12 to-transparent" />
                  <div className="absolute right-4 bottom-4 left-4 flex items-end justify-between gap-4">
                    <span className="font-mono text-xs tracking-[0.14em] text-white/75 uppercase">
                      Matching message to market
                    </span>
                    <span className="rounded-full bg-amber px-3 py-1.5 font-mono text-xs tracking-[0.1em] text-ink uppercase">
                      Live brief
                    </span>
                  </div>
                </div>
                <div className="grid min-h-[320px] content-start gap-5 p-[clamp(1.6rem,4vw,2.6rem)]">
                  <span className="font-mono text-xs tracking-[0.16em] text-amber uppercase">{audience.kicker}</span>
                  <h3 className="max-w-[22ch] text-3xl leading-[1.02] tracking-[-0.02em] text-white">
                    {audience.title}
                  </h3>
                  <p className="max-w-[52ch] text-white/78">{audience.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {audience.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-line-dark px-3 py-1.5 font-mono text-xs uppercase tracking-[0.06em] text-white/85"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <CtaLink href="/contact" variant="amber" className="mt-1 justify-self-start">
                    Start a conversation
                  </CtaLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
