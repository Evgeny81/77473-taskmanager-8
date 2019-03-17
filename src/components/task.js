import cardTemplate from '../templates/task';
import {createElement, getElement} from '../utils/utils';

export class Task {
  constructor(props) {
    this.title = props.title;
    this.tags = props.tags;
    this.picture = props.picture;
    this.dueDate = props.dueDate;
    this.repeatingDays = props.repeatingDays;
    this.isRepeating = props.isRepeating;
    this.color = props.color;
    this._element = null;
    this._onEdit = null;
  }

  _onEditClick() {
    return typeof this._onEdit === `function` && this._onEdit();
  }

  render() {
    this._element = createElement(this.template);
    this._bind();
    return this._element;
  }

  _bind() {
    getElement(this._element, `.card__btn--edit`)
      .addEventListener(`click`, this._onEditClick.bind(this));
  }

  get element() {
    return this._element;
  }

  unrender() {
    this._element = null;
  }

  set onEdit(fn) {
    this._onEdit = fn;
  }

  get template() {
    const {
      title,
      color,
      isRepeating,
      dueDate,
      picture,
      tags
    } = this;
    return cardTemplate({title, color, isRepeating, dueDate, picture, tags});
  }
}
