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
    sidenav.toggleSidenav();
    app.renderProject(project);
  };

  const update = (data) => {
    const { id, name } = data;
    let projects = store.getProjects();
    let i = projects.findIndex((p) => p.id === id);
    projects[i].name = name;
    store.setProjects(projects);
    app.returnToSelected(projects[i]);
  };

  const destroy = (id) => {
    let projects = store.getProjects(id);
    let newProjects = projects.filter((project) => project.id !== id);
    store.setProjects(newProjects);
    app.renderIndex();
  };

  const changeProject = (id) => {
    window.scrollTo(0, 0);
    document.querySelector(".selected").classList.remove("selected");
    app.renderProject(store.findProject(id));
    sidenav.toggleSidenav();
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
