import flatpickr from 'flatpickr';
import editTask from '../templates/edit-task';
import {getElement, handleFormData} from '../utils/utils';
import Component from './component';

export default class EditTask extends Component {
  constructor(data) {
    super(data);
    this._repeatingDays = data.repeatingDays;
    this._element = null;
    this._onSubmit = null;
    this._state = {
      hasDate: false,
      isRepeat: data.isRepeating
    };
    this._onSubmitButtonClick = this._onSubmitButtonClick.bind(this);
    this._onDateToggleButtonClick = this._onDateToggleButtonClick.bind(this);
    this._onRepeatToggleButtonClick = this._onRepeatToggleButtonClick.bind(this);
  }

  _onSubmitButtonClick(evt) {
    evt.preventDefault();
    const formData = new FormData(getElement(this._element, `.card__form`));
    const imageSrc = getElement(this._element, `.card__img`).getAttribute(`src`);
    formData.append(`picture`, imageSrc);
    return typeof this._onSubmit === `function` && this._onSubmit(handleFormData(formData));
  }

  _onDateToggleButtonClick() {
    this._state.hasDate = !this._state.hasDate;
    this._rerender();
  }

  _onRepeatToggleButtonClick() {
    this._state.isRepeat = !this._state.isRepeat;
    this._rerender();
  }

  _bind() {
    getElement(this._element, `.card__save`)
      .addEventListener(`click`, this._onSubmitButtonClick);
    getElement(this._element, `.card__date-deadline-toggle`)
      .addEventListener(`click`, this._onDateToggleButtonClick);
    getElement(this._element, `.card__repeat-toggle`)
      .addEventListener(`click`, this._onRepeatToggleButtonClick);
    flatpickr(`.card__date`, {altInput: true, altFormat: `j F`, dateFormat: `j F`});
    flatpickr(`.card__time`, {enableTime: true, noCalendar: true, altInput: true, time_24hr: true}); // eslint-disable-line camelcase
  }

  _unbind() {
    getElement(this._element, `.card__save`)
      .removeEventListener(`click`, this._onSubmitButtonClick);
    getElement(this._element, `.card__date-deadline-toggle`)
      .removeEventListener(`click`, this._onDateToggleButtonClick);
    getElement(this._element, `.card__repeat-toggle`)
      .removeEventListener(`click`, this._onRepeatToggleButtonClick);
  }

  update({title}) {
    this._title = title;
  }

  _rerender() {
    this._unbind();
    this._element.innerHTML = this.template;
    this._bind();
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
  }

  get template() {
    const {
      _title: title,
      _color: color,
      _isRepeating: isRepeating,
      _repeatingDays: repeatingDays,
      _dueDate: dueDate,
      _picture: picture,
      _tags: tags,
      _state
    } = this;
    return editTask({
      title, color, isRepeating, dueDate, repeatingDays, picture, tags,
      hasDate: _state.hasDate, isRepeat: _state.isRepeat
    });
  }
}
