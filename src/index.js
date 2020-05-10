import "./assets/stylesheets/reset.css";
import "./assets/stylesheets/style.css";
import { tasks } from "./modules/tasks";
import { projects } from "./modules/projects";
import { views } from "./modules/views";

const freshStart = () => {
  let p = projects.projectMaker("First Project");
  let t = tasks.taskMaker("Welcome!", "", "low", "Have fun and be productive!");
  p.tasks.push(t);
  projects.index.push(p);
  projects.save(p);
  views.init(p);
};

const getIndex = () => {;
  for (let i = 0; i < localStorage.length; i++) {
    let p = window.localStorage.key(i);
    projects.index.push(JSON.parse(window.localStorage.getItem(p)));
  }
  views.init(projects.index[0]);
}

const init = () => {
  localStorage.length > 0 ? getIndex() : freshStart();
}

window.localStorage.clear();

init();




/* things we need to do:

add form validations so you cant make duplicate projects/tasks or blank
add form resets so form data doesnt persist
add sorting functions and a few default project buckets which show tasks


// populate index with projects

// update current project for every task crud operation

//create

//read

//update

//delete

// update localStorage for every new project

window.localStorage.removeItem('name');

JSON.parse(window.localStorage.getItem('user')); */

// window.localStorage.clear();
