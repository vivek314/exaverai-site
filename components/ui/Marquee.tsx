"use client";

import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  direction?: "left" | "right";
  duration?: number;
  className?: string;
  pauseOnHover?: boolean;
};

/**
 * Infinite horizontal marquee. Renders its children twice and translates by
 * -50% so the loop is seamless.
 */
export default function Marquee({
  children,
  direction = "left",
  duration = 40,
  className = "",
  pauseOnHover = true,
}: MarqueeProps) {
  const animation =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className={`marquee-mask w-full overflow-hidden ${className}`}>
      <div
        className={`flex w-max ${animation} ${pauseOnHover ? "pause-on-hover" : ""}`}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        <div className="flex shrink-0 items-stretch">{children}</div>
        <div className="flex shrink-0 items-stretch" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
