/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',   //https://tailwindcss.com/docs/upgrade-guide#migrating-to-the-jit-engine
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
