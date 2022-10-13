import "./index.css";
import { Card } from "../components/Card.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";
import { btnEditProfile, profileAvatar } from "../utils/constants.js";
import { btnAddCard } from "../utils/constants.js";
import { elements } from "../utils/elements.js";
import { validationConfig } from "../utils/constants.js";
import { FormValidator } from "../components/FormValidator.js";

const userInfo = new UserInfo({
  userName: ".profile__info-title",
  userJob: ".profile__info-subtitle",
});

function submitPopupProfile(inputValues) {
  const name = inputValues["userName"];
  const job = inputValues["userJob"];
  userInfo.setUserInfo({ newItemName: name, newItemJob: job });
}

const popupEditUserInfo = new PopupWithForm(
  ".popup__profile",
  submitPopupProfile
);
popupEditUserInfo.setEventListeners();

btnEditProfile.addEventListener("click", function () {
  const nameAbout = userInfo.getUserInfo();
  popupEditUserInfo.setInputValues([
    { name: "userName", value: nameAbout.name },
    { name: "userJob", value: nameAbout.job },
  ]);
  formPersonValidator.toggleButtonState();
  popupEditUserInfo.open();
});

const popupEditProfilePhoto = new PopupWithForm(
  ".popup__profile-change", changeAvatar);
popupEditProfilePhoto.setEventListeners();

profileAvatar.addEventListener("click", function(){
  popupEditProfilePhoto.open();
});

function changeAvatar() {
  profileAvatar.style.backgroundImage = validationConfig.inputSelector.value;
}

const popupWithImage = new PopupWithImage(".popup-image");
popupWithImage.setEventListeners();

function clickCard(name, link) {
  return function click() {
    popupWithImage.open(name, link);
  };
}

function createCard({ name, link }) {
  const click = clickCard(name, link);
  const card = new Card(name, link, ".element-container", click);
  return card.renderElement();
}

const section = new Section(
  { items: elements, renderer: (item) => section.addItem(createCard(item)) },
  ".elements__list"
);
section.renderElements();

function submitNewLocation(inputValues) {
  const title = inputValues["cardTitle"];
  const link = inputValues["cardLink"];
  const card = createCard({ name: title, link: link });
  section.addItem(card);
}

const popupCard = new PopupWithForm(".popup__card", submitNewLocation);
popupCard.setEventListeners();

btnAddCard.addEventListener("click", function () {
  formCardValidator.toggleButtonState();

  popupCard.open();
});

const formPersonValidator = new FormValidator(
  validationConfig,
  popupEditUserInfo.form
);
formPersonValidator.enableValidation();

const formCardValidator = new FormValidator(validationConfig, popupCard.form);
formCardValidator.enableValidation();
