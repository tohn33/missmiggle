/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html"],
  theme: {
    extend: { 
       colors:{
      bg:"#1399FC",
      br:"#0375c1",
      pr:"#4FA8FF",
      dark:"#000000"

  },
    fontFamily:{
      lato:['"Lato"',...defaultTheme.fontFamily.sans],
    },
     screens:{
      'xs':"300px",
      'sm': '640px',
      'md':"768px",
      'lg':"1024px",
      'xl':"1280px",
    }},
  },
  plugins: [],
}

