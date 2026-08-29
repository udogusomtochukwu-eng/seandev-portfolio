import { useEffect, useRef, useState } from "react";

/**
 * Reveal — scroll-triggered entrance that matches the Hero's
 * `.animate-rise` style. Content fades/rises once (the first time it
 * enters the viewport) and stays visible afterwards.
 *
 * Usage:
 *   <Reveal delay={150}>…content…</Reveal>
 */
export default function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    /* Skip the animation entirely for reduced-motion users */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${visible ? "animate-rise" : "opacity-0"}`}
      style={visible ? { "--rise-delay": `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
