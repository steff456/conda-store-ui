import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";

import { green, purple, gray, white, red, orange, blue, black } from "./colors";

export const grayscaleTheme = createTheme({
  typography: {
    fontFamily: '"Inter", sans-serif'
  },
  palette: {
    primary: {
      main: "#C4C4C4",
      contrastText: white
    },
    secondary: {
      main: "#7E7E7E",
      contrastText: white
    }
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    }
  }
});

const baseTheme = createTheme({
  typography: {
    fontFamily: '"Inter", sans-serif'
  },
  palette: {
    primary: {
      light: green[300],
      main: green[400],
      dark: green[700],
      contrastText: white
    },
    secondary: {
      light: gray[300],
      main: gray[400],
      dark: gray[700],
      contrastText: white
    },
    warning: {
      main: orange,
      contrastText: white
    },
    error: {
      main: red,
      contrastText: white
    },
    info: {
      main: blue,
      contrastText: white
    },
    success: {
      main: green[500],
      contrastText: white
    },
    mode: "light"
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    }
  }
});

export const greenTheme = createTheme(baseTheme, {
  palette: {
    accent: baseTheme.palette.augmentColor({
      color: {
        light: purple[300],
        main: purple[400],
        dark: purple[700],
        contrastText: white
      },
      name: "accent"
    }),
    white: baseTheme.palette.augmentColor({
      color: {
        main: white,
        contrastText: black
      },
      name: "white"
    }),
    black: baseTheme.palette.augmentColor({
      color: {
        main: black,
        contrastText: white
      },
      name: "black"
    })
  }
});

export const themeDecorator = (func: any) => (
  <ThemeProvider theme={greenTheme}>{func()}</ThemeProvider>
);
