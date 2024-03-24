import { style } from "@vanilla-extract/css";
import { vars } from "@repo/ui/theme";

export const container = style({
  padding: vars.spacing.large,
  maxWidth: vars.breakpoints.xl,
  minWidth: vars.breakpoints.xs,
  margin: "0 auto",
});

export const filterBar = style({
  display: "flex",
  alignItems: "end",
  flexWrap: "wrap",
  gap: vars.spacing.medium,
  marginTop: vars.spacing.large,
  marginBottom: vars.spacing.large,
});
