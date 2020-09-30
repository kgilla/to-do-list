import { maker, makeId } from "../helpers/index";
import forms from "../controllers/forms";

const formViews = (() => {
  const formBox = document.querySelector("#form-box");

  const getTaskFormData = () => {
    const title = document.querySelector('[name="title"]').value;
    const date = document.querySelector('[name="date"]').value;
    const priority = document.querySelector('[name="priority"]:checked').value;
    const description = document.querySelector('[name="description"]').value;
    const data = { title, date, priority, description, done: false };
    forms.validateFormData(data);
  };

  const getProjectFormData = () => {
    const name = document.querySelector('[name="name"]').value;
    const data = { id: makeId(), name };
    forms.validateFormData(data);
  };

  const addError = (error) => {
    const errorBox = document.querySelector("#error-box");
    maker("div", { class: "error" }, error.message, errorBox);
  };

  // Task Form Views

  const title = (parent, task = {}) => {
    const div = maker("div", { class: "form-section" }, "", parent);
    maker("label", { class: "form-label", for: "title" }, "Task Name", div);
    maker(
      "input",
      {
        type: "text",
        name: "title",
        class: "form-input",
        value: task ? task.title : "",
      },
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

  const taskForm = (task = "", error = "") => {
    const form = maker("form", { id: "task-form" }, "", formBox);
    maker(
      "h1",
      { class: "form-heading" },
      task ? "Edit Task" : "Create Task",
      form
    );
    maker("div", { id: "error-box" }, "", form);
    title(form, task ? task : null);
    date(form, task ? task : null);
    radioButtons(form);
    description(form, task ? task : null);
    button(form, task ? "Edit Task" : "Create Task");
    task
      ? (document.querySelector(`[value=${task.priority}]`).checked = true)
      : (document.querySelector('[value="low"]').checked = true);
  };

  // Project Form Views

  const projectForm = (project = "") => {
    const form = maker("form", { id: "project-form" }, "", formBox);
    maker(
      "h1",
      { class: "form-heading" },
      project ? "Edit Project" : "Create Project",
      form
    );
    maker("div", { id: "error-box" }, "", form);
    const div = maker("div", { class: "form-section" }, "", form);
    maker("label", { class: "form-label", for: "name" }, "Project Name", div);
    maker(
      "input",
      { class: "form-input", name: "name", value: project ? project.name : "" },
      "",
      div
    );
    const button = maker(
      "button",
      { type: "button", class: "form-button" },
      project ? "Edit Project" : "Create Project",
      form
    );
    button.addEventListener("click", getProjectFormData);
  };

  return {
    taskForm,
    projectForm,
    addError,
  };
})();

export default formViews;
