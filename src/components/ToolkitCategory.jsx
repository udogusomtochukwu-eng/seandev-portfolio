import ToolkitItem from "./ToolkitItem.jsx";

/**
 * ToolkitCategory — one grouped panel: numbered heading, status label,
 * one-line description and the wrapped list of technologies.
 */
export default function ToolkitCategory({ category, index }) {
  const exploring = category.variant === "exploring";

  return (
    <article
      className={`h-full rounded-2xl border p-6 transition-colors duration-300 sm:p-7 ${
        exploring
          ? "border-accent/15 bg-accent/[0.02] hover:border-accent/30"
          : "border-white/[0.08] bg-white/[0.015] hover:border-white/[0.15]"
      }`}
    >
      <header className="flex items-center justify-between gap-4">
        <div className="flex items-baseline gap-2.5">
          <span className="font-mono text-[11px] text-accent/80">0{index + 1}</span>
          <h3 className="font-display text-lg font-semibold tracking-tight text-white">
            {category.title}
          </h3>
        </div>
        <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-fog/60">
          {exploring && (
            <span aria-hidden="true" className="size-1.5 animate-pulse rounded-full bg-accent" />
          )}
          {category.status}
        </span>
      </header>

      <p className="mt-2.5 text-sm leading-relaxed text-fog">{category.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2.5">
        {category.items.map((item) => (
          <ToolkitItem key={item.name} item={item} exploring={exploring} />
        ))}
      </ul>
    </article>
  );
}
