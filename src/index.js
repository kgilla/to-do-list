import "./assets/stylesheets/reset.css";
import "./assets/stylesheets/style.css";
import { tasks } from "./modules/tasks";
import { projects } from "./modules/projects";
import { views } from "./modules/views";

const init = () => {
  let p = window.localStorage.key(0);
  let project = JSON.parse(window.localStorage.getItem(p));
  console.log(project);
  views.init(project);
};

init();
