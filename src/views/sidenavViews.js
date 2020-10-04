const sidebar = (() => {
  const allTasksCount = document.querySelector("#all-tasks-count");
  const tasksTodayCount = document.querySelector("#tasks-today-count");
  const tasksWeekCount = document.querySelector("#tasks-week-count");
  const sidenav = document.querySelector("#side-nav");
  const expandNav = document.querySelector("#expand-nav");

  window.innerWidth < 900 ? sidenav.classList.add("collapse") : null;
  window.innerWidth > 900 ? expandNav.classList.add("hidden") : null;

  const updateSidebar = (count) => {
    allTasksCount.textContent = count.allCount;
    tasksTodayCount.textContent = count.todayCount;
    tasksWeekCount.textContent = count.weekCount;
  };

  const handleWindowResize = () => {
    if (window.innerWidth < 900) {
      sidenav.classList.add("collapse");
      expandNav.classList.remove("hidden");
    } else if (window.innerWidth > 900) {
      sidenav.classList.remove("collapse");
      expandNav.classList.add("hidden");
    }
  };

  const handleClick = () => {
    sidenav.classList.toggle("collapse");
    sidenav.classList.toggle("slide-in");
  };

  /* event listeners */

  window.addEventListener("resize", handleWindowResize);
  expandNav.addEventListener("click", handleClick);
  return { updateSidebar };
})();

export default sidebar;
