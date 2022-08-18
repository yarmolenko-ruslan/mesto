// вызываем функции для валидации формы
enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});

function enableValidation({
  formSelector,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass,
}) {
  const forms = Array.from(document.querySelectorAll(formSelector));

  forms.forEach(function (form) {
    const inputs = Array.from(form.querySelectorAll(inputSelector));

    inputs.forEach(function (input) {
      input.addEventListener("input", function (e) {
        isValid(input, inputErrorClass, errorClass);

        validateForm(form, inputs, submitButtonSelector, inactiveButtonClass);
      });
    });
  });
}

function isValid(input, inputErrorClass, errorClass) {
  const errorText = errorTextSearch(input);

  if (checkValidInput(input)) {
    hideInputError(input, errorText, inputErrorClass, errorClass);
  } else {
    showInputError(input, errorText, inputErrorClass, errorClass);
  }
}

function errorTextSearch(input) {
  const name = input.getAttribute("id");

  return document.querySelector(`.${name}-error`);
}

function checkValidInput(input) {
  return input.validity.valid;
}

function hideInputError(input, errorPlace, inputErrorClass, errorClass) {
  input.classList.remove(inputErrorClass);
  errorPlace.textContent = "";
  errorPlace.classList.remove(errorClass);
}

function showInputError(input, errorPlace, inputErrorClass, errorClass) {
  input.classList.add(inputErrorClass);
  errorPlace.textContent = input.validationMessage;
  errorPlace.classList.add(errorClass);
}

function validateForm(form, inputs, submitButtonSelector, inactiveButtonClass) {
  const button = form.querySelector(submitButtonSelector);
  if (isInputsValid(inputs)) {
    button.classList.remove(inactiveButtonClass);
    button.removeAttribute("disabled");
  } else {
    button.classList.add(inactiveButtonClass);
    button.setAttribute("disabled", "disabled");
  }
}

function isInputsValid(inputs) {
  return inputs.every(checkValidInput);
}