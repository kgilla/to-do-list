import { views } from "./views";

const projects = (() => {
  let index = [];

  const findProject = (element) => {
    let p = index.find((p) => p.name == element.textContent);
    return p;
  };

  const projectMaker = (name) => {
    let tasks = [];
    let taskCount = tasks.length;
    return {
      name,
      tasks,
      taskCount,
    };
  };

  const create = (projectData) => {
    let project = projectMaker(projectData);
    index.push(project);
    views.renderNewProject(project);
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
    init,
  };
})();

export { projects };
