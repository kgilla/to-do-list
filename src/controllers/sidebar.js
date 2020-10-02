import store from "../helpers/store";
import moment from "moment";

const sidebar = (() => {
  const allTasks = document.querySelector("#all-tasks");
  const tasksWeek = document.querySelector("#tasks-week");
  const tasksToday = document.querySelector("#tasks-today");

  const getAlltasks = () => {
    let newProjects = [];
    const projects = store.getProjects();
    projects.forEach((project) =>
      newProjects.push(store.populateTasks(project))
    );
    console.log(newProjects);
  };

  const getTasksWeek = () => {};

  const getTasksToday = () => {};

  const getCounts = () => {
    let count = { allCount: 0, weekCount: 0, todayCount: 0 };
    let tasks = store.getTasks();
    tasks.forEach((task) => {
      if (moment(task.date).isBefore(moment(task.date).add(7, "days"))) {
        count.weekCount++;
      }
      if (moment(moment().format("YYYY MM DD")).isSame(task.date)) {
        count.todayCount++;
      }
      count.allCount++;
    });
    console.log(count);
  };

  allTasks.addEventListener("click", getAlltasks);
  tasksWeek.addEventListener("click", getTasksWeek);
  tasksToday.addEventListener("click", getCounts);
})();

export default sidebar;
