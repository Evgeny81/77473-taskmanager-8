export default ({label, count, checked, disabled}) => {
  const lowerCasedLabel = label.toLowerCase();
  return `<input
            type="radio"
            id="filter__${lowerCasedLabel}"
            class="filter__input visually-hidden"
            name="filter"
            ${checked && `checked`}
            ${disabled && `disabled`}
          />
          <label for="filter__${lowerCasedLabel}" class="filter__label">
            ${label} <span class="filter__${lowerCasedLabel}-count">${count}</span></label
          >`;
};
