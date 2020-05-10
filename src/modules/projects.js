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
    save(project);
    views.newProjectChanger(project);
  }

  const save = (project) => {
    window.localStorage.setItem(project.name, JSON.stringify(project));
  }

  return {
    index,
    create,
    save,
    projectMaker,
  };
})();

export { projects };


