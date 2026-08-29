import Logo from "./Logo.jsx";
import SocialLinks from "./SocialLinks.jsx";

const FOOTER_SOCIAL_IDS = ["github", "x", "linkedin", "email"];

/**
 * Footer — minimal sign-off: brand (reuses the Logo placeholder),
 * social links, tagline and copyright. Stacks and centres on mobile.
 */
export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Logo />
          <SocialLinks ids={FOOTER_SOCIAL_IDS} />
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/[0.05] pt-6 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-xs text-fog">
            Building <span aria-hidden="true" className="text-accent/70">•</span> Learning{" "}
            <span aria-hidden="true" className="text-accent/70">•</span> Sharing
          </p>
          <p className="text-[13px] text-fog/70">© 2026 SeanDev</p>
        </div>
      </div>
    </footer>
  );
}
