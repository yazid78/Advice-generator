import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      //colors personolized
      colors: {
        background: "hsl(218, 23%, 16%)",
        foreground: "hsl(217, 19%, 24%)",
        neonGreen: "hsl(150, 100%, 66%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
