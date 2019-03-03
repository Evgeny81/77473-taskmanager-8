export default (day, checked) => (`
  <input
    class="visually-hidden card__repeat-day-input"
    type="checkbox"
    id="repeat-${day}-2"
    name="repeat"
    value=${day}
    ${checked && `checked`}
  />
  <label class="card__repeat-day" for="repeat-${day}-2"
    >${day}</label
  >
`);
