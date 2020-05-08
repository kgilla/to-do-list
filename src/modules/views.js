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
  const taskForm = document.querySelector("#task-form");
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
    currentProject.element.classList.toggle("selected");
    renderTasks(currentProject);
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

  const renderNewProject = (project) => {
    let p = maker("div", { class: "project" }, "", projectList);
    maker("h3", { class: "project-name" }, project.name, p);
    maker("h3", { class: "project-count" }, "0", p);
    p.addEventListener("click", selectProject);
    projects.findProject(project.name).element = p;
  };

  /* multiple project rendering */

  const renderProjects = () => {
    projectList.innerHTML = "";
    projects.index.forEach((project) => {
      let p = maker("div", { class: "project" }, "", projectList);
      maker("h3", { class: "project-name" }, project.name, p);
      maker("h3", { class: "project-count" }, project.taskCount(), p);
      p.addEventListener("click", selectProject);
      projects.findProject(project.name).element = p;
    });
  };

  /* task views */

  const showTaskForm = () => {
    formOverlay.classList.toggle("hidden");
    taskForm.classList.toggle("hidden");
  };

  const taskFormClose = () => {
    if (event.target == formOverlay) {
      showTaskForm();
    }
  };

  const getTaskData = () => {
    let taskData = [
      taskForm[0].value,
      taskForm[1].value,
      document.querySelector('input[type="radio"]:checked').value,
      taskForm[5].value,
    ];
    tasks.create(taskData, currentProject);
    showTaskForm();
  };

  const expandTask = (event) => {
    event.currentTarget.childNodes[3].classList.toggle("hidden");
    event.currentTarget.classList.toggle("grow");
  };

  const renderTask = (task) => {
    let t = maker("div", { class: `task-box ${task.priority}` }, "", main);
    maker("input", { class: "checkBox", type: "checkbox" }, "", t);
    maker("h2", { class: "task-title" }, task.title, t);
    maker("a", { class: "task-expand" }, "^", t);
    t.addEventListener("click", expandTask);

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
    p.tasks.forEach((task) => {
      renderTask(task);
    });
  };

  /* event listeners */

  formOverlay.addEventListener("click", taskFormClose);
  newTask.addEventListener("click", showTaskForm);
  createTaskButton.addEventListener("click", getTaskData);
  newProject.addEventListener("click", showProjectForm);

  return {
    renderTasks,
    renderNewTask,
    renderProjects,
    renderNewProject,
    init,
  };
})();

export { views };
