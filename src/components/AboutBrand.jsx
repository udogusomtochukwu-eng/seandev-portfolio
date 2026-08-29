/**
 * AboutBrand — large brand slot for the future SeanDev logo.
 *
 * The panel, orbit rings and spacing are final. When the real logo
 * exists, replace ONLY the marked placeholder block with:
 *
 *   <img src={logoMark} alt="SeanDev" className="w-auto h-16" />
 *
 * or an inline SVG:
 *
 *   <svg className="w-auto h-16" aria-hidden="true">…</svg>
 *
 * No layout changes will be needed — the slot sits inside a fixed panel.
 */
import SEANDEV from "../../public/images/SeanDev-logo.png";
export default function AboutBrand() {
  return (
    <div className="relative w-full max-w-[17rem] sm:max-w-[22rem] lg:max-w-[26rem] aspect-square">
      {/* Outer orbit ring */}
      <div
        aria-hidden="true"
        className="absolute inset-0 border border-white/[0.05] rounded-full"
      />

      {/* Slowly orbiting accent dot on a dashed ring */}
      <div
        aria-hidden="true"
        className="absolute inset-7 sm:inset-9 border border-accent/15 border-dashed rounded-full animate-spin-slow"
      >
        <span className="top-0 left-1/2 absolute bg-accent/70 rounded-full size-1.5 -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Inner hairline ring */}
      <div
        aria-hidden="true"
        className="absolute inset-16 sm:inset-20 border border-white/[0.04] rounded-full"
      />

      {/* Central brand panel */}
      <div className="absolute inset-0 place-items-center grid">
        <div className="relative place-items-center grid bg-ink-soft border border-white/10 rounded-[1.5rem] w-[64%] aspect-square">
          {/* Viewfinder corner ticks — echoes the Hero portrait frame */}
          <span
            aria-hidden="true"
            className="top-2.5 left-2.5 absolute border-accent/40 border-t-2 border-l-2 size-4"
          />
          <span
            aria-hidden="true"
            className="top-2.5 right-2.5 absolute border-accent/40 border-t-2 border-r-2 size-4"
          />
          <span
            aria-hidden="true"
            className="bottom-2.5 left-2.5 absolute border-accent/40 border-b-2 border-l-2 size-4"
          />
          <span
            aria-hidden="true"
            className="right-2.5 bottom-2.5 absolute border-accent/40 border-r-2 border-b-2 size-4"
          />

          {/* === SEANDEV LOGO PLACEHOLDER (swap for <img> / <svg> when ready) === */}

          <img src={SEANDEV} alt="SeanDev" className="w-full h-full" />
          {/* === /SEANDEV LOGO PLACEHOLDER === */}
        </div>
      </div>
    </div>
  );
}
