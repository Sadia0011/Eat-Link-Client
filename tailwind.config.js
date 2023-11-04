/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        BrygadaFamily: 'Brygada 1918'
      }
    },
  },
  plugins: [require("daisyui")],
}