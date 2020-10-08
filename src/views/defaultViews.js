import { maker } from "../helpers/index";

const defaultViews = (() => {
  const main = document.querySelector("#main");

  const renderWelcome = (icon, firstHeading, secondHeading) => {
    console.log(icon);
    let mat = maker("div", { class: "welcome-mat" }, "", main);
    maker("h2", { class: "welcome-header" }, firstHeading, mat);
    maker("i", { class: `${icon} welcome-icon` }, "", mat);
    maker("h2", { class: "welcome-header" }, secondHeading, mat);
  };

  return { renderWelcome };
})();

export default defaultViews;
