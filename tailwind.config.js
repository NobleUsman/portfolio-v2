/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF', // texts
        gray: '#BEB6B6', // links, footer links
        accent: '#75FFE5', // highlights, accents
        'light-blue': '#001432', // body
        'dark-blue': '#000c1e', // navigation
      },
      fontFamily: {
        base: ["DM Sans", "sans-serif"],
      },
      gridTemplateColumns: {
        'grid-cols-centered-content': '12rem auto 12rem',
      },
      backgroundColor: {
        'overlay': 'rgb(173 171 171 / 50%)',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
// Light Blue ( #001432 ) light blue - body
// Dark Blue ( #000c1e ) dark blue - navbar
// // Cyan ( #21e6c1 ) aqua - body icons, headings, logo
// // Gray ( #ffffff8c ) - links
// white ( #ffffff )

// COLOR BLIND CONTRAST OKAY for foreground colors on both backgrounds
// - CYAN ( #75FFE5 )
// - GRAY ( #BEB6B6 )