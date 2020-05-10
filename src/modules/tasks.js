import { views } from "./views";
import { projects } from "./projects";

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
    views.render();
  };

  return {
    create,
    taskMaker,
  };
})();

export { tasks };
