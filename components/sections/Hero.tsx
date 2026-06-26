"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { hero, stats } from "@/lib/content";
import CountUp from "@/components/ui/CountUp";

export default function Hero() {
  return (
    <section
      id="home"
      className="glow-radial relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* faint grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(60% 60% at 50% 40%, black, transparent 80%)",
        }}
      />

      <div className="container-px relative z-10 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-brand-lighter"
        >
          {hero.eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-gradient max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          {hero.titleLine1}
          <br />
          {hero.titleLine2}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-xl text-base text-white/60 sm:text-lg"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href={hero.primaryCta.href}
            className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-brand-light hover:shadow-[0_0_40px_-8px_rgba(147,51,234,0.7)]"
          >
            {hero.primaryCta.label}
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href={hero.secondaryCta.href}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            {hero.secondaryCta.label}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-7"
            >
              <div className="text-4xl font-bold text-white sm:text-5xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-widest text-white/50">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
