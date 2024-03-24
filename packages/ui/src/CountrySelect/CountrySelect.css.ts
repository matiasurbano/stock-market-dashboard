import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../theme.css";
import * as baseStyles from "../Select/Select.css";

export const root = style([baseStyles.root, {}]);
export const label = style([baseStyles.label, {}]);
export const trigger = style([
  baseStyles.trigger,
  {
    width: "300px",
  },
]);
export const listItemLabel = style([baseStyles.listItemLabel, {}]);
export const preview = style([baseStyles.preview, {}]);

export const countryIcon = style({
  height: "1rem",
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
    width: "300px",
    zIndex: 10,
    height: 200,
    overflow: "scroll",
  },
  variants: {
    isOpen: {
      true: {
        display: "block",
      },
    },
  },
});
