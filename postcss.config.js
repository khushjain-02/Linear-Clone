// postcss.config.js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    // autoprefixer: {},    ← you can add this back if you really need extra prefixing, but usually not necessary anymore
  },
}