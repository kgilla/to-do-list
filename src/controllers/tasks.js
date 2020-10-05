import app from "../app";
import view from "../views/taskViews";
import forms from "./forms";
import store from "../helpers/store";
import sidenav from "./sidenav";
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

    project === "0" ? app.renderIndex() : app.render(savedProject);
  };

  const update = (data) => {
    const { id, title, date, priority, description, project, done } = data;

    const newTask = {
      id,
      title,
      date,
      priority,
      description,
      project,
      done,
    };

    const oldTask = store.findTask(id);

    if (project !== oldTask.project) {
      let projects = store.getProjects();
      let a = projects.findIndex((p) => p.id === oldTask.project);
      let b = projects.findIndex((p) => p.id === project);
      let filtered = projects[a].tasks.filter((task) => task !== id);
      projects[a].tasks = filtered;
      projects[b].tasks.push(id);
      store.setProjects(projects);
    }

    let tasks = store.getTasks();
    let i = tasks.findIndex((task) => task.id === newTask.id);
    tasks[i] = newTask;
    store.setTasks(tasks);
    project === "0"
      ? app.renderIndex()
      : app.render(store.findProject(project));
  };

  const destroy = (id) => {
    const task = store.findTask(id);
    const tasks = store.getTasks();
    const projects = store.getProjects();

    let newTasks = tasks.filter((task) => task.id !== id);
    let i = projects.findIndex((project) => project.id === task.project);
    let newProjectTasks = projects[i].tasks.filter((task) => task !== id);
    projects[i].tasks = newProjectTasks;

    store.setTasks(newTasks);
    store.setProjects(projects);

    app.renderIndex();
  };

  const handleTaskComplete = (node, id) => {
    let tasks = store.getTasks();
    let i = tasks.findIndex((task) => task.id === id);
    tasks[i].done = tasks[i].done ? false : true;
    store.setTasks(tasks);
    view.markTaskComplete(node, tasks[i]);
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
