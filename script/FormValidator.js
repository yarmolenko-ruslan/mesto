export class FormValidator {
  constructor({inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}, form) {
    this._inputSelector = inputSelector;
    this._submitButtonSelector = submitButtonSelector;
    this._inactiveButtonClass = inactiveButtonClass;
    this._inputErrorClass = inputErrorClass;
    this._errorClass = errorClass;
    this._form = form;
  }

  enableValidation() {
    // Ищим все инпуты в форме и запысываем их в массив
    this._inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
    //Ищим все кнопки в форме
    this._button = this._form.querySelector(this._submitButtonSelector);
    // Перебираем полученные инпуты в форме и записываем их в input
    this._inputs.forEach((input) => {
      // Передаем функции инпут в который будут вводить информацию
      this._setListenerInput(input);
    });
  }
  // Вешаем слушатель изменения инпута и запускаем его валидацию
  _setListenerInput(input) {
    input.addEventListener("input", () => {
      this._validateInput(input);
      this.validateForm();
    });
  }

  // Проводим валидацию инпута
  _validateInput(input) {
    // Передаем в переменную текст ошибки
    const errorText = this._searchErrorText(input);

    // Условие если инпут валиден, скрываем сообщение, если не валиден, показываем сообщение
    if (this._checkValidInput(input)) {
      this._hideInputError(input, errorText);
    } else {
      this._showInputError(input, errorText);
    }
  }

  // Ищем текст ошибки
  _searchErrorText(input) {
    const name = input.getAttribute('id');
    return document.querySelector(`.${name}-error`);
  }
  
  // Проверяем введенную информацию на валидность
  _checkValidInput(input) {
    return input.validity.valid;
  }
  
  // Скрыть и очистить текст подсказки
  _hideInputError(input, errorText) {
    input.classList.remove(this._inputErrorClass);
    errorText.textContent = '';
    errorText.classList.remove(this._errorClass);
  }
  
  // Показать текст подсказки и заполнить его стандартной подсказкой
  _showInputError(input, errorText) {
    input.classList.add(this._inputErrorClass);
    errorText.textContent = input.validationMessage;
    errorText.classList.add(this._errorClass);
  }
  
  // Валидация формы
  validateForm() {
    // Условие? если форма валидна, то активируем кнопку, если форма не валидна, блогкируем кнопку формы
    if (this._isInputsValid()) {
      this._button.classList.remove(this._inactiveButtonClass);
      this._button.removeAttribute('disabled');
    } else {
      this._button.classList.add(this._inactiveButtonClass);
      this._button.setAttribute('disabled', 'disabled');
    }
  }
  
  // Проверяем есть ли не валидные инпуты
  _isInputsValid() {
    return this._inputs.every(this._checkValidInput);
  }
}