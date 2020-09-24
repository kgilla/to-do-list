import { taskViews } from "./taskViews";
import { projectViews } from "./projectViews";

const views = (() => {
  const main = document.querySelector("#main");

  window.innerWidth > 900
    ? main.classList.add("large")
    : main.classList.add("small");

  // element creator
  const maker = (type, attributes, text, place) => {
    let element = document.createElement(type);
    Object.keys(attributes).forEach((key) => {
      element.setAttribute(key, attributes[key]);
    });
    element.textContent = text;
    place.appendChild(element);
    return element;
  };

  const init = (project) => {
    projectViews.renderProjects();
    taskViews.renderTasks(project, true);
    document.querySelector("#projects").firstChild.classList.toggle("selected");
  };

  const render = (project) => {
    projectViews.rerenderProjects();
    taskViews.renderTasks(project, true);
  };

  const renderHome = () => {
    main.innerHTML = "";
    projectViews.renderProjects();
    let mat = maker("div", { class: "welcome-mat" }, "", main);
    maker("h2", { class: "welcome-header" }, "Its Time To Get-Er-Done!", mat);
    maker("i", { class: "far fa-sticky-note surprise" }, "", mat);
    maker(
      "h2",
      { class: "welcome-header" },
      "Create A Project To Get Started!",
      mat
    );
  };

  const handleResize = () => {
    if (window.innerWidth < 900) {
      main.classList.remove("large");
      main.classList.add("small");
    } else if (window.innerWidth > 900) {
      main.classList.add("large");
      main.classList.remove("small");
    }
  };

  window.addEventListener("resize", handleResize);

  return { render, renderHome, init };
})();

export { views };
