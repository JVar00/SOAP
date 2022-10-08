/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./layouts/**/*.jsx",
    "./components/**/*.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        18: "10rem",
      },
      colors: {
        red: {
          600: "#EB2234",
        },
      },
    },
  },
  plugins: [],
};
