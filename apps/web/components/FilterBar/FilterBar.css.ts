import { style } from "@vanilla-extract/css";

const vars = {
  spacing: {
    medium: "8px",
  },
};

export const root = style({
  padding: `0px 0px ${vars.spacing.medium}`,
  borderBottomColor: "rgba(255, 255, 255, 0.1)",
  borderBottomStyle: "solid",
  borderBottomWidth: 1,
  marginBottom: vars.spacing.medium,
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
