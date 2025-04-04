/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        darkPurple: '#1A0933',
        mediumPurple: '#2D1757',
        lightPurple: '#3E2472',
        neonGreen: '#36F1CD',
        neonBlue: '#3DC5FF',
        darkGray: '#202020',
        mediumGray: '#303030',
        lightGray: '#505050',
      },
    },
  },
  plugins: [],
}