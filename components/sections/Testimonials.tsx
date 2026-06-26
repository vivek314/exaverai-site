"use client";

import { testimonials, testimonialsIntro } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {testimonialsIntro.title}
          </h2>
          <p className="mt-5 text-base text-white/60">{testimonialsIntro.body}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.08}>
              <figure className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20">
                <figcaption className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-dark text-sm font-semibold text-white">
                    {initials(t.name)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-white/45">{t.role}</div>
                  </div>
                </figcaption>
                <blockquote className="mt-5 text-sm leading-relaxed text-white/65">
                  “{t.quote}”
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
