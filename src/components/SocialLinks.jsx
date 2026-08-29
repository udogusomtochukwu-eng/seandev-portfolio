import { SOCIAL_LINKS } from "../data/socials.js";

/* The Hero's original three links; Contact/Footer opt into "email" too. */
const DEFAULT_IDS = ["github", "x", "linkedin"];

/**
 * SocialLinks — circular icon links sourced from src/data/socials.js.
 * Pass `ids` to choose which links render. mailto: links open in the
 * same tab automatically; everything else opens in a new tab.
 */
export default function SocialLinks({ ids = DEFAULT_IDS, className = "" }) {
  const links = SOCIAL_LINKS.filter((link) => ids.includes(link.id));

  return (
    <ul aria-label="Social media profiles" className={`flex items-center gap-3 ${className}`}>
      {links.map(({ id, ariaLabel, href, Icon }) => {
        const external = !href.startsWith("mailto:");
        return (
          <li key={id}>
            <a
              href={href}
              aria-label={ariaLabel}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-slate-400 outline-none transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent-soft focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              <Icon className="size-[18px]" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
