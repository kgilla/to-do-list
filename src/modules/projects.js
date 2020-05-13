import { views } from "./views";
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
    window.localStorage.setItem(project.name, JSON.stringify(project));
  };

  return {
    index,
    create,
    save,
    projectMaker,
  };
})();

export { projects };
