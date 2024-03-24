import { style } from "@vanilla-extract/css";
import { vars } from "@repo/ui/theme";

export const root = style({
  height: "50px",
  width: "100%",
});

export const filters = style({
  display: "grid",
  gridTemplateColumns: "auto auto",
  gridTemplateRows: "40px",
  justifyContent: "space-between",
  alignItems: "center",
});

export const filterGroup = style({
  display: "grid",
  columnGap: vars.spacing.medium,
  gridTemplateColumns: "auto auto",
});
