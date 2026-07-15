"use client";
import { useState } from "react";
import avatarImg from "@/assets/indie-whatsapp.svg";
import { CONTACT } from "@/data/site";

export default function WhatsApp() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-4 bottom-4 z-120 flex flex-col items-end gap-3 md:right-6 md:bottom-6">
      {open && (
        <div className="w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-[18px] border bg-card shadow-[0_24px_70px_-35px_rgba(14,19,38,.55)]">
          <div className="flex items-center gap-3 bg-brand-deep p-4 text-white">
            <img src={avatarImg.src} alt="" width={42} height={42} className="size-10 rounded-full bg-white" />
            <div className="min-w-0">
              <p className="font-display text-base leading-tight font-semibold">Venu Gopal Singhal</p>
              <p className="text-sm text-white/70">indiefluence.in</p>
            </div>
          </div>
          <div className="grid gap-4 p-4">
            <p className="rounded-[14px] bg-paper p-3 text-sm leading-relaxed text-ink">
              Hey there. I am Venu, Founder of Indiefluence. Drop a text and let us discuss how we can grow together.
            </p>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-amber px-5 py-3 text-sm font-medium text-ink transition-transform duration-300 ease-smooth hover:-translate-y-0.5"
            >
              Continue on WhatsApp
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="relative grid size-15 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_-18px_rgba(14,19,38,.65)] transition-transform duration-300 ease-smooth hover:-translate-y-0.5"
      >
        {!open && <span className="absolute -top-0.5 -right-0.5 size-4 rounded-full border-2 border-card bg-amber" />}
        {open ? (
          <span aria-hidden="true" className="text-3xl leading-none">
            x
          </span>
        ) : (
          <span aria-hidden="true" className="font-display text-lg font-semibold">
            WA
          </span>
        )}
      </button>
    </div>
  );
}
