/**
 * ToolkitItem — a single technology: icon + name.
 * Each icon renders in its recognizable official brand color (from the
 * toolkit data); the surrounding item styling stays on the SeanDev theme.
 *
 * `exploring` marks technologies still being learned: dashed border and
 * an accent tint — visually distinct without overstating them.
 */
export default function ToolkitItem({ item, exploring = false }) {
  const { name, Icon, color } = item;

  return (
    <li
      className={`flex items-center gap-2.5 rounded-lg border px-3.5 py-2.5 transition-all duration-300 hover:-translate-y-0.5 ${
        exploring
          ? "border-dashed border-accent/25 bg-accent/[0.03] hover:border-accent/50 hover:bg-accent/[0.06]"
          : "border-white/10 bg-white/[0.02] hover:border-accent/40 hover:bg-white/[0.04]"
      }`}
    >
      <Icon
        className="size-[18px] shrink-0"
        style={{ color }}
        aria-hidden="true"
      />
      <span className="text-sm font-medium text-slate-200">{name}</span>
    </li>
  );
}
