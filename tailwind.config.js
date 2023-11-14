/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        orange:'#e58a4a',
        gold:'#c48c48',
        cgreen:'#205d72',
        cborder:'#458b95'
      }
    },
    screens:{
      'xs':'576px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    }
  },
  plugins: [],
}