import { maker } from "../helpers/index";

const sidebar = (() => {
  const allTasksCount = document.querySelector("#all-tasks-count");
  const tasksTodayCount = document.querySelector("#tasks-today-count");
  const tasksWeekCount = document.querySelector("#tasks-week-count");
  const sidenav = document.querySelector("#side-nav");
  const expandNav = document.querySelector("#expand-nav");
  const main = document.querySelector("#main");

  window.innerWidth < 900 ? sidenav.classList.add("collapse") : null;
  window.innerWidth > 900 ? expandNav.classList.add("hidden") : null;

  const updateSidebar = (count) => {
    allTasksCount.textContent = count.allCount;
    tasksTodayCount.textContent = count.todayCount;
    tasksWeekCount.textContent = count.weekCount;
  };

  const toggleSidenav = () => {
    sidenav.state === "open" ? closeSidenav() : openSidenav();
  };

  const openSidenav = () => {
    maker("div", { id: "trans-overlay" }, "", main).addEventListener(
      "click",
      closeSidenav
    );
    sidenav.classList.toggle("slide-in");
    sidenav.state = "open";
  };

  const closeSidenav = () => {
    let overlay = document.querySelector("#trans-overlay");
    overlay ? overlay.remove() : null;
    sidenav.classList.toggle("slide-in");
    sidenav.state = "closed";
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

  const renderWelcome = () => {
    let mat = maker("div", { class: "welcome-mat" }, "", main);
    maker("h2", { class: "welcome-header" }, "Wow Such Empty!", mat);
    maker("i", { class: "far fa-surprise surprise" }, "", mat);
    maker(
      "h2",
      { class: "welcome-header" },
      "Could You Be Done... Everything?!",
      mat
    );
  };

  const makeHeader = (content) => {
    let header = maker("header", { class: "sidenav-header" }, "", main);
    maker("h2", { class: "sidenav-header-title" }, content, header);
  };

  /* event listeners */

  window.addEventListener("resize", handleWindowResize);
  expandNav.addEventListener("click", toggleSidenav);
  return {
    updateSidebar,
    renderWelcome,
    openSidenav,
    closeSidenav,
    makeHeader,
  };
})();

export default sidebar;
