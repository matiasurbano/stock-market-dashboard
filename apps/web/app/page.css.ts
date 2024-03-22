import { style } from "@vanilla-extract/css";

// import { vars } from "../styles/theme.css";

export const vars = {
  color: {
    primary: "#414d69",
    secondary: "#FF4049",
    black: "#28292F",
    gray: "#CBD5E0",
    white: "#FFFFFF",
    offWhite: "#FAF9F6",
  },
  spacing: {
    small: "4px",
    medium: "8px",
    large: "16px",
  },
  border: {
    radius: "8px",
    border: "1px solid #28292F",
  },
  focus: "5px auto -webkit-focus-ring-color",
  boxShadow: {
    light: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    dark: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  },
};

export const container = style({
  padding: vars.spacing.large,
  maxWidth: "1500px",
  margin: "0 auto",
});

export const filterBar = style({
  display: "flex",
  alignItems: "end",
  flexWrap: "wrap",
  gap: vars.spacing.medium,
  marginBottom: vars.spacing.large,
});

export const results = style({
  display: "grid",
  marginBottom: vars.spacing.large,
  gap: vars.spacing.large,
  gridTemplateColumns: "repeat( auto-fit, minmax(300px, 1fr) )",
});

export const heading = style({
  fontSize: "2rem",
  padding: 0,
  marginBottom: vars.spacing.large,
});

export const nextButton = style({
  alignItems: "center",
  fontSize: "1rem",
  background: vars.color.primary,
  border: "unset",
  borderRadius: vars.border.radius,
  color: vars.color.white,
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  minWidth: "150px",
  outline: "inherit",
  padding: `${vars.spacing.medium} ${vars.spacing.large}`,
  textAlign: "center",
  ":disabled": {
    background: vars.color.gray,
  },
});

export const resultsFooter = style({
  display: "flex",
  justifyContent: "center",
  marginBottom: vars.spacing.large,
});
