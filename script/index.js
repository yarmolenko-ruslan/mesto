import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const initialCards = [
  {
    name: "г. Енисейск",
    link: "https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkNfX9rH8ci_0njmiJM-2H7qaKTM5SRkZCeTgDn6uOyic",
  },
  {
    name: "Тунгусский заповедник",
    link: "https://korona-severa.ru/wp-content/uploads/2/9/b/29b8b3b30338cbe7b817c399094e7fbc.jpeg",
  },
  {
    name: "Саяно-Шушенская ГЭС",
    link: "https://architectureguru.ru/wp-content/uploads/2019/04/sayano-shushenskaya-hydroelectric-8.jpg",
  },
  {
    name: "Красноярские стобы",
    link: "https://i10.fotocdn.net/s105/b0d186ca65791a06/public_pin_l/2249547891.jpg",
  },
  {
    name: "Ергаки",
    link: "http://f1.lpcdn.site/9788aa37e0a756529d272ad54a116fb1/e1833a49eb6a76e4563417b77903efc9.jpg",
  },
  {
    name: "Дивногорск",
    link: "https://visitsiberia.info/assets/cache_image/assets/manager/%D0%A7%D1%82%D0%BE%20%D0%BF%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C/%D0%BA%D1%80%D0%B0%D0%B9%20%D0%B2%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D0%BB%D1%8F%D0%B9/divnogorskaya_1200x630_267.jpg",
  },
];

const selectors = {
  modalProfile: ".popup-profile",
  btnCloseModalProfile: ".popup-profile__close",
  btnOpenModalProfile: ".profile__info-button",
  form: ".popup-profile__form",
  nameInput: ".popup__input_place_top",
  jobInput: ".popup__input_place_bottom",
  title: ".profile__info-title",
  subtitle: ".profile__info-subtitle",
  modalCard: ".popup-card",
  btnSubmitPopupCard: ".popup__button",
  btnCloseModalCard: ".popup-card__close",
  btnOpenModalCard: ".profile__button",
  formCard: ".popup-card__form",
  list: ".elements__list",
  cardTitle: ".element__title",
  cardImage: ".element__image",
  buttonDel: ".element__trash-btn",
  modalImage: ".popup-image",
  btnCloseModalImage: ".popup-image__close",
  modalImageImg: ".popup-image__img",
  modalImageTitle: ".popup-image__title",
  elementLike: ".element__like",
  popup: ".popup",
};

const modalProfile = document.querySelector(selectors.modalProfile);
const formProfileElement = modalProfile.querySelector(selectors.form);
const nameInput = modalProfile.querySelector(selectors.nameInput);
const jobInput = modalProfile.querySelector(selectors.jobInput);
const btnCloseModalProfile = modalProfile.querySelector(selectors.btnCloseModalProfile);
const btnOpenModalProfile = document.querySelector(selectors.btnOpenModalProfile);
const infoTitle = document.querySelector(selectors.title);
const infoSubtitle = document.querySelector(selectors.subtitle);
const modalCard = document.querySelector(selectors.modalCard);
const btnCloseModalCard = modalCard.querySelector(selectors.btnCloseModalCard);
const btnOpenModalCard = document.querySelector(selectors.btnOpenModalCard);
const formCard = modalCard.querySelector(selectors.formCard);
const inputCardTitle = modalCard.querySelector(selectors.nameInput);
const inputCardLink = modalCard.querySelector(selectors.jobInput);
const btnCloseModalImage = document.querySelector(selectors.btnCloseModalImage);
const modalImage = document.querySelector(selectors.modalImage);
const popups = document.querySelectorAll(selectors.popup);
const list = document.querySelector(selectors.list);
const keyEsc = 27;

function fillProfilePopupFields() {
  nameInput.value = infoTitle.textContent;
  jobInput.value = infoSubtitle.textContent;
}

function createCard(name, link) {
  const itemCard = new Card(name, link, selectors);
  return itemCard.createCard();
}

initialCards.forEach(function (element) {
  list.prepend(createCard(element.name, element.link));
});

function closePopupClickBtn(evt) {
  if (evt.which === keyEsc) {
    const openedPopup = document.querySelector(".popup_opened");

    closePopup(openedPopup);
  }
}

export function openPopup(item) {
  item.classList.add("popup_opened");

  document.addEventListener("keydown", closePopupClickBtn);
}

function closePopup(item) {
  item.classList.remove("popup_opened");

  document.removeEventListener("keydown", closePopupClickBtn);
}

btnOpenModalProfile.addEventListener("click", function () {
  openPopup(modalProfile);

  fillProfilePopupFields();
});

btnOpenModalCard.addEventListener("click", function () {
  openPopup(modalCard);
});

btnCloseModalProfile.addEventListener("click", function () {
  closePopup(modalProfile);
});

btnCloseModalCard.addEventListener("click", function () {
  closePopup(modalCard);
});

btnCloseModalImage.addEventListener("click", function () {
  closePopup(modalImage);
});

function addSubmitListeners() {
  formCard.addEventListener("submit", function (evt) {
    evt.preventDefault();

    const elements = {
      name: inputCardTitle.value,
      link: inputCardLink.value,
    };

    const newCard = createCard(elements.name, elements.link);
    list.prepend(newCard);

    closePopup(modalCard);
  });

  formProfileElement.addEventListener("submit", function (evt) {
    evt.preventDefault();

    infoTitle.textContent = nameInput.value;
    infoSubtitle.textContent = jobInput.value;

    closePopup(modalProfile);
  });
}

addSubmitListeners();

popups.forEach(function (popup) {
  popup.addEventListener("click", function (event) {
    if (event.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
  });
});

const selectorsValid = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const formProfileValidation = new FormValidator(selectorsValid, formProfileElement);

formProfileValidation.enableValidation();

const formCardValidation = new FormValidator(selectorsValid, formCard);

formCardValidation.enableValidation();

btnOpenModalCard.addEventListener("click", function() {
  formCard.reset();
  formCardValidation.validateForm();
  openPopup(modalCard);
});