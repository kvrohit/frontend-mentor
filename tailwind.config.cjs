/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Lexend Deca", "Overpass", "Montserrat", "sans-serif"],
      serif: ["Big Shoulders Display", "Fraunces", "serif"],
    },
    extend: {
      colors: {
        darkCyan: "hsl(158, 36%, 37%)",
        darkerCyan: "hsl(157, 44%, 17%)",
        cream: "hsl(30, 38%, 92%)",
        veryDarkBlue: "hsl(212, 21%, 14%)",
        darkGrayishBlue: "hsl(228, 12%, 48%)",
        ratingLightGray: "hsl(217, 12%, 63%)",
        ratingMediumGray: "hsl(216, 12%, 54%)",
        ratingDarkBlue: "hsl(213, 19%, 18%)",
        ratingVeryDarkBlue: "hsl(216, 12%, 8%)",
        ratingOrange: "hsl(25, 97%, 53%)",
        cardBrightOrange: "hsl(31, 77%, 52%)",
        cardDarkCyan: "hsl(184, 100%, 22%)",
        cardVeryDarkCyan: "hsl(179, 100%, 13%)",
        cardVeryLightGray: "hsl(0, 0%, 95%)",
      },
    },
  },
  plugins: [],
};
