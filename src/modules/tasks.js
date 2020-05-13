import { taskViews } from "./taskViews";
import { projects } from "./projects";
import { views } from "./views";

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
    project.tasks.push(taskMaker(...taskData));
    projects.save(project);
    views.render(project);
  };

  return {
    create,
    taskMaker,
  };
})();

export { tasks };
