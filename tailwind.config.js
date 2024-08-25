/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
    purge: ['./src/*/.js', './public/index.html'],
  },
  plugins: [],
}

