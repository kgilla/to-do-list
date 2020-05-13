import { projectViews } from "./projectViews";

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
    projectViews.newProjectChanger(project);
  };

  const save = (project) => {
    localStorage.setItem(project.name, JSON.stringify(project));
  };

  const deleteProject = (name) => {
    localStorage.removeItem(name);
  };

  return {
    index,
    create,
    save,
    deleteProject,
    projectMaker,
  };
})();

export { projects };
