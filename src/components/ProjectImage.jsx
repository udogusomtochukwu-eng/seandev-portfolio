import { Image as ImageIcon } from "lucide-react";

/**
 * ProjectImage — named screenshot slot with a browser-chrome frame.
 *
 * The frame, dimensions and aspect ratios stay exactly as approved; only
 * the image rendering changes per asset. Wide website screenshots use
 * object-contain by default so the full interface is visible instead of
 * being cropped inside the fixed project frames.
 */
export default function ProjectImage({
  label,
  ratio = "16 / 10",
  className = "",
  src,
  alt,
  fit = "contain",
  position = "center top",
}) {
  const hasImage = Boolean(src);
  const objectFitClass = fit === "cover" ? "object-cover" : "object-contain";

  return (
    <figure
      className={`group/img overflow-hidden rounded-xl border border-white/10 bg-ink-soft transition-colors duration-300 hover:border-accent/30 ${className}`}
    >
      {/* Browser chrome top bar */}
      <div
        aria-hidden="true"
        className="flex items-center gap-1.5 bg-white/[0.02] px-3.5 border-white/[0.06] border-b h-8"
      >
        <span className="bg-white/[0.14] rounded-full size-2" />
        <span className="bg-white/[0.14] rounded-full size-2" />
        <span className="bg-white/[0.14] rounded-full size-2" />
        <span className="ml-auto font-mono text-[9px] text-fog/50 uppercase tracking-[0.2em]">
          preview
        </span>
      </div>

      {/* Screenshot area */}
      <div className="relative" style={{ aspectRatio: ratio }}>
        {hasImage ? (
          <img
            src={src}
            alt={alt || label}
            loading="lazy"
            decoding="async"
            style={{ objectPosition: position }}
            className={`absolute inset-0 h-full w-full bg-[#05080d] ${objectFitClass}`}
          />
        ) : (
          <>
            <div aria-hidden="true" className="absolute inset-0 bg-hatch" />
            <figcaption className="absolute inset-0 flex flex-col justify-center items-center gap-3 px-6 text-center">
              <span className="flex justify-center items-center bg-white/[0.03] border border-white/10 rounded-lg size-11 transition-transform group-hover/img:-translate-y-0.5 duration-300">
                <ImageIcon
                  className="size-5 text-accent/70"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </span>
              <span className="font-mono text-[10px] text-fog sm:text-[11px] uppercase tracking-[0.2em]">
                {label}
              </span>
              <span className="font-mono text-[10px] text-fog/40">
                {
                  "// drop the real screenshot in /public and set imageSrc in src/data/projects.js"
                }
              </span>
            </figcaption>
          </>
        )}
      </div>
    </figure>
  );
}
