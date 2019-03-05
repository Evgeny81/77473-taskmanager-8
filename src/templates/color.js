export default (color) => (`
  <input
    type="radio"
    id="color-${color}-2"
    class="card__color-input card__color-input--${color} visually-hidden"
    name="color"
    value=${color}
    ${color === `black` && `checked`}
  />
  <label
    for="color-${color}-2"
    class="card__color card__color--${color}"
    >${color}</label
  >
`);
