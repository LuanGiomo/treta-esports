/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      secondary: ['Inter', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        'custom': 'inset 0 -1px 0 0',
      }
    },
  },
  plugins: [],
}

