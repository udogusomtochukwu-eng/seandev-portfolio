import { Mail } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SocialLinks from "./SocialLinks.jsx";
import { EMAIL } from "../data/site.js";

/* Contact shows the full set of links, including Email */
const CONTACT_SOCIAL_IDS = ["github", "x", "linkedin", "email"];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden border-t border-white/[0.05] bg-ink"
    >
      {/* One restrained accent bloom — echoes the Hero's lighting */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.05] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 py-28 text-center sm:px-8 sm:py-32 lg:py-40">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent/80">
            {"// get in touch"}
          </p>
          <h2
            id="contact-heading"
            className="mt-5 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.6rem]"
          >
            Let&apos;s Build Something<span className="text-accent">.</span>
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-fog sm:text-lg">
            <span className="block sm:inline">Have a project in mind?</span>{" "}
            <span className="block sm:inline">Let&apos;s talk.</span>
          </p>
        </Reveal>

        <Reveal delay={240} className="mt-10">
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Send Sean an email"
            className="inline-flex items-center gap-2.5 rounded-xl bg-accent px-7 py-4 text-sm font-semibold text-ink outline-none transition-all duration-300 hover:bg-accent-soft hover:shadow-[0_8px_30px_rgba(61,139,255,0.25)] focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            <Mail className="size-4" aria-hidden="true" />
            Send Me a Message
          </a>
        </Reveal>

        <Reveal delay={340} className="mt-12 flex justify-center">
          <SocialLinks ids={CONTACT_SOCIAL_IDS} />
        </Reveal>
      </div>
    </section>
  );
}
