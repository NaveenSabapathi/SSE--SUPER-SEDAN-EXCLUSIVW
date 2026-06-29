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
        background: "#0F172A",
        surface: "#1E293B",
        borderMuted: "#334155",
        accentBlue: "#3B82F6",
        accentGold: "#EAB308",
        textMain: "#F8FAFC",
        textMuted: "#94A3B8",
      },
    },
  },
  plugins: [],
};

export default config;
