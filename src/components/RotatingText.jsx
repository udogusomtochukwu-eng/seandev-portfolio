import { useEffect, useState } from "react";

const DEFAULT_ROLES = [
  "Front-end Developer",
  "Website Developer",
  "Mechatronics Engineering Student",
  "Full-stack Developer in Progress",
];

/* Deliberately unhurried timings so the effect stays subtle */
const TYPE_MS = 72; // per character while typing
const DELETE_MS = 36; // per character while deleting
const HOLD_MS = 1800; // pause with the full word visible
const NEXT_MS = 380; // pause before the next word starts

/**
 * RotatingText — types and deletes through a list of roles.
 * Renders a screen-reader friendly static list alongside the
 * animated (decorative) text, and falls back to a static first
 * role when the user prefers reduced motion.
 */
export default function RotatingText({
  roles = DEFAULT_ROLES,
  className = "",
}) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  /* Respect prefers-reduced-motion */
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  /* Typing state machine */
  useEffect(() => {
    if (reducedMotion) return undefined;

    const current = roles[roleIndex];
    let timeout;

    if (!deleting && charCount < current.length) {
      timeout = setTimeout(() => setCharCount((count) => count + 1), TYPE_MS);
    } else if (!deleting) {
      timeout = setTimeout(() => setDeleting(true), HOLD_MS);
    } else if (charCount > 0) {
      timeout = setTimeout(() => setCharCount((count) => count - 1), DELETE_MS);
    } else {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
      }, NEXT_MS);
    }

    return () => clearTimeout(timeout);
  }, [charCount, deleting, roleIndex, roles, reducedMotion]);

  const visibleText = reducedMotion
    ? roles[0]
    : roles[roleIndex].slice(0, charCount);

  return (
    <span className={`inline-flex items-baseline ${className}`}>
      {/* Static version for screen readers */}
      <span className="sr-only">{roles.join(", ")}</span>

      {/* Animated version (decorative) */}
      <span aria-hidden="true" className="text-accent">
        {visibleText}
        {!reducedMotion && (
          <span className="inline-block bg-accent ml-[3px] w-[2px] h-[1.05em] translate-y-[0.18em] caret-blink" />
        )}
      </span>
    </span>
  );
}
