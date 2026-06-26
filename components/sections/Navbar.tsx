"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { brand, nav } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-black/60 backdrop-blur-xl"
            : "border-white/5 bg-white/[0.03] backdrop-blur-md"
        }`}
      >
        <a href="#home" className="flex items-center gap-2 pl-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand text-sm font-bold text-white">
            {brand.name.charAt(0)}
          </span>
          <span className="text-sm font-semibold tracking-tight">{brand.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-brand px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-light sm:inline-block"
          >
            Let&apos;s Talk
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full text-white/80 hover:bg-white/5 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="absolute top-20 w-[calc(100%-2rem)] max-w-5xl rounded-3xl border border-white/10 bg-black/90 p-4 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm text-white/80 hover:bg-white/5"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-xl bg-brand px-4 py-3 text-center text-sm font-medium text-white"
              >
                Let&apos;s Talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
