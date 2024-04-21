/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Founder: ["Teko", "sans - serif"],
        Neue: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
