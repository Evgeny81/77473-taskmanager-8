export const getElement = (selector) => (
  document.querySelector(selector)
);

export const getAllElements = (selector) => (
  document.querySelectorAll(selector)
);

const getRandomInt = (min, max) => (
  Math.floor(Math.random() * (max - min)) + min
);

export const renderElement = (parent, element, config = getRandomInt(3, 7)) => {
  const elementsQuantity = Array.isArray(config) ? config.length : config;
  for (let i = 0; i < elementsQuantity; i++) {
    parent.insertAdjacentHTML(
        `beforeend`,
        element(config[i])
    );
  }
};
