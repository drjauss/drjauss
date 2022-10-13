import "../styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/silkscreen";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export const theme = createTheme({
  palette: {
    type: "dark",
    mode: "dark",
    primary: {
      main: "#9575cd",
      contrastText: "#ffffff",
      dark: "#68518f",
      light: "#aa90d7",
    },
    secondary: {
      main: "#8e24aa",
      light: "#a44fbb",
      dark: "#631976",
      contrastText: "#ffffff",
    },
    background: {
      default: "#303030",
      paper: "#424242",
    },
  },
  typography: {
    allVariants: {
      fontFamily: '"Silkscreen", "Helvetica", "Arial", sans-serif',
    },
    body1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    body2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
