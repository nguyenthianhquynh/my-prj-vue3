/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        '50px': '50px',
      },
      margin: {
        '50px': '50px',
      },
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}

