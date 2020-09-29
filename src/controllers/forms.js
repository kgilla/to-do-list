import view from "../views/formViews";

const forms = (() => {
  const formBox = document.querySelector("#form-box");
  const formOverlay = document.querySelector("#form-overlay");

  const openTaskForm = (task = "") => {
    formOverlay.classList.toggle("hidden");
    task !== "" ? view.editTaskForm(task) : view.newTaskForm();
  };

  const openProjectForm = (project = "") => {
    formOverlay.classList.toggle("hidden");
    project !== "" ? view.editProjectForm(project) : view.newProjectForm();
  };

  const closeForm = (e) => {
    if (e.target == formOverlay) {
      formOverlay.classList.toggle("hidden");
      formBox.innerHTML = "";
    }
  };

  // handleFormSubmit = (e) => {};

  // const projectError = () => {
  //   let form = document.querySelector("#project-form");
  //   form.classList.toggle("error");
  //   setTimeout((f) => form.classList.toggle("error"), 500);
  // };

  // const getProjectData = (event) => {
  //   let name = event.currentTarget.value;
  //   if (event.key == "Enter") {
  //     if (name == "") {
  //       projectError();
  //     } else if (projects.index.find((p) => p.name == name) != undefined) {
  //       projectError();
  //     } else {
  //       closeProjectForm();
  //       projects.create(event.target.value);
  //     }
  //   }
  // };

  // const formError = (element) => {
  //   element.classList.toggle("error");
  //   setTimeout((f) => element.classList.toggle("error"), 500);
  // };

  formOverlay.addEventListener("click", closeForm);

  return { openProjectForm, openTaskForm };
})();

export default forms;
