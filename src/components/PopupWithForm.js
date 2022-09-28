import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, callbackSubmitForm) {
    super(popupSelector);
    this._callbackSubmitForm = callbackSubmitForm;
    this.form = this._popup.querySelector("form");
    this._inputsPopup = Array.from(
      this._popup.querySelectorAll(".popup__input")
    );
  }

  _getInputValues() {
    this._formValues = {};
    this._inputsPopup.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setInputValues(inputValues) {
    inputValues.forEach((nameValue) => {
      this._popup.querySelector(`.popup__input[name=${nameValue.name}]`).value =
        nameValue.value;
    });
  }

  setEventListeners() {
    this._currentCallbackSubmitListener = this._сallbackFunction.bind(this);
    this.form.addEventListener("submit", this._currentCallbackSubmitListener);
    super.setEventListeners();
  }

  _сallbackFunction(evt) {
    evt.preventDefault();
    this._callbackSubmitForm(this._getInputValues());
    this.close();
  }

  close() {
    super.close();
    this.form.reset();
  }
}
