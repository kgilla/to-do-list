import "./assets/stylesheets/main.scss";
import tasks from "./modules/controllers/tasks";
import projects from "./modules/controllers/projects";
import taskViews from "./modules/views/taskViews";
import projectViews from "./modules/views/projectViews";
import { maker } from "./modules/helpers/index";

const app = (() => {
  const main = document.querySelector("#main");

  window.innerWidth > 900
    ? main.classList.add("large")
    : main.classList.add("small");

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

  const freshStart = () => {
    let p = projects.projectMaker("Welcome!");
    let t = tasks.taskMaker(
      "Click On Me!",
      "",
      "low",
      "Welcome to Get ER Done! Feel free to make projects, make tasks, and check them off! Have fun and be productive!"
    );
    p.tasks.push(t);
    projects.index.push(p);
    projects.save(p);
    init(p);
  };

  const getIndex = () => {
    for (let i = 0; i < localStorage.length; i++) {
      let p = window.localStorage.key(i);
      projects.index.push(JSON.parse(window.localStorage.getItem(p)));
    }
    init(projects.index[0]);
  };

  const start = () => {
    localStorage.length > 0 ? getIndex() : freshStart();
  };

  // uncomment to remove saves!
  // window.localStorage.clear();

  window.addEventListener("resize", handleResize);

  start();

  return { render, renderHome };
})();

export default app;
