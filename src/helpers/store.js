import tasks from "../controllers/tasks";

const store = (() => {
  const getTasks = () => {
    return JSON.parse(window.localStorage.getItem("tasks"));
  };

  const setTasks = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const setProjects = (projects) => {
    localStorage.setItem("projects", JSON.stringify(projects));
  };

  const getProjects = () => {
    return JSON.parse(window.localStorage.getItem("projects"));
  };

  const findTask = (id) => {
    const tasks = getTasks();
    const task = tasks.find((task) => task.id === id);
    return task;
  };

  const findProject = (id) => {
    const projects = getProjects();
    const project = projects.find((project) => project.id === id);
    return project;
  };

  const populateTasks = (project) => {
    let taskIndex = [];
    const tasks = getTasks();
    project.tasks.forEach((task) => {
      let t = tasks.find((a) => task === a.id);
      taskIndex.push(t);
    });
    project.tasks = taskIndex;
    return project;
  };

  return {
    getTasks,
    setTasks,
    populateTasks,
    findTask,
    getProjects,
    setProjects,
    findProject,
  };
})();

export default store;
