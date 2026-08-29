import Reveal from "./Reveal.jsx";
import ToolkitCategory from "./ToolkitCategory.jsx";
import { TOOLKIT_CATEGORIES } from "../data/toolkit.js";

/* Per-category grid spans: Frontend wide, Tools beside it, Exploring full row */
const CATEGORY_SPANS = ["lg:col-span-7", "lg:col-span-5", "md:col-span-2 lg:col-span-12"];

export default function Toolkit() {
  return (
    <section
      id="toolkit"
      aria-labelledby="toolkit-heading"
      className="relative border-t border-white/[0.05] bg-ink"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        {/* ------------------------------ Section header ------------------------------ */}
        <Reveal className="text-center lg:text-left">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent/80">
            {"// what i build with"}
          </p>
          <h2
            id="toolkit-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            My Toolkit<span className="text-accent">.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-fog sm:text-base lg:mx-0">
            Technologies and tools I use to build.
          </p>
        </Reveal>

        {/* ------------------------------ Categories ------------------------------ */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-12">
          {TOOLKIT_CATEGORIES.map((category, index) => (
            <Reveal
              key={category.id}
              delay={120 + index * 100}
              className={`h-full ${CATEGORY_SPANS[index]}`}
            >
              <ToolkitCategory category={category} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
