import { views } from "./views";

const tasks = (() => {

  const test = (project) => {
    for (let i = 0; i < 20; i++) {
      let task = taskMaker("poop", "2020-05-12", "Fun Times");
      project.tasks.push(task);
    } 
  }

  const taskMaker = (title, dueDate, priority, description) => {
    return {title, dueDate, priority, description};
  };

  const create = (taskData, project) => {
    let task = taskMaker(...taskData);
    project.tasks.push(task);
    views.renderNewTask(task);
  }

  return {create, test};

})();

export {tasks};

