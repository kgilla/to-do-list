import view from "../views/formViews";
import projectController from "../controllers/projects";
import taskController from "../controllers/tasks";
import store from "../helpers/store";

const forms = (() => {
  const formBox = document.querySelector("#box");
  const overlay = document.querySelector("#overlay");

  const openTaskForm = (task = "") => {
    overlay.classList.toggle("hidden");
    const projects = store.getProjects();
    view.taskForm(task, projects);
  };

  const openProjectForm = (project = "") => {
    overlay.classList.toggle("hidden");
    view.projectForm(project);
  };

  const openDeleteForm = (id) => {
    overlay.classList.toggle("hidden");
    view.deleteForm(id);
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

  const handleDelete = (id) => {
    let project = store.findProject(id);
    project ? projectController.destroy(id) : taskController.destroy(id);
    closeForm();
  };

  const getTaskFormData = (taskId = "") => {
    const title = document.querySelector('[name="title"]').value;
    const date = document.querySelector('[name="date"]').value;
    const priority = document.querySelector('[name="priority"]:checked').value;
    const description = document.querySelector('[name="description"]').value;
    const project = document.querySelector('[name="project"]').value;
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
    openDeleteForm,
    closeForm,
    handleDelete,
    validateFormData,
    getTaskFormData,
    getProjectFormData,
  };
})();

export default forms;
