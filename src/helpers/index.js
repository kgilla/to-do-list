const { default: projects } = require("../controllers/projects");

exports.maker = (type, attributes, text, place) => {
  let element = document.createElement(type);
  Object.keys(attributes).forEach((key) => {
    element.setAttribute(key, attributes[key]);
  });
  element.textContent = text;
  place.appendChild(element);
  return element;
};

// local storage functions

exports.setCurrentProject = (project) => {
  localStorage.setItem("currentProject", JSON.stringify(project));
};

exports.getCurrentProject = () => {
  return JSON.parse(window.localStorage.getItem("currentProject"));
};

exports.saveProjects = (projects) => {
  localStorage.setItem("projects", JSON.stringify(projects));
};

exports.getProjects = () => {
  return JSON.parse(window.localStorage.getItem("projects"));
};

// for (let i = 0; i < localStorage.length; i++) {
//   let p = window.localStorage.key(i);
//   projects.index.push(JSON.parse(window.localStorage.getItem(p)));
// }
// init(projects.index[0]);

// const save = (project) => {
//   localStorage.setItem(project.name, JSON.stringify(project));
// };

// const deleteProject = (name) => {
//   localStorage.removeItem(name);
// };
