export class FormValidator {
  constructor(
    {
      formSelector,
      inputSelector,
      submitButtonSelector,
      inactiveButtonClass,
      inputErrorClass,
      errorClass,
    },
    form
  ) {
    this._formSelector = formSelector;
    this._inputSelector = inputSelector;
    this._submitButtonSelector = submitButtonSelector;
    this._inactiveButtonClass = inactiveButtonClass;
    this._inputErrorClass = inputErrorClass;
    this._errorClass = errorClass;
    this._form = form;
  }

  enableValidation() {
    this._inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._button = this._form.querySelector(this._submitButtonSelector);
    this._inputs.forEach((input) => {
      this._setListenerOnInput(input);
    });
  }

  _setListenerOnInput(input) {
    input.addEventListener("input", () => this._validateElements(input));
  }

  _validateElements(input) {
    this._validateInput(input);
    this.toggleButtonState();
  }

  _validateInput(input) {
    const errorPlace = this._findInputErrorPlace(input);
    if (this._isInputValid(input)) {
      this._hideInputError(input, errorPlace);
    } else {
      this._showInputError(input, errorPlace);
    }
  }

  _findInputErrorPlace(input) {
    const name = input.getAttribute("name");
    return document.getElementById(`${name}Error`);
  }

  _isInputValid(input) {
    return input.validity.valid;
  }

  _hideInputError(input, errorPlace) {
    input.classList.remove(this._inputErrorClass);
    errorPlace.textContent = "";
    errorPlace.classList.remove(this._errorClass);
  }

  _showInputError(input, errorPlace) {
    input.classList.add(this._inputErrorClass);
    errorPlace.textContent = input.validationMessage;
    errorPlace.classList.add(this._errorClass);
  }

  cleanValidError() {
    this.toggleButtonState();
    this._inputs.forEach((el) => {
      const error = this._findInputErrorPlace(el);
      this._hideInputError(el, error);
    });
  }

  toggleButtonState() {
    if (this._isInputsValid()) {
      this._button.classList.remove(this._inactiveButtonClass);
      this._button.removeAttribute("disabled");
    } else {
      this._button.classList.add(this._inactiveButtonClass);
      this._button.setAttribute("disabled", "disabled");
    }
  }

  _isInputsValid() {
    return this._inputs.every(this._isInputValid);
  }
}
