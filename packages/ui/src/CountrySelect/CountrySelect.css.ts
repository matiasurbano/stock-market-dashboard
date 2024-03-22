import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { vars } from "../theme.css";

export const countryIcon = style({
  height: "1rem",
});

export const root = style({
  width: "100%",
  maxWidth: "400px",
  position: "relative",
});

export const label = style({
  display: "block",
  marginBottom: vars.spacing.medium,
});

export const trigger = style({
  alignItems: "center",
  background: vars.color.white,
  border: "none",
  borderRadius: vars.border.radius,
  boxShadow: vars.boxShadow.light,
  cursor: "pointer",
  display: "flex",
  justifyContent: "space-between",
  outline: "inherit",
  padding: `${vars.spacing.medium} ${vars.spacing.large}`,
  width: "100%",
  ":focus": {
    outline: vars.focus,
  },
  height: "32px",
  paddingTop: "0px",
  paddingRight: "36px",
  paddingBottom: "0px",
  paddingLeft: "12px",
});

export const chevron = style({
  display: "inline",
  fill: "black",
  opacity: 0.5,
  width: "24px",
  height: "22px",
  verticalAlign: "middle",
  margin: "0px",
  position: "absolute",
  right: "8px",
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
  },
  variants: {
    highlighted: {
      true: {
        background: vars.color.gray,
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
    height: 200,
    margin: 0,
    marginTop: vars.spacing.small,
    overflow: "scroll",
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
