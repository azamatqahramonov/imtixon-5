/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      screens: {
        tablet: "771px",
        mobileLarge: "568px",
        desktop: "1203px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
        screens: {
          DEFAULT: "100%",
          mobileLarge: "472px",
          tablet: "990px",
          desktop: "1440px",
        },
      },
    },
  },
  plugins: [],
};
