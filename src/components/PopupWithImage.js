import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this.popupImageTitle = document.querySelector(".popup-image__title");
    this.popupImageLayer = document.querySelector(".popup-image__img");
  }

  open(nameImage, linkImage) {
    this.popupImageTitle.textContent = nameImage;
    this.popupImageLayer.setAttribute("src", linkImage);
    this.popupImageLayer.setAttribute("alt", nameImage);
    super.open();
  }
}
