import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal.jsx";
import AboutBrand from "./AboutBrand.jsx";
import Currently from "./Currently.jsx";

/* Sean's working loop — kept as data so the chip stays trivial to edit */
const LOOP = ["Learn", "Build", "Understand", "Share", "Repeat"];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative bg-ink border-white/[0.05] border-t"
    >
      <div className="items-center gap-14 lg:gap-16 xl:gap-20 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] mx-auto px-5 sm:px-8 py-24 sm:py-28 lg:py-32 max-w-7xl">
        {/* ---------------- Left — SeanDev brand visual ---------------- */}
        <Reveal delay={60} className="flex justify-center lg:justify-start">
          <AboutBrand />
        </Reveal>

        {/* ---------------- Right — About content ---------------- */}
        <div className="mx-auto lg:mx-0 max-w-xl lg:text-left text-center">
          <Reveal delay={120}>
            <p className="font-mono text-[11px] text-accent/80 uppercase tracking-[0.25em]">
              {"// who i am"}
            </p>
            <h2
              id="about-heading"
              className="mt-4 font-display font-bold text-white text-3xl sm:text-4xl tracking-tight"
            >
              About Me<span className="text-accent">.</span>
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 text-[15px] text-fog sm:text-base leading-relaxed">
              My name is Udogu Somtochukwu Seanmichael, and i'm a frontend
              developer focused on building responsive, user-friendly web
              experiences with HTML, CSS, JavaScript, React, TypeScript, and
              Tailwind CSS.
            </p>
            <p className="mt-4 text-[15px] text-fog sm:text-base leading-relaxed">
              I'm a self-taught developer who enjoys turning ideas into real,
              polished interfaces — not just collecting tutorials. I'm currently
              expanding into backend and full-stack development while continuing
              to sharpen my frontend fundamentals.
            </p>
          </Reveal>

          <Reveal delay={280}>
            <p className="mt-4 text-[15px] text-fog sm:text-base leading-relaxed">
              One principle guides how I build:{" "}
              <span className="text-slate-100">
                I want to understand what I build.
              </span>{" "}
              AI tools are part of my workflow, but they&apos;re collaborators,
              not autopilot — if I can&apos;t explain the code, I don&apos;t
              consider the work finished.
            </p>

            {/* Learn → Build → Understand → Share → Repeat */}
            <div
              aria-label="Learn, build, understand, share, repeat"
              className="inline-flex flex-wrap items-center gap-x-2 gap-y-2 bg-white/[0.02] mt-7 px-4 py-3 border border-white/[0.08] rounded-xl"
            >
              {LOOP.map((step, index) => (
                <span
                  key={step}
                  aria-hidden="true"
                  className="flex items-center gap-2"
                >
                  <span className="font-mono text-slate-300 text-xs lowercase tracking-wide">
                    {step}
                  </span>
                  {index < LOOP.length - 1 && (
                    <ArrowRight className="size-3 text-accent/70" />
                  )}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={360}>
            <Currently />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
