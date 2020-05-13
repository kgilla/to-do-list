import "./assets/stylesheets/reset.css";
import "./assets/stylesheets/style.css";
import { tasks } from "./modules/tasks";
import { projects } from "./modules/projects";
import { views } from "./modules/views";

const freshStart = () => {
  let p = projects.projectMaker("Welcome!");
  let t = tasks.taskMaker(
    "Click On Me!",
    "",
    "low",
    "Welcome to Get ER Done! Feel free to make projects, make tasks, and check them off! Have fun and be productive!"
  );
  p.tasks.push(t);
  projects.index.push(p);
  projects.save(p);
  views.init(p);
};

const getIndex = () => {
  for (let i = 0; i < localStorage.length; i++) {
    let p = window.localStorage.key(i);
    projects.index.push(JSON.parse(window.localStorage.getItem(p)));
  }
  views.init(projects.index[0]);
};

const init = () => {
  localStorage.length > 0 ? getIndex() : freshStart();
};

// uncomment to remove saves!
// window.localStorage.clear();

init();

/* things we need to do:

add sorting functions and a few default project buckets which show tasks
add ability to delete and rename Projects

*/
