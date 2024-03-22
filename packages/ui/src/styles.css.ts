import { globalStyle } from "@vanilla-extract/css";

import { vars } from "./theme.css";

globalStyle("html, body", {
  margin: 0,
  //   background: "rgb(21, 27, 36)",
  position: "relative",
});

globalStyle("html", {
  //   background: vars.color.black,
  //   color: vars.color.offWhite,
});

globalStyle("*", {
  fontFamily: ["Roboto", "Segoe UI", "Helvetica Neue", "sans-serif"],
});
