export class FormValidator {
  constructor({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}, form) {
    this._formSelector = formSelector;
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
  
  _hideInputError(input, errorText) {
    input.classList.remove(this._inputErrorClass);
    errorText.textContent = '';
    errorText.classList.remove(this._errorClass);
  }
  
  _showInputError(input, errorText) {
    input.classList.add(this._inputErrorClass);
    errorText.textContent = input.validationMessage;
    errorText.classList.add(this._errorClass);
  }
  
  // Валидация формы
  validateForm() {
    if (this._isInputsValid()) {
      this._button.classList.remove(this._inactiveButtonClass);
      this._button.removeAttribute('disabled');
    } else {
      this._button.classList.add(this._inactiveButtonClass);
      this._button.setAttribute('disabled', 'disabled');
    }
  }
  
  _isInputsValid() {
    return this._inputs.every(this._checkValidInput);
  }
}








// вызываем функции для валидации формы
// enableValidation({
//   formSelector: ".popup__form",
//   inputSelector: ".popup__input",
//   submitButtonSelector: ".popup__button",
//   inactiveButtonClass: "popup__button_disabled",
//   inputErrorClass: "popup__input_type_error",
//   errorClass: "popup__error_visible",
// });

// function enableValidation({
//   formSelector,
//   inputSelector,
//   submitButtonSelector,
//   inactiveButtonClass,
//   inputErrorClass,
//   errorClass,
// }) {
//   const forms = Array.from(document.querySelectorAll(formSelector));

//   forms.forEach(function (form) {
//     const inputs = Array.from(form.querySelectorAll(inputSelector));

//     inputs.forEach(function (input) {
//       input.addEventListener("input", function () {
//         isValid(input, inputErrorClass, errorClass);

//         validateForm(form, inputs, submitButtonSelector, inactiveButtonClass);
//       });
//     });
//   });
// }

// function isValid(input, inputErrorClass, errorClass) {
//   const errorText = errorTextSearch(input);

//   if (checkValidInput(input)) {
//     hideInputError(input, errorText, inputErrorClass, errorClass);
//   } else {
//     showInputError(input, errorText, inputErrorClass, errorClass);
//   }
// }

// function errorTextSearch(input) {
//   const name = input.getAttribute("id");

//   return document.querySelector(`.${name}-error`);
// }

// function checkValidInput(input) {
//   return input.validity.valid;
// }

// function hideInputError(input, errorText, inputErrorClass, errorClass) {
//   input.classList.remove(inputErrorClass);
//   errorText.textContent = "";
//   errorText.classList.remove(errorClass);
// }

// function showInputError(input, errorText, inputErrorClass, errorClass) {
//   input.classList.add(inputErrorClass);
//   errorText.textContent = input.validationMessage;
//   errorText.classList.add(errorClass);
// }

// function validateForm(form, inputs, submitButtonSelector, inactiveButtonClass) {
//   const button = form.querySelector(submitButtonSelector);
//   if (isInputsValid(inputs)) {
//     button.classList.remove(inactiveButtonClass);
//     button.removeAttribute("disabled");
//   } else {
//     button.classList.add(inactiveButtonClass);
//     button.setAttribute("disabled", "disabled");
//   }
// }

// function isInputsValid(inputs) {
//   return inputs.every(checkValidInput);
// }
