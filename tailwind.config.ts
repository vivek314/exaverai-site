import type { Config } from "tailwindcss";

const config: Config = {
  presets: [require("./cp-design-kit/cp-design-preset")],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#9333EA",
          light: "#A855F7",
          lighter: "#C084FC",
          dark: "#693696",
        },
        ink: "#030303",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "marquee-left": "marquee-left var(--marquee-duration, 40s) linear infinite",
        "marquee-right": "marquee-right var(--marquee-duration, 40s) linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
