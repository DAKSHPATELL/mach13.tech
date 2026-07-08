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
        // Jewel-box darks
        noir: { DEFAULT: "#1e0716", deep: "#160510", 800: "#2a0e20" },
        // Warm fields
        cream: "#fbf4f8",
        ivoire: "#fff8f0",
        blush: "#f3ddec",
        // Ink + text
        ink: "#2b1b28",
        muted: "#6b5262", // darkened for WCAG AA on cream
        // Accents
        magenta: "#c81e93", // "rani" — reserve for large/bold text & glints
        rani: "#c81e93",
        emerald: "#0f6b5f",
        saffron: { DEFAULT: "#e1922b", ink: "#b4661a" },
        // Gold system — decorative gradient vs readable ink
        gold: {
          DEFAULT: "#c9a24b",
          champagne: "#f6e5b4",
          antique: "#9a7526",
          ink: "#7a5b1e", // readable gold text (AA on light)
          hair: "#e7cfa0"
        },
        line: "#efe0ea"
      },
      fontFamily: {
        display: ["var(--font-display)", ...defaultTheme.fontFamily.serif],
        caps: ["var(--font-caps)", ...defaultTheme.fontFamily.serif],
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        soft: "0 18px 50px -24px rgba(42, 12, 33, 0.35)",
        card: "0 12px 44px -22px rgba(42, 12, 33, 0.30)",
        "gold-glow": "0 24px 70px -24px rgba(201, 162, 75, 0.45)",
        glow: "0 20px 60px -20px rgba(200, 30, 147, 0.4)"
      },
      backgroundImage: {
        "plum-gradient": "linear-gradient(120deg, #71235a 0%, #a83f88 55%, #c81e93 100%)",
        "gold-foil":
          "linear-gradient(100deg, #9a7526 0%, #c9a24b 22%, #f6e5b4 48%, #c9a24b 74%, #9a7526 100%)",
        "cream-radial":
          "radial-gradient(120% 80% at 82% 0%, #fdeaf5 0%, #fbf4f8 45%, #ffffff 100%)",
        "aubergine-radial":
          "radial-gradient(120% 95% at 50% 0%, #37122b 0%, #1e0716 58%, #160510 100%)"
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-160% 0" },
          "100%": { backgroundPosition: "160% 0" }
        },
        "rotate-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" }
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" }
        },
        "float-dust": {
          "0%": { transform: "translateY(0) translateX(0)", opacity: "0" },
          "12%": { opacity: "0.9" },
          "88%": { opacity: "0.9" },
          "100%": { transform: "translateY(-70px) translateX(14px)", opacity: "0" }
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "diya-pulse": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "0.9" }
        }
      },
      animation: {
        "shimmer-once": "shimmer 2.6s cubic-bezier(0.22,1,0.36,1) 0.35s both",
        "rotate-slow": "rotate-slow 120s linear infinite",
        "float-slow": "float-slow 7s ease-in-out infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "diya-pulse": "diya-pulse 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
