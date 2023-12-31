/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'buttonUp': '#5CA09B',
        'buttonDown': '#FF6218',
      },
      fontSize: {
        '10xl': '15vw',
        'h1': '2.3rem',
      },
      maxWidth: {
        'dcopMW': '2088px',
      },
      maxHeight: {
        'dcopMH': '1174px',
      },
      colors: {
        'black': '#000000',
        'dcopBrightOrange': '#FD881E',
        'dcopDarkOrange': '#FF6218',
        'dcopBrightBlue': '#5CA09B',
        'dcopDarkBlue': '#0C4A4D',
      },
      width: {
        'spanVideo': '30rem',
        'dcopVideo': '60rem',
      },
      animation: {
        'pulseSine-1': 'pulseSine 1s infinite',
        'pulseSine-2': 'pulseSine 2s infinite',
        'pulseSine-3': 'pulseSine 3s infinite',
        'pulseSine-4': 'pulseSine 4s infinite',
        'pulseSine-5': 'pulseSine 5s infinite',
      },
      keyframes: {
        pulseSine: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        }
      },
      blur: {
        'super': '100px',
      }
    },
  },
  plugins: [],
}
