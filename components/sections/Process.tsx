"use client";

import { Check } from "lucide-react";
import { process } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="container-px">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {process.title}
          </h2>
        </Reveal>

        <div className="relative mx-auto mt-16 max-w-2xl">
          {/* vertical connector */}
          <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-brand/60 via-brand/20 to-transparent sm:left-7" />

          <ol className="space-y-8">
            {process.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1}>
                <li className="relative flex gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
                  <div className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-brand/40 bg-brand/15 text-brand-lighter">
                    {i < 2 ? <Check size={20} /> : (
                      <span className="text-lg font-bold">{step.badge}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">
                      {step.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
