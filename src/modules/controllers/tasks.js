import projects from "./projects";

const tasks = (() => {
  const taskMaker = (title, dueDate, priority, description) => {
    let done = false;
    return {
      title,
      dueDate,
      priority,
      description,
      done,
    };
  };

  const create = (taskData, project) => {
    project.tasks.push(taskMaker(...taskData));
    projects.save(project);
    views.render(project);
  };

  const update = (event) => {
    taskChanger(event);
    closeTask(event);
    renderTasks(currentProject(), true);
    projects.save(currentProject());
  };

  const destroy = (event) => {
    let taskIndex = event.currentTarget.parentNode.getAttribute("data");
    let c = currentProject();
    c.tasks.splice(taskIndex, 1);
    views.render(c);
    projects.save(currentProject());
  };

  return {
    create,
    taskMaker,
  };
})();

export default tasks;
