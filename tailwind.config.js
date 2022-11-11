const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,html}',
    './components/**/*.{js,ts,jsx,tsx,html}',
  ],
  safelist: [
    'splide__arrow--next',
    'splide__arrow',
    'splide__arrow--prev',
    'splide__arrow svg',
    'animate-bounce',
    'splide__arrow--next2',
    'splide__arrow--prev2',
    'splide__pagination__page',
    'splide__pagination',
    'pagin',
    'page',
    'is-active',
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
      keyframes: {
        slideDown: {
          '0%': {'margin-top': '0px', opacity: '0'},
          '50%': {'margin-top': '20px', opacity: '1'},
          '100%': {'margin-top': '40px', opacity: '0'},
        },
        slideHorizontal: {
          '0%': {'margin-left': '0px', opacity: '0'},
          '50%': {'margin-left': '192px', opacity: '1'},
          '100%': {'margin-left': '384px', opacity: '0'},
        },
      },
      animation: {
        slideDown: 'slideDown 3s ease-in-out infinite',
        slideHorizontal: 'slideHorizontal 3s ease-in-out 3s infinite',
      },
      fontFamily: {
        anton: ['Anton', ...defaultTheme.fontFamily.sans],
        inter: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
      },
      backgroundImage: {
        net: "url('/backgroundImage/net-hero.svg')",
      },
      boxShadow: {
        innerlg: 'inset 0 20px 16px 0 rgb(0 0 0 / 0.05);',
      },
      textFillColor: (theme) => theme('borderColor'),
      textStrokeColor: (theme) => theme('borderColor'),
      textStrokeWidth: (theme) => theme('borderWidth'),
      paintOrder: {
        fsm: {paintOrder: 'fill stroke markers'},
        fms: {paintOrder: 'fill markers stroke'},
        sfm: {paintOrder: 'stroke fill markers'},
        smf: {paintOrder: 'stroke markers fill'},
        mfs: {paintOrder: 'markers fill stroke'},
        msf: {paintOrder: 'markers stroke fill'},
      },
    },
  },
  variants: {
    // all the following default to ['responsive']
    textFillColor: ['responsive'],
    textStrokeColor: ['responsive'],
    textStrokeWidth: ['responsive'],
    paintOrder: ['responsive'],
  },
  plugins: [
    require('tailwindcss-text-fill-stroke'), // no options to configure
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/typography'),
  ],
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
};
