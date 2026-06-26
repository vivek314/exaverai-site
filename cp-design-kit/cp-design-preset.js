/**
 * CP Coach Design System — Tailwind Preset (additive / retrofit build)
 *
 * Every token here is namespaced with `cp-` so it can NEVER collide with this
 * project's existing Tailwind theme (e.g. its `brand` / `ink` colors). It only
 * ADDS new utilities; it overrides nothing. Examples of generated utilities:
 *
 *   bg-cp-paper-2   text-cp-ink-1   border-cp-paper-4   text-cp-sage
 *   shadow-cp-2     font-cp-serif   rounded-cp-lg       text-cp-xl
 *   bg-cp-ok-bg     text-cp-ok      bg-cp-heat-4
 *
 * Pairs with cp-tokens.css (which defines the underlying CSS variables and the
 * ready-made component classes: btn-primary, card-hero, verdict-pill, etc.).
 *
 * Register in tailwind.config.* :
 *   presets: [require('./cp-design-kit/cp-design-preset')]
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        "cp-paper": {
          1: "var(--paper-1)", 2: "var(--paper-2)",
          3: "var(--paper-3)", 4: "var(--paper-4)",
        },
        "cp-ink": {
          1: "var(--ink-1)", 2: "var(--ink-2)", 3: "var(--ink-3)",
          4: "var(--ink-4)", 5: "var(--ink-5)", accent: "var(--ink-accent)",
        },
        "cp-sage": { DEFAULT: "var(--sage)", soft: "var(--sage-soft)" },
        "cp-clay": { DEFAULT: "var(--clay)", soft: "var(--clay-soft)" },
        "cp-ok":   { DEFAULT: "var(--ok)",   bg: "var(--ok-bg)" },
        "cp-warn": { DEFAULT: "var(--warn)", bg: "var(--warn-bg)" },
        "cp-alert":{ DEFAULT: "var(--alert)",bg: "var(--alert-bg)" },
        "cp-info": { DEFAULT: "var(--info)", bg: "var(--info-bg)" },
        "cp-heat": {
          0: "var(--heat-0)", 1: "var(--heat-1)", 2: "var(--heat-2)",
          3: "var(--heat-3)", 4: "var(--heat-4)", 5: "var(--heat-5)",
        },
      },
      fontFamily: {
        "cp-sans":  ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        "cp-serif": ["var(--font-serif)", "'Source Serif 4'", "Georgia", "serif"],
        "cp-mono":  ["var(--font-mono)", "'JetBrains Mono'", "Consolas", "monospace"],
      },
      borderRadius: {
        "cp-sm": "var(--radius-sm)", "cp-md": "var(--radius-md)",
        "cp-lg": "var(--radius-lg)", "cp-pill": "var(--radius-pill)",
      },
      boxShadow: {
        "cp-1": "var(--shadow-1)", "cp-2": "var(--shadow-2)",
        "cp-3": "var(--shadow-3)", "cp-4": "var(--shadow-4)",
      },
      fontSize: {
        "cp-2xs": ["11px", { lineHeight: "16px" }],
        "cp-xs":  ["13px", { lineHeight: "20px" }],
        "cp-sm":  ["13px", { lineHeight: "20px" }],
        "cp-base":["15px", { lineHeight: "24px" }],
        "cp-md":  ["17px", { lineHeight: "28px" }],
        "cp-lg":  ["21px", { lineHeight: "32px" }],
        "cp-xl":  ["28px", { lineHeight: "36px" }],
        "cp-2xl": ["36px", { lineHeight: "44px" }],
        "cp-3xl": ["56px", { lineHeight: "64px" }],
      },
    },
  },
};
