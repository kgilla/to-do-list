import { views } from "./views";

const projects = (() => {
  let index = [];

  const findProject = (name) => {
    return index.find((p) => p.name == name);
  }

  const findTask = (project, taskTitle) => {
    return project.tasks.find((task) => task.title == taskTitle);
  }

  const projectMaker = (name) => {
    let tasks = [];
    let element = "";

    const taskCount = () => {
      return tasks.length;
    };

    return {
      name,
      tasks,
      element,
      taskCount,
    };
  };

  const create = (projectData) => {
    let project = projectMaker(projectData);
    index.push(project);
    views.renderProject(project);
  };

  const init = () => {
    let p = projectMaker("My Project!");
    index.push(p);
    return p;
  };

  return {
    index,
    create,
    findProject,
    findTask,
    init,
  };
})();

export { projects };
