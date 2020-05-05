import {views} from './views';

const projects = (() => {

  let index = [];

  const projectMaker = (name) => {
    return {name};
  }

  const create = (projectData) => {
    let project = projectMaker(projectData);
    index.push(project);
  }

  return {index, create};

})();

export {projects};