import { keyframes, style } from "@vanilla-extract/css";

import { vars } from "@repo/ui/theme";

export const root = style({
  // background: vars.color.black,
  borderRadius: vars.border.radius,
  boxShadow: vars.boxShadow.dark,
  // color: vars.color.white,
  display: "grid",
  padding: "12px 12px 12px 16px",
  textDecoration: "none",
  transition: "box-shadow 0.2s ease",
  fontSize: ".5rem",

  ":hover": {
    boxShadow: vars.boxShadow.dark,
  },
});

export const graph = style({
  display: "grid",
  height: 200,
  width: 200,
  placeSelf: "center",
});

export const info = style({
  display: "grid",
  textAlign: "left",
  flexDirection: "column",
  gap: vars.spacing.small,

  marginBottom: vars.spacing.medium,
});

export const title = style({
  margin: 0,
  padding: 0,
});

export const lead = style({
  color: vars.color.primary,
  opacity: 0.9,
  margin: 0,
  padding: 0,
});
