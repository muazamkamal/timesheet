const production = !process.env.ROLLUP_WATCH;
module.exports = {
  mode: 'jit',
  content: ['./public/index.html', './src/**/*.svelte'],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [],
  purge: {
    content: ['./src/**/*.svelte'],
    enabled: production, // disable purge in dev
  },
};
