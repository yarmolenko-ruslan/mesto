import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector, callbackConfirmation) {
    super(popupSelector);
    this._callbackConfirmation = callbackConfirmation;
    this._btnTriggerConfirmation = this._popup.querySelector(".popup__button");
  }

  open(id) {
    this._id = id;

    super.open();
  }

  setEventListeners() {
    this._callbackSubmitListener = this._callbackFunction.bind(this);
    this._btnTriggerConfirmation.addEventListener(
      "click",
      this._callbackSubmitListener
    );

    super.setEventListeners();
  }

  _callbackFunction(evt) {
    evt.preventDefault();

    this._waitingRender(true);
    this._callbackConfirmation(this._id)
      .then(() => {
        this.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this._waitingRender(false);
      });
  }

  _waitingRender(loading) {
    if (loading) {
      this._btnTriggerConfirmation.textContent = "Удаление...";
    } else {
      this._btnTriggerConfirmation.textContent = "Да";
    }
  }
}
