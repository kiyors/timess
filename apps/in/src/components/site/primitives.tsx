import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-[1240px] px-[clamp(1.25rem,5vw,3rem)]", className)} {...props} />;
}

export function Eyebrow({
  children,
  onDark = false,
  className,
}: {
  children: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-[0.6em] font-mono text-xs uppercase tracking-[0.18em]",
        "before:h-px before:w-[26px] before:content-['']",
        onDark ? "text-amber before:bg-amber/70" : "text-brand before:bg-brand/50",
        className
      )}
    >
      {children}
    </span>
  );
}

export function SectionWatermark({
  number,
  onDark = false,
  className,
}: {
  number: string;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute -top-[0.35em] right-0 -z-1 select-none font-display text-[clamp(7rem,16vw,12rem)] leading-none font-semibold tracking-[-0.04em] text-transparent",
        onDark
          ? "[-webkit-text-stroke:1.5px_rgba(255,255,255,.14)]"
          : "[-webkit-text-stroke:1.5px_rgba(57,82,153,.18)]",
        className
      )}
    >
      {number}
    </span>
  );
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className={cn("transition-transform duration-500 ease-smooth group-hover:translate-x-1", className)}
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

const ctaVariants = {
  primary: "bg-ink text-white hover:bg-brand hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]",
  amber: "bg-amber text-ink hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]",
  ghost: "border border-border text-ink hover:border-ink hover:-translate-y-0.5",
  "ghost-dark": "border border-line-dark text-white hover:border-white hover:bg-white/5 hover:-translate-y-0.5",
};

type CtaLinkProps = {
  variant?: keyof typeof ctaVariants;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
} & ComponentProps<"a">;

export function CtaLink({ variant = "primary", arrow = true, className, children, ...props }: CtaLinkProps) {
  return (
    <a
      className={cn(
        "group inline-flex items-center gap-[0.6em] rounded-full px-6 py-[0.95em] text-base font-medium",
        "transition-all duration-500 ease-smooth",
        ctaVariants[variant],
        className
      )}
      {...props}
    >
      {children}
      {arrow && <ArrowIcon />}
    </a>
  );
}
