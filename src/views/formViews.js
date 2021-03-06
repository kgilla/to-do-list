import { maker } from "../helpers/index";
import formController from "../controllers/forms";

const formViews = (() => {
  const formBox = document.querySelector("#box");

  const addError = (error) => {
    const errorBox = document.querySelector("#error-box");
    maker("div", { class: "error" }, error.message, errorBox);
  };

  const confirmDeleteAll = () => {
    formController.handleFullDelete();
  };

  const handleTaskSubmit = (e) => {
    e.currentTarget.taskId
      ? formController.getTaskFormData(e.currentTarget.taskId)
      : formController.getTaskFormData();
  };

  const handleProjectSubmit = (e) => {
    e.currentTarget.projectId
      ? formController.getProjectFormData(e.currentTarget.projectId)
      : formController.getProjectFormData();
  };

  const handleDelete = (e) => {
    let id = e.currentTarget.attributes[3].value;
    formController.handleDelete(id);
  };

  const closeForm = () => {
    formController.closeForm();
  };

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
        value: "none",
      },
      "",
      radios
    );
    maker("label", { class: "radio-label", for: "none" }, "None", radios);
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

  const selectProject = (parent, task = "", projects) => {
    let selected = document.querySelector(".selected");
    const div = maker("div", { class: "form-section" }, "", parent);
    maker("label", { class: "form-label", for: "project" }, "Project", div);
    const select = maker(
      "select",
      { class: "form-input", name: "project", value: selected },
      "",
      div
    );
    projects.forEach((project) => {
      if (project.id === task.project) {
        maker(
          "option",
          { value: project.id, selected },
          project.id === "0" ? "No Project" : project.name,
          select
        );
      } else if (project.id === selected.attributes[1].value) {
        maker("option", { value: project.id, selected }, project.name, select);
      } else {
        maker(
          "option",
          { value: project.id },
          project.id === "0" ? "No Project" : project.name,
          select
        );
      }
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

  const taskForm = (task = "", projects = "") => {
    const form = maker("form", { class: "default-form" }, "", formBox);
    let x = maker("i", { class: "fas fa-times form-close" }, "", form);
    maker(
      "h1",
      { class: "form-heading" },
      task ? "Edit Task" : "Create Task",
      form
    );
    maker("div", { id: "error-box" }, "", form);
    title(form, task);
    date(form, task);
    radioButtons(form, task);
    description(form, task);
    selectProject(form, task, projects);
    button(form, task);
    task
      ? (document.querySelector(`[value=${task.priority}]`).checked = true)
      : (document.querySelector('[value="none"]').checked = true);
    x.addEventListener("click", formController.closeForm);
    form.taskId = task ? task.id : null;
    form.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        handleTaskSubmit(e);
      }
    });
  };

  const projectForm = (project = "") => {
    const form = maker("form", { class: "default-form" }, "", formBox);
    let x = maker("i", { class: "fas fa-times form-close" }, "", form);
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
      {
        type: "text",
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
    x.addEventListener("click", formController.closeForm);
    form.projectId = project ? project.id : null;
    form.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        handleProjectSubmit(e);
      }
    });
  };

  const deleteForm = (id) => {
    const form = maker("form", { class: "default-form" }, "", formBox);
    maker("h1", { class: "form-heading" }, "Confirm Delete", form);
    maker(
      "label",
      { id: "delete-label" },
      "Are you sure you want to delete this?",
      form
    );
    const div = maker("div", { id: "delete-buttons" }, "", form);
    const yes = maker(
      "button",
      {
        type: "button",
        class: "delete-button",
        id: "confirm-delete",
        data: id,
      },
      "Yes",
      div
    );
    const no = maker(
      "button",
      { type: "button", class: "delete-button", id: "reject-delete" },
      "No",
      div
    );
    yes.addEventListener("click", handleDelete);
    no.addEventListener("click", closeForm);
  };

  const renderSettings = () => {
    const form = maker("form", { class: "default-form" }, "", formBox);
    maker("h1", { class: "form-heading" }, "Delete All Data", form);
    maker(
      "label",
      { id: "delete-label" },
      "Do you want to delete all data and start fresh?",
      form
    );
    const div = maker("div", { id: "delete-buttons" }, "", form);
    const yes = maker(
      "button",
      {
        type: "button",
        class: "delete-button",
        id: "confirm-delete",
      },
      "Yes",
      div
    );
    const no = maker(
      "button",
      { type: "button", class: "delete-button", id: "reject-delete" },
      "No",
      div
    );
    yes.addEventListener("click", confirmDeleteAll);
    no.addEventListener("click", closeForm);
  };

  return {
    renderSettings,
    taskForm,
    projectForm,
    addError,
    deleteForm,
  };
})();

export default formViews;
