import editTask from '../templates/editTask';
import {createElement, getElement} from '../utils/utils';

export class EditTask {
  constructor(props) {
    this.title = props.title;
    this.tags = props.tags;
    this.picture = props.picture;
    this.dueDate = props.dueDate;
    this.repeatingDays = props.repeatingDays;
    this.isRepeating = props.isRepeating;
    this.color = props.color;
    this._element = null;
    this._onSubmit = null;
  }

  onSubmitButtonClick(evt) {
    evt.preventDefault();
    return typeof this._onSubmit === `function` && this._onSubmit();
  }

  render() {
    this._element = createElement(this.template);
    this._bind();
    return this._element;
  }

  _bind() {
    getElement(this._element, `.card__save`)
      .addEventListener(`click`, this.onSubmitButtonClick.bind(this));
  }

  get element() {
    return this._element;
  }

  unrender() {
    this._element = null;
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
  }

  get template() {
    const {
      title,
      color,
      isRepeating,
      dueDate,
      repeatingDays,
      picture,
      tags
    } = this;
    return editTask({title, color, isRepeating, dueDate, repeatingDays, picture, tags});
  }
}
