const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

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
  formCard: '.popup-card__form',
  list: '.elements__list',
  template: '#element-container',
  cardTitle: '.element__title',
  cardImg: '.element__image',
  buttonDel: '.element__trash-btn'
}

// Ищем основные переменные для открытия popup
const modal = document.querySelector(selectors.modal);
const buttonModalOff = document.querySelector(selectors.close);
const buttonModalOn = document.querySelector(selectors.open);
const formElement = modal.querySelector(selectors.form);
const nameInput = modal.querySelector(selectors.nameInput);
const jobInput = modal.querySelector(selectors.jobInput);
const infoTitle = document.querySelector(selectors.title);
const infoSubtitle = document.querySelector(selectors.subtitle);

const modalCard = document.querySelector(selectors.modalCard);
const closeCardBtn = document.querySelector(selectors.closeCard);
const openCardBtn = document.querySelector(selectors.openCard);
const formCard = modalCard.querySelector(selectors.formCard);
const inputCardTitle = modalCard.querySelector(selectors.nameInput);
const inputCardLink = modalCard.querySelector(selectors.jobInput);
const template = document.querySelector(selectors.template).content.children[0];

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

const list = document.querySelector(selectors.list);

function createCard(link, name) {

const cardElement = template.cloneNode(true);
const cardTitle = cardElement.querySelector(selectors.cardTitle);
const cardImg = cardElement.querySelector(selectors.cardImg);
const buttonDel = cardElement.querySelector(selectors.buttonDel);

buttonDel.addEventListener('click', function() {
  cardElement.remove();
});

cardTitle.textContent = name;
cardImg.src = link;

list.prepend(cardElement);
};

function createInitialCard() {
  initialCards.forEach(function (item) {
    createCard(item.link, item.name);
  });
}

function addEventListener() {
  formCard.addEventListener('submit', function (evt) {
    evt.preventDefault();
    createCard(inputCardLink.value, inputCardTitle.value);
    closeCard();
  })
}

addEventListener();
createInitialCard();