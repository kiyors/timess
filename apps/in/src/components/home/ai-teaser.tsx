import ClipReveal from "@/components/site/clip-reveal";
import { Container, CtaLink, Eyebrow, SectionWatermark } from "@/components/site/primitives";
import Reveal from "@/components/site/reveal";
import SplitReveal from "@/components/site/split-reveal";

export default function AiTeaser() {
  return (
    <section className="pb-[clamp(4.5rem,10vw,8.5rem)]">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-[clamp(3rem,6vw,5rem)]">
          <ClipReveal className="md:order-2">
            <div className="relative grid aspect-[5/4] place-items-center overflow-hidden rounded-[22px] bg-linear-150 from-brand-deep via-brand to-brand-hover text-white">
              <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                <i className="animate-spin-slow absolute top-1/2 left-1/2 size-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/14 motion-reduce:animate-none" />
                <i className="absolute top-1/2 left-1/2 size-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/14" />
                <span className="absolute top-[8%] left-1/2 size-2.5 rounded-full bg-amber shadow-[0_0_18px_var(--color-amber)]" />
              </div>
              <span className="font-mono text-6xl font-medium tracking-[-0.04em] opacity-95">AI</span>
            </div>
          </ClipReveal>
          <Reveal delay={1}>
            <div className="relative z-0 max-w-[60ch]">
              <SectionWatermark number="07" />
              <Eyebrow>07 — New</Eyebrow>
              <SplitReveal className="mt-4 mb-5 text-4xl leading-[0.98] tracking-[-0.03em]">
                AI, pointed at growth.
              </SplitReveal>
            </div>
            <p className="mb-7 text-xl leading-normal text-muted-foreground">
              Gen-AI video, AI-native campaigns and custom AI software, built by a team that treats the technology as a
              tool for the work, not a gimmick for the pitch.
            </p>
            <CtaLink href="/ai-solutions" variant="amber">
              Explore AI Solutions
            </CtaLink>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
