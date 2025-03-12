/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      borderColor: theme => ({
        DEFAULT: theme('color.gray,300', 'currentColor'),
        'gray':'#8fbc8f',
      }),
      borderColor: theme => ({
        'gray':'#a9a9a9',
      }),
    },
    varients: {
      
    },
    colors:{
     'gray':'#a9a9a9',
     'black':'#000000',
     'seagreen':'#009832',
     'green':'#2e9d17',
     'white':'#fffafa',
     'whitegray':'#ffffff',
    },


  },
  plugins: [],
}

