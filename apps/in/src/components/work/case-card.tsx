import * as React from "react";
import ClipReveal from "@/components/site/clip-reveal";
import { ArrowIcon } from "@/components/site/primitives";

export type CaseMeta = {
  url: string;
  title: string;
  description?: string;
  client: string;
  sector: string;
  tags: string[];
  gradient: [string, string];
};

export default function CaseCard({ study }: { study: CaseMeta }) {
  return (
    <a
      href={study.url}
      className="group grid overflow-hidden rounded-[22px] border bg-card transition-all duration-500 ease-smooth hover:-translate-y-1 hover:border-transparent hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
    >
      <ClipReveal>
        <div
          className="relative grid aspect-[16/10] place-items-center overflow-hidden text-white transition-transform duration-700 ease-smooth group-hover:scale-[1.03] after:absolute after:inset-0 after:bg-[radial-gradient(90%_120%_at_20%_0%,rgba(255,255,255,.18),transparent_55%)] after:content-['']"
          style={{
            background: `linear-gradient(140deg, ${study.gradient[0]}, ${study.gradient[1]})`,
          }}
        >
          <span className="z-1 px-4 text-center font-display text-3xl font-semibold tracking-[-0.03em] opacity-95">
            {study.client}
          </span>
        </div>
      </ClipReveal>
      <div className="grid gap-2.5 p-[clamp(1.3rem,3vw,1.8rem)]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-[6px] border px-2 py-1 font-mono text-xs uppercase tracking-[0.1em] text-brand">
            {study.sector}
          </span>
        </div>
        <h3 className="text-3xl leading-[1.05]">{study.title}</h3>
        {study.description && <p className="text-base text-muted-foreground">{study.description}</p>}
        <span className="mt-1 inline-flex items-center gap-[0.4em] font-mono text-xs uppercase tracking-[0.1em] text-ink">
          Read the case <ArrowIcon />
        </span>
      </div>
    </a>
  );
}
