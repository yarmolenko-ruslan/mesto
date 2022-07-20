// Ищем основные переменные для открытия popup
let modal = document.querySelector('.popup'); // Ищу элемент popup'а
let buttonModalOff = document.querySelector('.popup__close'); // Ищу кнопку закрытия popup'а
let buttonModalOn = document.querySelector('.profile__info-button'); // Ищу кнопку открытия popup'а
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_place_top');
let jobInput = document.querySelector('.popup__input_place_bottom');
let infoTitle = document.querySelector('.profile__info-title');
let infoSubtitle = document.querySelector('.profile__info-subtitle');

function openModal() {
  modal.classList.add('popup_opened');
}

function closeModal() {
  modal.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  infoTitle.textContent = `${nameInput.value}`;
  infoSubtitle.textContent = `${jobInput.value}`;
}

formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', closeModal);
buttonModalOn.addEventListener("click", openModal);
buttonModalOff.addEventListener('click', closeModal);