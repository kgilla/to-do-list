import forms from "../controllers/forms";
import taskController from "../controllers/tasks";
import { maker } from "../helpers/index";

const taskViews = (() => {
  const main = document.querySelector("#main");

  const openEditForm = (e) => {
    const id = e.currentTarget.parentNode.parentNode.attributes[1].value;
    closeDropdown();
    taskController.openForm(id);
  };

  const openDeleteForm = (e) => {
    const id = e.currentTarget.parentNode.parentNode.attributes[1].value;
    closeDropdown();
    forms.openDeleteForm(id);
  };

  const openNewForm = (e) => {
    // console.log(e.currentTarget.attributes[2].value);
    taskController.openForm();
  };

  const openDropDown = (e) => {
    renderDropdown(e.currentTarget.parentNode.parentNode);
  };

  const closeDropdown = () => {
    document.querySelector("#trans-overlay").remove();
    document.querySelector(".dropdown").remove();
  };

  const showDetails = (e) => {
    if (
      e.target !== e.currentTarget.firstChild &&
      e.target !== e.currentTarget.firstChild.firstChild
    ) {
      e.currentTarget.nextSibling.classList.toggle("expand");
      e.currentTarget.nextSibling.firstChild.classList.toggle("hidden");
    }
  };

  const markTaskComplete = (node, task) => {
    node.firstChild.classList.toggle("hidden");
    node.classList.toggle(task.priority);
    node.classList.toggle("task-complete");
    node.nextSibling.children[0].classList.toggle("text-done");
    node.nextSibling.children[1].classList.toggle("text-done");
  };

  const completeTask = (e) => {
    let id = e.currentTarget.parentNode.attributes[1].value;
    let node = e.currentTarget;
    taskController.handleTaskComplete(node, id);
  };

  const renderDropdown = (parent) => {
    let overlay = maker("div", { id: "trans-overlay" }, "", main);
    let div = maker("div", { class: "dropdown" }, "", parent);
    let edit = maker("button", { class: "dropdown-button" }, "Edit Task", div);
    let remove = maker(
      "button",
      { class: "dropdown-button" },
      "Delete Task",
      div
    );
    edit.addEventListener("click", openEditForm);
    remove.addEventListener("click", openDeleteForm);
    overlay.addEventListener("click", closeDropdown);
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

  const renderTaskExpanded = (parent, task) => {
    let div = maker(
      "div",
      { class: "task-expanded", data: task.id },
      "",
      parent
    );
    let button = maker("button", { class: "edit-task-button hidden" }, "", div);
    let b = maker("i", { class: "fas fa-ellipsis-h" }, "", button);
    button.addEventListener("click", openDropDown);
    let main = maker("main", { id: "details-main" }, "", div);
    maker("p", { class: "details-description" }, task.description, main);
  };

  const renderTaskCollapsed = (parent, task) => {
    let div = maker(
      "div",
      { class: "task-collapsed", data: task.id },
      "",
      parent
    );

    let button = maker(
      "button",
      { class: `complete-button ${task.priority}` },
      "",
      div
    );
    maker("i", { class: "fas fa-check checkmark hidden" }, "", button);

    let info = maker("div", { class: "task-info" }, "", div);
    maker("h2", { class: "task-name" }, task.title, info);
    maker("p", { class: "task-date" }, task.date, info);

    div.addEventListener("click", showDetails);
    button.addEventListener("click", completeTask);
    task.done ? markTaskComplete(task, div) : null;
  };

  const renderTask = (task) => {
    let div = maker("div", { class: "task-box", data: task.id }, "", main);
    renderTaskCollapsed(div, task);
    renderTaskExpanded(div, task);
  };

  const render = (project) => {
    if (project.tasks.length == 0) {
      renderWelcome();
    } else {
      project.tasks.forEach((task) => renderTask(task));
      let button = maker(
        "button",
        { type: "button", class: "new-task-button", data: project.id },
        "Add Task",
        main
      );
      maker("i", { class: "fas fa-plus", id: "plus" }, "", button);
      button.addEventListener("click", openNewForm);
    }
  };

  return {
    render,
    markTaskComplete,
    renderWelcome,
  };
})();

export default taskViews;
