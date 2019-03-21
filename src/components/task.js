import cardTemplate from '../templates/task';
import {getElement, handleFormData} from '../utils/utils';
import Component from './component';

export default class Task extends Component {
  constructor(data) {
    super(data);
    this._element = null;
    this._onEdit = null;
    this._onEditClick = this._onEditClick.bind(this);
  }

  _onEditClick() {
    const formData = new FormData(this._element.querySelector(`.card__form`));
    return typeof this._onEdit === `function` && this._onEdit(handleFormData(formData));
  }

  _bind() {
    getElement(this._element, `.card__btn--edit`)
      .addEventListener(`click`, this._onEditClick);
  }

  _unbind() {
    getElement(this._element, `.card__btn--edit`)
      .removeEventListener(`click`, this._onEditClick);
  }

  update({title, tags, picture, dueDate, isRepeating, color}) {
    this._title = title;
    this._tags = [...tags];
    this._picture = picture;
    this._dueDate = dueDate;
    this._isRepeating = isRepeating;
    this._color = color;
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
