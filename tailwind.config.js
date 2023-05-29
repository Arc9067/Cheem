/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#E3C270",
        secondary: "#E4B051",
        assets: "#FBEECA",
      },
      fontFamily: {
        Changa: ["Changa One", "sans-serif"],
        Coolvetica: ["Coolvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
