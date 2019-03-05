import {filters as filtersConfig, card as cardConfig} from './config';
import {cardTemplate, filterTemplate} from './templates';
import {getAllElements, getElement, getRandomInt, renderElement} from './utils';

const mainFilter = getElement(`.main__filter`);
const boardTasks = getElement(`.board__tasks`);

const clearBoard = () => {
  boardTasks.innerHTML = ``;
  renderElement(boardTasks, cardTemplate, cardConfig(getRandomInt(3, 7)));
};

renderElement(mainFilter, filterTemplate, filtersConfig);
renderElement(boardTasks, cardTemplate, cardConfig(7));
const filterElement = getAllElements(`.filter input`);

Array.from(filterElement).forEach((element) => {
  element.addEventListener(`click`, clearBoard);
});
