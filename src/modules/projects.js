import {views} from './views';

const projects = (() => {

  let index = [];

  const test = () => {
    for (let i = 0; i < 10; i++) {
      let project = projectMaker("titiies");
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
  }

  return {index, create, test};

})();

export {projects};