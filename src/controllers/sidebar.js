import store from "../helpers/store";
import moment from "moment";
import views from "../views/sidebarViews";
import taskViews from "../views/taskViews";
import projectViews from "../views/projectViews";

const sidebar = (() => {
  const allTasks = document.querySelector("#all-tasks");
  const tasksWeek = document.querySelector("#tasks-week");
  const tasksToday = document.querySelector("#tasks-today");
  const main = document.querySelector("#main");

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
    render(projects);
    allTasks.classList.add("selected");
  };

  const getTasksWeek = () => {
    let filter = (task) => moment(task.date).isBefore(moment().add(7, "days"));
    let projects = filterProjects(filter);
    render(projects);
    tasksWeek.classList.add("selected");
  };

  const getTasksToday = () => {
    let filter = (task) =>
      moment(moment().format("YYYY MM DD")).isSame(task.date);
    let projects = filterProjects(filter);
    render(projects);
    tasksToday.classList.add("selected");
  };

  const renderCounts = () => {
    let count = { allCount: 0, weekCount: 0, todayCount: 0 };
    let tasks = store.getTasks();
    tasks.forEach((task) => {
      if (moment(task.date).isBefore(moment().add(7, "days"))) {
        count.weekCount++;
      }
      if (moment(moment().format("YYYY MM DD")).isSame(task.date)) {
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

export default sidebar;
