import {tasks} from './tasks';
import { projects } from './projects';

const views = (() => {

  const main = document.querySelector('#content');
  
  /* sidenav selectors */
  const dashboard = document.querySelector("#dashboard");
  const upcoming = document.querySelector('#upcoming');
  const urgent = document.querySelector('#urgent');
  const newProject = document.querySelector('#new-project');

  /* header selectors */
  const newTask = document.querySelector('#new-task');
  const header = document.querySelector('#header');

  /* task form selectors */
  const formOverlay = document.querySelector('#form-overlay');
  const taskForm = document.querySelector('#task-form');
  const formClose = document.querySelector('#form-close');
  const createTaskButton = document.querySelector('#form-submit');

  const projectFormBox = document.querySelector('#project-box');
  const projectBox = document.querySelector('#project-box'); 

  const createElement = (type, attributes, text, place) => {
    let element = document.createElement(type);
    Object.keys(attributes).forEach(key => {
      element.setAttribute(key, attributes[key]);
    });
    element.textContent = text;
    place.appendChild(element);
    return element;
  }

  const showTaskForm = () => {
    formOverlay.classList.toggle('hidden');
    taskForm.classList.toggle('hidden');
  }

  const showProjectForm= () => {
    projectFormBox.innerHTML = "";
    let form = createElement("input", {class: "form-input", placeholder: "Project Name"}, "", projectFormBox );
    form.addEventListener('keydown', getProjectData);
  }

  const getTaskData = () => {
    let taskData = [taskForm[0].value, taskForm[1].value, taskForm[2].value];
    tasks.create(taskData);
    showTaskForm();
  }

  const getProjectData = (event) => {
    if (event.key == "Enter") { 
      projects.create(event.target.value);
      renderProjects();
    }
  }

  const renderProjects = () => {
    projectBox.innerHTML = "";
    projects.index.forEach(project => {
      createElement("a", {class: "project"}, project.name, projectBox);
    });
  }

  const renderTasks = () => {
    main.innerHTML = "";
    tasks.index.forEach(task => {
      let taskBox = createElement("div", {class: "task-box"}, "", main);
      createElement("h2", {class: 'task-title'}, task.title, taskBox); 
      createElement("h3", {class: 'task-date'}, task.dueDate, taskBox); 
    });
  }

  const makeUpcoming = () => {
    header.textContent = 'Upcoming';
    renderTasks();
  }

  const makeUrgent = () => {
    header.textContent = 'Urgent';
  }

  const makeDashboard = () => {
    header.textContent = 'Dashboard';
  };

  /* event listeners */
  dashboard.addEventListener('click', makeDashboard);
  upcoming.addEventListener('click', makeUpcoming); 
  urgent.addEventListener('click', makeUrgent);
  newTask.addEventListener('click', showTaskForm);
  formClose.addEventListener('click', showTaskForm);
  createTaskButton.addEventListener('click', getTaskData);
  newProject.addEventListener('click', showProjectForm);

  makeDashboard();

  return {renderTasks};

})();

export {views};