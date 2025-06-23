export default {
  plugins: {
    "@tailwindcss/postcss": {},  // <— use the string key so PostCSS loads the plugin by name
    "autoprefixer": {},           // you can also leave this as require/import, but the string form works with ESM too
  },
}
