import './reset.css';
import './style.css';

const main = document.querySelector('#content');
const dashboard = document.querySelector("#dashboard");
const upcoming = document.querySelector('#upcoming');
const urgent = document.querySelector('#urgent');
const newProject = document.querySelector('#new-project');
const newTask = document.querySelector('#new-task');
const header = document.querySelector('#header');
const formOverlay = document.querySelector('#form-overlay');
const newTaskForm = document.querySelector('#task-form');
const formClose = document.querySelector('#form-close');

const taskMaker = (title, description, dueDate, priority) => {
  return {title, description, dueDate, priority, sayHello};
};
  
const elementMaker = (type, attributes, text, place) => {
  let element = document.createElement(type);
  Object.keys(attributes).forEach(key => {
    element.setAttribute(key, attributes[key]);
  });
  element.textContent = text;
  place.appendChild(element);
  return element;
}

const eraseContent = (element) => {
  element.innerHTML = "";
}

const makeHeading = (heading) => {
  header.textContent = heading;
}

const showTaskForm = () => {
  formOverlay.classList.toggle('hidden');
  newTaskForm.classList.toggle('hidden');
}

const makeUpcoming = () => {
  makeHeading("Upcoming")
}

const makeUrgent = () => {
  makeHeading("Urgent")
}

const makeDashboard = () => {
  makeHeading("Dashboard")
};

/* event listeners */
dashboard.addEventListener('click', makeDashboard);
upcoming.addEventListener('click', makeUpcoming); 
urgent.addEventListener('click', makeUrgent);
newTask.addEventListener('click', showTaskForm);
formClose.addEventListener('click', showTaskForm);


makeDashboard();
