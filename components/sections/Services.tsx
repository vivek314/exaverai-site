"use client";

import { services, servicesIntro } from "@/lib/content";
import Marquee from "@/components/ui/Marquee";
import Reveal from "@/components/ui/Reveal";

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {servicesIntro.title}
          </h2>
          <p className="mt-5 text-base text-white/60">{servicesIntro.body}</p>
        </Reveal>
      </div>

      <div className="mt-16">
        <Marquee duration={45}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="mx-3 flex w-[300px] flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7 transition-colors hover:border-brand/50 sm:w-[360px]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-brand/30 bg-brand/10 text-brand-lighter">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {service.description}
                </p>
              </article>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}
