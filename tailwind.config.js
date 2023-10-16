/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        topdown: {
          '0%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        
        }
      },
      animation: {
        'spin-slow': 'topdown 0.25s linear forwards',

      }
    },
    colors: {
      'cinder': '#232E35',
      'dark': '#1E1E1E',
      'light': '#FBFBFB',
      'text-light': '#F1F1F1',
      'purple': '#7E74F1',
      'cinder-light': '#656D72',
    },
    fontFamily: {
      plus: ['Plus Jakarta Sans']
    }
  },
  plugins: [],
  darkMode: 'class',
}

