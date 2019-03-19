import {colors, daysOfWeek} from '../constants';
import {anyOf, getRandomInt} from '../utils/utils';

export default () => ({
  title: anyOf([
    `Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`,
  ]),
  dueDate: Date.now() + getRandomInt(0, 7) * 24 * 60 * 60 * 1000 * getRandomInt(-1, 2),
  tags: anyOf([`homework`, `theory`, `practice`, `intensive`, `keks`], 3),
  picture: `http://picsum.photos/100/100?r=${Math.random()}`,
  color: anyOf(colors),
  repeatingDays: daysOfWeek.reduce((result, current) => {
    result[current] = Boolean(getRandomInt(0, 1));
    return result;
  }, {}),
  isRepeating: Boolean(getRandomInt(0, 1)),
  isFavorite: Boolean(getRandomInt(0, 1)),
  isDone: Boolean(getRandomInt(0, 1))
});
