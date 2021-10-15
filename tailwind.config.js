module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      "dm-serif": ["DM Serif Display", "serif"],
      karla: ["Karla", "sans-serif"]
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
