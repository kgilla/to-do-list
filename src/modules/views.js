import {tasks} from './tasks';
import { projects } from './projects';

const views = (() => {

  const main = document.querySelector('#content');
  let formOpen = false;
  
  /* sidenav selectors */
  const newProject = document.querySelector('#new-project');
  const projectList = document.querySelector('#projects'); 

  /* header selectors */
  const newTask = document.querySelector('#new-task');
  const header = document.querySelector('#header');

  /* task form selectors */
  const formOverlay = document.querySelector('#form-overlay');
  const taskForm = document.querySelector('#task-form');
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

  /* project views */

  const showProjectForm= () => {
    if (formOpen == true) {
      projectList.removeChild(projectList.lastChild);
      formOpen = false;
    } else {
      makeProjectForm();
    }
  }

  const makeProjectForm = () => {
    let form = createElement("input", {class: "project-form", placeholder: "Project Name", id: "project-form"}, "", projectList);
    form.addEventListener('keydown', getProjectData);
    form.focus();
    formOpen = true;
  }

  const getProjectData = (event) => {
    if (event.key == "Enter") { 
      projects.create(event.target.value);
      renderProjects();
    }
  }

  const renderProjects = () => {
    formOpen = false;
    projectList.innerHTML = "";
    projects.index.forEach(project => {
      createElement('a', {class: "project", href: "#"}, project.name, projectList);
    });
  }

  /* task views */

  const showTaskForm = () => {
    formOverlay.classList.toggle('hidden');
    taskForm.classList.toggle('hidden');
  }

  const taskFormClose = () => {
    if (event.target == formOverlay) {
      showTaskForm();
    }
  }

  const getTaskData = () => {
    let radio = document.querySelector('input[type="radio"]:checked').value
    let taskData = [taskForm[0].value, taskForm[1].value, radio, taskForm[5].value];
    tasks.create(taskData);
    showTaskForm();
  }

  const renderTasks = () => {
    main.innerHTML = "";
    tasks.index.forEach((task, i) => {
      let t = createElement("div", {class: "task-box", data: i}, "", main);
      createElement("h2", {class: 'task-title'}, task.title, t); 
      createElement("h3", {class: 'task-date'}, task.dueDate, t); 
    });
  }

  const expandTask = () => {
    if (event.target.attributes[1] != undefined) {
      let target = tasks.index[event.target.attributes[1].value];
      console.log(target);
    }
  }

  /* event listeners */
  
  formOverlay.addEventListener('click', taskFormClose);
  newTask.addEventListener('click', showTaskForm);
  createTaskButton.addEventListener('click', getTaskData);
  newProject.addEventListener('click', showProjectForm);
  main.addEventListener('click', expandTask);

  return {renderTasks, renderProjects};

})();

export {views};