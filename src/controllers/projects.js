import view from "../views/projectViews";
import store from "../helpers/store";
import app from "../app";

const projects = (() => {
  let currentProject = store.getCurrentProject();

  const create = (data) => {
    let projects = store.getProjects();
    projects.push(data);
    store.setProjects(projects);
    store.setCurrentProject(projects.slice(-1)[0]);
    app.render();
  };

  const changeProject = (id) => {
    let projects = store.getProjects();
    let project = projects.find((p) => p.id === id);
    store.setCurrentProject(project);
    app.render();
  };

  const update = () => {};

  const destroy = () => {};

  const render = (projects, currentProject) => {
    view.renderProjectHeader(currentProject);
    view.renderProjects(projects, currentProject);
  };

  return {
    create,
    changeProject,
    update,
    destroy,
    render,
  };
})();

export default projects;
