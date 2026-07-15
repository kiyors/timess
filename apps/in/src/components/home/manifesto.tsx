"use client";

import { useRef } from "react";
import { Container, Eyebrow } from "@/components/site/primitives";
import { gsap, MOTION_OK, SplitText, useGSAP } from "@/lib/gsap";

const STATEMENT =
  "We are psychology geeks. We study how people notice, remember and decide — then build the brands, campaigns, content and software that move them to act.";

/** Pinned chapter: the manifesto brightens word-by-word as you scroll through it (units.gr signature). */
export default function Manifesto() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = root.current;
      const text = section?.querySelector("p");
      if (!section || !text) return;
      const mm = gsap.matchMedia();
      // Desktop: pin the chapter and brighten word-by-word on scrub.
      // Mobile: no pin (avoids scroll-jank) — words brighten as the section passes through.
      mm.add(
        {
          desktop: `${MOTION_OK} and (min-width: 768px)`,
          mobile: `${MOTION_OK} and (max-width: 767px)`,
        },
        (ctx) => {
          const isDesktop = ctx.conditions?.desktop;
          SplitText.create(text, {
            type: "words,chars",
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(self.chars, {
                opacity: 0.14,
                stagger: 0.02,
                ease: "none",
                scrollTrigger: isDesktop
                  ? {
                      trigger: section,
                      start: "top top",
                      end: "+=120%",
                      pin: true,
                      anticipatePin: 1,
                      scrub: 1,
                    }
                  : {
                      trigger: text,
                      start: "top 85%",
                      end: "bottom 45%",
                      scrub: 1,
                    },
              }),
          });
        }
      );
    },
    { scope: root }
  );

  return (
    <div ref={root} className="bg-brand-deep">
      <section className="flex items-center text-white md:min-h-svh">
        <Container className="py-[clamp(4.5rem,10vw,8.5rem)] w-full">
          <Eyebrow onDark>The Indiefluence way</Eyebrow>
          <p className="mt-8 max-w-[24ch] font-display text-4xl leading-[1.12] font-semibold tracking-[-0.03em]">
            {STATEMENT}
          </p>
        </Container>
      </section>
    </div>
  );
}
