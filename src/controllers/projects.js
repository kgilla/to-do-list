import view from "../views/projectViews";
import tasks from "../views/taskViews";
import {
  saveProjects,
  getProjects,
  setCurrentProject,
  getCurrentProject,
} from "../helpers/index";

const projects = (() => {
  // State variables
  let index = getProjects();

  const create = (projectData) => {
    let project = { name: projectData, tasks: [] };
    index.push(project);
    saveProjects(index);
    newProjectChanger(project);
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

  // const rerenderProjects = () => {
  //   let selected = document.querySelector(".selected").getAttribute("data");
  //   renderProjects();
  //   projectList.childNodes[selected].classList.toggle("selected");
  // };

  // const changeProject = (i) => {
  //   currentProject = index[i];
  //   view.renderProjectHeader(currentProject);
  //   tasks.renderTasks(currentProject, true);
  // };

  // const newProjectChanger = (project) => {
  //   renderProjects();
  //   tasks.renderTasks(project);
  //   // projectList.lastChild.classList.toggle("selected");
  // };

  return {
    create,
    // save,
    // deleteProject,
    // changeProject,
  };
})();

export default projects;
