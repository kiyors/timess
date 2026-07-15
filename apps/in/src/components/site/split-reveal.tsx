"use client";

import { createElement, type ElementType, type ReactNode, useRef } from "react";
import { gsap, MOTION_OK, SplitText, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

/**
 * units.gr-style masked line reveal: lines slide up out of an overflow clip
 * when the element scrolls into view. Falls back to a static element for
 * reduced-motion users (and stays visible if JS never runs).
 */
export default function SplitReveal({
  as = "h2",
  children,
  className,
  delay = 0,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        SplitText.create(el, {
          type: "lines",
          autoSplit: true,
          onSplit: (self) => {
            const tl = gsap.timeline({
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            });

            tl.from(self.lines, {
              y: 30,
              opacity: 0,
              duration: 1.1,
              stagger: 0.09,
              delay,
            });

            // If the element contained an AnimatedUnderline, SplitText rebuilt the DOM.
            // We must animate the path here so it doesn't get orphaned.
            const paths = el.querySelectorAll("path");
            if (paths.length > 0) {
              tl.from(
                paths,
                {
                  drawSVG: "0%",
                  duration: 0.8,
                  ease: "power2.inOut",
                },
                delay + 0.6
              );
            }

            return tl;
          },
        });
      });
    },
    { scope: ref }
  );

  return createElement(as, { ref, className: cn(className) }, children);
}
