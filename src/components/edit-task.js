import editTask from '../templates/edit-task';
import {getElement} from '../utils/utils';
import TaskBaseComponent from './base-task';

export default class EditTask extends TaskBaseComponent {
  constructor(props) {
    super(props);
    this._repeatingDays = props.repeatingDays;
    this._element = null;
    this._onSubmit = null;
    this.onSubmitButtonClick = this.onSubmitButtonClick.bind(this);
  }

  onSubmitButtonClick(evt) {
    evt.preventDefault();
    return typeof this._onSubmit === `function` && this._onSubmit();
  }

  bind() {
    getElement(this._element, `.card__save`)
      .addEventListener(`click`, this.onSubmitButtonClick);
  }
  unbind() {
    getElement(this._element, `.card__save`)
      .removeEventListener(`click`, this.onSubmitButtonClick);
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
      _tags: tags
    } = this;
    return editTask({title, color, isRepeating, dueDate, repeatingDays, picture, tags});
  }
}
