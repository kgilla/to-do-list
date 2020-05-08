import { tasks } from "./tasks";
import { projects } from "./projects";

const views = (() => {
  const main = document.querySelector("#content");

  // sidenav selectors
  const newProject = document.querySelector("#new-project");
  const projectList = document.querySelector("#projects");

  // header selectors
  const newTask = document.querySelector("#new-task");
  const heading = document.querySelector("#project-heading");

  // task form selectors
  const formOverlay = document.querySelector("#form-overlay");
  const form = document.querySelector("#task-form");
  const createTaskButton = document.querySelector("#form-submit");

  // element states
  let formOpen = false;
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

  // project views
  const init = (p) => {
    renderProjects();
    renderTasks(p);
    projectList.firstChild.classList.toggle("selected");
    heading.textContent = p.name;
    currentProject = p;
  };

  const selectProject = (event) => {
    let target = event.currentTarget;
    currentProject = projects.findProject(target.firstChild.textContent);
    update();
  };

  const update = () => {
    document.querySelector(".selected").classList.toggle("selected");
    renderTasks(currentProject);
    currentProject.element.classList.toggle("selected");
    heading.textContent = currentProject.name;
  };

  // project creation
  const showProjectForm = () => {
    formOpen == true ? closeProjectForm() : makeProjectForm();
  };

  const closeProjectForm = () => {
    projectList.removeChild(projectList.lastChild);
    formOpen = false;
  };

  const makeProjectForm = () => {
    let attr = { placeholder: "Project Name", id: "project-form" };
    let form = maker("input", attr, "", projectList);
    form.addEventListener("keydown", getProjectData);
    form.focus();
    formOpen = true;
  };

  const getProjectData = (event) => {
    if (event.key == "Enter") {
      closeProjectForm();
      projects.create(event.target.value);
    }
  };

  const renderProject = (project) => {
    let p = maker("div", { class: "project" }, "", projectList);
    maker("h3", { class: "project-name" }, project.name, p);
    maker("h3", { class: "project-count" }, "0", p);
    p.addEventListener("click", selectProject);
    projects.findProject(project.name).element = p;
  };

  /* multiple project rendering */
  const renderProjects = () => {
    projectList.innerHTML = "";
    projects.index.forEach((project) => renderProject(project));
  };

  /* task views */
  const showform = () => {
    formOverlay.classList.toggle("hidden");
    form.classList.toggle("hidden");
  };

  const formClose = () => {
    if (event.target == formOverlay) {
      showform();
    }
  };

  const getTaskData = () => {
    let radio = document.querySelector('input[type="radio"]:checked').value;
    let taskData = [form[0].value, form[1].value, radio, form[5].value];
    tasks.create(taskData, currentProject);
    showform();
  };

  const expandTask = (event) => {
    event.currentTarget.childNodes[3].classList.toggle("hidden");
    event.currentTarget.classList.toggle("grow");
  };

  const renderTask = (task) => {
    //base task elements
    let t = maker("div", { class: `task-box ${task.priority}` }, "", main);
    maker("input", { class: "checkBox", type: "checkbox" }, "", t);
    maker("h2", { class: "task-title" }, task.title, t);
    maker("a", { class: "task-expand" }, "^", t);
    t.addEventListener("click", expandTask);

    //expanded task elements
    let s = maker("div", { class: "hidden secret-box" }, "", t);
    maker("h2", { class: "task-date" }, `Due Date: ${task.dueDate}`, s);
    maker("p", { class: "task-details" }, `Details: ${task.description}`, s);
  };

  const renderNewTask = (task) => {
    renderTask(task);
    currentProject.element.lastChild.textContent = currentProject.taskCount();
  };

  const renderTasks = (p) => {
    main.innerHTML = "";
    p.tasks.forEach((task) => renderTask(task));
  };

  /* event listeners */
  formOverlay.addEventListener("click", formClose);
  newTask.addEventListener("click", showform);
  createTaskButton.addEventListener("click", getTaskData);
  newProject.addEventListener("click", showProjectForm);

  return {
    renderTasks,
    renderNewTask,
    renderProjects,
    renderProject,
    init,
  };
})();

export { views };
