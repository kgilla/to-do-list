import tasks from "../controllers/tasks";
import projects from "../controllers/projects";
import forms from "../controllers/forms";
import { maker } from "../helpers/index";

const taskViews = (() => {
  // document selectors
  const main = document.querySelector("#main");

  // task form functions
  const showform = () => {
    forms.showForm();
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

  // const taskChanger = (event) => {
  //   let i = event.currentTarget.parentNode.parentNode.attributes[1].value;
  //   let task = getTaskFromIndex(i);
  //   task.newDate = document.querySelector('[name="e-date"]').value;
  //   task.priority = document.querySelector(
  //     `[name="e-radio-${i}"]:checked`
  //   ).value;
  //   task.newDescription = document.querySelector(
  //     '[name="e-description"]'
  //   ).value;
  // };

  // const updateTask = (event) => {
  //   taskChanger(event);
  //   closeTask(event);
  //   renderTasks(currentProject(), true);
  //   projects.save(currentProject());
  // };

  // const deleteTask = (event) => {
  //   let taskIndex = event.currentTarget.parentNode.getAttribute("data");
  //   let c = currentProject();
  //   c.tasks.splice(taskIndex, 1);
  //   views.render(c);
  //   projects.save(currentProject());
  // };

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

  const expandTask = (e) => {
    if (
      e.target != e.currentTarget.firstChild &&
      e.target != e.currentTarget.firstChild.firstChild
    ) {
      const task = getTaskFromIndex(e.currentTarget.attributes[1].value);
      forms.showForm(task);
    }
  };

  const renderTask = (task, index) => {
    let t = maker("div", { class: "task-regular", data: index }, "", main);
    makeRegularTaskElements(task, t);
    t.addEventListener("click", expandTask);
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
  // createTaskButton.addEventListener("click", getTaskData);

  return {
    renderTasks,
  };
})();

export default taskViews;
