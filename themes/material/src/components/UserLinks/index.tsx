import React from "react";

import { Stack, SvgIcon, IconButton } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import TwitterIcon from "@material-ui/icons/Twitter";

import { Types, useConfig } from "gatsby-theme-advanced";

import Link from "../Link";

type SiteConfig = Types.SiteConfig;

// Utilities
const renderLink = (
  url: string,
  label: string,
  Icon: typeof SvgIcon
): JSX.Element => (
  <IconButton component={Link} to={url} ariaLabel={label}>
    <Icon fontSize="large" />
  </IconButton>
);

const renderTwitterLink = (
  config: Readonly<SiteConfig>
): JSX.Element | null => {
  const userName = config.user?.twitterName;

  if (!userName) return null;

  const url = `https://twitter.com/${userName}`;
  return renderLink(url, "Twitter Profile", TwitterIcon);
};

const renderGitHubLink = (config: Readonly<SiteConfig>): JSX.Element | null => {
  const userName = config.user?.github;

  if (!userName) return null;

  const url = `https://github.com/${userName}`;
  return renderLink(url, "GitHub Profile", GitHubIcon);
};

const renderLinkedInLink = (
  config: Readonly<SiteConfig>
): JSX.Element | null => {
  const userName = config.user?.linkedIn;

  if (!userName) return null;

  const url = `https://www.linkedin.com/in/${userName}`;
  return renderLink(url, "LinkedIn Profile", LinkedInIcon);
};

const renderEmailLink = (config: Readonly<SiteConfig>): JSX.Element => {
  const url = `mailto:${config.user?.email || ""}`;
  return renderLink(url, "E-Mail", EmailIcon);
};

const renderRssLink = (config: Readonly<SiteConfig>): JSX.Element =>
  renderLink(config.website.rss, "RSS Feed", RssFeedIcon);

type IconLinksProps = {
  includeRss?: boolean;
  className?: string;
};

const defaultProps: IconLinksProps = {
  includeRss: false,
};

const UserLinks = ({
  includeRss,
  className,
}: IconLinksProps): JSX.Element | null => {
  const config = useConfig();

  if (!config.user) return null;

  return (
    <Stack spacing={2} direction="row" className={className}>
      {renderTwitterLink(config)} {renderGitHubLink(config)}
      {renderLinkedInLink(config)} {renderEmailLink(config)}
      {includeRss && renderRssLink(config)}
    </Stack>
  );
};

UserLinks.defaultProps = defaultProps;

export default UserLinks;
