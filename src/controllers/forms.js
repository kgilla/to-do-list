import view from "../views/formViews";
import projects from "../controllers/projects";
import tasks from "../controllers/tasks";

const forms = (() => {
  const formBox = document.querySelector("#form-box");
  const formOverlay = document.querySelector("#form-overlay");

  const openTaskForm = (task = "") => {
    formOverlay.classList.toggle("hidden");
    view.taskForm(task);
  };

  const openProjectForm = (project = "") => {
    formOverlay.classList.toggle("hidden");
    view.projectForm(project);
  };

  const handleOverlayClick = (e) => {
    if (e.target == formOverlay) {
      closeForm();
    }
  };
  const closeForm = () => {
    formOverlay.classList.toggle("hidden");
    formBox.innerHTML = "";
  };

  const validateFormData = (data) => {
    if (data.title == "") {
      const error = { message: "Your task needs a name" };
      view.addError(error);
    } else if (data.name == "") {
      const error = { message: "Your project needs a name" };
      view.addError(error);
    } else {
      data.title ? tasks.create(data) : projects.create(data);
      closeForm();
    }
  };

  formOverlay.addEventListener("click", handleOverlayClick);

  return { openProjectForm, openTaskForm, validateFormData };
})();

export default forms;
