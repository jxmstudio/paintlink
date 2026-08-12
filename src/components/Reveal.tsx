"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * Fades and lifts its children into view the first time they're scrolled to.
 *
 * Both escape hatches live in CSS rather than here: `prefers-reduced-motion`
 * and <noscript> each force `.reveal` to its settled state, so the content is
 * never hidden from anyone who can't or doesn't want to see the animation.
 */
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  /** Milliseconds — stagger siblings by passing i * 60 or so. */
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

    observer.observe(el);

    // Anything already on screen at mount reveals on the next frame rather than
    // waiting on the observer, so above-the-fold content is never left blank.
    const frame = requestAnimationFrame(() => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        setShown(true);
        observer.disconnect();
      }
    });

    // Both of the above are frame-driven, and frames don't run in a background
    // tab. Timers do, so this guarantees the content can never be stranded
    // invisible. In a visible tab the observer always wins the race.
    const safety = setTimeout(() => {
      setShown(true);
      observer.disconnect();
    }, 3000);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(safety);
      observer.disconnect();
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
