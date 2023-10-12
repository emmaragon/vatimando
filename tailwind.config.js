/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  purge: {
    enabled: true,
    content: ["./src/**/*.html", "./src/**/*.scss"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--light-primary-500)',
        accent: 'var(--light-accent-500)'
      },
      width: {
        fit: "fit-content",
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus'],
    },
  },
  plugins: [],
};
