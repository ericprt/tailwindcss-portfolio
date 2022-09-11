/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primaryA: "#3b7197",
        primaryB: "#4a8db7",
        secondaryA: "#74bde0",
        secondaryB: "#a1e1fa",
        dark: "#0f172a",
        grey: "#334165",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
