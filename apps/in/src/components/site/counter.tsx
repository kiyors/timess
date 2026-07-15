"use client";

import { useRef } from "react";
import { gsap, MOTION_OK, useGSAP } from "@/lib/gsap";

/** Counts numeric values up on first scroll into view; non-numeric values render as-is. */
export default function Counter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const match = value.match(/^(\d+)(.*)$/);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || !match) return;
      const target = Number(match[1]);
      const suffix = match[2];
      const state = { v: 0 };
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.to(state, {
          v: target,
          duration: 1.6,
          ease: "power2.out",
          snap: { v: 1 },
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          onUpdate: () => {
            el.textContent = `${state.v}${suffix}`;
          },
        });
      });
    },
    { scope: ref }
  );

  return (
    <b ref={ref} className={className}>
      {value}
    </b>
  );
}
