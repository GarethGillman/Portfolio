/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors:{
        accent: '#D65A31',
        accentdark: '#CC5128',

        body: '#EEEDEB',
        bodyalt: '#fff',
        header: '#F7F8F8',
        titles: '#232223',
        text: '#454547',

        darkbody: '#4D4545',
        darkbodyalt: '#564E4E',
        darkheader: '#403A3A',
        darktitles: '#F2F2F3',
        darktext: '#ECECEE',
      }
    },
  },
  plugins: [],
}

