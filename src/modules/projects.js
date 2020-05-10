import { views } from "./views";

const projects = (() => {
  let index = [];

  const projectMaker = (name) => {
    let tasks = [];

    return {
      name,
      tasks,
    };
  };

  const create = (projectData) => {
    let project = projectMaker(projectData);
    index.push(project);
    saveProject(project);
    views.newProjectChanger(project);
  };

  const saveProject = (project) => {
    window.localStorage.setItem(project.name, JSON.stringify(project));
  };

  return {
    index,
    create,
    projectMaker,
  };
})();

export { projects };
