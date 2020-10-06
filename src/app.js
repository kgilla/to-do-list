import "./stylesheets/main.scss";
import taskController from "./controllers/tasks";
import projectController from "./controllers/projects";
import sidenavController from "./controllers/sidenav";
import store from "./helpers/store";
import { makeId } from "./helpers/index";
import sidenav from "./controllers/sidenav";

const app = (() => {
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
    let defaultProject = { id: "0", name: "Unassigned Tasks", tasks: [] };
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
    store.setProjects([defaultProject, project]);
    renderProject(project);
  };

  const render = (project = "") => {
    main.innerHTML = "";
    let projects = store.getProjects();
    sidenavController.renderCounts();
    projectController.render(projects, project);
  };

  const renderProject = (project) => {
    render(project);
    taskController.render(project);
  };

  const renderIndex = () => {
    render();
    sidenav.getTasksIndex();
  };

  const renderTasksToday = () => {
    render();
    sidenav.getTasksToday();
  };

  const renderTasksWeek = () => {
    render();
    sidenav.getTasksWeek();
  };

  const returnToSelected = (project = "") => {
    let selected = document.querySelector(".selected");
    document.querySelector(".selected").classList.remove("selected");
    if (project.id === "0" || selected.id) {
      renderIndex();
    } else {
      renderProject(project);
    }
  };

  const start = () => {
    localStorage.length > 0 ? renderIndex() : freshStart();
  };

  window.addEventListener("resize", handleResize);

  start();

  return {
    renderProject,
    renderIndex,
    renderTasksToday,
    renderTasksWeek,
    returnToSelected,
    start,
  };
})();

export default app;
