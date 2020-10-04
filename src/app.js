import "./stylesheets/main.scss";
import taskController from "./controllers/tasks";
import projectController from "./controllers/projects";
import sidenavController from "./controllers/sidenav";
import store from "./helpers/store";
import { makeId } from "./helpers/index";

const app = (() => {
  localStorage.clear();

  const main = document.querySelector("#main");

  window.innerWidth > 900
    ? main.classList.add("large")
    : main.classList.add("small");

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
    let project = { id: makeId(), name: "Welcome!", tasks: [] };
    let task = {
      id: makeId(),
      title: "Click On Me!",
      date: "",
      priority: "low",
      description:
        "Welcome to Get ER Done! Feel free to make projects, make tasks, and check them off! Have fun and be productive!",
      done: false,
      project: project.id,
    };
    project.tasks.push(task.id);
    store.setTasks([task]);
    store.setProjects([project]);
    render(project);
  };

  const render = (project) => {
    main.innerHTML = "";
    let projects = store.getProjects();
    sidenavController.renderCounts();
    projectController.render(projects, project);
    taskController.render(project);
  };

  const start = () => {
    localStorage.length > 0 ? render() : freshStart();
  };

  window.addEventListener("resize", handleResize);

  start();

  return { render };
})();

export default app;
