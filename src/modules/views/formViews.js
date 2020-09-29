import { maker } from "../helpers/index";

const formViews = (() => {
  const formBox = document.querySelector("#form-box");

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

  const submitButton = (parent) => {
    maker(
      "button",
      { type: "button", class: "form-button" },
      "Create Task",
      parent
    );
  };

  const editTaskForm = (task) => {
    const form = maker("form", { id: "task-form" }, "", formBox);
    maker("h1", { class: "form-heading" }, task.title, form);
    date(form, task);
    radioButtons(form);
    description(form, task);
    submitButton(form, task);
    document.querySelector(`[value=${task.priority}]`).checked = true;
  };

  const newTaskForm = () => {
    const form = maker("form", { id: "task-form" }, "", formBox);
    maker("h1", { class: "form-heading" }, "Create Task", form);
    title(form);
    date(form);
    radioButtons(form);
    description(form);
    submitButton(form);
  };

  const makeProjectForm = () => {
    const form = maker("form", { id: "task-form" }, "", formBox);
  };

  return {
    newTaskForm,
    editTaskForm,
  };
})();

export default formViews;
