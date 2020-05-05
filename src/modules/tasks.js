import { views } from "./views";

const tasks = (() => {

  let index = [];

  const taskMaker = (title, dueDate, description) => {
    return {title, dueDate, description};
  };

  const create = (taskData) => {
    let task = taskMaker(...taskData);
    index.push(task);
    views.renderTasks();
  }

  return {create, index};

})();

export {tasks};

