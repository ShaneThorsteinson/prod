module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#4C4C4D',
          200: '#3C3C41',
          400: '#2B2B31',
          500: '#232326',
          900: '#1B1B1F'
        },
        primary: {
          100: '#E56767',
          500: '#C63535',
          700: '#BA2B2B',
          900: '#A11F1F'
        },
        success: {
          100: '#46F5D6',
          500: '#29C2A7',
          700: '#1BAC92',
          900: '#12947C'
        },
        warning: {
          100: '#FFC38A',
          500: '#FFA24B',
          700: '#E0842E',
          900: '#B96313'
        },
        gray: {
          500: '#CFCFD2',
          700: '#808087',
          900: '#5F5F65'
        },
        twitter: '#2AA3EF',
        gold: '#FFA91E'
      },
      backgroundColor: {
        twitter: '#00ACED'
      },
      spacing: {
        4.5: '4.5rem'
      },
      fontFamily: {
        roboto: ['Roboto']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
