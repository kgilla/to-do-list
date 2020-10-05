import store from "../helpers/store";
import moment from "moment";
import views from "../views/sidenavViews";
import taskViews from "../views/taskViews";
import projectViews from "../views/projectViews";

const sidenav = (() => {
  const sidenav = document.querySelector("#side-nav");
  const allTasks = document.querySelector("#all-tasks");
  const tasksWeek = document.querySelector("#tasks-week");
  const tasksToday = document.querySelector("#tasks-today");
  const main = document.querySelector("#main");

  const todayFilter = (task) =>
    moment(task.date).isBetween(
      moment(Date.now()).subtract(1, "days"),
      moment(Date.now()).add(1, "days")
    );

  const weekFilter = (task) =>
    moment(task.date).isBetween(
      moment(Date.now()).subtract(1, "days"),
      moment(Date.now()).add(7, "days")
    );

  const filterProjects = (filter) => {
    let filteredProjects = [];
    const projects = store.populateAllTasks();
    projects.forEach((project) => {
      let filtered = project.tasks.filter((task) => filter(task));
      project.tasks = filtered;
      project.tasks.length > 0 ? filteredProjects.push(project) : null;
    });
    return filteredProjects;
  };

  const render = (projects) => {
    main.innerHTML = "";
    let selected = document.querySelector(".selected");
    selected ? selected.classList.remove("selected") : null;
    projects.forEach((project) => {
      projectViews.renderProjectHeader(project);
      taskViews.render(project);
    });
    sidenav.state === "open" ? toggleSidenav() : null;
  };

  const getTasksIndex = () => {
    const projects = store.populateAllTasks();
    let newProjects = projects.filter((p) => p.tasks.length > 0);
    newProjects.length > 0 ? render(newProjects) : views.renderWelcome();
    allTasks.classList.add("selected");
  };

  const getTasksWeek = () => {
    let projects = filterProjects(weekFilter);
    render(projects);
    tasksWeek.classList.add("selected");
  };

  const getTasksToday = () => {
    let projects = filterProjects(todayFilter);
    render(projects);
    tasksToday.classList.add("selected");
  };

  const renderCounts = () => {
    let count = { allCount: 0, weekCount: 0, todayCount: 0 };
    let tasks = store.getTasks();
    tasks.forEach((task) => {
      if (
        moment(task.date).isBetween(
          moment(Date.now()).subtract(1, "days"),
          moment(Date.now()).add(7, "days")
        )
      ) {
        count.weekCount++;
      }
      if (
        moment(task.date).isBetween(
          moment(Date.now()).subtract(1, "days"),
          moment(Date.now()).add(1, "days")
        )
      ) {
        count.todayCount++;
      }
      count.allCount++;
    });
    views.updateSidebar(count);
  };

  const toggleSidenav = () => {
    if (window.innerWidth < 900) {
      sidenav.state === "closed" ? views.openSidenav() : views.closeSidenav();
    }
  };

  allTasks.addEventListener("click", getTasksIndex);
  tasksWeek.addEventListener("click", getTasksWeek);
  tasksToday.addEventListener("click", getTasksToday);

  return { renderCounts, getTasksIndex, toggleSidenav };
})();

export default sidenav;
