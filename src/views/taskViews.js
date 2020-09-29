import tasks from "../controllers/tasks";
import forms from "../controllers/forms";
import { maker } from "../helpers/index";

const taskViews = (() => {
  // document selectors
  const main = document.querySelector("#tasks");

  //state
  // let currentProject = "";

  // // task form functions
  // const showform = () => {
  //   forms.openTaskForm();
  // };

  // const showEditTaskForm = (e) => {
  //   const i = e.currentTarget.parentNode.attributes[1].value;
  //   forms.openTaskForm(currentProject.tasks[i]);
  // };

  // const validateForm = () => {
  //   if (form[0].value == "") {
  //     formError(form[0]);
  //   } else if (form[1].value == "") {
  //     formError(form[1]);
  //   } else {
  //     let radio = document.querySelector("input[name=r1]:checked").value;
  //     return [form[0].value, form[1].value, radio, form[5].value];
  //   }
  // };

  // const getTaskData = () => {
  //   let taskData = validateForm();
  //   if (taskData) {
  //     tasks.create(taskData, currentProject());
  //     form.reset();
  //     showform();
  //   }
  // };
  const handleClick = (e) => {
    let i = e.currentTarget.parentNode.attributes[1].value;
    tasks.showEditTaskForm(i);
  };

  const markTaskComplete = (task, box) => {
    let c = box.firstChild;
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
      markTaskComplete(task, b);
    }
    e.addEventListener("click", tasks.showEditTaskForm);
  };

  const renderTasks = (project) => {
    main.innerHTML = "";
    if (project.tasks.length == 0) {
      renderWelcome();
    } else {
      project.tasks.forEach((task, i) => taskMaker(task, i));
    }
  };

  return {
    renderTasks,
    markTaskComplete,
  };
})();

export default taskViews;
