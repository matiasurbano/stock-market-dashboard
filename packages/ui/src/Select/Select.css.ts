import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../theme.css";

export const root = style({
  width: "100%",
  maxWidth: "400px",
  position: "relative",
  color: vars.color.offWhite,
});

export const label = style({
  display: "block",
  marginBottom: vars.spacing.medium,
});

export const trigger = style({
  alignItems: "center",
  background: "rgb(37 43 49)",
  borderRadius: vars.border.radius,
  color: vars.color.offWhite,
  border: "none",
  cursor: "pointer",
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  ":focus": {
    outline: vars.focus,
  },
  height: "32px",
  paddingTop: "20px",
  paddingRight: "40px",
  paddingBottom: "20px",
  paddingLeft: "20px",
});

export const listItem = recipe({
  base: {
    alignItems: "center",
    cursor: "pointer",
    display: "flex",
    fontSize: "0.8rem",
    gap: vars.spacing.medium,
    justifyContent: "space-between",
    margin: 0,
    padding: vars.spacing.medium,
    color: vars.color.gray,
  },
  variants: {
    highlighted: {
      true: {
        background: vars.color.tertiary,
      },
    },
    selected: {
      true: {
        cursor: "default",
        color: vars.color.white,
        background: vars.color.primary,
      },
    },
  },
});

export const listItemLabel = style({
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
});

export const preview = style({
  display: "flex",
  fontSize: "1rem",
  gap: vars.spacing.medium,
  alignItems: "center",
});

export const list = recipe({
  base: {
    background: vars.color.white,
    borderRadius: vars.border.radius,
    boxShadow: vars.boxShadow.light,
    display: "none",
    margin: 0,
    marginTop: vars.spacing.small,
    padding: 0,
    position: "absolute",
    width: "100%",
    zIndex: 10,
  },
  variants: {
    isOpen: {
      true: {
        display: "block",
      },
    },
  },
});
