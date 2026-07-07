import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        plum: {
          50: "#faf1f7",
          100: "#f3ddec",
          200: "#e7bcd9",
          300: "#d68fc0",
          400: "#c163a4",
          500: "#a83f88",
          600: "#8c2c6f",
          700: "#71235a",
          800: "#571b45",
          900: "#3f1332",
          950: "#2a0c21"
        },
        magenta: "#c81e93",
        cream: "#fbf4f8",
        ivory: "#fffafd",
        ink: "#2b1b28",
        muted: "#8a7280",
        line: "#efe0ea"
      },
      fontFamily: {
        display: ["var(--font-display)", ...defaultTheme.fontFamily.serif],
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        soft: "0 18px 50px -24px rgba(87, 27, 69, 0.35)",
        card: "0 10px 40px -20px rgba(87, 27, 69, 0.28)",
        glow: "0 20px 60px -20px rgba(200, 30, 147, 0.4)"
      },
      backgroundImage: {
        "plum-gradient": "linear-gradient(120deg, #71235a 0%, #a83f88 55%, #c81e93 100%)",
        "cream-radial": "radial-gradient(120% 80% at 80% 0%, #fdeaf5 0%, #fbf4f8 45%, #ffffff 100%)"
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "float-slow": "float-slow 7s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out both"
      }
    }
  },
  plugins: []
};

export default config;
