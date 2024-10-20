/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      screens: {
        mobileLarge: "568px",
        tablet: "990px",
        desktop: "1440px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
        screens: {
          DEFAULT: "100%",
          mobileLarge: "568px",
          tablet: "990px",
          desktop: "1203px",
        },
      },
    },
  },
  plugins: [],
};
