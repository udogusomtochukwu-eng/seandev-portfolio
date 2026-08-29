import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

/**
 * ProjectActions — "View Live ↗" (+ optional "GitHub ↗" when a repo URL
 * exists in the project data). Placeholder "#…" URLs open in the same
 * tab; real http(s) URLs open in a new tab automatically.
 *
 * `featured` renders the primary electric-blue button used by Cineva.
 */
export default function ProjectActions({ project, featured = false }) {
  const isExternal = project.liveUrl.startsWith("http");
  const externalProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
      <a
        href={project.liveUrl}
        target="_blank"
        aria-label={`View ${project.name} live`}
        className={
          featured
            ? "group/link inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-ink outline-none transition-colors hover:bg-accent-soft focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            : "group/link inline-flex items-center gap-1 text-sm font-medium text-accent-soft outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-accent/60"
        }
        {...externalProps}
      >
        View Live
        <ArrowUpRight
          className="size-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 duration-300"
          aria-hidden="true"
        />
      </a>

      {/* Shown automatically once githubUrl is filled in the project data */}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.name} on GitHub`}
          className="inline-flex items-center gap-1.5 outline-none focus-visible:ring-2 focus-visible:ring-accent/60 font-medium text-slate-400 hover:text-white text-sm transition-colors"
        >
          <FaGithub className="size-4" aria-hidden="true" />
          GitHub
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </a>
      )}
    </div>
  );
}
