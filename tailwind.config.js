/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    
    screens: {
      '2xl' : { 'max': '1536px' },
      'xl' : { 'max' : '1289px' },
      'lg' : { 'max' : '1034px' },
      'md' : { 'max' : '768px' },
      'sm' : { 'max' : '640px'},
     }
    },
  plugins: [],
}

