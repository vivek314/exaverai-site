"use client";

import { finalCta } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "./ContactForm";

export default function FinalCta() {
  return (
    <section id="contact" className="glow-radial relative py-24 sm:py-32">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-gradient text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {finalCta.titleLine1}
              <br />
              {finalCta.titleLine2}
            </h2>
            <p className="mt-6 max-w-md text-base text-white/60">
              Premium AI automation solutions for established businesses seeking to
              optimize operations and drive growth. Tell us what you want to
              automate — we&apos;ll take it from there.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
