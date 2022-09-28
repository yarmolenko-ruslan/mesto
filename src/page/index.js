import "./index.css";
import { Card } from "../components/Card.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";
import { btnEditProfile } from "../utils/constants.js";
import { btnAddCard } from "../utils/constants.js";
import { elements } from "../utils/elements.js";
import { selectValid } from "../utils/selectValid.js";
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

const popupEditUserInfo = new PopupWithForm(".popup-profile", submitPopupProfile);
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

const popupWithImage = new PopupWithImage(".popup-image");
popupWithImage.setEventListeners();

function createCard({ name, link }) {
  function clickCard() {
    popupWithImage.open(name, link);
  }
  const card = new Card(name, link, ".element-container", clickCard);
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

const popupCard = new PopupWithForm(".popup-card", submitNewLocation);
popupCard.setEventListeners();

btnAddCard.addEventListener("click", function () {
  formCardValidator.toggleButtonState();
  popupCard.open();
});

const formPersonValidator = new FormValidator(
  selectValid,
  popupEditUserInfo.form
);
formPersonValidator.enableValidation();

const formCardValidator = new FormValidator(selectValid, popupCard.form);
formCardValidator.enableValidation();
