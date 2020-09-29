import view from "../views/formViews";

const forms = (() => {
  const formBox = document.querySelector("#form-box");
  const formOverlay = document.querySelector("#form-overlay");

  const showForm = (task = "") => {
    formOverlay.classList.toggle("hidden");
    formOverlay.classList.toggle("curtain");
    task !== "" ? view.editTaskForm(task) : view.newTaskForm();
  };

  const closeForm = (e) => {
    if (e.target == formOverlay) {
      formOverlay.classList.toggle("hidden");
      formBox.innerHTML = "";
    }
  };

  const formError = (element) => {
    element.classList.toggle("error");
    setTimeout((f) => element.classList.toggle("error"), 500);
  };

  formOverlay.addEventListener("click", closeForm);

  return { showForm };
})();

export default forms;
