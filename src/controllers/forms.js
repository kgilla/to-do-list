import view from "../views/formViews";
import projectController from "../controllers/projects";
import taskController from "../controllers/tasks";

const forms = (() => {
  const formBox = document.querySelector("#box");
  const overlay = document.querySelector("#overlay");

  const openTaskForm = (task = "") => {
    overlay.classList.toggle("hidden");
    view.taskForm(task);
  };

  const openProjectForm = (project = "") => {
    overlay.classList.toggle("hidden");
    view.projectForm(project);
  };

  const closeForm = () => {
    overlay.classList.toggle("hidden");
    formBox.innerHTML = "";
  };

  const handleOverlayClick = (e) => {
    if (e.target == overlay) {
      closeForm();
    }
  };

  const getTaskFormData = (taskId = "") => {
    const title = document.querySelector('[name="title"]').value;
    const date = document.querySelector('[name="date"]').value;
    const priority = document.querySelector('[name="priority"]:checked').value;
    const description = document.querySelector('[name="description"]').value;
    const project = taskId
      ? null
      : document.querySelector('[name="project"]').value;
    const data = {
      id: taskId,
      title,
      date,
      priority,
      description,
      project,
    };
    forms.validateFormData(data);
  };

  const getProjectFormData = (projectId = "") => {
    const name = document.querySelector('[name="name"]').value;
    const data = { id: projectId, name };
    forms.validateFormData(data);
  };

  const validateFormData = (data) => {
    if (data.title == "") {
      const error = { message: "Your task needs a name" };
      view.addError(error);
    } else if (data.name == "") {
      const error = { message: "Your project needs a name" };
      view.addError(error);
    } else {
      if (data.id) {
        data.title
          ? taskController.update(data)
          : projectController.update(data);
      } else {
        data.title
          ? taskController.create(data)
          : projectController.create(data);
      }
      closeForm();
    }
  };

  overlay.addEventListener("click", handleOverlayClick);

  return {
    openProjectForm,
    openTaskForm,
    closeForm,
    validateFormData,
    getTaskFormData,
    getProjectFormData,
  };
})();

export default forms;
