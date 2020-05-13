import { tasks } from "./tasks";
import { projects } from "./projects";
import { views } from "./views";

const taskViews = (() => {
  // document selectors

  const main = document.querySelector("#main");
  const formOverlay = document.querySelector("#form-overlay");
  const form = document.querySelector("#task-form");
  const createTaskButton = document.querySelector("#form-submit");

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

  // task form functions

  const showform = () => {
    formOverlay.classList.toggle("hidden");
    formOverlay.classList.toggle("curtain");
    form.classList.toggle("hidden");
    form.classList.toggle("curtain");
  };

  const formClose = () => {
    if (event.target == formOverlay) {
      showform();
    }
  };

  const formError = (element) => {
    element.classList.toggle("error");
    setTimeout((f) => element.classList.toggle("error"), 500);
  };

  const validateForm = () => {
    if (form[0].value == "") {
      formError(form[0]);
    } else if (form[1].value == "") {
      formError(form[1]);
    } else {
      let radio = document.querySelector("input[name=r1]:checked").value;
      return [form[0].value, form[1].value, radio, form[5].value];
    }
  };

  const getTaskData = () => {
    let taskData = validateForm();
    if (taskData) {
      tasks.create(taskData, currentProject());
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
      event.currentTarget.nextSibling.classList.toggle("unroll");
    }
  };

  const currentProject = () => {
    let p = document.querySelector(".selected");
    if (p == null) {
      alert("select a project");
    } else {
      return projects.index[p.getAttribute("data")];
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
    projects.save(currentProject());
  };

  const getTaskFromIndex = (taskBox) => {
    let c = currentProject();
    return c.tasks[taskBox.getAttribute("data")];
  };

  const taskChanger = (event) => {
    let task = getTaskFromIndex(event.currentTarget.parentNode);
    let name = "re" + event.currentTarget.parentNode.getAttribute("data");
    task.description = event.currentTarget.previousSibling.lastChild.value;
    task.dueDate = event.currentTarget.parentNode.childNodes[1].lastChild.value;
    task.priority = document.querySelector(`input[name=${name}]:checked`).value;
  };

  const closeTask = (event) => {
    let taskBox = event.currentTarget.parentNode.parentNode;
    taskBox.firstChild.classList.toggle("hidden");
    taskBox.lastChild.classList.toggle("hidden");
  };

  const updateTask = (event) => {
    taskChanger(event);
    closeTask(event);
    renderTasks(currentProject(), true);
    projects.save(currentProject());
  };

  const deleteTask = (event) => {
    let taskIndex = event.currentTarget.parentNode.getAttribute("data");
    let c = currentProject();
    c.tasks.splice(taskIndex, 1);
    views.render(c);
    projects.save(currentProject());
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

    let h = maker("input", { type: "radio", name: q, value: "high" }, "", p);
    maker("label", { for: "high", class: "e-form-label" }, "High", p);

    let m = maker(
      "input",
      { type: "radio", name: q, value: "medium" },
      "Medium",
      p
    );
    maker("label", { for: "medium", class: "e-form-label" }, "Medium", p);

    let l = maker("input", { type: "radio", name: q, value: "low" }, "", p);
    maker("label", { for: "low", class: "e-form-label" }, "Low", p);

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
    maker("i", { class: "fas fa-check check" }, "", update);
    let remove = maker("button", { class: "delete-task" }, "Delete ", e);
    maker("i", { class: "fas fa-trash-alt trash" }, "", remove);
    update.addEventListener("click", updateTask);
    remove.addEventListener("click", deleteTask);
  };

  const makeExpandedTaskElements = (task, e, index) => {
    let h = maker("h2", { class: "title-expanded" }, task.title, e);
    renderDate(task, e);
    renderRadios(task, e, index);
    renderDescription(task, e);
    renderTaskButtons(e);
    h.addEventListener("click", closeTask);
  };

  const renderTask = (task, index) => {
    let t = maker("div", { class: "task-box slide-in", data: index }, "", main);
    let r = maker("div", { class: "task-regular", data: index }, "", t);
    let e = maker("div", { class: "hidden task-expanded", data: index }, "", t);

    r.addEventListener("click", expandTask);

    makeRegularTaskElements(task, r);
    makeExpandedTaskElements(task, e, index);
  };

  const renderWelcome = () => {
    let mat = maker("div", { class: "welcome-mat" }, "", main);
    maker("h2", { class: "welcome-header" }, "Wow Such Empty!", mat);
    maker("i", { class: "far fa-surprise surprise" }, "", mat);
    maker(
      "h2",
      { class: "welcome-header" },
      "Could You Be Done... Everything?!",
      mat
    );
  };

  const renderProjectHeader = (project) => {
    let container = maker("div", { class: "project-container" }, "", main);
    maker("h2", { class: "project-heading" }, project.name, container);
    let but = maker("button", { class: "new-task" }, "Add Task", container);
    but.addEventListener("click", showform);
  };

  const renderTasks = (p, clear) => {
    if (clear == true) {
      main.innerHTML = "";
    }
    if (p.tasks.length == 0) {
      renderProjectHeader(p);
      renderWelcome();
    } else {
      renderProjectHeader(p);
      p.tasks.forEach((task, i) => renderTask(task, i));
    }
  };

  // event listeners
  formOverlay.addEventListener("click", formClose);
  createTaskButton.addEventListener("click", getTaskData);

  return {
    renderTasks,
  };
})();

export { taskViews };
