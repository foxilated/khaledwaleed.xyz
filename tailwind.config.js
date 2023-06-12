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
      background: '#111115',
      onBackground: '#ffffff',

      primary: '#67c4f2'
    }
  },
  plugins: []
}
