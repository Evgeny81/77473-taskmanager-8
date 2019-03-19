import {createElement} from '../utils/utils';

export default class TaskBaseComponent {
  constructor(props) {
    if (new.target === TaskBaseComponent) {
      throw new Error(`Can't instantiate Component, only concrete one.`);
    }
    this._title = props.title;
    this._tags = props.tags;
    this._picture = props.picture;
    this._dueDate = props.dueDate;
    this._isRepeating = props.isRepeating;
    this._color = props.color;
    this._element = null;
  }

  bind() {}

  unbind() {}

  render() {
    this._element = createElement(this.template);
    this.bind();
    return this._element;
  }

  unrender() {
    this.unbind();
    this._element = null;
  }

  get element() {
    return this._element;
  }

  get template() {
    throw new Error(`You have to define template.`);
  }
}
