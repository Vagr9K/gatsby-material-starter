const GatsbyThemeAdvanced = jest.requireActual("gatsby-theme-advanced");

jest.mock("gatsby-theme-advanced/src/config/useConfig", () => {
  const configFixture = jest.requireActual("../test/fixtures/config").default;
  return jest.fn().mockReturnValue(configFixture);
});

module.exports = {
  ...GatsbyThemeAdvanced,
};
