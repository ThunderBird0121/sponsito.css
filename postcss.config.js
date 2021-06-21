module.exports = (ctx) => ({
  plugins: {
    cssnano: ctx.env === "production" ? { preset: "default" } : false,
  },
});
