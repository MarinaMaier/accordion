import { heroui } from "@heroui/theme";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(accordion|divider).js",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "yellow-brand": "#FFD12F",
        "white-brand": "#ffffff",
      },
    },
    screen: {
      mobile: { max: "479px" },
      tablet: { min: "480px", max: "1279px" },
      desktop: "1280px",
    },
  },
  darkMode: "class",
  plugins: [heroui()],
} satisfies Config;
