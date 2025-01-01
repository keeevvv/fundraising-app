import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cream: "#F2F6D0",
        honeydew: " #D0E1D4",
        pearl: "#D9D2B6",
        desetsand: "#E4BE9E",
        dimgray: "#71697A",
      },
    },
  },
  plugins: [],
} satisfies Config;
