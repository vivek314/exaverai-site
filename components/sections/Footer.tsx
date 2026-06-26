import { Mail } from "lucide-react";
import { brand, footer, nav } from "@/lib/content";

const hrefFor: Record<string, string> = {
  Home: "#home",
  Services: "#services",
  Process: "#process",
  Testimonials: "#testimonials",
  "About Us": "#about",
  "Autonomous AI Agents": "#services",
  "Workflow Automations": "#services",
  "AI Voice Agents": "#services",
  "Social Media AI Systems": "#services",
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="container-px py-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-sm font-bold text-white">
                {brand.name.charAt(0)}
              </span>
              <span className="text-base font-semibold">{brand.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              {footer.blurb}
            </p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-sm font-semibold text-white">{col.heading}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href={hrefFor[link] ?? "#"}
                      className="text-sm text-white/50 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* contact */}
          <div>
            <h4 className="text-sm font-semibold text-white">
              {footer.contactHeading}
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
                >
                  <Mail size={15} />
                  {brand.email}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="inline-block rounded-full bg-brand px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-light"
                >
                  Book a Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/40">
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
}
