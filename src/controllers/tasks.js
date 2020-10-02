import app from "../app";
import view from "../views/taskViews";
import forms from "./forms";
import store from "../helpers/store";
import { makeId } from "../helpers";

const tasks = (() => {
  const newTask = document.querySelector("#new-task");
  const overlay = document.querySelector("#overlay");

  const create = (data) => {
    const { title, date, priority, description, project } = data;

    let task = {
      id: makeId(),
      title,
      date,
      priority,
      description,
      project,
      done: false,
    };

    let projects = store.getProjects();
    let tasks = store.getTasks();

    tasks.push(task);

    let savedProject = store.findProject(task.project);
    savedProject.tasks.push(task.id);
    let i = projects.findIndex((p) => p.id === task.project);
    projects[i] = savedProject;

    store.setTasks(tasks);
    store.setProjects(projects);

    app.render(savedProject);
  };

  const update = (data) => {
    const { id, title, date, priority, description, done } = data;

    const task = store.findTask(id);

    const newTask = {
      id,
      title,
      date,
      priority,
      description,
      project: task.project,
      done,
    };

    let tasks = store.getTasks();
    let i = tasks.findIndex((task) => task.id === newTask.id);
    tasks[i] = newTask;
    store.setTasks(tasks);
    app.render(store.findProject(newTask.project));
  };

  const destroy = () => {};

  const handleTaskComplete = (index) => {
    // let projects = store.getProjects();
    // let i = projects.findIndex((p) => p.id == currentProject.id);
    // currentProject.tasks[index].done
    //   ? (currentProject.tasks[index].done = false)
    //   : (currentProject.tasks[index].done = true);
    // projects[i] = currentProject;
    // store.setProjects(projects);
    // let taskbox = document.querySelector(`div[data="${index}"]`);
    // view.markTaskComplete(currentProject.tasks[index], taskbox);
  };

  const openForm = (id = "") => {
    if (id) {
      forms.openTaskForm(store.findTask(id));
    } else {
      forms.openTaskForm();
    }
  };

  const handleClick = () => {
    openForm();
  };

  const openDetails = (i) => {
    overlay.classList.toggle("hidden");
    view.renderTaskDetails(project.tasks[i], i);
  };

  const render = (project) => {
    view.render(store.populateTasks(project));
  };

  newTask.addEventListener("click", handleClick);

  return {
    create,
    update,
    destroy,
    handleTaskComplete,
    openForm,
    openDetails,
    render,
  };
})();

export default tasks;
