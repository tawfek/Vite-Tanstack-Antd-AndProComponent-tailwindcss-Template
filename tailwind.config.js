/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables dark mode using the 'class' strategy
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Specifies the paths to all of your template files
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-rtl")], // Adds RTL support
};
