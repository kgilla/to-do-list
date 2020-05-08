import { views } from "./views";

const tasks = (() => {
  const taskMaker = (title, dueDate, priority, description) => {
    return {
      title,
      dueDate,
      priority,
      description,
    };
  };

  const create = (taskData, project) => {
    let task = taskMaker(...taskData);
    project.tasks.push(task);
    views.renderNewTask(task);
  };

  const init = (p) => {
    for (let i = 0; i < 5; i++) {
      let task = taskMaker("poop", "2020-05-12", "medium", "Fun Times");
      p.tasks.push(task);
    }
  };

  return {
    create,
    init,
    find,
  };
})();

export { tasks };
