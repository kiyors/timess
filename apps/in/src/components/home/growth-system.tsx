import { ArrowUpRight, ClipboardCheck, Film, Megaphone, MousePointer2 } from "lucide-react";
import * as React from "react";
import { Container, Eyebrow, SectionWatermark } from "@/components/site/primitives";
import Reveal from "@/components/site/reveal";

const modules = [
  {
    Icon: ClipboardCheck,
    n: "01",
    title: "Find the buying trigger",
    body: "Research, positioning and messaging built around how your customer decides.",
    tone: "bg-amber text-ink",
  },
  {
    Icon: Film,
    n: "02",
    title: "Make the proof visible",
    body: "Reels, campaign films, AI tests, creator content and launch assets from the studio.",
    tone: "bg-card text-ink",
  },
  {
    Icon: Megaphone,
    n: "03",
    title: "Distribute with intent",
    body: "Social, creators, outbound and performance campaigns aligned to one business goal.",
    tone: "bg-brand text-white",
  },
  {
    Icon: MousePointer2,
    n: "04",
    title: "Convert the demand",
    body: "Websites, landing pages, product flows and automations that turn attention into action.",
    tone: "bg-ink text-white",
  },
];

export default function GrowthSystem() {
  return (
    <section className="py-[clamp(4.5rem,10vw,8.5rem)]">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <Reveal>
            <div className="relative z-0 max-w-[60ch]">
              <SectionWatermark number="02" />
              <Eyebrow>02 — Growth system</Eyebrow>
              <h2 className="mt-4 max-w-[10ch] text-5xl leading-[0.92] tracking-[-0.04em]">
                One team. Four connected moves.
              </h2>
            </div>
            <p className="mt-6 max-w-[34ch] text-xl leading-normal text-muted-foreground">
              Strategy, studio, distribution and conversion should not live in separate rooms. We connect them so the
              work compounds instead of resetting every month.
            </p>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {modules.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) as 0 | 1 | 2}>
                <article
                  className={`${item.tone} group grid min-h-[250px] content-between rounded-[22px] p-[clamp(1.35rem,3vw,2rem)] transition-transform duration-500 ease-smooth hover:-translate-y-1`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-xs tracking-[0.16em] opacity-65">{item.n}</span>
                    <item.Icon className="size-6 opacity-75" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="max-w-[12ch] text-3xl leading-[1] tracking-[-0.03em]">{item.title}</h3>
                    <p className="mt-4 max-w-[30ch] text-base leading-normal opacity-75">{item.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={2}>
          <a
            href="/services"
            className="group mt-3 flex items-center justify-between gap-5 rounded-[18px] border bg-card p-5 transition-all duration-500 ease-smooth hover:-translate-y-0.5 hover:border-ink"
          >
            <span className="font-display text-3xl leading-none tracking-[-0.03em]">See the service architecture</span>
            <ArrowUpRight className="size-5 transition-transform duration-500 ease-smooth group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
