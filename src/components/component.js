import {createElement} from '../utils/utils';

export default class Component {
  constructor({title, tags, picture, dueDate, isRepeating, color}) {
    if (new.target === Component) {
      throw new Error(`Can't instantiate Component, only concrete one.`);
    }
    this._title = title;
    this._tags = tags;
    this._picture = picture;
    this._dueDate = dueDate;
    this._isRepeating = isRepeating;
    this._color = color;
    this._element = null;
  }

  _bind() {
    throw new Error(`You have to define bind method.`);
  }

  _unbind() {
    throw new Error(`You have to define unbind method.`);
  }

  render() {
    this._element = createElement(this.template);
    this._bind();
    return this._element;
  }

  unrender() {
    this._unbind();
    this._element = null;
  }

  update() {}

  get element() {
    return this._element;
  }

  get template() {
    throw new Error(`You have to define template.`);
  }
}
