export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(this._popupSelector);
    this._closeCurrentPopupByClick = this._closePopupWithListener.bind(this);
    this._currentHandleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._currentHandleEscClose);
  }

  setEventListeners() {
    this._popup.addEventListener("click", this._closeCurrentPopupByClick);
  }

  _closePopupWithListener(evt) {
    if (
      evt.target.classList.contains("popup__close") ||
      evt.target.classList.contains("popup")
    ) {
      this.close();
    }
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._currentHandleEscClose);
  }
}
