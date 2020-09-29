import projectViews from "../views/projectViews";

const projects = (() => {
  let index = [];

  const create = (projectData) => {
    let project = { name: projectData, tasks: [] };
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
  };
})();

export default projects;
