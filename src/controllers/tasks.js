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

  const newTask = document.querySelector("#new-task");

  const openForm = () => {
    forms.openTaskForm();
  };

  const showEditTaskForm = (i) => {
    forms.openTaskForm(currentProject.tasks[i]);
  };

  const create = (task, project) => {
    project.tasks.push(task);
    let projects = getProjects();
    saveProjects(projects.push(project));
    view.render(project);
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
    let task = currentProject.tasks[index];
    let taskbox = document.querySelector(`div[data="${index}"]`);
    console.log(task, taskbox);
    // view.markTaskComplete(task, taskbox);
    // task.done ? (task.done = false) : (task.done = true);
    // projects.save(currentProject);
  };

  const renderTasks = (project) => {
    // currentProject = project;
    view.renderTasks(project);
  };

  newTask.addEventListener("click", openForm);

  return {
    create,
    showEditTaskForm,
    handleTaskComplete,
    renderTasks,
  };
})();

export default tasks;
