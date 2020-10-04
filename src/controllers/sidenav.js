import store from "../helpers/store";
import moment from "moment";
import views from "../views/sidenavViews";
import taskViews from "../views/taskViews";
import projectViews from "../views/projectViews";

const sidenav = (() => {
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
    document.querySelector(".selected").classList.remove("selected");
    projects.forEach((project) => {
      projectViews.renderProjectHeader(project);
      taskViews.render(project);
    });
  };

  const getAlltasks = () => {
    const projects = store.populateAllTasks();
    let newProjects = projects.filter((p) => p.tasks.length > 0);
    render(newProjects);
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

  allTasks.addEventListener("click", getAlltasks);
  tasksWeek.addEventListener("click", getTasksWeek);
  tasksToday.addEventListener("click", getTasksToday);

  return { renderCounts };
})();

export default sidenav;
