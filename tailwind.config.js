/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      height: {
        "header-height": "150px",
        "footer-height": "260px"
      }
    },
  },
  plugins: [],
}

