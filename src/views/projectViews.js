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

  // states
  // let currentProject = getCurrentProject();

  // functions for changing projects

  // const rerenderProjects = () => {
  //   let selected = document.querySelector(".selected").getAttribute("data");
  //   renderProjects();
  //   projectList.childNodes[selected].classList.toggle("selected");
  // };

  // const changeProject = (event) => {
  //   if (event.target != event.currentTarget.lastChild.lastChild) {
  //     document.querySelector(".selected").classList.toggle("selected");
  //     event.currentTarget.classList.toggle("selected");
  //     currentProject = projects.index[event.currentTarget.getAttribute("data")];
  //     rerenderProjects();
  //     taskViews.renderTasks(currentProject, true);
  //   }
  // };

  // const newProjectChanger = (project) => {
  //   currentProject = project;
  //   renderProjects();
  //   taskViews.renderTasks(currentProject, true);
  //   projectList.lastChild.classList.toggle("selected");
  // };

  // main project rendering

  const handleProjectChange = (e) => {
    if (e.currentTarget.classList[1] == undefined) {
      projects.changeProject(e.currentTarget.attributes[1].value);
      document.querySelector(".selected").classList.toggle("selected");
      e.currentTarget.classList.toggle("selected");
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
