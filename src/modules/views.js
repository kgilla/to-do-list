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
    currentProject = p;
    renderProjects();
    initDom();
  };

  const initDom = () => {
    renderTasks(currentProject);
    heading.textContent = currentProject.name;
    projectList.firstChild.classList.toggle("selected");
  };

  const render = () => {
    let selected = document.querySelector(".selected").getAttribute("data");
    renderProjects();
    projectList.childNodes[selected].classList.toggle("selected");
    heading.textContent = currentProject.name;
    renderTasks(currentProject);
  };

  const changeProject = (event) => {
    document.querySelector(".selected").classList.toggle("selected");
    event.currentTarget.classList.toggle("selected");
    currentProject = projects.index[event.currentTarget.getAttribute("data")];
    render();
  };

  const newProjectChanger = (project) => {
    currentProject = project;
    renderProjects();
    renderTasks(currentProject);
    heading.textContent = currentProject.name;
    projectList.lastChild.classList.toggle("selected");
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

  const renderProject = (project, i) => {
    let p = maker("div", { class: "project", data: i }, "", projectList);
    maker("h3", { class: "project-name" }, project.name, p);
    maker("h3", { class: "project-count" }, `${project.tasks.length}`, p);
    p.addEventListener("click", changeProject);
  };

  /* multiple project rendering */

  const renderProjects = () => {
    projectList.innerHTML = "";
    projects.index.forEach((project, i) => renderProject(project, i));
  };

  /* task form stuff */

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

  //task functions

  const expandTask = (event) => {
    if (event.target != event.currentTarget.firstChild) {
      event.currentTarget.classList.toggle("hidden");
      event.currentTarget.nextSibling.classList.toggle("hidden");
    }
  };

  const completeTask = (event) => {
    let task = getTaskFromIndex(event.currentTarget.parentNode);
    event.currentTarget.classList.toggle(task.priority);
    event.currentTarget.classList.toggle("task-complete");
    event.currentTarget.parentNode.children[1].classList.toggle("text-done");
    event.currentTarget.parentNode.children[2].classList.toggle("text-done");
  };

  const getTaskFromIndex = (taskBox) => {
    return currentProject.tasks[taskBox.getAttribute("data")];
  };

  const closeTask = (event) => {
    let taskBox = event.currentTarget.parentNode.parentNode;
    taskBox.firstChild.classList.toggle("hidden");
    taskBox.lastChild.classList.toggle("hidden");
  };

  const updateTask = (event) => {
    let task = getTaskFromIndex(event.currentTarget.parentNode);
    task.description = event.currentTarget.previousSibling.value;
    task.dueDate = event.currentTarget.previousSibling.previousSibling.value;
    closeTask(event);
    renderTasks(currentProject);
    projects.save(currentProject);
  };

  const deleteTask = (event) => {
    currentProject.tasks.splice(
      event.currentTarget.parentNode.getAttribute("data"),
      1
    );
    render();
    projects.save(currentProject);
  };

  // task maker

  const makeRegularTaskElements = (task, r) => {
    let a = maker("a", { class: `complete-button ${task.priority}` }, "", r);
    maker("h2", { class: "title-regular" }, task.title, r);
    maker("p", { class: "date-regular" }, task.dueDate, r);

    a.addEventListener("click", completeTask);
  };

  const makeExpandedTaskElements = (task, e) => {
    maker("h2", { class: "title-expanded" }, task.title, e);
    let data = { class: "date-expanded", type: "date", value: task.dueDate };
    maker("input", data, "", e);
    maker("textarea", { class: "description-expanded" }, task.description, e);

    let save = maker("button", { class: "save-changes" }, "Save Task", e);
    let remove = maker("button", { class: "delete-task" }, "Delete", e);
    save.addEventListener("click", updateTask);
    remove.addEventListener("click", deleteTask);
  };

  const renderTask = (task, index) => {
    let t = maker("div", { class: "task-box", data: index }, "", main);
    let r = maker("div", { class: "task-regular", data: index }, "", t);
    let e = maker("div", { class: "hidden task-expanded", data: index }, "", t);

    r.addEventListener("click", expandTask);

    makeRegularTaskElements(task, r);
    makeExpandedTaskElements(task, e);
  };

  const renderTasks = (p) => {
    main.innerHTML = "";
    p.tasks.forEach((task, i) => renderTask(task, i));
  };

  /* event listeners */

  formOverlay.addEventListener("click", formClose);
  newTask.addEventListener("click", showform);
  createTaskButton.addEventListener("click", getTaskData);
  newProject.addEventListener("click", showProjectForm);

  return {
    renderTasks,
    renderProjects,
    newProjectChanger,
    render,
    init,
  };
})();

export { views };
