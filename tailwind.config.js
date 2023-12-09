/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#00A79D",
        "headingcolor": "#172554",
        "bgShade": "#F5FCFF",
        "dribble": "#E62872",
        "body": "#737373",
      }
    },
  },
  plugins: [],
}

