const package = require("./package.json");

module.exports = (ctx) => ({
  plugins: {
    cssnano: ctx.env === "production" ? { preset: "default" } : false,
    "postcss-banner": {
      banner: `${package.name} v${package.version} | ${package.license} License | github.com/hiro0218/shokika.css/`,
      inline: true,
      important: true,
    },
  },
});
