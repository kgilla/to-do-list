import {tasks} from './tasks';
import {projects} from './projects';

const views = (() => {

  const main = document.querySelector('#content');
  
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

  /* element states */
  let formOpen = false;
  let selectedProject = "";

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

  const projectInit = () => {
    projectList.firstChild.classList.toggle('selected');
    selectedProject = projects.index[0];
  }

  const showProjectForm= () => {
    formOpen == true ? closeProjectForm() : makeProjectForm();
  }

  const closeProjectForm = () => {
    projectList.removeChild(projectList.lastChild);
    formOpen = false;
  }

  const makeProjectForm = () => {
    let form = createElement("input", {class: "project-form", placeholder: "Project Name", id: "project-form"}, "", projectList);
    form.addEventListener('keydown', getProjectData);
    form.focus();
    formOpen = true;
  }

  const getProjectData = (event) => {
    if (event.key == "Enter") { 
      closeProjectForm();
      projects.create(event.target.value);
    }
  }

  const selectProject = (event) => {
    selectedProject = projects.index.find(p => p.name == event.target.textContent);
    if (event.target.classList.includes('selected')) {
      console.log(true);
    }
    // selectedProjectDom.classList.toggle("selected");
    // event.target.classList.toggle("selected");
    // selectedProjectDom = event.target;
  }

  const renderNewProject = (project) => {
    let p = createElement('a', {class: "project", href: "#"}, project.name, projectList);
    p.addEventListener('click', selectProject)
  }

  /* multiple project rendering */

  const projectListeners = () => {
    document.querySelectorAll('.project').forEach(project => {
      project.addEventListener('click', selectProject);
    });
  }

  const renderProjects = () => {
    projectList.innerHTML = "";
    projects.index.forEach((project, i)=> {
      createElement('a', {class: "project", href: "#"}, project.name, projectList);
    });
    projectListeners();
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
    tasks.create(taskData, selectedProject);
    showTaskForm();
  }

  const renderNewTask = (task) => {
    
  }

  const renderTasks = (project) => {
    main.innerHTML = "";
    project.tasks.forEach(task => {
      let t = createElement("div", {class: "task-box"}, "", main);
      createElement("h2", {class: 'task-title'}, task.title, t); 
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

  return {renderTasks, renderNewTask, renderProjects, renderNewProject, projectInit};

})();

export {views};