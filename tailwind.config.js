/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      animation: {
        'slide-in': 'slideIn 0.8s ease-out forwards',
        'slide-in-up': 'slideInUp 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'slide-in-down': 'slideInDown 0.8s ease-out forwards',
        'falling': 'falling 1s ease-out forwards',
        'split-effect': 'split 0.6s ease-out forwards',
      },
      keyframes: {
        slideIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        falling: {
          '0%': { opacity: '0', transform: 'translateY(-100px) rotate(-10deg)' },
          '100%': { opacity: '1', transform: 'translateY(0) rotate(0)' },
        },
        split: {
          '0%': {
            opacity: '0',
            transform: 'scaleY(0.2) translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'scaleY(1) translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
