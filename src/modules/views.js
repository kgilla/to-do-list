import { taskViews } from "./taskViews";
import { projectViews } from "./projectViews";

const views = (() => {
  const main = document.querySelector("#main");

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

  // const getTaskTotal = () => {
  //   let i = 0;
  //   projects.index.forEach((project) => (i += project.tasks.length));
  //   totalTaskCount.textContent = i;
  // };

  // const showIndex = (event) => {
  //   document.querySelector(".selected").classList.toggle("selected");
  //   event.currentTarget.classList.toggle("selected");
  //   main.innerHTML = "";
  //   projects.index.forEach((project) => {
  //     maker("h2", { class: "project-heading" }, project.name, main);
  //     project.tasks.forEach((task, i) => renderTask(task, i));
  //   });
  // };

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

  return { render, renderHome, init };
})();

export { views };
