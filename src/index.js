import "./stylesheets/main.scss";
import tasks from "./controllers/tasks";
import projects from "./controllers/projects";
import projectViews from "./views/projectViews";
import {
  saveProjects,
  getProjects,
  setCurrentProject,
  makeId,
} from "./helpers/index";

const app = (() => {
  // window.localStorage.clear();

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
    saveProjects([]);
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
    saveProjects(projects);
    init(projects);
  };

  const getProjectArray = () => {
    const projects = getProjects();
    init(projects);
  };

  const init = (projects) => {
    projectViews.renderProjects(projects);
    projectViews.renderProjectHeader(projects[0]);
    tasks.renderTasks(projects[0]);
    document.querySelector("#projects").firstChild.classList.toggle("selected");
    setCurrentProject(projects[0]);
  };

  const start = () => {
    localStorage.length > 0 ? getProjectArray() : freshStart();
  };

  window.addEventListener("resize", handleResize);

  start();
})();

export default app;
