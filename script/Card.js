import { addCardImageClickListener } from "./index.js";

// Создадим класс Card
export class Card {
  static _template = document.querySelector("#element-container").content;
  // Передадим в конструктор наименование, ссылку на фотографию и объект сместами
  constructor(name, link, selectors) {
    this._link = link;
    this._name = name;
    this._selectors = selectors;
    this._handleClickDeleteCard = this._handleClickDeleteCard.bind(this);
    this._handleClickLikeCard = this._handleClickLikeCard.bind(this);
    this._popupImageImg = document.querySelector(selectors.modalImageImg);
  }
  // Создадим карточку из полученных значений
  createCard() {
    this._view = Card._template.querySelector(".element").cloneNode(true);
    this._elementLike = this._view.querySelector(this._selectors.elementLike);
    this._cardTitle = this._view.querySelector(this._selectors.cardTitle);
    this._cardImage = this._view.querySelector(this._selectors.cardImage);
    this._buttonDel = this._view.querySelector(this._selectors.buttonDel);
  
    this._buttonDel.addEventListener("click", this._handleClickDeleteCard);
    this._elementLike.addEventListener("click", this._handleClickLikeCard);

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    addCardImageClickListener(this._cardImage);

    return this._view;
  }
  
  _handleClickDeleteCard() {
    this._view.remove();
  }

  _handleClickLikeCard() {
    this._elementLike.classList.toggle("element__like_active");
  }
}
