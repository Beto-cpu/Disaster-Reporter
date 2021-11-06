module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'natural-green': '#5AB32F',
        'suspicious-yellow': '#F8A709',
        'scary-gray': '#272727',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}