import app from "../app";
import view from "../views/taskViews";
import forms from "./forms";
import store from "../helpers/store";

const tasks = (() => {
  const newTask = document.querySelector("#new-task");

  const create = (task) => {
    let currentProject = store.getCurrentProject();
    let projects = store.getProjects();
    let i = projects.findIndex((p) => p.id === currentProject.id);
    currentProject.tasks.push(task);
    projects[i] = currentProject;
    store.setProjects(projects);
    store.setCurrentProject(currentProject);
    app.render();
  };

  const update = () => {};

  const destroy = () => {};

  const handleTaskComplete = (index) => {
    let currentProject = store.getCurrentProject();
    let projects = store.getProjects();
    let i = projects.findIndex((p) => p.id == currentProject.id);
    currentProject.tasks[index].done
      ? (currentProject.tasks[index].done = false)
      : (currentProject.tasks[index].done = true);
    projects[i] = currentProject;
    store.setProjects(projects);
    store.setCurrentProject(currentProject);
    let taskbox = document.querySelector(`div[data="${index}"]`);
    view.markTaskComplete(currentProject.tasks[index], taskbox);
  };

  const openForm = (i = "") => {
    let currentProject = store.getCurrentProject();
    i !== "" ? forms.openTaskForm(currentProject.tasks[i]) : forms.openTaskForm;
  };

  const render = (currentProject) => {
    view.render(currentProject);
  };

  newTask.addEventListener("click", openForm);

  return {
    create,
    update,
    destroy,
    handleTaskComplete,
    openForm,
    render,
  };
})();

export default tasks;
