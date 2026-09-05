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
        brand: {
          purple: "#3F247E",
          "purple-hover": "#321C64",
          "purple-light": "#4B2A91",
          "purple-tint": "#F1EDFA",
          "purple-subtle": "#F7F5FC",
          navy: "#171B45",
          "navy-dark": "#0F1230",
          "navy-light": "#232966",
          gray: "#F7F7FA",
          "border-light": "#E5E3F0",
          accent: "#5C35B5",
          gold: "#FDB813"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'brand': '0 4px 20px -2px rgba(63, 36, 126, 0.08), 0 2px 6px -1px rgba(23, 27, 69, 0.04)',
        'brand-hover': '0 12px 30px -4px rgba(63, 36, 126, 0.16), 0 4px 12px -2px rgba(23, 27, 69, 0.08)',
        'brand-card': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
      },
      borderRadius: {
        'brand': '12px',
      }
    },
  },
  plugins: [],
};
export default config;
