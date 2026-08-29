import { Hammer, BookOpen, Compass } from "lucide-react";

/**
 * Currently — a compact snapshot of what Sean is doing right now.
 * Kept subtle: hairline panels, mono labels, small accent icons.
 */
const ITEMS = [
  {
    label: "Building",
    description: "Real-world web applications",
    Icon: Hammer,
  },
  {
    label: "Learning",
    description: "Backend & full-stack development",
    Icon: BookOpen,
  },
  {
    label: "Exploring",
    description: "New technologies and better ways to build",
    Icon: Compass,
  },
];

export default function Currently() {
  return (
    <div className="mt-10">
      <p className="flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-fog lg:justify-start">
        <span aria-hidden="true" className="size-1.5 animate-pulse rounded-full bg-accent" />
        Currently
      </p>

      <ul className="mt-5 grid gap-3 text-left sm:grid-cols-3">
        {ITEMS.map(({ label, description, Icon }) => (
          <li
            key={label}
            className="flex items-start gap-3.5 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 transition-colors duration-300 hover:border-accent/30"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-accent/25 bg-accent/[0.07]">
              <Icon className="size-4 text-accent-soft" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm font-medium text-white">{label}</span>
              <span className="mt-1 block text-[13px] leading-snug text-fog">{description}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
