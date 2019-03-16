import {Task} from './components/task';
import {EditTask} from './components/editTask';
import {filters as filtersConfig, card as cardConfig} from './config';
import filterTemplate from './templates/filter';
import {getAllElements, getElement, getRandomInt, renderElement} from './utils';

const mainFilter = getElement(document, `.main__filter`);
const tasksContainer = getElement(document, `.board__tasks`);

const clearBoard = () => {
  tasksContainer.innerHTML = ``;
  for (let i = 0; i < getRandomInt(3, 7); i++) {
    const firstTask = new Task(cardConfig());
    tasksContainer.appendChild(firstTask.render());
  }
};

renderElement(mainFilter, filterTemplate, filtersConfig);
const filterElement = getAllElements(`.filter input`);

Array.from(filterElement).forEach((element) => {
  element.addEventListener(`click`, clearBoard);
});

const task = new Task(cardConfig());
const editTask = new EditTask(cardConfig());
tasksContainer.appendChild(task.render());

task.onEdit = () => {
  editTask.render();
  tasksContainer.replaceChild(editTask.element, task.element);
  task.unrender();
};

editTask.onSubmit = () => {
  task.render();
  tasksContainer.replaceChild(task.element, editTask.element);
  editTask.unrender();
};

