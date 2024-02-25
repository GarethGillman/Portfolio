/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        accent: '#D65A31',
        darkbg: '#313131',
        darkheaderbg: '#414141',
        darkmenubg: '#525252',
      }
    },
  },
  plugins: [],
}

