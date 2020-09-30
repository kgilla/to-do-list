const store = (() => {
  const setCurrentProject = (project) => {
    localStorage.removeItem("currentProject");
    localStorage.setItem("currentProject", JSON.stringify(project));
  };

  const getCurrentProject = () => {
    return JSON.parse(window.localStorage.getItem("currentProject"));
  };

  const setProjects = (projects) => {
    localStorage.removeItem("projects");
    localStorage.setItem("projects", JSON.stringify(projects));
  };

  const getProjects = () => {
    return JSON.parse(window.localStorage.getItem("projects"));
  };

  // const deleteProject = (name) => {
  //   localStorage.removeItem(name);
  // };

  return {
    getCurrentProject,
    setCurrentProject,
    getProjects,
    setProjects,
  };
})();

export default store;
