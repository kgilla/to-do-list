import './style.css';
import './reset.css';

alert("hi")

const main = (() => {
  
  const taskMaker = (title, description, dueDate, priority) => {
    const sayHello = () => { console.log("hello") };
    return {title, description, dueDate, priority, sayHello};
  };
  
  return {taskMaker};
})();



