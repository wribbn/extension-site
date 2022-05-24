module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./dist/html/index.html"
  ],
  theme: {
    color: {
      'primary': '#3DC2BB',
      'primary-dark': '#078080',
      'primary-light': '#EBF8F8',
      'soft-light': '#F8F5F2',
      'soft-dark': '#EBE8E5'
    },
    extend: {
      fontFamily: {
        'work-sans': ['"Work Sans"', 'sans-serif']
      }
    },
  },
  plugins: [],
}