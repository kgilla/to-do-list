import tasks from "../controllers/tasks";
import { maker } from "../helpers/index";

const taskViews = (() => {
  const main = document.querySelector("#tasks");

  const openEditForm = (e) => {
    let i = e.currentTarget.parentNode.attributes[1].value;
    tasks.openForm(i);
  };

  const markTaskComplete = (task, taskbox) => {
    let c = taskbox.firstChild;
    c.firstChild.classList.toggle("hidden");
    c.classList.toggle(task.priority);
    c.classList.toggle("task-complete");
    c.nextSibling.children[0].classList.toggle("text-done");
    c.nextSibling.children[1].classList.toggle("text-done");
  };

  const completeTask = (e) => {
    let i = e.currentTarget.parentNode.attributes[1].value;
    tasks.handleTaskComplete(i);
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

  const taskMaker = (task, index) => {
    let div = maker("div", { class: "task-box", data: index }, "", main);

    let b = maker("a", { class: `complete-button ${task.priority}` }, "", div);
    maker("i", { class: "fas fa-check checkmark hidden" }, "", b);

    let i = maker("div", { class: "task-info" }, "", div);
    maker("h2", { class: "task-name" }, task.title, i);
    maker("p", { class: "task-date" }, task.dueDate, i);

    let e = maker("i", { class: "fas fa-ellipsis-h task-option" }, "", div);

    b.addEventListener("click", completeTask);
    if (task.done == true) {
      markTaskComplete(task, div);
    }
    e.addEventListener("click", openEditForm);
  };

  const render = (project) => {
    main.innerHTML = "";
    if (project.tasks.length == 0) {
      renderWelcome();
    } else {
      project.tasks.forEach((task, i) => taskMaker(task, i));
    }
  };

  return {
    render,
    markTaskComplete,
  };
})();

export default taskViews;
