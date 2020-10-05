import view from "../views/projectViews";
import store from "../helpers/store";
import app from "../app";
import forms from "./forms";
import sidenav from "../controllers/sidenav";
import { makeId } from "../helpers/index";

const projects = (() => {
  const create = (data) => {
    const project = { id: makeId(), name: data.name, tasks: [] };
    let projects = store.getProjects();
    projects.push(project);
    store.setProjects(projects);
    app.render(project);
  };

  const changeProject = (id) => {
    document.querySelector(".selected").classList.remove("selected");
    app.render(store.findProject(id));
  };

  const update = (data) => {
    const { id, name } = data;
    let projects = store.getProjects();
    let i = projects.findIndex((p) => p.id === id);
    projects[i].name = name;
    store.setProjects(projects);
    app.render(projects[i]);
  };

  const destroy = (id) => {
    let projects = store.getProjects(id);
    let newProjects = projects.filter((project) => project.id !== id);
    store.setProjects(newProjects);
    app.renderIndex();
  };

  const openForm = (id = "") => {
    id ? forms.openProjectForm(store.findProject(id)) : forms.openProjectForm();
  };

  const render = (projects, project = "") => {
    view.renderProjectHeader(project);
    view.renderProjects(projects, project);
  };

  return {
    create,
    changeProject,
    update,
    destroy,
    openForm,
    render,
  };
})();

export default projects;
