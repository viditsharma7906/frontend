/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add all JavaScript and TypeScript file extensions
    "./public/index.html",         // Ensure Tailwind scans your HTML file in the public folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
