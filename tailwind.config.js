/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      // container: {
      //   padding: {
      //     DEFAULT: "1rem",
      //   },

      // },
      container: {
        center: true,
        screens: {
          lg: "798px",
          xl: "798px",
        },
        padding: {
          DEFAULT: "1rem",
          // sm: "2rem",
          // lg: "4rem",
          // xl: "5rem",
          // "2xl": "6rem",
        },
        colors: {
          cyan: {
            800: "#08979D",
          },
        },
      },
    },
  },
  plugins: [],
};
