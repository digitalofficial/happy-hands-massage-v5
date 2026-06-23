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
        soft: "#FAFAF8",
        sage: "#6B8E6B",
        blush: "#E8B4B8",
        charcoal: "#2D3436",
      },
    },
  },
  plugins: [],
};

export default config;
