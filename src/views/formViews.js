import { maker } from "../helpers/index";
import store from "../helpers/store";
import forms from "../controllers/forms";

const formViews = (() => {
  const formBox = document.querySelector("#box");

  const addError = (error) => {
    const errorBox = document.querySelector("#error-box");
    maker("div", { class: "error" }, error.message, errorBox);
  };

  const handleTaskSubmit = (e) => {
    e.currentTarget.taskId
      ? forms.getTaskFormData(e.currentTarget.taskId)
      : forms.getTaskFormData();
  };

  const handleProjectSubmit = (e) => {
    e.currentTarget.projectId
      ? forms.getProjectFormData(e.currentTarget.projectId)
      : forms.getProjectFormData();
  };

  // Task Form Views

  const title = (parent, task = {}) => {
    const div = maker("div", { class: "form-section" }, "", parent);
    maker("label", { class: "form-label", for: "title" }, "Task Name", div);
    let input = maker(
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
    input.focus();
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

  const selectProject = (parent) => {
    const projects = store.getProjects();
    const div = maker("div", { class: "form-section" }, "", parent);
    maker("label", { class: "form-label", for: "project" }, "Project", div);
    const select = maker(
      "select",
      { class: "form-input", name: "project" },
      "",
      div
    );
    projects.forEach((project) => {
      maker("option", { value: project.id }, project.name, select);
    });
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

  const button = (parent, task) => {
    const button = maker(
      "button",
      { type: "button", class: "form-button" },
      task ? "Update Task" : "Create Task",
      parent
    );
    button.taskId = task ? task.id : null;
    button.addEventListener("click", handleTaskSubmit);
  };

  const taskForm = (task = "") => {
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
    task ? null : selectProject(form);
    button(form, task);
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
    let input = maker(
      "input",
      {
        class: "form-input",
        name: "name",
        value: project ? project.name : "",
      },
      "",
      div
    );
    const button = maker(
      "button",
      { type: "button", class: "form-button" },
      project ? "Edit Project" : "Create Project",
      form
    );

    button.projectId = project ? project.id : null;

    button.addEventListener("click", handleProjectSubmit);

    input.focus();
  };

  return {
    taskForm,
    projectForm,
    addError,
  };
})();

export default formViews;
