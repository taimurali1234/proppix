/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        primary: "#41C8CB",   // blue
        secondary: "#FFFFFF", // purple
        neutral: "#717577",   // gray
        bodyText: "#383838",   // gray
        gradient:""
      },
      
    },
  },
  plugins: [],
};
