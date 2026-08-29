import { ArrowRight, Download } from "lucide-react";
import RotatingText from "./RotatingText.jsx";
import SocialLinks from "./SocialLinks.jsx";
import ProfileImage from "./ProfileImage.jsx";
import { CV_FILE } from "../data/site.js";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background: subdued blueprint grid + one restrained accent bloom */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-blueprint absolute inset-0" />
        <div className="absolute -right-40 top-1/3 size-[34rem] rounded-full bg-accent/[0.07] blur-[120px]" />
      </div>

      {/*
        Asymmetric composition (~42% / ~58%): the portrait is the visual anchor,
        with a moderate gap so text and image read as one unit.
      */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 pb-24 pt-28 sm:px-8 lg:min-h-[88svh] lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 lg:pb-16 lg:pt-24 xl:gap-12">
        {/* ------------------------------ Text column ------------------------------ */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1
            className="animate-rise font-display text-[2.85rem] font-bold leading-[1.04] tracking-tight text-white sm:text-6xl xl:text-[4.4rem]"
            style={{ "--rise-delay": "60ms" }}
          >
            Hi, I&apos;m Sean<span className="text-accent">.</span>
          </h1>

          <div
            className="animate-rise mt-5 flex min-h-9 items-center font-display text-xl font-medium sm:text-2xl"
            style={{ "--rise-delay": "170ms" }}
          >
            <RotatingText />
          </div>

          <p
            className="animate-rise mt-6 max-w-[31rem] text-[15px] leading-relaxed text-fog sm:text-base"
            style={{ "--rise-delay": "280ms" }}
          >
            I build modern, responsive web experiences and I&apos;m currently
            exploring the world of full-stack development.
          </p>

          <div
            className="animate-rise mt-9 flex flex-col items-center gap-4 sm:flex-row"
            style={{ "--rise-delay": "390ms" }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-ink outline-none transition-all duration-300 hover:bg-accent-soft hover:shadow-[0_8px_30px_rgba(61,139,255,0.25)] focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              View My Projects
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <a
              href={CV_FILE}
              download="SeanDev-CV.pdf"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-slate-100 outline-none transition-all duration-300 hover:border-accent/50 hover:text-accent-soft focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              <Download
                className="size-4 transition-transform duration-300 group-hover:translate-y-0.5"
                aria-hidden="true"
              />
              Download CV
            </a>
          </div>

          <div className="animate-rise mt-10" style={{ "--rise-delay": "490ms" }}>
            <SocialLinks />
          </div>
        </div>

        {/* ------------------------------ Image column (~58%) ------------------------------ */}
        <div
          className="animate-rise flex justify-center"
          style={{ "--rise-delay": "320ms" }}
        >
          <ProfileImage />
        </div>
      </div>
    </section>
  );
}
