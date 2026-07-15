"use client";

import { useEffect, useRef } from "react";
import { STUDIO_REELS } from "@/data/site";
import { gsap, MOTION_OK, useGSAP } from "@/lib/gsap";

/**
 * Horizontal strip of real studio reels. Native swipe/scroll with snap;
 * a gentle GSAP drift on scroll-through gives it life. Videos only play
 * while the strip is on screen.
 */
export default function StudioReel() {
  const root = useRef<HTMLDivElement>(null);

  // Play/pause videos with visibility so 10 loops don't burn mobile batteries.
  useEffect(() => {
    const videos = root.current?.querySelectorAll("video");
    if (!videos?.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) video.play().catch(() => {});
          else video.pause();
        }
      },
      { rootMargin: "120px" }
    );
    for (const video of videos) {
      io.observe(video);
    }
    return () => io.disconnect();
  }, []);

  useGSAP(
    () => {
      const track = root.current?.firstElementChild;
      if (!track) return;
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          track,
          { x: 80 },
          {
            x: -80,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          }
        );
      });
    },
    { scope: root }
  );

  return (
    <div
      ref={root}
      className="-mx-[clamp(1.25rem,5vw,3rem)] overflow-x-auto overscroll-x-contain px-[clamp(1.25rem,5vw,3rem)] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <div className="flex w-max snap-x snap-mandatory gap-4">
        {STUDIO_REELS.map((src) => (
          <video
            key={src}
            src={src}
            muted
            loop
            playsInline
            preload="metadata"
            className="aspect-[9/16] w-[clamp(180px,52vw,240px)] snap-start rounded-[16px] border object-cover"
          />
        ))}
      </div>
    </div>
  );
}
