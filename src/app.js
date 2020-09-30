import "./stylesheets/main.scss";
import taskController from "./controllers/tasks";
import projectController from "./controllers/projects";
// import projectViews from "./views/projectViews";
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
      title: "Click On Me!",
      date: "",
      priority: "low",
      description:
        "Welcome to Get ER Done! Feel free to make projects, make tasks, and check them off! Have fun and be productive!",
      done: false,
    };
    project.tasks.push(task);
    let projects = [project];
    store.setProjects(projects);
    store.setCurrentProject(projects[0]);
    render();
  };

  const render = () => {
    let currentProject = store.getCurrentProject();
    let projects = store.getProjects();
    projectController.render(projects, currentProject);
    taskController.render(currentProject);
  };

  const start = () => {
    localStorage.length > 0 ? render() : freshStart();
  };

  window.addEventListener("resize", handleResize);

  start();

  return { render };
})();

export default app;
