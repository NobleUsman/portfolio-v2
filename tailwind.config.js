/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF', // texts
        gray: '#BEB6B6', // links, footer links
        accent: '#75FFE5', // highlights, accents
        'light-blue': '#001432', // main, selection hightlight text
        'dark-blue': '#000c1e', // navigation
      },
      fontFamily: {
        base: ["DM Sans", "sans-serif"],
      },
      gridTemplateColumns: {
        'grid-cols-centered-content': '12rem auto 12rem',
      },
      keyframes: {
        determinateProgress: {
          // @keyframes determinateAnimation {
          //   0% {
          //     transform: translateX(-100%) scaleX(0);
          //   }
          //   100% {
          //     transform: translateX(0) scaleX(1);
          //   }
          // }
          '0%': {
            transform: 'translateX(-100%) scaleX(0)',
          },
          '100%': {
            transform: 'translateX(0) scaleX(1)'
          },
        },
        indeterminateProgress: {
          '0%': {
            transform: 'translateX(0) scaleX(0)',
          },
          '40%': {
            transform: 'translateX(0) scaleX(0.4)',
          },
          '100%': {
            transform: 'translateX(100%) scaleX(0.5)'
          },
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        fadeOut: {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
        fadeOutRight: {
          '0%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(50px)',
          },
        },
      },
      animation: {
        // animation-name, animation-duration, animation-timing-function, animation-iteration-count?,
        // USAGE in file without 'animation' config : animate-[determinateProgress_2s_ease-out_1]
        // USAGE in file with 'animation' config : animate-determinateProgress
        determinateProgress: "determinateProgress 1.3s ease-out 1",
        inDeterminateProgress: "indeterminateProgress 1s linear infinite",
        fadeInLeft: "fadeInLeft 1s ease-in-out 1",
        fadeOutRight: "fadeOutRight 1s ease-in-out 1",
        fadeIn: "fadeIn 1s ease-in-out 1",
        fadeOut: "fadeOut 1s ease-in-out 1",
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