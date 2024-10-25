/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  presets: [require("@medusajs/ui-preset")],
  content: [
    "./index.html",
    "./src/**/*.{html,ts,tsx}",
    "./node_modules/@medusajs/ui/dist/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
