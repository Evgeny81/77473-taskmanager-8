import {Task} from './components/task';
import {EditTask} from './components/edit-task';
import {filters as filtersConfig, card as cardConfig} from './config';
import filterTemplate from './templates/filter';
import {getElement, getRandomInt, renderElement} from './utils/utils';

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

mainFilter.addEventListener(`click`, clearBoard);

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

