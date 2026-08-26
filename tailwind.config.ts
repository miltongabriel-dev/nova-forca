import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-muted": "var(--surface-muted)",
        border: "var(--border)",
        ink: "var(--ink)",
        "ink-muted": "var(--ink-muted)",
        "ink-faint": "var(--ink-faint)",
        accent: {
          DEFAULT: "var(--accent)",
          strong: "var(--accent-strong)",
          soft: "var(--accent-soft)",
          on: "var(--accent-on)",
        },
        belt: {
          white: "var(--belt-white)",
          blue: "var(--belt-blue)",
          purple: "var(--belt-purple)",
          brown: "var(--belt-brown)",
          black: "var(--belt-black)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      boxShadow: {
        soft: "0 1px 2px rgb(var(--shadow-color) / 0.06), 0 8px 24px -12px rgb(var(--shadow-color) / 0.18)",
        lift: "0 2px 8px rgb(var(--shadow-color) / 0.08), 0 16px 32px -16px rgb(var(--shadow-color) / 0.28)",
      },
      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
};

export default config;
