import {Task} from './components/Task';
import {filters as filtersConfig, card as cardConfig} from './config';
import {filterTemplate} from './templates';
import {getAllElements, getElement, getRandomInt, renderElement} from './utils';

const mainFilter = getElement(document, `.main__filter`);
const boardTasks = getElement(document, `.board__tasks`);

const clearBoard = () => {
  boardTasks.innerHTML = ``;
  for (let i = 0; i < getRandomInt(3, 7); i++) {
    const firstTask = new Task(cardConfig());
    boardTasks.appendChild(firstTask.render());
  }
};

renderElement(mainFilter, filterTemplate, filtersConfig);
const filterElement = getAllElements(`.filter input`);

Array.from(filterElement).forEach((element) => {
  element.addEventListener(`click`, clearBoard);
});

for (let i = 0; i < 3; i++) {
  const firstTask = new Task(cardConfig());
  boardTasks.appendChild(firstTask.render());
}

