"use client";

import { integrations } from "@/lib/content";
import Marquee from "@/components/ui/Marquee";
import Reveal from "@/components/ui/Reveal";

export default function Integrations() {
  return (
    <section className="relative py-20">
      <div className="container-px">
        <Reveal className="text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-brand-lighter">
            {integrations.eyebrow}
          </span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            {integrations.title}
          </h2>
          <p className="mt-3 text-sm text-white/50">{integrations.subtitle}</p>
        </Reveal>
      </div>

      <div className="mt-12">
        <Marquee duration={35} direction="right">
          {integrations.logos.map((logo) => (
            <div
              key={logo}
              className="mx-3 flex h-16 w-44 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-sm font-semibold tracking-wide text-white/60"
            >
              {logo}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
