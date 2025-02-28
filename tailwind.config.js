/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    borderColor:{
      'primary' : 'rgb(85 81 227)',
      'secondary' :'rgb(52, 49, 136)',
      'white' :'rgb (255, 255, 255)'
    }
  },
  plugins: [],
  colors:{
    'my-color':'rgb(52,49,136)',
  }
}

