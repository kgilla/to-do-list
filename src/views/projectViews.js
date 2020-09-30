import projects from "../controllers/projects";
import forms from "../controllers/forms";
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
      projects.changeProject(e.currentTarget.attributes[1].value);
    }
  };

  const showNewProjectForm = () => {
    forms.openProjectForm();
  };

  const showEditProjectForm = () => {
    forms.openProjectForm(currentProject);
  };

  const renderProject = (project, currentProject) => {
    let p = maker(
      "div",
      {
        class:
          project.id === currentProject.id ? "project selected" : "project",
        data: project.id,
      },
      "",
      projectList
    );
    let b = maker("div", { class: "p-box" }, "", p);
    maker("i", { class: "far fa-calendar-check project-icon" }, "", b);
    maker("h3", { class: "project-name" }, project.name, b);
    let d = maker("div", { class: "d-box" }, "", p);
    maker("h3", { class: "project-count" }, `${project.tasks.length}`, d);
    p.addEventListener("click", handleProjectChange);
  };

  const renderProjects = (projects, currentProject) => {
    projectList.innerHTML = "";
    projects.forEach((project) => renderProject(project, currentProject));
    const newButton = maker(
      "button",
      { type: "button", id: "new-project-button" },
      "New Project",
      projectList
    );
    maker("i", { class: "fas fa-plus", id: "plus" }, "", newButton);
    newButton.addEventListener("click", showNewProjectForm);
  };

  const renderProjectHeader = (project) => {
    projectHeader.innerHTML = "";
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
