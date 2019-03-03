export const getElement = (selector) => (
  document.querySelector(selector)
);

export const getAllElements = (selector) => (
  document.querySelectorAll(selector)
);

export const getRandomInt = (min = 0, max = 2) => (
  Math.floor(Math.random() * (max + 1 - min)) + min
);

export const anyOf = function (array, length) {
  if (length) {
    const selectedValues = new Set();
    while (selectedValues.size < length) {
      selectedValues.add(array[getRandomInt(0, array.length - 1)]);
    }
    return [...selectedValues];
  }
  return array[getRandomInt(0, array.length - 1)];
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
