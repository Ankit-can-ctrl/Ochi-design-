/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Founder: ["Yanone Kaffeesatz", "sans-serif"],
        Neue: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
