module.exports = (userConfig) => ({
  plugins: [
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["300", "400", "500", "700"],
            },
            {
              family: "Roboto Mono",
              variants: ["400"],
            },
          ],
        },
      },
    },
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-theme-advanced",
      options: userConfig,
    },
  ],
});
