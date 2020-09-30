import app from "../app";
import view from "../views/taskViews";
import forms from "./forms";
import store from "../helpers/store";

const tasks = (() => {
  let currentProject = store.getCurrentProject();
  let projects = store.getProjects();

  const newTask = document.querySelector("#new-task");

  const openForm = (i = "") => {
    let currentProject = store.getCurrentProject();
    i !== "" ? forms.openTaskForm(currentProject.tasks[i]) : forms.openTaskForm;
  };

  const create = (task) => {
    let i = projects.findIndex((p) => p.id === currentProject.id);
    currentProject.tasks.push(task);
    projects[i] = currentProject;
    store.setProjects(projects);
    store.setCurrentProject(currentProject);
    app.render();
  };

  // const update = (event) => {
  //   taskChanger(event);
  //   closeTask(event);
  //   renderTasks(currentProject(), true);
  //   projects.save(currentProject());
  // };

  // const destroy = (event) => {
  //   let taskIndex = event.currentTarget.parentNode.getAttribute("data");
  //   let c = currentProject();
  //   c.tasks.splice(taskIndex, 1);
  //   views.render(c);
  //   projects.save(currentProject());
  // };

  // const updateTask = (event) => {
  //   taskChanger(event);
  //   closeTask(event);
  //   renderTasks(currentProject(), true);
  //   projects.save(currentProject());
  // };

  // const deleteTask = (event) => {
  //   let taskIndex = event.currentTarget.parentNode.getAttribute("data");
  //   let c = currentProject();
  //   c.tasks.splice(taskIndex, 1);
  //   view.render(c);
  //   projects.save(currentProject());
  // };

  const handleTaskComplete = (index) => {
    let project = projects.find((p) => p.id == currentProject.id);
    project.tasks[index].done
      ? (project.tasks[index].done = false)
      : (project.tasks[index].done = true);
    saveProjects(projects);
    let taskbox = document.querySelector(`div[data="${index}"]`);
    view.markTaskComplete(project.tasks[index], taskbox);
  };

  const render = (currentProject) => {
    console.log(currentProject);
    view.renderTasks(currentProject);
  };

  newTask.addEventListener("click", openForm);

  return {
    create,
    openForm,
    handleTaskComplete,
    render,
  };
})();

export default tasks;
