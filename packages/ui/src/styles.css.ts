import { globalStyle } from "@vanilla-extract/css";

import { vars } from "./theme.css";

globalStyle("html, body", {
  margin: 0,
  background: vars.color.black,
  color: vars.color.offWhite,
  position: "relative",
  fontSize: "14px",
});

globalStyle("*", {
  fontFamily: ["Roboto", "Segoe UI", "Helvetica Neue", "sans-serif"],
});
