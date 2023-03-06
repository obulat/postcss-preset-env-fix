module.exports = {
  content: ['pages/index.vue'],
  theme: {
    colors: {
      // Brand
      yellow: '#ffe033',
      black: '#000000',
      white: 'white',
    },
    spacing: {
      // Constants
      '0.5px': '0.5px',
      px: '1px',
      '1.5px': '1.5px',
      ch: '1ch',
      ex: '1ex',
      half: '50%',
      full: '100%',

      0: '0',
      5: '1.25rem',

    },
  },
  plugins: [require('tailwindcss-rtl')],
};
