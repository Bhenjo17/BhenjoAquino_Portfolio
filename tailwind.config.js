/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',            // ← enable toggling with a `.dark` class
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",   // ← make sure Tailwind scans your React code
    // other paths you need…
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
