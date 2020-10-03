import tasks from "../controllers/tasks";
import { maker } from "../helpers/index";

const taskViews = (() => {
  const main = document.querySelector("#main");

  const openEditForm = (e) => {
    let id = e.currentTarget.parentNode.parentNode.attributes[1].value;
    tasks.openForm(id);
  };

  const openNewForm = () => {
    tasks.openForm();
  };

  const showDetails = (e) => {
    if (
      e.target !== e.currentTarget.firstChild &&
      e.target !== e.currentTarget.firstChild.firstChild
    ) {
      e.currentTarget.classList.toggle("hidden");
      e.currentTarget.nextSibling.classList.toggle("expand");
      e.currentTarget.nextSibling.classList.toggle("hidden");
    }
  };

  const hideDetails = (e) => {
    e.currentTarget.parentNode.parentNode.classList.toggle("expand");
    e.currentTarget.parentNode.parentNode.classList.toggle("hidden");
    e.currentTarget.parentNode.parentNode.previousSibling.classList.toggle(
      "hidden"
    );
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
    tasks.handleTaskComplete(node, id);
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

  const renderTaskDetails = (parent, task) => {
    let div = maker(
      "div",
      { class: "task-details-box hidden", data: task.id },
      "",
      parent
    );
    let header = maker("header", { id: "details-header" }, "", div);
    maker("h2", { class: "details-title" }, task.title, header);
    maker("h3", { class: "details-date" }, task.date, header);
    let b = maker(
      "i",
      { class: "fas fa-ellipsis-h", id: "edit-task-button" },
      "",
      header
    );
    b.addEventListener("click", openEditForm);

    let main = maker("main", { id: "details-main" }, "", div);
    maker("p", { class: "details-description" }, task.description, main);
    let footer = maker("footer", { class: "details-footer" }, "", div);
    let close = maker("i", { class: "fas fa-chevron-up" }, "", footer);
    close.addEventListener("click", hideDetails);
  };

  const renderTask = (parent, task) => {
    let div = maker("div", { class: "task-box", data: task.id }, "", parent);

    let b = maker(
      "div",
      { class: `complete-button ${task.priority}` },
      "",
      div
    );
    maker("i", { class: "fas fa-check checkmark hidden" }, "", b);

    let c = maker("div", { class: "task-info" }, "", div);
    maker("h2", { class: "task-name" }, task.title, c);
    maker("p", { class: "task-date" }, task.date, c);

    b.addEventListener("click", completeTask);
    if (task.done == true) {
      markTaskComplete(task, div);
    }
    div.addEventListener("click", showDetails);
  };

  const taskMaker = (task) => {
    let div = maker(
      "div",
      { class: "task-container", data: task.id },
      "",
      main
    );
    renderTask(div, task);
    renderTaskDetails(div, task);
  };

  const render = (project) => {
    if (project.tasks.length == 0) {
      renderWelcome();
    } else {
      project.tasks.forEach((task, i) => taskMaker(task, i));
      let b = maker(
        "button",
        { type: "button", id: "new-task-button" },
        "Add Task",
        main
      );
      maker("i", { class: "fas fa-plus", id: "plus" }, "", b);
      b.addEventListener("click", openNewForm);
    }
  };

  return {
    render,
    renderTaskDetails,
    markTaskComplete,
  };
})();

export default taskViews;
