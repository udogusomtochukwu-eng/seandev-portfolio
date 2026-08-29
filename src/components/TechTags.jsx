/**
 * TechTags — the stack a project was built with.
 * Small mono chips; `large` is used on the featured project only.
 */
export default function TechTags({ items = [], large = false, className = "" }) {
  return (
    <ul className={`flex flex-wrap items-center gap-2 ${className}`}>
      {items.map((tech) => (
        <li
          key={tech}
          className={`rounded-full border border-white/10 bg-white/[0.02] font-mono text-fog ${
            large ? "px-3 py-1.5 text-xs" : "px-2.5 py-1 text-[11px]"
          }`}
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}
