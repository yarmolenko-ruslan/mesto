export class Card {
  static _template = document.querySelector("#element-container").content;

  constructor(element, selectors) {
    this._element = element;
    this._selectors = selectors;
    this._handleClickDeleteCard = this._handleClickDeleteCard.bind(this);
    this._handleClickLikeCard = this._handleClickLikeCard.bind(this);
  }

  createCard() {
    this._view = Card._template.querySelector(".element").cloneNode(true);
    this._elementLike = this._view.querySelector(this._selectors.elementLike);
    this.cardTitle = this._view.querySelector(this._selectors.cardTitle);
    this.cardImage = this._view.querySelector(this._selectors.cardImage);
    this._buttonDel = this._view.querySelector(this._selectors.buttonDel);

    this._buttonDel.addEventListener("click", this._handleClickDeleteCard);
    this._elementLike.addEventListener("click", this._handleClickLikeCard);

    this.cardImage.src = this._element.link;
    this.cardImage.alt = this._element.name;
    this.cardTitle.textContent = this._element.name;

    return this._view;
  }

  _handleClickDeleteCard() {
    this._view.remove();
  }

  _handleClickLikeCard() {
    this._elementLike.classList.toggle("element__like_active");
  }
}
