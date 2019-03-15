import cardTemplate from '../templates/card';
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
    this.element = null;
    this.state = {
      isEdit: true
    };
  }

  onEditButtonClick() {
    this.state.isEdit = !this.state.isEdit;
    this.element.classList.toggle(`card--edit`);
  }
  onSubmitButtonClick(evt) {
    evt.preventDefault();
    this.element.classList.remove(`card--edit`);
  }

  render() {
    this.element = createElement(this.template);
    getElement(this.element, `.card__btn--edit`).addEventListener(`click`, this.onEditButtonClick.bind(this));
    getElement(this.element, `.card__save`).addEventListener(`click`, this.onSubmitButtonClick.bind(this));
    return this.element;
  }

  unrender() {
    this._element = null;
  }

  get template() {
    const {
      title,
      color,
      isRepeating,
      dueDate,
      repeatingDays,
      picture,
      state,
      tags
    } = this;
    return cardTemplate({title, color, isRepeating, dueDate, repeatingDays, picture, tags, isEdit: state.isEdit});
  }
}
