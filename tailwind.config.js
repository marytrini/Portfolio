/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        merienda: ['var(--font-merienda)'],
        pop: ['var(--font-pop)'],
      },
      colors:{
        dark:{
          bg:'#0a0908',
          features:'#22333b',
          text:'#f2f4f3',
          title:'#f43f5e'
        },
        light:{
          bg:'#f2f4f3',
          features: '#e6e8e6',
          secondary_feat: '#FFD4D4',
          text:'#0a0908',
          title:'#f43f5e'
        }
      }
    },
    screens: {
      '2xl': {'max': '1920px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      'xs': {'max': '479px'}
    }
  },
  plugins: [],
}
