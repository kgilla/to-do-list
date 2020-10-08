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

  const switchCategory = () => {
    let selected = document.querySelector(".selected");
    selected ? selected.classList.remove("selected") : null;
  };

  const todayFilter = (task) => moment(task.date).isSame(moment(), "day");

  const weekFilter = (task) =>
    moment(task.date).isBetween(
      moment().subtract(1, "days"),
      moment().add(7, "days")
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
    switchCategory();
    projects.forEach((project) => {
      projectViews.renderProjectHeader(project);
      taskViews.render(project);
    });
    window.scrollTo(0, 0);
  };

  const getTasksIndex = () => {
    const projects = store.populateAllTasks();
    let newProjects = projects.filter((p) => p.tasks.length > 0);
    views.makeHeader("All Tasks");
    newProjects.length > 0
      ? render(newProjects, "All Tasks")
      : views.welcome(
          "fas fa-coffee",
          "Looks like you have no tasks for today",
          "Grab a coffee, sit back. You deserve it!"
        );
    allTasks.classList.add("selected");
    sidenav.state === "open" ? toggleSidenav() : null;
  };

  const getTasksWeek = () => {
    let projects = filterProjects(weekFilter);
    views.makeHeader("This Week's Tasks");
    projects.length > 0
      ? render(projects)
      : views.welcome(
          "fas fa-coffee",
          "Looks like you have no tasks for today",
          "Grab a coffee, sit back. You deserve it!"
        );
    tasksWeek.classList.add("selected");
    sidenav.state === "open" ? toggleSidenav() : null;
  };

  const getTasksToday = () => {
    let projects = filterProjects(todayFilter);
    views.makeHeader("Today's Tasks");
    projects.length > 0
      ? render(projects)
      : views.welcome(
          "fas fa-coffee",
          "Looks like you have no tasks for today",
          "Grab a coffee, sit back. You deserve it!"
        );
    tasksToday.classList.add("selected");
    sidenav.state === "open" ? toggleSidenav() : null;
  };

  const renderCounts = () => {
    let count = { allCount: 0, weekCount: 0, todayCount: 0 };
    let tasks = store.getTasks();
    tasks.forEach((task) => {
      if (
        moment(task.date).isBetween(
          moment().subtract(1, "days"),
          moment().add(7, "days")
        )
      ) {
        count.weekCount++;
      }
      if (moment(task.date).isSame(moment(), "day")) {
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

  return {
    renderCounts,
    getTasksIndex,
    getTasksToday,
    getTasksWeek,
    toggleSidenav,
  };
})();

export default sidenav;
