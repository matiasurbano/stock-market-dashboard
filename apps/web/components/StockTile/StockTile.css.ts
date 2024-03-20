import { style } from "@vanilla-extract/css";

import { vars } from "@repo/ui/theme";

export const root = style({
  alignItems: "center",
  background: vars.color.white,
  borderRadius: vars.border.radius,
  boxShadow: vars.boxShadow.light,
  display: "flex",
  flexDirection: "column",
  padding: vars.spacing.medium,
  textAlign: "center",
  textDecoration: "none",
  transition: "box-shadow 0.2s ease",

  ":hover": {
    boxShadow: vars.boxShadow.dark,
  },
});

export const graph = style({
  display: "flex",
  height: 100,
  width: 100,
});

export const info = style({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing.small,
  justifyItems: "center",
  marginBottom: vars.spacing.medium,
});

export const title = style({
  color: vars.color.primary,
  fontWeight: "bold",
  margin: 0,
  padding: 0,
});

export const lead = style({
  color: vars.color.primary,
  opacity: 0.9,
  margin: 0,
  padding: 0,
});
