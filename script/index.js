import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

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
  templateList: ".elements__list",
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
const templateList = document.querySelector(selectors.templateList);
const modalImageImg = document.querySelector(selectors.modalImageImg);
const modalImageTitle = document.querySelector(selectors.modalImageTitle);
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
  templateList.prepend(createCard(element.name, element.link));
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

export function addCardImageClickListener(item) {
  item.addEventListener("click", function (image) {
    const imageSrc = image.target.getAttribute("src");
    const imageAlt = image.target.getAttribute("alt");

    modalImageImg.src = imageSrc;
    modalImageTitle.textContent = imageAlt;
    modalImageImg.alt = imageAlt;

    openPopup(modalImage);
  });
}

function addSubmitListeners() {
  formCard.addEventListener("submit", function (evt) {
    evt.preventDefault();

    const elements = {
      name: inputCardTitle.value,
      link: inputCardLink.value,
    };

    const newCard = createCard(elements.name, elements.link);
    templateList.prepend(newCard);

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

btnOpenModalCard.addEventListener("click", openModalCard);

function openModalCard() {
  formCard.reset();
  formCardValidation.validateForm();
  openPopup(modalCard);
}