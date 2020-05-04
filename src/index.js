import './style.css';
import './reset.css';

const main = document.querySelector('#content');
const dashboard = document.querySelector("#dashboard");
const upcoming = document.querySelector('#upcoming');
const urgent = document.querySelector('#urgent');
const newProject = document.querySelector('#new-project');
const newTask = document.querySelector('#new-task');
const header = document.querySelector('#header');

const taskMaker = (title, description, dueDate, priority) => {
  const sayHello = () => { console.log("hello") };
  return {title, description, dueDate, priority, sayHello};
};
  
const elementMaker = (type, className, text, place) => {
  let element = document.createElement(type);
  element.setAttribute('class', className);
  element.textContent = text;
  place.appendChild(element);
}

const eraseContent = (element) => {
  element.innerHTML = "";
}

const makeHeading = (heading) => {
  header.textContent = heading;
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

makeDashboard();

