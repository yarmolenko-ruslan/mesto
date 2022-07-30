// Запишим все елементы в объект
const selectors = {
  modal: '.popup-rename',
  close: '.popup-rename__close',
  open: '.profile__info-button',
  form: '.popup-rename__form',
  nameInput: '.popup__input_place_top',
  jobInput: '.popup__input_place_bottom',
  title: '.profile__info-title',
  subtitle: '.profile__info-subtitle',

  modalCard: '.popup-card',
  closeCard: '.popup-card__close',
  openCard: '.profile__button',
  formCard: '.popup-card__form'
}

// Ищем основные переменные для открытия popup
const modal = document.querySelector(selectors.modal);
const buttonModalOff = document.querySelector(selectors.close);
const buttonModalOn = document.querySelector(selectors.open);
const formElement = document.querySelector(selectors.form);
const nameInput = document.querySelector(selectors.nameInput);
const jobInput = document.querySelector(selectors.jobInput);
const infoTitle = document.querySelector(selectors.title);
const infoSubtitle = document.querySelector(selectors.subtitle);

const modalCard = document.querySelector(selectors.modalCard);
const closeCardBtn = document.querySelector(selectors.closeCard);
const openCardBtn = document.querySelector(selectors.openCard);
const formCard = document.querySelector(selectors.formCard);


function openModal() {
  modal.classList.add('popup_opened');
  
  nameInput.value = infoTitle.textContent;
  jobInput.value = infoSubtitle.textContent;
}

function openCard() {
  modalCard.classList.add('popup_opened');
}

function closeModal() {
  modal.classList.remove('popup_opened');
}

function closeCard() {
  modalCard.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  infoTitle.textContent = `${nameInput.value}`;
  infoSubtitle.textContent = `${jobInput.value}`;

  closeModal();
}

formElement.addEventListener('submit', formSubmitHandler);
buttonModalOn.addEventListener("click", openModal);
buttonModalOff.addEventListener('click', closeModal);

openCardBtn.addEventListener('click', openCard);
closeCardBtn.addEventListener('click', closeCard);