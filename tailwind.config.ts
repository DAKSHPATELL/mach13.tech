import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

/**
 * "Parchemin & Oxblood" — three colours, nothing else.
 * Parchment (field) · Oxblood (brand) · Antique champagne (metal), plus near-black
 * jewel-box darks. Token names are kept from the old plum palette so existing
 * class names keep working; only the values changed.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Oxblood scale (formerly "plum")
        plum: {
          50: "#faf2ef",
          100: "#f2e0da",
          200: "#e3c2b9",
          300: "#cf9a90",
          400: "#b26f6b",
          500: "#93424f",
          600: "#762f45",
          700: "#5a1e3c", // brand primary
          800: "#46172f",
          900: "#331024", // headings
          950: "#1e0915"
        },
        // Near-black jewel-box darks
        noir: { DEFAULT: "#14090f", deep: "#0e0609", 800: "#1f1018" },
        // Warm fields
        cream: "#f6f0e6", // parchment
        ivoire: "#fffdf8",
        blush: "#f0e6d5",
        // Ink + text
        ink: "#2b1620",
        muted: "#6b5560", // AA on parchment
        // Antique champagne (the only metal)
        gold: {
          DEFAULT: "#b8985f",
          champagne: "#e2cfa4",
          antique: "#8a6a34",
          ink: "#7a5b1e", // readable gold text (AA on parchment)
          hair: "#ddc79b"
        },
        line: "#e8ddcb",
        // Retained tokens, brought on-palette (functional use only)
        magenta: "#5a1e3c",
        rani: "#5a1e3c",
        emerald: "#4f6b5c" // desaturated sage — only the "open now" dot
      },
      fontFamily: {
        display: ["var(--font-display)", ...defaultTheme.fontFamily.serif],
        caps: ["var(--font-caps)", ...defaultTheme.fontFamily.serif],
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        soft: "0 18px 50px -24px rgba(30, 9, 21, 0.35)",
        card: "0 12px 44px -22px rgba(30, 9, 21, 0.26)",
        "gold-glow": "0 24px 70px -24px rgba(184, 152, 95, 0.42)",
        glow: "0 20px 60px -20px rgba(90, 30, 60, 0.38)"
      },
      backgroundImage: {
        "plum-gradient": "linear-gradient(120deg, #46172f 0%, #5a1e3c 48%, #762f45 100%)",
        "gold-foil":
          "linear-gradient(100deg, #8a6a34 0%, #b8985f 22%, #e2cfa4 48%, #b8985f 74%, #8a6a34 100%)",
        "cream-radial":
          "radial-gradient(120% 80% at 82% 0%, #f9f2e2 0%, #f6f0e6 45%, #fffdf8 100%)",
        "aubergine-radial":
          "radial-gradient(120% 95% at 50% 0%, #241320 0%, #14090f 58%, #0e0609 100%)"
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
