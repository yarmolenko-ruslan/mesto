import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, callbackSubmitForm) {
    super(popupSelector);
    this._callbackSubmitForm = callbackSubmitForm;
    this.form = this._popup.querySelector("form");
    this._inputsPopup = Array.from(
      this._popup.querySelectorAll(".popup__input")
    );
    this._submitBtn = document.querySelector(".popup__button");
    this._actionСhangeTitle = this._submitBtn.textContent;
    this._changeNameButton = "Создание...";
    if (this._actionСhangeTitle == "Сохранить") {
      this._changeNameButton = "Сохранение...";
    }
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
      this._popup.querySelector(`.popup__input[name=${nameValue.name}]`).value = nameValue.value;
    });
  }

  setEventListeners() {
    this._currentCallbackSubmitListener = this._сallbackFunction.bind(this);
    this.form.addEventListener("submit", this._currentCallbackSubmitListener);
    super.setEventListeners();
  }

  _сallbackFunction(evt) {
    evt.preventDefault();
    this._waitingRender(true);
    this._callbackSubmitForm(this._getInputValues())
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

  close() {
    super.close();
    this.form.reset();
  }

  _waitingRender(loading) {
    if (loading) {
      this._submitBtn.textContent = this._changeNameButton;
    } else {
      this._submitBtn.textContent = this._actionСhangeTitle;
    }
  }
}
