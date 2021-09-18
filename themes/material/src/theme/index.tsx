import * as React from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  ThemeOptions,
} from "@mui/material/styles";

import CssReset from "./CssReset";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    zero: true;
    xs: false;
    sm: true;
    md: false;
    lg: true;
    xl: false;
  }
}

// Materil UI Theme setup
export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#c23248",
    },
    secondary: {
      main: "#fafafa",
    },
  },
  breakpoints: {
    values: {
      zero: 0,
      sm: 564,
      lg: 1100,
    },
  },
};

type ThemeProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProps): JSX.Element => (
  <MuiThemeProvider theme={createTheme(themeOptions)}>
    <CssReset />

    {children}
  </MuiThemeProvider>
);

export default ThemeProvider;
