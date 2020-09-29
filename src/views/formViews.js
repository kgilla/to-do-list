import { maker } from "../helpers/index";

const formViews = (() => {
  const formBox = document.querySelector("#form-box");

  const getTaskFormData = () => {
    const title = document.querySelector('[name="title"]').value;
    const date = document.querySelector('[name="date"]').value;
    const priority = document.querySelector('[name="priority"]:checked').value;
    const description = document.querySelector('[name="description"]').value;
    const data = { title, date, priority, description };
    console.log(data);
  };

  // Task Form Views

  const title = (parent) => {
    const div = maker("div", { class: "form-section" }, "", parent);
    maker("label", { class: "form-label", for: "title" }, "Task Name", div);
    maker(
      "input",
      { type: "text", name: "title", class: "form-input" },
      "",
      div
    );
  };

  const date = (parent, task = {}) => {
    const div = maker("div", { class: "form-section" }, "", parent);
    maker("label", { class: "form-label", for: "date" }, "Due Date", div);
    maker(
      "input",
      {
        type: "date",
        name: "date",
        class: "form-input date",
        value: task ? task.date : "",
      },
      "",
      div
    );
  };

  const radioButtons = (parent) => {
    const div = maker("div", { class: "form-section" }, "", parent);
    maker("label", { class: "form-label" }, "Task Priority", div);
    const radios = maker("div", { class: "radio-buttons" }, "", div);
    maker(
      "input",
      {
        type: "radio",
        name: "priority",
        value: "low",
      },
      "",
      radios
    );
    maker("label", { class: "radio-label", for: "low" }, "Low", radios);
    maker(
      "input",
      {
        type: "radio",
        name: "priority",
        value: "medium",
      },
      "",
      radios
    );
    maker("label", { class: "radio-label", for: "medium" }, "Medium", radios);
    maker(
      "input",
      {
        type: "radio",
        name: "priority",
        value: "high",
      },
      "",
      radios
    );
    maker("label", { class: "radio-label", for: "high" }, "High", radios);
  };

  const description = (parent, task = {}) => {
    const div = maker("div", { class: "form-section" }, "", parent);
    maker(
      "label",
      { class: "form-label", for: "description" },
      "Task Description",
      div
    );
    maker(
      "textarea",
      { type: "text", name: "description", class: "form-input text-area" },
      task ? task.description : "",
      div
    );
  };

  const button = (parent, text) => {
    const button = maker(
      "button",
      { type: "button", class: "form-button" },
      text,
      parent
    );
    button.addEventListener("click", getTaskFormData);
  };

  const editTaskForm = (task) => {
    const form = maker("form", { id: "task-form" }, "", formBox);
    maker("h1", { class: "form-heading" }, task.title, form);
    date(form, task);
    radioButtons(form);
    description(form, task);
    button(form, "Edit Task");
    document.querySelector(`[value=${task.priority}]`).checked = true;
  };

  const newTaskForm = () => {
    const form = maker("form", { id: "task-form" }, "", formBox);
    maker("h1", { class: "form-heading" }, "Create Task", form);
    title(form);
    date(form);
    radioButtons(form);
    description(form);
    button(form, "Create Task");
    document.querySelector('[value="low"]').checked = true;
  };

  // Project Form Views

  const newProjectForm = () => {
    const form = maker("form", { id: "project-form" }, "", formBox);
    maker("h1", { class: "form-heading" }, "Create Project", form);
    const div = maker("div", { class: "form-section" }, "", form);
    maker(
      "label",
      { class: "form-label", for: "project-name" },
      "Project Name",
      div
    );
    const input = maker(
      "input",
      { class: "form-input", name: "project-name" },
      "",
      div
    );
    const button = maker(
      "button",
      { type: "button", class: "form-button" },
      "Create Project",
      form
    );
  };

  const editProjectForm = (project) => {
    const form = maker("form", { id: "project-form" }, "", formBox);
    maker("h1", { class: "form-heading" }, "Edit Project", form);
    const div = maker("div", { class: "form-section" }, "", form);
    maker("label", { class: "form-label", for: "name" }, "Project Name", div);
    const input = maker(
      "input",
      { class: "form-input", name: "name", value: project.name },
      "",
      div
    );
    const button = maker(
      "button",
      { type: "button", class: "form-button" },
      "Edit Project",
      form
    );
  };

  return {
    newTaskForm,
    editTaskForm,
    newProjectForm,
    editProjectForm,
  };
})();

export default formViews;
