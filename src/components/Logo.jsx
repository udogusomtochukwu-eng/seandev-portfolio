/**
 * Logo — placeholder slot for the future SeanDev logo.
 *
 * Everything except the marked placeholder block is final behaviour
 * (link to home, accessible label, responsive size, navbar spacing).
 *
 * When the final logo is ready, simply replace the placeholder block with:
 *
 *   <img src={logoSrc} alt="SeanDev" className="w-auto h-8 sm:h-9" />
 *
 * or an inline SVG:
 *
 *   <svg className="w-auto h-8 sm:h-9" aria-hidden="true">…</svg>
 *
 * No navbar changes will be needed — the <a> keeps the layout intact.
 */
import SEANDEV from "../../public/images/SeanDev-logoIII.png";
export default function Logo({ className = "" }) {
  return (
    <a
      href="#home"
      aria-label="SeanDev — back to homepage"
      className={`group inline-flex h-12 items-center rounded-md outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-4 focus-visible:ring-offset-ink ${className}`}
    >
      {/* === LOGO PLACEHOLDER (swap for <img> / <svg> when ready) === */}
      <img src={SEANDEV} alt="SeanDev" className="w-auto h-full sm:h-11" />
      {/* === /LOGO PLACEHOLDER === */}
    </a>
  );
}
