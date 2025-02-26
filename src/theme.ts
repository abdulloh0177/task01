import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontSize: "24px",
      fontWeight: 700,
    },
    h2: {
      fontSize: "20px",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
  },
  palette: {
    primary: { main: "#1B5BF7" },
    secondary: { main: "#F6F6F6" },
    text: {
      primary: "#5C596D",
      secondary: "#1D1A2F",
    },
  },
});

export default theme;
