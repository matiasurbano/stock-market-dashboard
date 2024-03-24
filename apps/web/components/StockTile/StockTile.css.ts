import { style } from "@vanilla-extract/css";
import { vars } from "@repo/ui/theme";

export const wrapper = style({
  borderRadius: "8px",
  boxShadow: "rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
});

export const root = style({
  borderRadius: vars.border.radius,
  boxShadow: vars.boxShadow.dark,
  display: "grid",
  textDecoration: "none",
  color: "inherit",
  transition: "box-shadow 0.2s ease",
  fontSize: ".5rem",
  padding: vars.spacing.large,

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
  margin: 0,
  padding: 0,
  display: "grid",
  textAlign: "left",
  flexDirection: "column",
  gap: vars.spacing.small,
  marginBottom: vars.spacing.medium,
});

export const title = style({
  lineHeight: 1,
  overflow: "hidden",
  textWrap: "nowrap",
  textOverflow: "ellipsis",
  fontWeight: "bold",
  fontSize: "1rem",
  margin: 0,
});

export const subTitle = style({
  lineHeight: 0,
  fontWeight: "lighter",
  fontSize: "0.8rem",
  color: vars.color.offGray,
});
