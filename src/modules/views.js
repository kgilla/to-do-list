import { tasks } from "./tasks";
import { projects } from "./projects";

const views = (() => {
  const main = document.querySelector("#content");

  // sidenav selectors
  const newProject = document.querySelector("#new-project");
  const projectList = document.querySelector("#projects");
  const index = document.querySelector("#allTasks");

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

  // project init needs work

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

  const showIndex = () => {
    //hide new task button
    // display all projects with a heading and show all
  };

  // functions for maintaining state during renders

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

  // project form functions

  const showProjectForm = () => {
    formOpen == true ? closeProjectForm() : makeProjectForm();
  };

  const closeProjectForm = () => {
    projectList.removeChild(projectList.lastChild);
    formOpen = false;
  };

  const makeProjectForm = () => {
    let form = maker(
      "input",
      { placeholder: "Project Name", id: "project-form" },
      "",
      projectList
    );
    form.addEventListener("keydown", getProjectData);
    form.focus();
    formOpen = true;
  };

  const getProjectData = (event) => {
    if (event.key == "Enter") {
      if (event.currentTarget.value == "") {
        let form = document.querySelector("#project-form");
        form.classList.toggle("error");
        setTimeout((f) => form.classList.toggle("error"), 500);
      } else {
        closeProjectForm();
        projects.create(event.target.value);
      }
    }
  };

  // main project rendering

  const renderProject = (project, i) => {
    let p = maker("div", { class: "project", data: i }, "", projectList);
    maker("h3", { class: "project-name" }, project.name, p);
    maker("h3", { class: "project-count" }, `${project.tasks.length}`, p);
    p.addEventListener("click", changeProject);
  };

  const renderProjects = () => {
    projectList.innerHTML = "";
    projects.index.forEach((project, i) => renderProject(project, i));
  };

  /* task form functions */

  const showform = () => {
    formOverlay.classList.toggle("hidden");
    form.classList.toggle("hidden");
  };

  const formClose = () => {
    if (event.target == formOverlay) {
      showform();
    }
  };

  const validateForm = () => {
    if (form[0].value == "") {
      form[0].classList.toggle("error");
      setTimeout((f) => form[0].classList.toggle("error"), 500);
    } else if (form[1].value == "") {
      form[1].classList.toggle("error");
      setTimeout((f) => form[1].classList.toggle("error"), 500);
    } else {
      let radio = document.querySelector("input[name=r1]:checked").value;
      return [form[0].value, form[1].value, radio, form[5].value];
    }
  };

  const getTaskData = () => {
    let taskData = validateForm();
    if (taskData) {
      tasks.create(taskData, currentProject);
      form.reset();
      showform();
    }
  };

  //task functions

  const expandTask = (event) => {
    if (
      event.target != event.currentTarget.firstChild &&
      event.target != event.currentTarget.firstChild.firstChild
    ) {
      event.currentTarget.classList.toggle("hidden");
      event.currentTarget.nextSibling.classList.toggle("hidden");
    }
  };

  const markTaskComplete = (task, b) => {
    b.firstChild.classList.toggle("hidden");
    b.classList.toggle(task.priority);
    b.classList.toggle("task-complete");
    b.parentNode.children[1].classList.toggle("text-done");
    b.parentNode.children[2].classList.toggle("text-done");
  };

  const completeTask = (event) => {
    let task = getTaskFromIndex(event.currentTarget.parentNode);
    let circle = event.currentTarget;
    markTaskComplete(task, circle);
    task.done == false ? (task.done = true) : (task.done = false);
  };

  const getTaskFromIndex = (taskBox) => {
    return currentProject.tasks[taskBox.getAttribute("data")];
  };

  const closeTask = (event) => {
    let taskBox = event.currentTarget.parentNode.parentNode;
    taskBox.firstChild.classList.toggle("hidden");
    taskBox.lastChild.classList.toggle("hidden");
  };

  const taskChanger = (event) => {
    let task = getTaskFromIndex(event.currentTarget.parentNode);
    let name = "re" + event.currentTarget.parentNode.getAttribute("data");
    task.description = event.currentTarget.previousSibling.lastChild.value;
    task.dueDate = event.currentTarget.parentNode.childNodes[1].lastChild.value;
    task.priority = document.querySelector(`input[name=${name}]:checked`).value;
  };

  const updateTask = (event) => {
    taskChanger(event);
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
    let b = maker("a", { class: `complete-button ${task.priority}` }, "", r);
    maker("i", { class: "fas fa-check checkmark hidden" }, "", b);
    maker("h2", { class: "title-regular" }, task.title, r);
    maker("p", { class: "date-regular" }, task.dueDate, r);
    b.addEventListener("click", completeTask);
    if (task.done == true) {
      markTaskComplete(task, b);
    }
  };

  // expanded task elements

  const renderDate = (task, e) => {
    let d = maker("div", { class: "e-date-box" }, "", e);
    let data = { class: "date-expanded", type: "date", value: task.dueDate };
    maker(
      "label",
      { for: "date-expanded", class: "e-form-label" },
      "Due Date:",
      d
    );
    maker("input", data, "", d);
  };

  const selectPriority = (task, l, m, h) => {
    if (task.priority == "high") {
      h.setAttribute("checked", "");
    } else if (task.priority == "medium") {
      m.setAttribute("checked", "");
    } else {
      l.setAttribute("checked", "");
    }
  };

  const renderRadios = (task, e, index) => {
    let q = `re${index}`;

    let p = maker("div", { class: "e-radio-box" }, "", e);
    maker("label", { for: q, class: "e-form-label" }, "Task Priority:", p);
    maker("label", { for: "high", class: "e-form-label" }, " High", p);
    let h = maker("input", { type: "radio", name: q, value: "high" }, "", p);
    maker("label", { for: "medium", class: "e-form-label" }, "| Medium", p);
    let m = maker(
      "input",
      { type: "radio", name: q, value: "medium" },
      "Medium",
      p
    );
    maker("label", { for: "low", class: "e-form-label" }, "| Low", p);
    let l = maker("input", { type: "radio", name: q, value: "low" }, "", p);
    selectPriority(task, l, m, h);
  };

  const renderDescription = (task, e) => {
    let t = maker("div", { class: "e-text-box" }, "", e);
    maker(
      "label",
      { for: "description-expanded", class: "e-form-label" },
      "Task Description",
      t
    );
    maker("textarea", { class: "description-expanded" }, task.description, t);
  };

  const renderTaskButtons = (e) => {
    let update = maker("button", { class: "save-changes" }, "Save & Close", e);
    let remove = maker("button", { class: "delete-task" }, "Delete ", e);
    maker("i", { class: "fas fa-trash-alt" }, "", remove);
    update.addEventListener("click", updateTask);
    remove.addEventListener("click", deleteTask);
  };

  const makeExpandedTaskElements = (task, e, index) => {
    maker("h2", { class: "title-expanded" }, task.title, e);
    renderDate(task, e);
    renderRadios(task, e, index);
    renderDescription(task, e);
    renderTaskButtons(e);
  };

  const renderTask = (task, index) => {
    let t = maker("div", { class: "task-box", data: index }, "", main);
    let r = maker("div", { class: "task-regular", data: index }, "", t);
    let e = maker("div", { class: "hidden task-expanded", data: index }, "", t);

    r.addEventListener("click", expandTask);

    makeRegularTaskElements(task, r);
    makeExpandedTaskElements(task, e, index);
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
  index.addEventListener("click", showIndex);

  return {
    renderTasks,
    renderProjects,
    newProjectChanger,
    render,
    init,
  };
})();

export { views };
