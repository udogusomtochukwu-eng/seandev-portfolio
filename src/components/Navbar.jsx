import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo.jsx";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Frosted bar once the page scrolls */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close the mobile menu with Escape */
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const barIsSolid = menuOpen || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        barIsSolid
          ? "border-b border-white/[0.06] bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="flex justify-between items-center mx-auto px-5 sm:px-8 max-w-7xl h-16 sm:h-[4.5rem]"
      >
        <Logo />

        {/* ---------------- Desktop navigation ---------------- */}
        <div className="hidden md:flex items-center gap-9">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link, index) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="group inline-flex relative items-baseline gap-1.5 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-accent/70 font-medium text-[13px] text-slate-300 hover:text-white focus-visible:text-white tracking-wide transition-colors"
                >
                  <span className="font-mono text-[10px] text-accent/80">
                    0{index + 1}
                  </span>
                  {link.label}
                  <span
                    aria-hidden="true"
                    className="-bottom-1.5 left-0 absolute bg-accent w-full h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                  />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hover:bg-accent/10 px-4 py-2 border border-accent/50 hover:border-accent rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink font-semibold text-[13px] hover:text-white transition-colors duration-300 text-accent-soft"
          >
            Let&apos;s Connect
          </a>
        </div>

        {/* ---------------- Mobile toggle ---------------- */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden inline-flex justify-center items-center border border-white/10 hover:border-accent/40 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-accent/70 size-10 text-slate-200 hover:text-white transition-colors"
        >
          {menuOpen ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* ---------------- Mobile menu ---------------- */}
      <div
        id="mobile-menu"
        className={`grid overflow-hidden border-white/[0.06] bg-ink/95 backdrop-blur-md transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          menuOpen ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <ul className="space-y-1 px-5 sm:px-8 pt-4 pb-6">
            {NAV_LINKS.map((link, index) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-baseline gap-3 hover:bg-white/[0.04] px-3 py-3 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-accent/60 font-medium text-slate-200 hover:text-white text-base transition-colors"
                >
                  <span className="font-mono text-accent/80 text-xs">
                    0{index + 1}
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex justify-center items-center bg-accent px-4 py-3 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink font-semibold text-ink text-sm transition-colors hover:bg-accent-soft"
              >
                Let&apos;s Connect
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
