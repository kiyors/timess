import { ArrowUpRight, CircleCheck } from "lucide-react";
import * as React from "react";
import logoStroke from "@/assets/indiefleunce-logo-strocke.svg";
import logoWhite from "@/assets/indiefluence-logo-white.svg";
import { FacebookIcon } from "@/components/ui/facebook";
import { InstagramIcon } from "@/components/ui/instagram";
import { LinkedinIcon } from "@/components/ui/linkedin";
import { YoutubeIcon } from "@/components/ui/youtube";
import { CONTACT } from "@/data/site";

const columns = [
  {
    title: "Studio",
    links: [
      { label: "Who we help", href: "/#who" },
      { label: "Work", href: "/work" },
      { label: "Services", href: "/services" },
      { label: "AI Solutions", href: "/ai-solutions" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Influencer marketing", href: "/services/influencer-marketing" },
      { label: "Content studio", href: "/services/content-creation" },
      { label: "Web & software", href: "/services/website-development" },
      { label: "B2B growth", href: "/services/b2b-marketing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
      { label: "Book a meeting", href: CONTACT.calUrl, external: true },
    ],
  },
];

const socials = [
  { label: "Instagram", href: CONTACT.socials.instagram, Icon: InstagramIcon },
  { label: "LinkedIn", href: CONTACT.socials.linkedin, Icon: LinkedinIcon },
  { label: "YouTube", href: CONTACT.socials.youtube, Icon: YoutubeIcon },
  { label: "Facebook", href: CONTACT.socials.facebook, Icon: FacebookIcon },
];

const linkClass =
  "group/link inline-flex w-fit items-center gap-1.5 text-base leading-none text-white/62 underline decoration-white/18 underline-offset-4 transition-colors duration-300 hover:text-white hover:decoration-amber";

function FooterLink({ href, label, external = false }: { href: string; label: string; external?: boolean }) {
  const content = (
    <>
      {label}
      {external && (
        <ArrowUpRight className="size-3.5 opacity-55 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
        {content}
      </a>
    );
  }

  return (
    <a href={href} className={linkClass}>
      {content}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative mt-9 overflow-hidden bg-brand-deep text-white">
      <div className="relative min-h-[740px] overflow-hidden border-y border-white/12 md:min-h-[880px]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,.07)_1px,transparent_1px)] bg-[size:18vw_100%,100%_100%] opacity-70"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(90%_70%_at_70%_0%,rgba(57,82,153,.95),transparent_58%),linear-gradient(180deg,rgba(57,82,153,.7),rgba(20,29,59,.98))]"
        />
        <div className="relative grid min-h-[740px] grid-rows-[1fr_auto] md:min-h-[880px]">
          <div className="grid border-white/12 md:grid-cols-[1.4fr_2.9fr_1fr] md:border-b">
            <section className="border-b border-white/12 p-[clamp(1.5rem,3.2vw,2.6rem)] md:border-r md:border-b-0">
              <img
                src={logoWhite.src}
                alt="Indiefluence"
                loading="lazy"
                width={170}
                height={58}
                className="h-auto w-[170px]"
              />
              <p className="mt-8 max-w-[33ch] text-xl leading-normal text-white/68">
                Psychology-led growth studio for brands, campaigns, content and software that move real people to act.
              </p>
              <div className="mt-8 grid gap-3 font-mono text-sm uppercase tracking-[0.1em] text-white/58">
                <a href={`mailto:${CONTACT.email}`} className="w-fit underline underline-offset-4 hover:text-white">
                  {CONTACT.email}
                </a>
                <a href={CONTACT.phoneHref} className="w-fit underline underline-offset-4 hover:text-white">
                  {CONTACT.phone}
                </a>
                <span>{CONTACT.countries}</span>
              </div>
            </section>

            <nav
              aria-label="Footer navigation"
              className="grid border-b border-white/12 sm:grid-cols-3 md:border-r md:border-b-0"
            >
              {columns.map((column) => (
                <div
                  key={column.title}
                  className="border-b border-white/12 p-[clamp(1.5rem,3.2vw,2.6rem)] sm:border-r sm:border-b-0 last:sm:border-r-0"
                >
                  <h2 className="font-display text-3xl leading-none tracking-[-0.02em] text-white">{column.title}</h2>
                  <div className="mt-8 grid gap-5">
                    {column.links.map((link) => (
                      <FooterLink key={link.label} {...link} />
                    ))}
                  </div>
                </div>
              ))}
            </nav>

            <section className="p-[clamp(1.5rem,3.2vw,2.6rem)]">
              <h2 className="font-display text-3xl leading-none tracking-[-0.02em] text-white">Social</h2>
              <div className="mt-8 flex flex-wrap gap-3 md:grid md:grid-cols-2">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid size-12 place-items-center rounded-[14px] border border-white/14 bg-white/4 text-white transition-all duration-400 ease-smooth hover:-translate-y-1 hover:border-amber hover:bg-amber hover:text-ink"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/14 px-4 py-2.5 text-base text-white/72 transition-all duration-400 ease-smooth hover:border-amber hover:text-white"
              >
                WhatsApp us <ArrowUpRight className="size-4" />
              </a>
            </section>
          </div>

          {/* Blueprint Footer Logo Section */}
          <section className="relative min-h-[320px] overflow-hidden border-b border-white/12 md:min-h-[460px]">
            {/* SVG Blueprint Grid */}
            <svg
              className="absolute inset-0 h-full w-full pointer-events-none"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="sub-grid" width="16" height="16" patternUnits="userSpaceOnUse">
                  <path
                    d="M 16 0 L 0 0 0 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-white/10"
                  />
                </pattern>
                <pattern id="main-grid" width="64" height="64" patternUnits="userSpaceOnUse">
                  <rect width="64" height="64" fill="url(#sub-grid)" />
                  <path
                    d="M 64 0 L 0 0 0 64"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-white/20"
                  />
                  {/* Plus marker at intersections */}
                  <path
                    d="M -4 0 L 4 0 M 0 -4 L 0 4 M 60 64 L 68 64 M 64 60 L 64 68"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-amber/40"
                  />
                </pattern>
                <pattern
                  id="stripes"
                  width="12"
                  height="12"
                  patternTransform="rotate(45)"
                  patternUnits="userSpaceOnUse"
                >
                  <rect width="1" height="12" fill="currentColor" className="text-white-[0.03]" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#stripes)" />
              <rect width="100%" height="100%" fill="url(#main-grid)" />
            </svg>

            {/* Measuring guides / technical borders */}
            <div
              aria-hidden="true"
              className="absolute inset-x-[clamp(1.5rem,4vw,5rem)] top-8 bottom-8 border border-white/10 pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="absolute top-0 bottom-0 left-[clamp(1.5rem,4vw,5rem)] border-l border-dashed border-white/15 pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="absolute top-0 right-[clamp(1.5rem,4vw,5rem)] bottom-0 border-r border-dashed border-white/15 pointer-events-none"
            />

            {/* Logo content */}
            <div className="relative z-1 flex h-full min-h-[320px] flex-col justify-center px-[clamp(1.5rem,4vw,5rem)] py-12 md:min-h-[460px]">
              <div className="mx-auto w-full max-w-[1180px]">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber/85">
                  Psychology · creative · software · AI
                </span>
                <div className="relative mt-[clamp(1.5rem,3vw,2rem)] aspect-[7028/1629] w-full border border-white/12 bg-brand-deep/30 backdrop-blur-xs">
                  <img
                    src={logoStroke.src}
                    alt="Indiefluence"
                    loading="lazy"
                    className="w-full h-full object-contain p-[clamp(1rem,2vw,2rem)] opacity-85 brightness-0 invert transition-transform duration-700 ease-out hover:scale-[1.02]"
                    sizes="(min-width: 1024px) 78vw, 90vw"
                  />
                  {/* Corner brackets */}
                  <span className="absolute -top-1 -left-1 size-3 border-t-2 border-l-2 border-amber/70" />
                  <span className="absolute -top-1 -right-1 size-3 border-t-2 border-r-2 border-amber/70" />
                  <span className="absolute -bottom-1 -left-1 size-3 border-b-2 border-l-2 border-amber/70" />
                  <span className="absolute -bottom-1 -right-1 size-3 border-b-2 border-r-2 border-amber/70" />
                </div>
              </div>
            </div>
          </section>

          <div className="relative flex flex-wrap items-center justify-between gap-4 border-t border-white/12 px-[clamp(1.5rem,3.2vw,2.6rem)] pt-6 pr-[clamp(5.5rem,9vw,7rem)] pb-24 text-base text-white/58 md:py-6">
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              <span>© {new Date().getFullYear()} Indiefluence. All rights reserved.</span>
              {/* <a href="/contact" className="hover:text-white"> */}
              {/*   Contact */}
              {/* </a> */}
              {/* <a href="/blog" className="hover:text-white"> */}
              {/*   Blog */}
              {/* </a> */}
            </div>
            <span className="inline-flex items-center gap-2 font-medium text-white/70">
              <CircleCheck className="size-4 text-amber" />
              From ideas to impact
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
