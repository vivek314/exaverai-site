/**
 * Tailwind config for the static marketing page (automate-flow.html).
 * Separate from the Next.js app's tailwind.config.ts. Mirrors the inline
 * config that previously lived in the page's <script> tag.
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("./cp-design-kit/cp-design-preset")],
  content: ["./automate-flow.html", "./index.html"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#9333EA", light: "#A855F7", lighter: "#C084FC", dark: "#693696" },
        ink: "#030303",
      },
      fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
