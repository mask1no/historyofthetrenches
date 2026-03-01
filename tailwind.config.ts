import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        fg: "var(--fg)",
        foreground: "var(--fg)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted)",
        card: "var(--card)",
        "card-alt": "var(--card-alt)",
        border: "var(--border)",
        "border-subtle": "var(--border-subtle)",
        accentGold: "var(--accentGold)",
        accentRed: "var(--accentRed)",
        accentGreen: "var(--accentGreen)"
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"]
      },
      boxShadow: {
        subtle: "0 6px 20px rgba(0,0,0,0.06)"
      },
      borderRadius: {
        xl: "16px",
        "2xl": "18px"
      }
    }
  },
  plugins: []
};

export default config;

