/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        accent: "#e4b702",
      },
      fontFamily: {
        brand: ["Belanosima", "sans-serif"],
        plain: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
