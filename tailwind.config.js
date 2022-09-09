/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      padding: {
        "2/3": "66.666667%",
        "1/3": "33.333333%",
      },
    },
  },
  plugins: [],
};
