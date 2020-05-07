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
