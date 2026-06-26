"use client";

import { ArrowRight } from "lucide-react";
import { shiftCta } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

export default function ShiftCta() {
  return (
    <section className="relative py-24">
      <div className="container-px">
        <Reveal className="glow-radial relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] px-6 py-16 text-center sm:px-12 sm:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            {shiftCta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/60">
            {shiftCta.body}
          </p>
          <a
            href={shiftCta.cta.href}
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-brand-light hover:shadow-[0_0_40px_-8px_rgba(147,51,234,0.7)]"
          >
            {shiftCta.cta.label}
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
