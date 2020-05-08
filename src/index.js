import "./assets/stylesheets/reset.css";
import "./assets/stylesheets/style.css";
import { tasks } from "./modules/tasks";
import { projects } from "./modules/projects";
import { views } from "./modules/views";

const init = () => {
  let p = projects.init();
  tasks.init(p);
  views.init(p);
};

init();

// This needs refactoring!!

// const init = () => {
//   let p = projectMaker("My Project!");
//   index.push(p);
//   return p;
// };

// const init = (p) => {
//   for (let i = 0; i < 5; i++) {
//     let task = taskMaker("poop", "2020-05-12", "medium", "Fun Times");
//     p.tasks.push(task);
//   }
// };

// const init = (p) => {
//   renderProjects();
//   renderTasks(p);
//   projectList.firstChild.classList.toggle("selected");
//   heading.textContent = p.name;
//   currentProject = p;
// };
