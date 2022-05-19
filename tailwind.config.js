module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'test': "url('http://image.tmdb.org/t/p/original/gG9fTyDL03fiKnOpf2tr01sncnt.jpg')",
      }
    },
  },
  plugins: [
    require('tailwindcss-labeled-groups')(['custom', '1', /* RENAME ME! */]),
    require('tailwind-scrollbar'),
  ],
}
