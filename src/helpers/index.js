exports.maker = (type, attributes, text, place) => {
  let element = document.createElement(type);
  Object.keys(attributes).forEach((key) => {
    element.setAttribute(key, attributes[key]);
  });
  element.textContent = text;
  place.appendChild(element);
  return element;
};

exports.makeId = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
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

// const deleteProject = (name) => {
//   localStorage.removeItem(name);
// };
