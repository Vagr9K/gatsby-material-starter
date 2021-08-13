module.exports = (userConfig) => ({
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-theme-advanced",
      options: userConfig,
    },
  ],
});
