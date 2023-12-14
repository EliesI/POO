/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#EE74DA",
        secondary: "#9856d0",
        ternary: "#51E5FF",
        quaternary: "#403F4C",
        quinary: "#fafbf9",
      },
      fontFamily: {
        montserrat: ["Montserrat", "Arial", "sans-serif"],
        "firas-sans": ["Fira Sans", "serif"],
        "comic-neue": ["Comic Neue", "cursive"],
      },
    },
  },
  plugins: [],
};
