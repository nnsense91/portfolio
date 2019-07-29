import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/parallax";
import "./scripts/skills";
import "./scripts/slider";
import "./scripts/reviews-slider";
import "./scripts/focus";
import "./scripts/anchor-scroll";
import "./scripts/popup";

import Validate from "./scripts/form";

const form = document.querySelector(".j-form");

if (form) {
  const validate = new Validate({
    element: ".j-form"
  });

  validate.init();
}