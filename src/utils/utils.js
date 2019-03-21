import {daysOfWeek} from '../constants/constants';

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

export const clearBoard = (container) => {
  container.innerHTML = ``;
};

export const handleFormData = (formData) => {
  const newData = {
    title: ``,
    color: ``,
    tags: new Set(),
    repeatingDays: daysOfWeek.reduce((result, current) => {
      result[current] = false;
      return result;
    }, {}),
    dueDate: null,
    isRepeating: false
  };
  for (const pair of formData) {
    const [property, value] = pair;
    switch (property) {
      case `text`:
        newData.title = value;
        break;
      case `hashtag`:
        newData.tags.add(value);
        break;
      case `color`:
        newData.color = value;
        break;
      case `img`:
        newData.picture = value;
        break;
      case `repeat`:
        newData.isRepeating = true;
        newData.repeatingDays[value] = true;
        break;
    }
  }
  return newData;
};
