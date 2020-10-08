import forms from "../controllers/forms";
import taskController from "../controllers/tasks";
import defaultViews from "../views/defaultViews";
import { maker } from "../helpers/index";
import moment from "moment";

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
    taskController.openForm();
  };

  const openDropDown = (e) => {
    renderDropdown(e.currentTarget.parentNode);
  };

  const closeDropdown = () => {
    document.querySelector("#trans-overlay").remove();
    document.querySelector(".dropdown").remove();
  };

  const showDetails = (e) => {
    e.currentTarget.parentNode.nextSibling.classList.toggle("expand");
    e.currentTarget.parentNode.lastChild.classList.toggle("hidden");
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

  const renderTaskExpanded = (parent, task) => {
    let div = maker(
      "div",
      { class: "task-expanded", data: task.id },
      "",
      parent
    );
    maker("p", { class: "details-description" }, task.description, div);
  };

  const renderTaskCollapsed = (parent, task) => {
    let div = maker(
      "div",
      { class: "task-collapsed", data: task.id },
      "",
      parent
    );

    let clickArea = maker("div", { class: "task-click-area" }, "", div);

    let button = maker(
      "button",
      { class: `complete-button ${task.priority}` },
      "",
      div
    );
    maker("i", { class: "fas fa-check checkmark hidden" }, "", button);

    let info = maker("div", { class: "task-info" }, "", div);
    maker("h2", { class: "task-name" }, task.title, info);
    maker(
      "p",
      { class: "task-date" },
      task.date ? moment(task.date).format("MMMM Do YYYY") : null,
      info
    );

    let btn = maker("button", { class: "edit-task-button hidden" }, "", div);
    maker("i", { class: "fas fa-ellipsis-h" }, "", btn);

    btn.addEventListener("click", openDropDown);
    clickArea.addEventListener("click", showDetails);
    button.addEventListener("click", completeTask);
    task.done ? markTaskComplete(button, task) : null;
  };

  const renderTask = (task) => {
    let div = maker("div", { class: "task-box", data: task.id }, "", main);
    renderTaskCollapsed(div, task);
    renderTaskExpanded(div, task);
  };

  const render = (project) => {
    if (project.tasks.length == 0) {
      defaultViews.renderWelcome(
        "fas fa-tasks",
        "Wow such empty!",
        "Let's create some tasks and Get Er' Done!"
      );
    } else {
      project.tasks.forEach((task) => renderTask(task));
      let button = maker(
        "button",
        { type: "button", class: "new-task-button", data: project.id },
        "Add Task",
        main
      );
      maker("i", { class: "fas fa-plus" }, "", button);
      button.addEventListener("click", openNewForm);
    }
  };

  return {
    render,
    markTaskComplete,
  };
})();

export default taskViews;
