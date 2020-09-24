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

  const formClose = (e) => {
    if (e.target == formOverlay) {
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

  const completeTask = (e) => {
    console.log(e.currentTarget.parentNode.attributes[1].value);
    let task = getTaskFromIndex(e.currentTarget.parentNode.attributes[1].value);
    let circle = e.currentTarget;
    markTaskComplete(task, circle);
    task.done == false ? (task.done = true) : (task.done = false);
    projects.save(currentProject());
  };

  const getTaskFromIndex = (index) => {
    let c = currentProject();
    return c.tasks[index];
  };

  const taskChanger = (event) => {
    let i = event.currentTarget.parentNode.parentNode.attributes[1].value;
    let task = getTaskFromIndex(i);
    task.newDate = document.querySelector('[name="e-date"]').value;
    task.priority = document.querySelector(
      `[name="e-radio-${i}"]:checked`
    ).value;
    task.newDescription = document.querySelector(
      '[name="e-description"]'
    ).value;
  };

  const closeTask = (event) => {
    let taskBox = event.currentTarget.parentNode.parentNode;
    taskBox.firstChild.classList.toggle("hidden");
    taskBox.lastChild.classList.toggle("hidden");
    taskBox.lastChild.classList.toggle("unroll");
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

  const selectPriority = (task, l, m, h) => {
    if (task.priority == "high") {
      h.setAttribute("checked", "");
    } else if (task.priority == "medium") {
      m.setAttribute("checked", "");
    } else {
      l.setAttribute("checked", "");
    }
  };

  const renderDate = (task, e) => {
    let d = maker("div", { class: "form-section" }, "", e);
    let data = {
      class: "form-input date-expanded",
      type: "date",
      name: "e-date",
      value: task.dueDate,
    };
    maker(
      "label",
      { for: "date-expanded", class: "form-label" },
      "Due Date:",
      d
    );
    maker("input", data, "", d);
  };

  const renderRadios = (task, e, index) => {
    let q = `e-radio-${index}`;

    let p = maker("div", { class: "form-section" }, "", e);
    maker("label", { for: q, class: "form-label" }, "Task Priority", p);

    let b = maker("div", { class: "radio-buttons" }, "", p);

    let h = maker("input", { type: "radio", name: q, value: "high" }, "", b);
    maker("label", { for: "high", class: "e-form-label" }, "High", b);

    let m = maker(
      "input",
      { type: "radio", name: q, value: "medium" },
      "Medium",
      b
    );
    maker("label", { for: "medium", class: "e-form-label" }, "Medium", b);

    let l = maker("input", { type: "radio", name: q, value: "low" }, "", b);
    maker("label", { for: "low", class: "e-form-label" }, "Low", b);

    selectPriority(task, l, m, h);
  };

  const renderOptions = (task, e, index) => {
    let b = maker("div", { class: "e-options" }, "", e);
    renderDate(task, b);
    renderRadios(task, b, index);
  };

  const renderDescription = (task, e) => {
    let t = maker("div", { class: "form-section" }, "", e);
    maker(
      "label",
      { for: "e-description", class: "form-label" },
      "Task Description",
      t
    );
    maker(
      "textarea",
      { class: "form-input form-textarea", name: "e-description" },
      task.description,
      t
    );
  };

  const renderTaskButtons = (e) => {
    let b = maker("div", { class: "button-box" }, "", e);
    let update = maker("button", { class: "save-changes" }, "Save & Close", b);
    maker("i", { class: "fas fa-check check" }, "", update);
    let remove = maker("button", { class: "delete-task" }, "Delete ", b);
    maker("i", { class: "fas fa-trash-alt trash" }, "", remove);
    update.addEventListener("click", updateTask);
    remove.addEventListener("click", deleteTask);
  };

  const makeExpandedTaskElements = (task, e, index) => {
    let h = maker("h2", { class: "title-expanded" }, task.title, e);
    renderOptions(task, e, index);
    renderDescription(task, e);
    renderTaskButtons(e);
    h.addEventListener("click", closeTask);
  };

  const renderTask = (task, index) => {
    let t = maker("div", { class: "task-box", data: index }, "", main);
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
