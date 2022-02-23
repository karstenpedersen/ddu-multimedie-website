module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'body': '#fafafa',
        'dark': '#363e48',
        'primary': '#dd6543',
        'secondary': "#e6efc8",
      },
      fontFamily: {
        'display': ['Bebas Neue'],
        'title': ['Poppins'],
        'body': ['Dancing Script']
      }
    },
  },
  plugins: [],
}
