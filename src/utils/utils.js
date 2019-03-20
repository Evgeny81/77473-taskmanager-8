import EditTask from '../components/edit-task';
import Task from '../components/task';

export const getElement = (container, selector) => (
  container.querySelector(selector)
);

export const getRandomInt = (min = 0, max = 2) => (
  Math.floor(Math.random() * (max + 1 - min)) + min
);

export const anyOf = (array, length) => {
  if (length) {
    const selectedValues = new Set();
    while (selectedValues.size < length) {
      selectedValues.add(array[getRandomInt(0, array.length - 1)]);
    }
    return [...selectedValues];
  }
  return array[getRandomInt(0, array.length - 1)];
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

export const renderElement = (parent, element, config = getRandomInt(3, 7)) => {
  const elementsQuantity = Array.isArray(config) ? config.length : config;
  for (let i = 0; i < elementsQuantity; i++) {
    parent.insertAdjacentHTML(
        `beforeend`,
        element(config[i])
    );
  }
};

export const createTask = (container, config) => {
  const task = new Task(config());
  const editTask = new EditTask(config());
  container.appendChild(task.render());

  task.onEdit = () => {
    editTask.render();
    container.replaceChild(editTask.element, task.element);
    task.unrender();
  };

  editTask.onSubmit = () => {
    task.render();
    container.replaceChild(task.element, editTask.element);
    editTask.unrender();
  };
};

export const clearBoard = (container) => {
  container.innerHTML = ``;
};
