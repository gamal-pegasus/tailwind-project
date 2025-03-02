/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage:{
        mine:"linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('./assets/images/erik-mclean-tzzWuCl_onM-unsplash.jpg')"
      },
      fontFamily:{
        fontGoogle:'"Caveat", serif'
      },
      
    },
    container: {
      padding: {
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
  },
   
  },
  darkMode: 'selector',
  plugins: [],
}

