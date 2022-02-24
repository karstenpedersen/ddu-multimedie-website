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
        'body': "var(--color-body)",
        'dark': "var(--color-dark)",
        'primary': 'var(--color-primary)',
        'secondary': "var(--color-secondary)",
      },
      fontFamily: {
        'display': ['Bebas Neue'],
        'title': ['Poppins'],
        'body': ['Dancing Script']
      }
    },
  }
}