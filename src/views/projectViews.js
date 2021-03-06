import projectController from "../controllers/projects";
import formController from "../controllers/forms";
import { maker } from "../helpers/index";

const projectViews = (() => {
  const projectList = document.querySelector("#projects");
  const main = document.querySelector("#main");
  const sidenavButton = document.querySelector("#sidenav-title-button");

  const handleProjectChange = (e) => {
    if (e.currentTarget.classList[1] == undefined) {
      projectController.changeProject(e.currentTarget.attributes[1].value);
    }
  };

  const showNewProjectForm = () => {
    projectController.openForm();
  };

  const showEditProjectForm = (e) => {
    const id = e.currentTarget.parentNode.parentNode.attributes[1].value;
    closeDropdown();
    projectController.openForm(id);
  };

  const showDeleteProjectForm = (e) => {
    const id = e.currentTarget.parentNode.parentNode.attributes[1].value;
    closeDropdown();
    formController.openDeleteForm(id);
  };

  const openDropDown = (e) => {
    renderDropdown(e.currentTarget.parentNode);
  };

  const closeDropdown = () => {
    document.querySelector("#trans-overlay").remove();
    document.querySelector(".dropdown").remove();
  };

  const renderDropdown = (parent) => {
    let overlay = maker("div", { id: "trans-overlay" }, "", main);
    let div = maker("div", { class: "dropdown project-dropdown" }, "", parent);
    let edit = maker(
      "button",
      { class: "dropdown-button" },
      "Edit Project",
      div
    );
    let remove = maker(
      "button",
      { class: "dropdown-button" },
      "Delete Project",
      div
    );
    edit.addEventListener("click", showEditProjectForm);
    remove.addEventListener("click", showDeleteProjectForm);
    overlay.addEventListener("click", closeDropdown);
  };

  const renderProject = (project, selected) => {
    let div = maker(
      "div",
      {
        class: selected
          ? project.id === selected.id
            ? "sidenav-item selected"
            : "sidenav-item"
          : "sidenav-item",
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

  const renderProjects = (projects, selected = "") => {
    projectList.innerHTML = "";
    projects.forEach((project) =>
      project.id !== "0" ? renderProject(project, selected) : null
    );
  };

  const renderProjectHeader = (project) => {
    let div = maker(
      "div",
      { class: "project-header", data: project.id },
      "",
      main
    );
    let titleBox = maker("div", { class: "project-heading-titlebox" }, "", div);
    maker("h2", { class: "project-heading" }, project.name, titleBox);
    maker(
      "h3",
      { class: "project-task-count" },
      project ? project.tasks.length : null,
      titleBox
    );
    if (project.id !== "0") {
      let button = maker("button", { class: "edit-button" }, "", div);
      maker("i", { class: "fas fa-ellipsis-h" }, "", button);
      button.addEventListener("click", openDropDown);
    }
  };

  sidenavButton.addEventListener("click", showNewProjectForm);

  return {
    renderProjects,
    renderProjectHeader,
  };
})();

export default projectViews;
