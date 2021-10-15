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
    },
    colors: {
      primary: {
        darkViolet: "hsl(256, 26%, 20%)",
        grayBlue: "hsl(216, 30%, 68%)"
      },
      neutral: {
        veryDarkViolet: "hsl(270, 9%, 17%)",
        darkGrayBlue: "hsl(273, 4%, 51%)",
        veryLightgray: "hsl(0, 0%, 98%)"
      },
      white: "white"
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
