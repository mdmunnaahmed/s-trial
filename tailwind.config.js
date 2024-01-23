/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./dist/*.{html,js}"],
  darkMode: "media",
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    container: {
      center: true,
      padding: "15px",
    },
    fontFamily: {
      heading: ["Poppins", ...defaultTheme.fontFamily.sans],
      body: ["Poppins", ...defaultTheme.fontFamily.mono],
    },
    fontSize: {
      xs: "12px",
      sm: "13px",
      md: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "22px",
      "3xl": "28px",
    },
    colors: {
      primary: "#25478B",
      title: "#202527",
      titleTwo: "#BAD5EE",
      body: "#424648",
      pink: "#EB997F",
      gray: {
        default: "#F2F3F6",
        light: "#F1F5F9",
        medium: "#9AA7D7",
      },
      white: "#fff",
      dark: "#000",
      transparent: "#ffffff00",
    },
    extend: {},
  },
  plugins: [],
};
