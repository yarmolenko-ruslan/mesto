export class Card {
  constructor(
    { data, handleCardClick, handleLikeClick, handleDeleteIconClick },
    selectorTemplate,
    userId
  ) {
    this.title = data.name;
    this.link = data.link;
    this.likes = data.likes;
    this.id = data._id;
    this.ownderId = data.owner._id;
    this.userId = userId;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this.popupImage = document.querySelector(".popup-image");
    this.selectorTemplate = selectorTemplate;
    this._liked = this.likes
      .map((el) => {
        return el._id;
      })
      .includes(this.userId);
  }

  renderElement() {
    const elementTemplate = document
      .querySelector(this.selectorTemplate)
      .content.firstElementChild.cloneNode(true);
    elementTemplate.id = this.id;
    const elementTitle = elementTemplate.querySelector(".element__title");
    const elementImage = elementTemplate.querySelector(".element__image");
    this._elementButtonLike = elementTemplate.querySelector(".element__like");
    this._elementQuantity = elementTemplate.querySelector(
      ".element__like-quantity"
    );

    elementTitle.textContent = this.title;
    elementImage.setAttribute("src", this.link);
    elementImage.setAttribute("alt", this.title);
    this.likeQuantity(this.likes.length);
    this.liked(this.getLiked());

    this._listenerClickImage(elementImage);

    this._listenerClickBtnLike();

    const deletElement = elementTemplate.querySelector(".element__trash-btn");
    if (this.userId === this.ownderId) {
      this._listenerClickDeleteCard(deletElement);
    } else {
      deletElement.remove();
    }

    return elementTemplate;
  }

  _listenerClickImage(elementImage) {
    elementImage.addEventListener("click", this._handleCardClick);
  }

  _listenerClickBtnLike() {
    this._elementButtonLike.addEventListener("click", () => {
      this._handleLikeClick(this);
    });
  }

  _listenerClickDeleteCard(deletElement) {
    deletElement.addEventListener("click", () => {
      this._handleDeleteIconClick(this);
    });
  }

  getLiked() {
    return this._liked;
  }

  liked(info) {
    this._liked = info;
    if (info) {
      this._elementButtonLike.classList.add("element__like_active");
    } else {
      this._elementButtonLike.classList.remove("element__like_active");
    }
  }

  likeQuantity(n) {
    this._elementQuantity.textContent = n;
  }
}
