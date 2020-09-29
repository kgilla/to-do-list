import projects from "../controllers/projects";
import taskViews from "./taskViews";
import { maker } from "../helpers/index";

const projectViews = (() => {
  const newProject = document.querySelector("#new-project");
  const projectList = document.querySelector("#projects");
  const sideNav = document.querySelector("#side-nav");
  const expandNav = document.querySelector("#expand-nav");
  const formOverlay = document.querySelector("#form-overlay");

  window.innerWidth < 900 ? sideNav.classList.add("collapse") : null;
  window.innerWidth > 900 ? expandNav.classList.add("hidden") : null;

  // element states
  let currentProject = "";

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
      // if (window.innerWidth < 900) {
      //   handleClick();
      // }
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
    // document.activeElement.scrollIntoView();
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

  // const showCan = (e) => {
  //   e.currentTarget.lastChild.lastChild.classList.toggle("hidden");
  // };

  const deleteProject = (e) => {
    let i = e.currentTarget.parentNode.parentNode.getAttribute("data");
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
    // let del = maker("i", { class: "fas fa-trash-alt delete hidden" }, "", d);

    // p.addEventListener("mouseenter", showCan);
    // p.addEventListener("mouseleave", showCan);

    p.addEventListener("click", changeProject);
    // del.addEventListener("click", deleteProject);
  };

  const renderProjects = () => {
    projectList.innerHTML = "";
    projects.index.forEach((project, i) => renderProject(project, i));
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

  newProject.addEventListener("click", showProjectForm);
  window.addEventListener("resize", handleWindowResize);
  expandNav.addEventListener("click", handleClick);

  return {
    renderProjects,
    newProjectChanger,
    rerenderProjects,
  };
})();

export default projectViews;
