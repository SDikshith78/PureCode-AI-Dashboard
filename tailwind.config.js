/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customOrange: {
          DEFAULT: "rgb(245 130 32)",
          light: "#FFA94D", //  light variant
          dark: "#D66900", //  dark variant
        },
        customLightBlue: {
          DEFAULT: "#00794D",
        },
      },
    },
  },
  plugins: [],
};
