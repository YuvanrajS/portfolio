/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(85, 81, 227)",
        secondary: "rgb(52, 49, 136)",
      },
    },
  },
  plugins: [],
};


