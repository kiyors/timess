"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/indiefluence-logo.svg";
import { ArrowIcon } from "@/components/site/primitives";
import { CONTACT, NAV_LINKS } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [pathname, setPathname] = useState("");
  const [openPathname, setOpenPathname] = useState<string | null>(null);
  const lastScrollY = useRef(0);
  const open = openPathname === pathname;

  useEffect(() => {
    setPathname(window.location.pathname);

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 24);

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href.includes("#") ? false : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-100 h-0 w-full overflow-visible transition-transform duration-700 ease-smooth",
          hidden ? "-translate-y-full" : "translate-y-0"
        )}
      >
        <div className={cn("relative px-4 transition-all duration-700 ease-smooth", scrolled ? "py-2" : "py-3")}>
          <div
            className={cn(
              "mx-auto rounded-full border transition-all duration-700 ease-smooth overflow-hidden",
              scrolled
                ? "max-w-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-paper/70 backdrop-blur-2xl border-line"
                : "max-w-5xl shadow-[0_4px_20px_rgb(0,0,0,0.08)] bg-paper/90 backdrop-blur-md border-line-dark"
            )}
          >
            <div
              className={cn(
                "flex w-full items-center justify-between gap-4 px-[clamp(1.25rem,4vw,2rem)] transition-all duration-700 ease-smooth",
                scrolled ? "h-11" : "h-14"
              )}
            >
              <a href="/" aria-label="Indiefluence home" className="shrink-0">
                <img
                  src={logo.src}
                  alt="Indiefluence"
                  width={128}
                  height={44}
                  className={cn(
                    "h-auto transition-all duration-700 ease-smooth",
                    scrolled ? "w-[78px] md:w-[90px]" : "w-[95px] md:w-[110px]"
                  )}
                />
              </a>

              <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "whitespace-nowrap rounded-full transition-all duration-700 ease-smooth hover:bg-brand/8",
                      scrolled ? "px-2.5 py-1 text-sm" : "px-3.5 py-1.5 text-sm",
                      isActive(link.href) ? "font-medium text-brand" : "text-ink"
                    )}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <a
                href={CONTACT.calUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group hidden whitespace-nowrap items-center gap-[0.6em] rounded-full bg-ink font-medium text-white transition-all duration-700 ease-smooth hover:-translate-y-0.5 hover:bg-brand lg:inline-flex",
                  scrolled ? "px-3.5 py-1.5 text-sm" : "px-4.5 py-2 text-sm"
                )}
              >
                Book a meeting
                <ArrowIcon />
              </a>

              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpenPathname(open ? null : pathname)}
                className="flex size-11 flex-col items-center justify-center gap-[5px] rounded-full border bg-card lg:hidden"
              >
                <span
                  className={cn(
                    "h-[1.6px] w-[17px] bg-ink transition-transform duration-400 ease-smooth",
                    open && "translate-y-[6.6px] rotate-45"
                  )}
                />
                <span
                  className={cn("h-[1.6px] w-[17px] bg-ink transition-opacity duration-300", open && "opacity-0")}
                />
                <span
                  className={cn(
                    "h-[1.6px] w-[17px] bg-ink transition-transform duration-400 ease-smooth",
                    open && "-translate-y-[6.6px] -rotate-45"
                  )}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-90 flex flex-col justify-center bg-brand-deep px-[clamp(1.25rem,5vw,3rem)] text-white transition-transform duration-700 ease-smooth lg:hidden",
          open ? "translate-y-0" : "-translate-y-full"
        )}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {[...NAV_LINKS, { label: "Book a meeting", href: CONTACT.calUrl }].map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpenPathname(null)}
              tabIndex={open ? 0 : -1}
              style={{ transitionDelay: open ? `${0.08 + i * 0.06}s` : "0s" }}
              className={cn(
                "py-1.5 font-display text-[clamp(2rem,9vw,3rem)] font-medium tracking-[-0.03em] transition-all duration-500 ease-smooth hover:text-amber",
                open ? "translate-y-0 opacity-100" : "translate-y-3.5 opacity-0"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="absolute inset-x-[clamp(1.25rem,5vw,3rem)] bottom-8 flex justify-between border-t border-line-dark pt-4 font-mono text-xs uppercase tracking-[0.1em] opacity-60">
          <span>Kurukshetra · IN</span>
          <span>From ideas to impact</span>
        </div>
      </div>
    </>
  );
}
