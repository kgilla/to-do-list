import projectController from "../controllers/projects";
import { maker } from "../helpers/index";

const projectViews = (() => {
  const projectList = document.querySelector("#projects");
  const projectHeader = document.querySelector("#project-header");
  const sideNav = document.querySelector("#side-nav");
  const expandNav = document.querySelector("#expand-nav");

  window.innerWidth < 900 ? sideNav.classList.add("collapse") : null;
  window.innerWidth > 900 ? expandNav.classList.add("hidden") : null;

  const handleProjectChange = (e) => {
    if (e.currentTarget.classList[1] == undefined) {
      projectController.changeProject(e.currentTarget.attributes[1].value);
    }
  };

  const showNewProjectForm = () => {
    projectController.openForm();
  };

  const showEditProjectForm = (e) => {
    const id = e.currentTarget.parentNode.attributes[1].value;
    projectController.openForm(id);
  };

  const renderProject = (project, selected) => {
    let div = maker(
      "div",
      {
        class:
          project.id === selected.id ? "sidenav-item selected" : "sidenav-item",
        data: project.id,
      },
      "",
      projectList
    );
    maker("i", { class: "far fa-calendar-check sidenav-item-icon" }, "", div);
    maker("h3", { class: "sidenav-item-name" }, project.name, div);
    maker(
      "h3",
      { class: "sidenav-item-count" },
      `${project.tasks.length}`,
      div
    );
    div.addEventListener("click", handleProjectChange);
  };

  const renderProjects = (projects, selected) => {
    projectList.innerHTML = "";
    let div = maker("div", { id: "sidenav-title-box" }, "", projectList);
    maker("h2", { id: "sidenav-title" }, "Projects", div);
    let b = maker("button", { id: "sidenav-title-button" }, "", div);
    maker("i", { class: "fas fa-plus" }, "", b);
    projects.forEach((project) => renderProject(project, selected));
    const sideItemButton = maker(
      "button",
      { type: "button", id: "new-project-button" },
      "New Project",
      projectList
    );
    maker("i", { class: "fas fa-plus", id: "plus" }, "", sideItemButton);
    b.addEventListener("click", showNewProjectForm);
    sideItemButton.addEventListener("click", showNewProjectForm);
  };

  const renderProjectHeader = (project) => {
    projectHeader.innerHTML = "";
    projectHeader.setAttribute("data", project.id);
    maker("h2", { class: "project-heading" }, project.name, projectHeader);
    let button = maker("button", { id: "edit-task" }, "", projectHeader);
    maker("i", { class: "fas fa-ellipsis-h", id: "ellipsis" }, "", button);
    button.addEventListener("click", showEditProjectForm);
  };

  const handleWindowResize = () => {
    if (window.innerWidth < 900) {
      sideNav.classList.add("collapse");
      expandNav.classList.remove("hidden");
    } else if (window.innerWidth > 900) {
      sideNav.classList.remove("collapse");
      expandNav.classList.add("hidden");
    }
  };

  const handleClick = () => {
    sideNav.classList.toggle("collapse");
    sideNav.classList.toggle("slide-in");
  };

  /* event listeners */

  window.addEventListener("resize", handleWindowResize);
  expandNav.addEventListener("click", handleClick);

  return {
    renderProjects,
    renderProjectHeader,
  };
})();

export default projectViews;
