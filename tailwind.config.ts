import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: "#cfc3b7",            // Beige/taupe utama
          bgDark: "#beb1a4",        // Shade gelap untuk gradasi
          cardDark: "#3e3b3a",      // Charcoal untuk card 'WHO AM I'
          cardLight: "#ded5cc",     // Sand untuk card konten
          cardMuted: "#e7e0d8",     // Border / accent terang
          textDark: "#222120",      // Warna teks judul
          textMuted: "#66615b",     // Subteks deskripsi
        },
      },
      fontFamily: {
        headline: ["var(--font-headline)", "sans-serif"],    // Oswald / Bebas Neue
        script: ["var(--font-script)", "cursive"],            // Caveat (Jade's)
        sans: ["var(--font-sans)", "sans-serif"],             // Inter
      },
    },
  },
  plugins: [],
};

export default config;