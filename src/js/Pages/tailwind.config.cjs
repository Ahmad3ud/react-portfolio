/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      h2: ""
    },
  },
  plugins: [

     require('tailwind-scrollbar') 
  ],
  darkMode: "class",
}
