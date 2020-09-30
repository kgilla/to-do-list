import view from "../views/projectViews";
import store from "../helpers/store";
import app from "../app";

const projects = (() => {
  let projects = store.getProjects();
  let currentProject = store.getCurrentProject();

  const getProjectFormData = () => {};

  const create = (data) => {
    projects.push(data);
    console.log(projects.slice(-1)[0]);
    store.setCurrentProject(projects.slice(-1)[0]);
    store.setProjects(projects);
    app.render();
  };

  // const deleteProject = (e) => {
  //   let i = e.currentTarget.parentNode.parentNode.getAttribute("data");
  //   let name = projects.index[i].name;
  //   projects.deleteProject(name);
  //   projects.index.splice(i, 1);
  //   if (projects.index.length == 0) {
  //     views.renderHome();
  //   } else {
  //     views.init(projects.index[0]);
  //   }
  // };

  const changeProject = (i) => {
    // // setCurrentProject(index[i]);
    // view.renderProjectHeader(currentProject);
    // tasks.renderTasks(currentProject, true);
  };

  const render = (projects, currentProject) => {
    view.renderProjectHeader(currentProject);
    view.renderProjects(projects, currentProject);
  };

  // const newProjectChanger = (project) => {
  //   renderProjects();
  //   tasks.renderTasks(project);
  //   // projectList.lastChild.classList.toggle("selected");
  // };

  return {
    create,
    // save,
    // deleteProject,
    changeProject,
    getProjectFormData,
    render,
  };
})();

export default projects;
