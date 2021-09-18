import React from "react";

import { Typography, Stack, Link } from "@mui/material";

import { useConfig } from "gatsby-theme-advanced";

import BaseLink from "../Link";

import UserLinks from "../UserLinks";

const Footer = (): JSX.Element => {
  const config = useConfig();

  return (
    <Stack
      component="footer"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{
        padding: "32px 0px 16px",
        gap: "24px",
        bgcolor: "secondary.main",
      }}
    >
      <UserLinks includeRss />

      <Stack justifyContent="center" alignItems="center">
        <Typography variant="caption">
          Based on{" "}
          <Link
            component={BaseLink}
            to="https://github.com/Vagr9K/gatsby-material-starter"
            color="inherit"
          >
            Gatsby Material Starter
          </Link>
        </Typography>
        <Typography mt={1} variant="caption">
          {config.website.copyright}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
