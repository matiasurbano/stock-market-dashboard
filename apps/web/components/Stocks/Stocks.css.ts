import { style } from "@vanilla-extract/css";
import { vars } from "@repo/ui/theme";

export const root = style({
  display: "grid",
  marginBottom: vars.spacing.large,
  gap: vars.spacing.large,
  gridTemplateColumns: "repeat( auto-fit, minmax(300px, 1fr) )",
});

export const footer = style({
  display: "flex",
  justifyContent: "center",
  marginBottom: vars.spacing.large,
});

export const nextButton = style({
  alignItems: "center",
  background: vars.color.tertiary,
  borderRadius: vars.border.radius,
  color: vars.color.white,
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  minWidth: "150px",
  padding: `${vars.spacing.medium} ${vars.spacing.large}`,
  textAlign: "center",
  ":disabled": {
    background: vars.color.offGray,
    color: vars.color.black,
  },
});
