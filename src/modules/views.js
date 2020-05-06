import {tasks} from './tasks';
import { projects } from './projects';

const views = (() => {

  const main = document.querySelector('#content');
  
  /* sidenav selectors */
  const newProject = document.querySelector('#new-project');
  const projectForm = document.querySelector('#project-form');
  const projectList = document.querySelector('#projects'); 

  /* header selectors */
  const newTask = document.querySelector('#new-task');
  const header = document.querySelector('#header');

  /* task form selectors */
  const formOverlay = document.querySelector('#form-overlay');
  const taskForm = document.querySelector('#task-form');
  const formClose = document.querySelector('#form-close');
  const createTaskButton = document.querySelector('#form-submit');

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
    projectForm.innerHTML = "";
    let form = createElement("input", {class: "project-form", placeholder: "Project Name", id: "project-form"}, "", projectForm);
    form.addEventListener('keydown', getProjectData);
    form.focus();
  }

  const getTaskData = () => {
    let taskData = [taskForm[0].value, taskForm[1].value, taskForm[2].value];
    tasks.create(taskData);
    showTaskForm();
  }

  const getProjectData = (event) => {
    if (event.key == "Enter") { 
      projects.create(event.target.value);
      projectForm.innerHTML = "";
      renderProjects();
    }
  }

  const renderProjects = () => {
    projectList.innerHTML = "";
    projects.index.forEach(project => {
      createElement('a', {class: "project", href: "#"}, project.name, projectList);
    });
  }

  const renderTasks = () => {
    main.innerHTML = "";
    tasks.index.forEach(task => {
      let taskBox = createElement("div", {class: "task-box"}, "", main);
      createElement("h3", {class: 'task-date'}, task.dueDate, taskBox); 
      createElement("h2", {class: 'task-title'}, task.title, taskBox); 
    });
  }

  /* event listeners */
  newTask.addEventListener('click', showTaskForm);
  formClose.addEventListener('click', showTaskForm);
  createTaskButton.addEventListener('click', getTaskData);
  newProject.addEventListener('click', showProjectForm);

  return {renderTasks};

})();

export {views};