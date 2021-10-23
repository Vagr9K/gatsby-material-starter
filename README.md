<div align="center" style="margin-bottom:30px">
    <a href='https://github.com/vagr9k/gatsby-material-starter/blob/master/LICENSE'>
    <img src="https://img.shields.io/github/license/vagr9k/gatsby-material-starter.svg" alt="Logo" />
    </a>
    <a href='https://github.com/vagr9k/gatsby-material-starter'>
    <img src="https://img.shields.io/github/v/tag/Vagr9K/gatsby-material-starter" alt="Logo" />
    </a>
        <a href='https://github.com/vagr9k/gatsby-material-starter/stargazers'>
    <img src="https://img.shields.io/github/stars/Vagr9K/gatsby-material-starter" alt="Logo" />
    </a>
        <a href="https://twitter.com/intent/tweet?text=A%20cool%20%40gatsbyjs%20starter%3A&url=https%3A%2F%2Fgithub.com%2FVagr9K%2Fgatsby-material-starter">
    <img src="https://img.shields.io/twitter/url/https/github.com/vagr9k/gatsby-material-starter.svg?style=social" alt="Logo" />
    </a>
</div>

<div align="center"  style="margin-bottom:30px">
    <img src="docs/logos/logo.png" alt="Logo" width='400px' height='400px'/>
</div>
<div align="center"  style="margin-bottom:30px">
<img src="https://badgen.net/badge/Built With/TypeScript/blue" alt="Powered by TypeScript" />
<a href='https://coveralls.io/github/Vagr9K/gatsby-material-starter?branch=master'><img src='https://coveralls.io/repos/github/Vagr9K/gatsby-material-starter/badge.svg?branch=master' alt='Coverage Status' /></a>
<img href="https://gatsby-theme-material.netlify.app/"><img src="https://api.netlify.com/api/v1/badges/3be71899-cdb2-4b37-a1d2-e48acde5a706/deploy-status" alt="Material Demo"/></a>
</div>


<div align="center"  style="margin-bottom:30px">
<img href="https://open.vscode.dev/vagr9k/gatsby-material-starter"><img src="https://open.vscode.dev/badges/open-in-vscode.svg"/></a>
</div>

# Gatsby Material Starter

A [Material Design](https://material.io/design) oriented blog starter for [GatsbyJS](https://github.com/gatsbyjs/gatsby/) equipped with advanced features such as SEO, image optimization, PWA capabilities and infinite scrolling feeds.

This starter aims to provide a minimal base for building advanced GatsbyJS powered websites by using the latest technologies to simplify your process.

Starter supports both [TypeScript](https://www.typescriptlang.org/) and JavaScript, comes with [Jest](https://jestjs.io/) and [Cypress](https://www.cypress.io/) configurations and allows you to write Unit/Integration/E2E tests out of the box.

The starter uses [`gatsby-theme-advanced`](https://www.npmjs.com/package/gatsby-theme-advanced) under the hood and is based on the [Gatsby Advanced Starter](https://github.com/Vagr9K/gatsby-advanced-starter).

## Demo

[Material Demo](https://gatsby-theme-material.netlify.app/).

Visit [`gatsby-theme-material`](https://github.com/Vagr9K/gatsby-material-starter/tree/master/themes/material) for details regarding on how it was built using [`gatsby-theme-advanced`](https://www.npmjs.com/package/gatsby-theme-advanced).

## Features

- Gatsby v4 support
- First class [TypeScript](https://www.typescriptlang.org/) support (for query data and components exposed by the theme)
- [Material UI V5](https://material-ui.com/) components
- [Emotion](https://emotion.sh/docs/introduction) used for styling
- Posts in MDX
  - Code syntax highlighting
  - Embed videos
  - Embed iframes
- Infinite Scrolling
- React Query for client side API calls
- Tags
  - Separate page for posts under each tag
- Categories
  - Separate page for posts under each category
- Social features
  - Twitter tweet button
  - Facebook share/share count
  - Reddit share/share count
  - LinkedIn share button
- Author section
- Related posts computation and display based on category/tag match ranking
- [Disqus](https://disqus.com/) support via [`gatsby-theme-advanced`](https://www.npmjs.com/package/gatsby-theme-advanced)
- [gatsby-plugin-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/) for optimized image generation
- Inline SVG imports
- High configurability
- Separate components for everything:
  - Gatsby Link utilities
  - SEO
  - Disqus
- PWA features
  - Offline support
  - Web App Manifest support
  - Loading progress for slow networks
- SEO
  - [Google gtag.js](https://developers.google.com/gtagjs/) support
  - Sitemap generation
  - General description tags
  - [Google Structured Data](https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data)
  - [OpenGraph Tags (Facebook/Google+/Pinterest)](https://ogp.me/)
  - [Twitter Tags (Twitter Cards)](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup)
- RSS feeds
- Development tools
  - Yarn 3
  - [Jest](https://jestjs.io/) for unit/integration testing
  - [Cypress](https://www.cypress.io/) for E2E testing
  - CI via GitHub Actions
  - CD via GitHub Actions
  - [ESLint](https://eslint.org/) for linting
  - [Prettier](https://prettier.io/) for code formatting
  - [React Hooks Linting](https://www.npmjs.com/package/eslint-plugin-react-hooks)
  - Remark-Lint for linting Markdown
  - write-good for linting English prose
  - gh-pages for deploying to GitHub pages
  - [Netlify](https://www.netlify.com/) deploy configuration

## Getting Started

Install this starter by running the following commands from your CLI:

```sh
gatsby new YourProjectName https://github.com/Vagr9K/gatsby-material-starter
cd YourProjectName
yarn develop # or gatsby develop
```

Note that the [Gatsby CLI](https://www.npmjs.com/package/gatsby-cli) needs to be installed and updated for the `gatsby` command to work.

Alternatively you can fork the project, make your changes and merge new upstream features when needed:

- [Fork this repository on GitHub](https://github.com/Vagr9K/gatsby-material-starter/fork)
- Run the following commands:

  ```sh
  git clone https://github.com/${YourUsername}/${YourForkName} YourForkName # Clone your fork
  cd YourForkName
  yarn install # or yarn install
  yarn develop # or yarn develop
  ```

## Receiving upstream updates

You have multiple options when it comes to receiving upstream updates:

- Pull and merge upstream changes into your repo
- Change the version of `gatsby-theme-material` from local to remote.

First option allows you to make your own changes to the theme without having to fork and publish it. This is the default approach when you clone/fork the starter repository.

Second option simplifies your CI/CD setup and allows you to receive updates by simply bumping the package version.

To switch to the remote version, open `package.json` and edit the dependency section:

```js
 "gatsby-theme-material": "*",
```

into

```js
 "gatsby-theme-material": "3.1.0", // Or the version you want
```

## Configuration

To configure the theme edit your `gatsby-config.js`:

```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-material`,
      options: {
        basePath: `/blog`,
      },
    },
  ],
};
```

For configuring the theme, consult its documentation pages:

- [Material](themes/material/README.md)

### NetlifyCMS

First of all, make sure to edit `static/admin/config.yml` and add your [GitHub/GitLab/NetlifyId credentials](https://www.netlifycms.org/docs/authentication-backends/):

```yml
backend:
  name: github # Refer to https://www.netlifycms.org/docs/authentication-backends/ for auth backend list and instructions
  branch: master # Branch to update
  repo: vagr9k/gatsby-material-starter # Repo for pushing new commits. Make sure to replace with your repo!
```

You can visit `/admin/` after and will be greeted by a login dialog (depending on the auth provider you ave chosen above).

If want to customize Netlify CMS, e.g. registering custom widgets or styling the preview pane, you can do so by editing `src/netlifycms/index.js`:

```js
import CMS from "netlify-cms-app";

CMS.init({
  config: {
    backend: {
      name: "git-gateway",
    },
  },
});
```

For NetlifyCMS specific issues visit the [official documentation](https://www.netlifycms.org/docs/intro/).

# Author

Ruben Harutyunyan ([@Vagr9K](https://twitter.com/Vagr9K))
