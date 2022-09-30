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
      color: {},
    },
  },
  plugins: [],
};
