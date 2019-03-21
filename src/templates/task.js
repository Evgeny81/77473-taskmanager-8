import moment from 'moment';
import hashtagTemplate from './hashtag';

export default ({title = ``, isRepeating, color = `black`, dueDate, tags, picture}) => (
  `<article class="card card--${color} ${isRepeating ? `card--repeat` : ``} ${dueDate < Date.now() ? `card--deadline` : ``}">
            <form class="card__form" method="get">
              <div class="card__inner">
                <div class="card__control">
                  <button type="button" class="card__btn card__btn--edit">
                    edit
                  </button>
                  <button type="button" class="card__btn card__btn--archive">
                    archive
                  </button>
                  <button
                    type="button"
                    class="card__btn card__btn--favorites card__btn--disabled"
                  >
                    favorites
                  </button>
                </div>

                <div class="card__color-bar">
                  <svg class="card__color-bar-wave" width="100%" height="10">
                    <use xlink:href="#wave"></use>
                  </svg>
                </div>

                <div class="card__textarea-wrap">
                  <label>
                    <textarea
                      class="card__text"
                      placeholder="Start typing your text here..."
                      name="text"
                    >${title}</textarea>
                  </label>
                </div>

                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">${dueDate ? moment(dueDate).format(`DD MMMM HH:mm`) : ``}</div>
                    <div class="card__hashtag">
                      <div class="card__hashtag-list">
                        ${tags.map((tag) => hashtagTemplate(tag)).join(``)}                      
                      </div>
                    </div>
                  </div>

                  <label class="card__img-wrap ${picture ? `` : `card__img-wrap--empty`}">
                    <input
                      type="file"
                      class="card__img-input visually-hidden"
                      name="img"
                    />
                    <img
                      src=${picture ? picture : `img/add-photo.svg`}
                      alt="task picture"
                      class="card__img"
                    />
                  </label>
                </div>

              </div>
            </form>
          </article>`
);
