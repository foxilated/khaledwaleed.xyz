/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {},
    colors: {
      background: '#22212C',
      onBackground: '#F8F8F2',

      primary: '#8AFF80'
    }
  },
  plugins: []
}
