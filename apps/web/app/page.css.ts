import { style } from "@vanilla-extract/css";
import { vars } from "@repo/ui/theme";

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

export const heading = style({
  fontSize: "2rem",
  padding: 0,
  marginBottom: vars.spacing.large,
});
