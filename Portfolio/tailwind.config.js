/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom': '8px 100px / 120px 100px',
      },
      zIndex: {
        '999': 999,
      },
    },
  },
  plugins: [],
}

