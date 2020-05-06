import { views } from "./views";

const tasks = (() => {

  let index = [];

  const test = () => {
    for (let i = 0; i < 20; i++) {
      let task = taskMaker("poop", "2020-05-12", "Fun Times");
      index.push(task);
    } views.renderTasks();
  }

  const taskMaker = (title, dueDate, priority, description) => {
    return {title, dueDate, priority, description};
  };

  const create = (taskData) => {
    let task = taskMaker(...taskData);
    index.push(task);
    views.renderTasks();
  }

  return {create, index, test};

})();

export {tasks};

