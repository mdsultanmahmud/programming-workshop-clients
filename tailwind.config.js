/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#6dba16",

          "secondary": "#f9e884",

          "accent": "#5fcff4",

          "neutral": "#271F28",

          "base-100": "#EFEFF1",

          "info": "#A6BDE7",

          "success": "#2FE4C3",

          "warning": "#A5820D",

          "error": "#F74A2B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}