/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      leftColor: '#96deda',
      rightColor: '#fbed96',
      black: '#000000',
      white: '#ffffff',
      chineseWhite: '#e0e0e0',
      transparent: 'transparent',
      darkGray: '#4A4A4A',
      lightGray: '#BDBDBD',
      darkBlue: '#254F6E',
      hoverColor: '#f14f71',

    },
    // additional small screen breakpoints
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    extend: {
      animation: {
        'bounce-slow': 'bounce 1s',
      },
      // additional transition options
      transitionProperty: {
        width: 'width',
      },
      // additional large screen breakpoints
      screens: {
        '831px': '831px',
      },
    },
    // defaults to these values for text-stroke plugin
    textFillColor: (theme) => theme('borderColor'),
    textStrokeColor: (theme) => theme('borderColor'),
    textStrokeWidth: (theme) => theme('borderWidth'),
    paintOrder: {
      fsm: { paintOrder: 'fill stroke markers' },
      fms: { paintOrder: 'fill markers stroke' },
      sfm: { paintOrder: 'stroke fill markers' },
      smf: { paintOrder: 'stroke markers fill' },
      mfs: { paintOrder: 'markers fill stroke' },
      msf: { paintOrder: 'markers stroke fill' },
    },
  },

  // variants: {
  //   textFillColor: ['responsive'],
  //   textStrokeColor: ['responsive'],
  //   textStrokeWidth: ['responsive'],
  //   paintOrder: ['responsive'],
  // },

  plugins: [
    // plugin for bg gradient degree
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-gradient': (angle) => ({
            'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          // values from config and defaults you wish to use most
          values: Object.assign(
            theme('bgGradientDeg', {}), // name of config key. Must be unique
            {
              10: '10deg', // bg-gradient-10
              15: '15deg',
              20: '20deg',
              25: '25deg',
              30: '30deg',
              45: '45deg',
              60: '60deg',
              90: '90deg',
              135: '135deg',
              155: '155deg',
            }
          ),
        }
      );
    }),
    // plugin for text-stroke
    require('tailwindcss-text-fill-stroke')(),
  ],
};
