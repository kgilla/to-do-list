import { projects } from "./projects";
import { taskViews } from "./taskViews";
import { views } from "./views";

const projectViews = (() => {
  const newProject = document.querySelector("#new-project");
  const projectList = document.querySelector("#projects");
  const index = document.querySelector("#allTasks");

  // element states
  let currentProject = "";

  // element creator
  const maker = (type, attributes, text, place) => {
    let element = document.createElement(type);
    Object.keys(attributes).forEach((key) => {
      element.setAttribute(key, attributes[key]);
    });
    element.textContent = text;
    place.appendChild(element);
    return element;
  };

  // functions for changing projects

  const rerenderProjects = () => {
    let selected = document.querySelector(".selected").getAttribute("data");
    renderProjects();
    projectList.childNodes[selected].classList.toggle("selected");
  };

  const changeProject = (event) => {
    if (event.target != event.currentTarget.lastChild.lastChild) {
      document.querySelector(".selected").classList.toggle("selected");
      event.currentTarget.classList.toggle("selected");
      currentProject = projects.index[event.currentTarget.getAttribute("data")];
      rerenderProjects();
      taskViews.renderTasks(currentProject, true);
    }
  };

  const newProjectChanger = (project) => {
    currentProject = project;
    renderProjects();
    taskViews.renderTasks(currentProject, true);
    projectList.lastChild.classList.toggle("selected");
  };

  // project form functions

  const showProjectForm = () => {
    let open = document.querySelector("#project-form");
    open == null ? openProjectForm() : closeProjectForm();
  };

  const spinulator = () => {
    newProject.classList.toggle("open-form");
    newProject.children[0].classList.toggle("hidden");
    newProject.children[1].classList.toggle("hidden");
    setTimeout((f) => newProject.classList.toggle("open-form"), 300);
  };

  const closeProjectForm = () => {
    projectList.removeChild(projectList.lastChild);
    spinulator();
  };

  const openProjectForm = () => {
    let form = maker(
      "input",
      { placeholder: "Project Name", id: "project-form", class: "slide-in" },
      "",
      projectList
    );
    form.addEventListener("keydown", getProjectData);
    spinulator();
    form.focus();
  };

  const projectError = () => {
    let form = document.querySelector("#project-form");
    form.classList.toggle("error");
    setTimeout((f) => form.classList.toggle("error"), 500);
  };

  const getProjectData = (event) => {
    let name = event.currentTarget.value;
    if (event.key == "Enter") {
      if (name == "") {
        projectError();
      } else if (projects.index.find((p) => p.name == name) != undefined) {
        projectError();
      } else {
        closeProjectForm();
        projects.create(event.target.value);
      }
    }
  };

  const showCan = () => {
    event.currentTarget.lastChild.lastChild.classList.toggle("hidden");
  };

  const deleteProject = () => {
    let i = event.currentTarget.parentNode.parentNode.getAttribute("data");
    let name = projects.index[i].name;
    projects.deleteProject(name);
    projects.index.splice(i, 1);
    if (projects.index.length == 0) {
      views.renderHome();
    } else {
      views.init(projects.index[0]);
    }
  };

  // main project rendering

  const renderProject = (project, i) => {
    let p = maker("div", { class: "project", data: i }, "", projectList);
    let b = maker("div", { class: "p-box" }, "", p);
    maker("i", { class: "far fa-calendar-check project-icon" }, "", b);
    maker("h3", { class: "project-name" }, project.name, b);
    let d = maker("div", { class: "d-box" }, "", p);
    maker("h3", { class: "project-count" }, `${project.tasks.length}`, d);
    let del = maker("i", { class: "fas fa-trash-alt delete hidden" }, "", d);

    p.addEventListener("mouseenter", showCan);
    p.addEventListener("mouseleave", showCan);

    p.addEventListener("click", changeProject);
    del.addEventListener("click", deleteProject);
  };

  const renderProjects = () => {
    projectList.innerHTML = "";
    projects.index.forEach((project, i) => renderProject(project, i));
  };

  /* event listeners */

  newProject.addEventListener("click", showProjectForm);
  // index.addEventListener("click", showIndex);

  return {
    renderProjects,
    newProjectChanger,
    rerenderProjects,
  };
})();

export { projectViews };
