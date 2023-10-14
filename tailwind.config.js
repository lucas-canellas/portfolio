/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'cinder': '#232E35',
      'dark': '#1E1E1E',
      'light': '#FBFBFB',
      'text-light': '#F1F1F1',
      'purple': '#7E74F1'
    },
    fontFamily: {
      plus: ['Plus Jakarta Sans']
    }
  },
  plugins: [],
  darkMode: 'class',
}

