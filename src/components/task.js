import cardTemplate from '../templates/task';
import {getElement} from '../utils/utils';
import TaskBaseComponent from './base-task';

export default class Task extends TaskBaseComponent {
  constructor(props) {
    super(props);
    this._element = null;
    this._onEdit = null;
    this._onEditClick = this._onEditClick.bind(this);
  }

  _onEditClick() {
    return typeof this._onEdit === `function` && this._onEdit();
  }

  bind() {
    getElement(this._element, `.card__btn--edit`)
      .addEventListener(`click`, this._onEditClick);
  }

  unbind() {
    getElement(this._element, `.card__btn--edit`)
      .removeEventListener(`click`, this._onEditClick);
  }

  set onEdit(fn) {
    this._onEdit = fn;
  }

  get template() {
    const {
      _title: title,
      _color: color,
      _isRepeating: isRepeating,
      _dueDate: dueDate,
      _picture: picture,
      _tags: tags
    } = this;
    return cardTemplate({title, color, isRepeating, dueDate, picture, tags});
  }
}
