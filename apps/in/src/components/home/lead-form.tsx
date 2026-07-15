"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { ArrowIcon } from "@/components/site/primitives";
import { Field, FieldGroup, FieldLabel, FieldContent } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const emailJsConfig = {
  serviceId: import.meta.env.PUBLIC_EMAILJS_SERVICE_ID ?? "",
  templateId: import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
  publicKey: import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
};

const inputClass =
  "rounded-xl border bg-paper px-4 py-3.5 text-base text-ink transition-colors duration-300 placeholder:text-muted-foreground/70 focus:border-brand focus:bg-card focus:outline-none";

const labelClass = "-mb-1.5 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground";

/* Field names match the existing EmailJS template (user_name, user_phone, user_email, user_subject, message). */
export default function LeadForm() {
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    setSending(true);
    emailjs
      .sendForm(emailJsConfig.serviceId, emailJsConfig.templateId, form.current, { publicKey: emailJsConfig.publicKey })
      .then(
        () => {
          toast.success("Enquiry sent. We'll get back to you soon.");
          form.current?.reset();
        },
        (error) => {
          toast.error("Failed to send. Please try again or email us directly.");
          console.error("FAILED...", error?.text);
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="grid gap-3.5 rounded-[22px] border bg-card p-[clamp(1.4rem,4vw,2rem)]"
    >
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="lead-name" className={labelClass}>
            Your name
          </FieldLabel>
          <FieldContent>
            <Input id="lead-name" name="user_name" type="text" placeholder="Jane Doe" required className={inputClass} />
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel htmlFor="lead-email" className={labelClass}>
            Email
          </FieldLabel>
          <FieldContent>
            <Input
              id="lead-email"
              name="user_email"
              type="email"
              placeholder="jane@brand.com"
              required
              suppressHydrationWarning
              className={inputClass}
            />
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel htmlFor="lead-phone" className={labelClass}>
            Phone / WhatsApp
          </FieldLabel>
          <FieldContent>
            <Input id="lead-phone" name="user_phone" type="tel" placeholder="+91 …" className={inputClass} />
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel htmlFor="lead-company" className={labelClass}>
            Company &amp; what you do
          </FieldLabel>
          <FieldContent>
            <Input
              id="lead-company"
              name="user_subject"
              type="text"
              placeholder="Brand, sector, stage"
              className={inputClass}
            />
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel htmlFor="lead-message" className={labelClass}>
            What are you trying to achieve?
          </FieldLabel>
          <FieldContent>
            <Textarea
              id="lead-message"
              name="message"
              placeholder="A sentence or two is plenty. Budget and timeline welcome."
              required
              className={`${inputClass} min-h-24 resize-y`}
            />
          </FieldContent>
        </Field>

        <button
          type="submit"
          disabled={sending}
          className="group mt-1.5 inline-flex items-center justify-center gap-[0.6em] rounded-full bg-ink px-6 py-[0.95em] text-base font-medium text-white transition-all duration-500 ease-smooth hover:-translate-y-0.5 hover:bg-brand hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] disabled:opacity-60"
        >
          {sending ? "Sending…" : "Send enquiry"}
          <ArrowIcon />
        </button>
      </FieldGroup>
    </form>
  );
}
