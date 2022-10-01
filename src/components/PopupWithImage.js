import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._selector = document.querySelector(popupSelector);
    this.popupImageTitle = this._selector.querySelector(".popup-image__title");
    this.popupImageLayer = this._selector.querySelector(".popup-image__img");
  }

  open(nameImage, linkImage) {
    this.popupImageTitle.textContent = nameImage;
    this.popupImageLayer.setAttribute("src", linkImage);
    this.popupImageLayer.setAttribute("alt", nameImage);
    super.open();
  }
}
