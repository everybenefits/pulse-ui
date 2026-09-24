"use client";

import { useScroll, useMotionValueEvent } from "motion/react";
import { useMemo, useRef, useState } from "react";
import { useSafeReducedMotion } from "../hooks/use-safe-reduced-motion";

type Word = { text: string; highlighted: boolean };

function parseWords(source: string): Word[] {
  return source.split(/\s+/).map((raw) => {
    const highlighted = raw.startsWith("*");
    return { text: raw.replace(/\*/g, ""), highlighted };
  });
}

export type LandingManifestoProps = {
  /** Side / ghost kicker label (e.g. station name). */
  kicker: string;
  /**
   * Manifesto copy. Prefix a word with `*` to highlight it
   * (e.g. `"Build *better* benefits"`).
   */
  manifesto: string;
  /** Optional dial readout shown in the aside (defaults to `88.0`). */
  dialValue?: string;
  dialUnit?: string;
};

export function LandingManifesto({
  kicker,
  manifesto,
  dialValue = "88.0",
  dialUnit = "MHz",
}: LandingManifestoProps) {
  const reduced = useSafeReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "end 0.4"],
  });
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setProgress(value);
  });

  const words = useMemo(() => parseWords(manifesto), [manifesto]);
  const visible = reduced
    ? words.length
    : Math.floor(progress * (words.length + 4));

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-glass-border px-6 py-24 md:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-brand/10 blur-3xl"
      />
      <div
        aria-hidden
        className="text-outline pointer-events-none absolute right-0 top-8 select-none font-display text-[18vw] font-extrabold uppercase leading-none tracking-[-0.06em] opacity-20 md:top-12"
      >
        {kicker}
      </div>

      <div className="relative mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(8rem,10rem)_1fr] lg:gap-14">
        <aside className="hidden lg:block">
          <p className="text-[9px] font-extrabold uppercase tracking-[0.24em] text-muted">
            {kicker}
          </p>
          <p className="mt-2 font-display text-3xl font-extrabold tabular-nums tracking-tight text-brand">
            {dialValue}
            <span className="ml-1 text-sm font-semibold text-muted">
              {dialUnit}
            </span>
          </p>
        </aside>

        <div className="relative min-w-0 pt-4 lg:pt-0">
          <p className="font-display text-[clamp(1.75rem,4.5vw,3.25rem)] font-extrabold leading-[1.18] tracking-tight">
            {words.map((word, index) => (
              <span
                key={`${word.text}-${index}`}
                className={`transition-colors duration-300 ${
                  index < visible
                    ? word.highlighted
                      ? "text-brand"
                      : "text-ink"
                    : "text-ink/12"
                }`}
              >
                {word.text}{" "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
