import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  breakpoints: {
    xs: "380px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
  color: {
    primary: "#414d69",
    secondary: "#FF4049",
    tertiary: "#2394DF",
    black: "#151B24",
    gray: "#151B24",
    offGray: "#CBD5E0",
    white: "#FFFFFF",
    offWhite: "#FAF9F6",
  },
  spacing: {
    small: "4px",
    medium: "8px",
    large: "16px",
    xlarge: "32px",
  },
  border: {
    radius: "8px",
    border: "1px solid #151B24",
  },
  focus: "5px auto -webkit-focus-ring-color",
  boxShadow: {
    light: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    dark: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  },
});
