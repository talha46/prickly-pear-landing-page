import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cactus: {
          DEFAULT: "#2D4A3E",
          light: "#4A6B5D",
          dark: "#1A2E26",
        },
        pear: {
          DEFAULT: "#9B1B4A",
          light: "#C42D6A",
          dark: "#7A1238",
        },
        sand: {
          DEFAULT: "#F5EDE0",
          light: "#FAF6EF",
          dark: "#E8DCC8",
        },
        terracotta: {
          DEFAULT: "#C4785A",
          muted: "#A8654A",
        },
        charcoal: {
          DEFAULT: "#2A2A2A",
          light: "#4A4A4A",
        },
        gold: {
          DEFAULT: "#C9A227",
          muted: "#B8922A",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-source-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
