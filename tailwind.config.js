/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      main: ["Josefin Sans", "sans-serif"],
    },
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        desaturatedRed: "hsl(0, 36%, 70%)",
        softRed: "hsl(0, 93%, 68%)",
        darkRed: "hsl(0, 6%, 24%)",
        lightRed: "hsl(0, 100%, 80%)",
        lightPink: "hsl(0, 36%, 70%)",
      },
    },
  },
  plugins: [],
};
