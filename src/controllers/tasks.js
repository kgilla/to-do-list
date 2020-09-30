import projects from "./projects";
import forms from "./forms";
import view from "../views/taskViews";
import {
  saveProjects,
  getProjects,
  setCurrentProject,
  getCurrentProject,
} from "../helpers/index";

const tasks = (() => {
  let currentProject = getCurrentProject();
  let projects = getProjects();

  const newTask = document.querySelector("#new-task");

  const openForm = (i = "") => {
    i ? forms.openTaskForm(currentProject.tasks[i]) : forms.openTaskForm;
  };

  const getTaskFormData = (data) => {};

  const create = (task) => {
    let project = projects.find((p) => p.id == currentProject.id);
    project.tasks.push(task);
    setCurrentProject(project);
    saveProjects(projects);
    renderTasks(project);
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

  const renderTasks = (project) => {
    // currentProject = project;
    view.renderTasks(project);
  };

  newTask.addEventListener("click", openForm);

  return {
    create,
    openForm,
    handleTaskComplete,
    renderTasks,
    getTaskFormData,
  };
})();

export default tasks;
