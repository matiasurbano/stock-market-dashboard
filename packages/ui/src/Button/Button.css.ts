import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const root = style({
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
  border: "none",
  ":disabled": {
    background: vars.color.offGray,
    color: vars.color.black,
  },
});
