/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./stories/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    lineHeight: {
      default: "1.25",
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "2",
      relaxed: "1.5",
      loose: "2",
      3: ".75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
    },
    screens: {
      sm: "480px",
      md: "960px",
      lg: "1600px",
      xl: "2400px",
    },
    borderRadius: {
      sm: "0.125rem",
      DEFAULT: "0.125rem",
      md: "0.35rem",
      lg: "1rem",
      full: "9999px",
    },
    colors: {
      white: "#FFFFFF",
      primary: "#006d77",
      primary_light: "#83c5be",
      secondary: "#FFFFFF",
      accent: "#5D7B51",
      black: "#000000",
      error: "#DB4C4C",
      warning: "#E07A3B",
      sucess: "#5D7B51",

      frame: "#fafafa",
      inner: "#f2f2f2",

      transparent: "hsl(0,0%,0%,0)",
    },
    fontFamily: {
      plex: ["IBM Plex Serif, serif"],
      exo: ["Exo", "sans-serif"],
    },
    extend: {},
    variants: {
      animation: ["motion-safe"],
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "2rem" }],
      xl: ["1.25rem", { lineHeight: "2rem" }],
      "2xl": ["1.5rem", { lineHeight: "1.25" }],
      "3xl": ["1.875rem", { lineHeight: "1.25" }],
      "4xl": ["2.25rem", { lineHeight: "1.25" }],
      "5xl": ["3rem", { lineHeight: "1.25" }],
      "6xl": ["3.75rem", { lineHeight: "1.25" }],
      "7xl": ["4.5rem", { lineHeight: "1.25" }],
      "8xl": ["6rem", { lineHeight: "1.25" }],
      "9xl": ["8rem", { lineHeight: "1.25" }],
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards ",
        pop: "pop 0.3s ease-in",
        fadeInLeft: "fadeInLeft 0.5s ease-in-out forwards ",
        fadeInRight: "fadeInRight 0.5s ease-in-out forwards ",
        fadeInUp: "fadeInUp 0.5s ease-in-out forwards ",
        fadeInDown: "fadeDown 0.5s ease-in-out forwards ",
        highlight: "highlight 3s ease-in-out infinite",
        singleBounce: "singleBounce 1s ease-in-out infinite",
        pulseButton: "pulseButton 3s cubic-bezier(.46,.03,.52,.96) infinite",
        zoomIn: "zoomIn 0.5s ease-in-out forwards",
      },
      boxShadow: {
        left: "-10px 0px 10px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      },
      keyframes: {
        highlight: {
          "0%": { opacity: 1, transform: "rotateZ(-15deg)" },
          "50%": { opacity: 1, transform: "rotateZ(15deg)" },
          "100%": { opacity: 1, transform: "rotateZ(-15deg)" },
        },
        zoomIn: {
          "0%": { opacity: 0, transform: "scale(1.05)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
        pulseButton: {
          "0%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "translateY(0px)", transform: "scale(1.1)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        singleBounce: {
          "0%": { opacity: 1, transform: "translateY(0px)" },
          "50%": { opacity: 1, transform: "translateY(3px)" },
        },
        fadeInLeft: {
          "0%": { opacity: 0, transform: "translateX(-50px)" },
          "100%": { opacity: 1 },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "100%": { opacity: 1 },
        },
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(23px)" },
          "100%": { opacity: 1 },
        },
        fadeDown: {
          "0%": { opacity: 0, transform: "translateY(-23px)" },
          "100%": { opacity: 1 },
        },
        pop: {
          "0%": { transform: "scale(1)" },
          "10%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
