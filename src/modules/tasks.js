import { views } from "./views";
import { projects } from "./projects";

const tasks = (() => {
  const taskMaker = (title, dueDate, priority, description) => {
    let done = false;
    return {
      title,
      dueDate,
      priority,
      description,
      done,
    };
  };

  const create = (taskData, project) => {
    let task = taskMaker(...taskData);
    project.tasks.push(task);
    projects.save(project);
    views.render();
  };

  return {
    create,
    taskMaker,
  };
})();

export { tasks };
