import Reveal from "./Reveal.jsx";
import FeaturedProject from "./FeaturedProject.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { FEATURED_PROJECT, PERSONAL_PROJECTS, CLIENT_PROJECTS } from "../data/projects.js";

/**
 * SubsectionHeading — small shared header for "Personal Projects"
 * and "Client Work". The trailing hairline keeps it editorial but quiet.
 */
function SubsectionHeading({ eyebrow, title, description }) {
  return (
    <div className="flex flex-wrap items-end gap-x-6 gap-y-4">
      <div className="max-w-md">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent/80">
          {eyebrow}
        </p>
        <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-fog">{description}</p>
      </div>
      <span aria-hidden="true" className="mb-1.5 hidden h-px flex-1 bg-white/[0.07] md:block" />
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative border-t border-white/[0.05] bg-ink"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:py-32">
        {/* ------------------------------ Section header ------------------------------ */}
        <Reveal className="text-center lg:text-left">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent/80">
            {"// my work"}
          </p>
          <h2
            id="projects-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Projects<span className="text-accent">.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-fog sm:text-base lg:mx-0">
            Things I&apos;ve built, explored, and delivered.
          </p>
        </Reveal>

        {/* ------------------------------ Personal Projects ------------------------------ */}
        <Reveal delay={80} className="mt-16 lg:mt-20">
          <SubsectionHeading
            eyebrow="// built to learn"
            title="Personal Projects"
            description="Projects I've built to learn, experiment, and solve real problems."
          />
        </Reveal>

        <Reveal delay={160} className="mt-8 lg:mt-10">
          <FeaturedProject project={FEATURED_PROJECT} />
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {PERSONAL_PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={220 + index * 90} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {/* ------------------------------ Client Work ------------------------------ */}
        <Reveal delay={100} className="mt-20 lg:mt-24">
          <div className="rounded-[1.5rem] border border-white/[0.07] bg-ink-soft/50 p-5 sm:p-8 lg:rounded-[2rem] lg:p-10">
            <SubsectionHeading
              eyebrow="// delivered for clients"
              title="Client Work"
              description="Websites and applications I've built and delivered for clients."
            />

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {CLIENT_PROJECTS.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
