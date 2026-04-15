/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0a0e1a",
          800: "#0f1422",
          700: "#1a1f2e",
          600: "#242a3d",
          500: "#2e3550",
        },
        gold: {
          500: "#d4a853",
          600: "#c4944a",
          700: "#a57d3c",
          400: "#e0bc74",
          300: "#ecd29d",
        },
        cream: {
          100: "#f5f1e8",
          200: "#e8e2d3",
        },
      },
      fontFamily: {
        serif: ["'DM Serif Display'", "Georgia", "serif"],
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
