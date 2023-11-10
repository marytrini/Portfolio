/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        merienda: ['var(--font-merienda)'],
        pop: ['var(--font-pop)'],
      },
      colors:{
        dark:{
          dark_bg:'#0a0908',
          features:'#22333b',
          text:'#f2f4f3',
          title:'#f43f5e'
        },
        light:{
          light_bg:'#c084fc',
          text:'#86198f',
          title:'#4a044e'
        }
      }
    },
  },
  plugins: [],
}
