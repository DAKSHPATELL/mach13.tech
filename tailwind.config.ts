import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8F9FB",
        foreground: "#0B0B0C",
        divider: "#EDEDED",
        steel: "#0A2540",
        signal: "#D70015"
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        subtle: "0 20px 60px -40px rgba(10, 37, 64, 0.4)"
      }
    }
  },
  plugins: [typography]
};

export default config;
