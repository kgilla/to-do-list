import {views} from './views';

const projects = (() => {

  let index = [];

  const test = () => {
    for (let i = 0; i < 1; i++) {
      let project = projectMaker("My Project!");
      index.push(project);
    }  
    views.renderProjects();
  }

  const projectMaker = (name) => {
    let tasks = [];
    return {name, tasks};
  }

  const create = (projectData) => {
    let project = projectMaker(projectData);
    index.push(project);
    views.renderNewProject(project);
  }

  return {index, create, test};

})();

export {projects};