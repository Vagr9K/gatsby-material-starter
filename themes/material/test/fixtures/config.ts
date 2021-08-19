import { Types } from "gatsby-theme-advanced";

const config: Types.SiteConfig = {
  // Website configuration
  website: {
    title: "Gatsby Material Starter", // Homepage title
    titleShort: "Material Blog", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation
    name: "Gatsby Material Starter", // Website name used for homescreen (PWA) and SEO
    description: "A GatsbyJS starter equipped with advanced features.", // Website description used for RSS feeds/meta description tag
    language: "en",
    logoUrl: "/logos/logo-1024.png", // Logo used for SEO
    fbAppId: "1111111111111111", // FB Application ID for using app insights
    twitterName: "Vagr9K", // Twitter handle of the website
    url: "https://material-demo.netlify.com", // Domain of your website without the pathPrefix
    rss: "/rss.xml", // Path to the RSS file
    rssTitle: "Gatsby Material Starter RSS Feed", // Title of the RSS feed

    googleAnalyticsId: "UA-XXXXXXXX-A", // GA tracking ID
    copyright: "© Copyright 2021 | Ruben Harutyunyan", // Copyright string for the footer of the website and RSS feed.

    themeColor: "#D83850", // Used for setting manifest and progress theme colors.
    backgroundColor: "#F7F7F7", // Used for setting manifest background color.
  },

  // User configuration
  user: {
    id: "MaterialUser", // Unique identifier of the user on the website. User for OpenGraph SEO tags
    firstName: "First", // Used for SEO
    lastName: "Last", // Used for SEO
    twitterName: "Vagr9K", // Twitter username used for SEO
    linkedIn: "your-linkedin", // Used for contact information
    github: "vagr9k", // Used for contact information
    email: "MaterialUser@example.com", // Used for contact information and in the RSS feed
    location: "User Location", // User location used for SEO
    about: "A full-stack web developer looking for a challenge!", // User information used for the author section
    avatar: "https://i.pravatar.cc/300", // User avatar used for the author section
  },

  // Organization information used for SEO
  organization: {
    name: "Organization Name",
    description: "Organization description",
    logoUrl: "/logos/logo-512.png",
    url: "https://material-demo.netlify.com", // URL of the organization website
  },

  // Gatsby Configuration
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  iconList: [], // List of icon names to be used in the manifest.

  contentDir: "./content", // Directory for MDX posts
  assetDir: "./static", // Asset directory

  embeddedImageWidth: 768, // MDX embedded image width. Used by gatsby-plugin-image for optimization
  embeddedVideoWidth: 920, // MDX embedded video width in pixels

  basePath: "",
};

export default config;
