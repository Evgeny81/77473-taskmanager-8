import {filters as filtersConfig} from './config';
import {cardTemplate, filterTemplate} from './templates';
import {getAllElements, getElement, renderElement} from './utils';

const mainFilter = getElement(`.main__filter`);
const boardTasks = getElement(`.board__tasks`);

const clearBoard = () => {
  boardTasks.innerHTML = ``;
  renderElement(boardTasks, cardTemplate);
};

renderElement(mainFilter, filterTemplate, filtersConfig);
renderElement(boardTasks, cardTemplate, 7);

const filterElement = getAllElements(`.filter input`);

Array.from(filterElement).forEach((element) => {
  element.addEventListener(`click`, clearBoard);
});
