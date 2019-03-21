import EditTask from './components/edit-task';
import Task from './components/task';
import {filters as filtersConfig, card as cardConfig} from './config';
import filterTemplate from './templates/filter';
import {getElement, getRandomInt, renderElement, clearBoard} from './utils/utils';

const mainFilter = getElement(document, `.main__filter`);
const tasksContainer = getElement(document, `.board__tasks`);

const createTask = (container, config) => {
  const task = new Task(config());
  const editTask = new EditTask(config());
  container.appendChild(task.render());

  task.onEdit = (newData) => {
    editTask.update(newData);
    editTask.render();
    container.replaceChild(editTask.element, task.element);
    task.unrender();
  };

  editTask.onSubmit = (newData) => {
    task.update(newData);
    task.render();
    container.replaceChild(task.element, editTask.element);
    editTask.unrender();
  };
};

mainFilter.addEventListener(`click`, () => {
  clearBoard(tasksContainer);
  for (let i = 0; i < getRandomInt(3, 7); i++) {
    createTask(tasksContainer, cardConfig);
  }
});

renderElement(mainFilter, filterTemplate, filtersConfig);

createTask(tasksContainer, cardConfig);
