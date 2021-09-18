import * as React from "react";

import { Box } from "@mui/material";

import { SEO } from "gatsby-theme-advanced";

import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ThemeProvider from "../theme";

type MainLayoutProps = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => (
  <ThemeProvider>
    <SEO />
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100%",
        pt: 12,

        display: "grid",
        gridTemplateColumns: "100%",
        gap: { zero: 8, sm: 10 },
      }}
    >
      <Navigation />
      {children}
      <Footer />
    </Box>
  </ThemeProvider>
);

export default MainLayout;
