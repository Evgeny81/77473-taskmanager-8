import {filters as filtersConfig, card as cardConfig} from './config';
import filterTemplate from './templates/filter';
import {getElement, getRandomInt, renderElement, createTask, clearBoard} from './utils/utils';

const mainFilter = getElement(document, `.main__filter`);
const tasksContainer = getElement(document, `.board__tasks`);

mainFilter.addEventListener(`click`, () => {
  clearBoard(tasksContainer);
  for (let i = 0; i < getRandomInt(3, 7); i++) {
    createTask(tasksContainer, cardConfig);
  }
});

renderElement(mainFilter, filterTemplate, filtersConfig);

createTask(tasksContainer, cardConfig);


