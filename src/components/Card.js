export class Card {
  constructor(title, link, selectorTemplate, handleCardClick) {
    this._title = title;
    this._link = link;
    this._handleCardClick = handleCardClick;
    this.selectorTemplate = selectorTemplate;
    this.popupImage = document.querySelector(".popup-card");
  }

  renderElement() {
    const elementTemplate = document
      .querySelector(this.selectorTemplate)
      .content.firstElementChild.cloneNode(true);
    const elementTitle = elementTemplate.querySelector(".element__title");
    const elementImage = elementTemplate.querySelector(".element__image");
    const elementButtonLike = elementTemplate.querySelector(".element__like");

    elementTitle.textContent = this._title;
    elementImage.setAttribute("src", this._link);
    elementImage.setAttribute("alt", this._title);

    this._listenerClickImage(elementImage);
    this._listenerClickBtnLike(elementButtonLike);
    const deletCard = elementTemplate.querySelector(".element__trash-btn");
    this._listenerClickDeletCard(deletCard);

    return elementTemplate;
  }

  _listenerClickImage(elementImage) {
    elementImage.addEventListener("click", this._handleCardClick);
  }

  _listenerClickBtnLike(elementButtonLike) {
    elementButtonLike.addEventListener("click", () =>
      this._likeCard(elementButtonLike)
    );
  }

  _likeCard(elementButtonLike) {
    elementButtonLike.classList.toggle("element__like_active");
  }

  _listenerClickDeletCard(deletCard) {
    deletCard.addEventListener("click", this._deleteCard);
  }

  _deleteCard(event) {
    event.currentTarget.closest(".element").remove();
  }
}
