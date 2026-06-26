"use client";

import { useState } from "react";
import { about } from "@/lib/content";
import Marquee from "@/components/ui/Marquee";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  const [active, setActive] = useState(0);

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-px">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {about.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* category tiles */}
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              {about.categories.map((cat, i) => (
                <button
                  key={cat.title}
                  onClick={() => setActive(i)}
                  className={`flex flex-col items-start rounded-3xl border p-5 text-left transition-all ${
                    active === i
                      ? "border-brand/60 bg-brand/10 shadow-[0_0_40px_-12px_rgba(147,51,234,0.6)]"
                      : "border-white/10 bg-white/[0.03] hover:border-white/20"
                  }`}
                >
                  <span
                    className={`grid h-9 w-9 place-items-center rounded-full text-sm font-bold ${
                      active === i
                        ? "bg-brand text-white"
                        : "bg-white/10 text-white/70"
                    }`}
                  >
                    {cat.badge}
                  </span>
                  <span className="mt-4 text-sm font-semibold text-white">
                    {cat.title}
                  </span>
                  <span className="mt-1 text-xs text-white/45">{cat.subtitle}</span>
                </button>
              ))}
              <p className="col-span-2 mt-1 text-center text-xs uppercase tracking-widest text-white/40">
                {about.prompt}
              </p>
            </div>
          </Reveal>

          {/* founder bio */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-dark text-base font-semibold text-white">
                  {about.founderName.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    Hey, it&apos;s {about.founderName}
                  </div>
                  <div className="text-xs text-white/45">Founder</div>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-white/60">
                {about.bio}
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* scrolling banner */}
      <div className="mt-16 border-y border-white/10 bg-white/[0.02] py-5">
        <Marquee duration={28} pauseOnHover={false}>
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="mx-6 text-lg font-bold uppercase tracking-tight text-white/30 sm:text-2xl"
            >
              {about.marqueeText}
              <span className="mx-6 text-brand">✦</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
