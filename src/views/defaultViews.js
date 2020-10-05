import { maker } from "../helpers/index";

const defaultViews = (() => {
  const main = document.querySelector("#main");

  const renderWelcome = () => {
    let mat = maker("div", { class: "welcome-mat" }, "", main);
    maker("h2", { class: "welcome-header" }, "Wow Such Empty!", mat);
    maker("i", { class: "far fa-surprise surprise" }, "", mat);
    maker(
      "h2",
      { class: "welcome-header" },
      "Could You Be Done... Everything?!",
      mat
    );
  };

  return { renderWelcome };
})();

export default defaultViews;
