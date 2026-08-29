import { BadgeCheck } from "lucide-react";
import ProjectImage from "./ProjectImage.jsx";
import TechTags from "./TechTags.jsx";
import ProjectActions from "./ProjectActions.jsx";

/**
 * ProjectCard — medium card for personal projects and client work.
 * Scan order: name → description → screenshot → tech → view live.
 * Client cards get a verified-style chip for the "delivered" distinction.
 */
export default function ProjectCard({ project }) {
  const isClient = project.category === "Client Project";

  return (
    <article className="flex flex-col bg-white/[0.015] p-5 sm:p-6 border border-white/[0.08] hover:border-accent/25 rounded-2xl h-full transition-colors duration-300">
      {/* Name + category chip */}
      <div className="flex justify-between items-start gap-3">
        <h4 className="font-display font-semibold text-white text-xl tracking-tight">
          {project.name}
        </h4>
        <span
          className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] ${
            isClient
              ? "border-accent/25 bg-accent/[0.06] text-accent-soft"
              : "border-white/10 bg-white/[0.02] text-fog"
          }`}
        >
          {isClient && <BadgeCheck className="size-3" aria-hidden="true" />}
          {isClient ? "Client Project" : "Personal"}
        </span>
      </div>

      <p className="mt-3 text-fog text-sm leading-relaxed">
        {project.description}
      </p>

      {/* Screenshot */}
      <ProjectImage
        label={project.imageLabel}
        src={project.imageSrc}
        alt={project.imageAlt}
        ratio={project.imageAspectRatio}
        fit={project.imageFit}
        position={project.imagePosition}
        className="mt-5"
      />

      {/* Stack + actions pinned to the bottom for equal-height cards */}
      <TechTags items={project.tech} className="mt-5" />
      <div className="mt-auto pt-5">
        <ProjectActions project={project} />
      </div>
    </article>
  );
}
