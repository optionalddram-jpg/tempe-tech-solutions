import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tempe: {
          dark: "#0f172a",    // Obsidian Night
          primary: "#f97316", // Sunset Orange
          accent: "#b45309",  // Desert Copper
          light: "#f1f5f9",   // Cool Sand
        }
      },
    },
  },
  plugins: [],
} satisfies Config
