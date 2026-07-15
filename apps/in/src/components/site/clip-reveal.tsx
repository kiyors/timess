"use client";

import { type ReactNode, useRef } from "react";
import { gsap, MOTION_OK, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

const CLOSED = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
const OPEN = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

/** Bottom-up clip-path wipe on scroll into view — the units.gr image-reveal pattern. */
export default function ClipReveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          el,
          { clipPath: CLOSED },
          {
            clipPath: OPEN,
            duration: 1.2,
            ease: "power2.inOut",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
