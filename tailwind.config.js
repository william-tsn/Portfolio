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
    },
  },
  plugins: [],
};

// SI JE DOIS TOUCHER : NE PAS OUBLIER QUE JE SUIS EN ESM (SI CHATGPT DIRE ESM)
