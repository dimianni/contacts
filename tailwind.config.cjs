/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-grey': '#323232',
        'bg-color': '#151515',
      }
    },
  },
  plugins: [],
}
