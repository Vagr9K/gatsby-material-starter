import React from "react";

import { useMatch } from "@reach/router";

import { Tabs, Tab } from "@mui/material";

import Link, { LinkProps } from "../Link";

const TabLink = React.forwardRef(
  (
    { to, className, children }: LinkProps,
    ref: React.Ref<HTMLAnchorElement>
  ) => (
    <Link role="tab" to={to} className={className} ref={ref}>
      {children}
    </Link>
  )
);

const NavigationLinks = (): JSX.Element => {
  const postPageMatch = useMatch("/");
  const aboutPageMatch = useMatch("/about");

  const getMatchUri = () => {
    if (aboutPageMatch) return aboutPageMatch.uri;
    if (postPageMatch) return postPageMatch.uri;
    return "other";
  };

  const matchUri = getMatchUri();

  return (
    <Tabs value={matchUri}>
      <Tab component={TabLink} value="/" to="/" label="Posts" />
      <Tab component={TabLink} value="/about" to="/about" label="About" />
    </Tabs>
  );
};

export default NavigationLinks;
