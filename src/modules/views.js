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
    if (event.target != event.currentTarget.firstChild) {
      console.log(event.target);
      event.currentTarget.classList.toggle("hidden");
      event.currentTarget.nextSibling.classList.toggle("hidden");
    }
  };

  const completeTask = (event) => {
    event.currentTarget.classList.toggle("task-complete");
    event.currentTarget.nextSibling.classList.toggle("text-done");
  };

  const renderTask = (task) => {
    //base task elements
    let t = maker("div", { class: "task-box" }, "", main);

    let r = maker("div", { class: "task-regular" }, "", t);
    let a = maker("a", { class: `complete-button ${task.priority}` }, "", r);
    maker("h2", { class: "title-regular" }, task.title, r);
    maker("p", { class: "date-regular" }, task.dueDate, r);

    //expanded task elements
    let s = maker("div", { class: "hidden task-expanded" }, "", t);
    maker("h2", { class: "title-expanded" }, task.title, s);
    maker(
      "input",
      { class: "date-expanded", type: "date", value: task.dueDate },
      "",
      s
    );
    maker("textarea", { class: "description-expanded" }, task.description, s);
    maker("button", { class: "save-changes" }, "Save Changes", s);
    let g = maker("button", { class: "delete-task" }, "Delete Task", s);

    r.addEventListener("click", expandTask);
    a.addEventListener("click", completeTask);
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
