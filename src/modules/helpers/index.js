exports.maker = (type, attributes, text, place) => {
  let element = document.createElement(type);
  Object.keys(attributes).forEach((key) => {
    element.setAttribute(key, attributes[key]);
  });
  element.textContent = text;
  place.appendChild(element);
  return element;
};
