import { cn } from "@/lib/utils";

export default function AnimatedUnderline({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <em className={cn("relative not-italic", className)}>
      {children}
      <svg
        viewBox="0 0 200 12"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
        className="absolute bottom-[0.02em] left-0 h-[0.1em] w-full text-current"
      >
        <path d="M2 9C40 3 160 3 198 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </em>
  );
}
