/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brown: "#292929",
        dPurple: "#BB86FC",
        dPurpleH: "#9d54f7",
        dGrey: "#1b1b1d",
        overlay: "#1e1e1e",
        dWhite: "#e3e3e3",
      },
    },
    fontFamily: {
      sans: ["Kumbh Sans"],
    },
  },
  plugins: [],
};
