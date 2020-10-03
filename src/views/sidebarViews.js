import { maker } from "../helpers/index";

const sidebar = (() => {
  const allTasksCount = document.querySelector("#all-tasks-count");
  const tasksTodayCount = document.querySelector("#tasks-today-count");
  const tasksWeekCount = document.querySelector("#tasks-week-count");

  const updateSidebar = (count) => {
    allTasksCount.textContent = count.allCount;
    tasksTodayCount.textContent = count.todayCount;
    tasksWeekCount.textContent = count.weekCount;
  };
  return { updateSidebar };
})();

export default sidebar;
