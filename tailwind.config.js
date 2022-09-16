const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      cyan: "#2e7B8c",
      sky: "#30B1BF",
      blue: "#2EF2F2",
      yellow: "#F2AF5C",
      gray: "#F2F2F2",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1200px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  extend: {
    fontFamily: {
      sans: ["Poppins", "sans-serif", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      "4xl": "2.5rem",
      readTitle: "2.3rem",
    },
    colors: {
      primary: "#2e7B8c",
      sky: "#30B1BF",
      blue: "#2EF2F2",
      yellow: "#F2AF5C",
      gray: "#F2F2F2",
    },
  },
  plugins: [],
};
