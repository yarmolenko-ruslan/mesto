import "./index.css";
import { Card } from "../components/Card.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";
import { btnEditProfile } from "../utils/constants.js";
import { profileAvatar } from "../utils/constants.js";
import { btnAddCard } from "../utils/constants.js";
import { validationConfig } from "../utils/constants.js";
import { FormValidator } from "../components/FormValidator.js";
import { api } from "../components/Api.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";

const userInfo = new UserInfo({
  userName: ".profile__info-title",
  userAbout: ".profile__info-subtitle",
  userAvatar: ".profile__avatar",
});

function submitPopupProfile(inputValues) {
  const name = inputValues["userName"];
  const about = inputValues["userAbout"];

  return api.patchUserInfo({ name: name, about: about }).then((res) => {
    userInfo.setUserInfo({
      newItemName: name,
      newItemAbout: about,
      userId: userInfo.userId,
    });
  });
}

const popupEditUserProfile = new PopupWithForm(
  ".popup-profile",
  submitPopupProfile
);
popupEditUserProfile.setEventListeners();

const formProfileValidator = new FormValidator(
  validationConfig,
  popupEditUserProfile.form
);
formProfileValidator.enableValidation();

btnEditProfile.addEventListener("click", function () {
  const nameAbout = userInfo.getUserInfo();
  popupEditUserProfile.setInputValues([
    { name: "userName", value: nameAbout.name },
    { name: "userAbout", value: nameAbout.about },
  ]);
  formProfileValidator.cleanValidError();
  popupEditUserProfile.open();
});

function submitAvatar(inputValues) {
  const avatarLink = inputValues["avatarLink"];

  return api.patchUserAvatar({ avatar: avatarLink }).then((res) => {
    userInfo.setUserAvatar(avatarLink);
  });
}

const popupEditAvatar = new PopupWithForm(
  ".popup-avatar",
  submitAvatar
);
popupEditAvatar.setEventListeners();

const formAvatarValidator = new FormValidator(
  validationConfig,
  popupEditAvatar.form
);
formAvatarValidator.enableValidation();

profileAvatar.addEventListener("click", function () {
  formAvatarValidator.cleanValidError();
  popupEditAvatar.open();
});

function submitDeleteCard(id) {
  return api.deleteCard(id).then((res) => {
    document.getElementById(id).remove();
  });
}

const popupDeleteCard = new PopupWithConfirmation(
  ".popup-confirmation",
  submitDeleteCard
);
popupDeleteCard.setEventListeners();

const popupWithImage = new PopupWithImage(".popup-image");
popupWithImage.setEventListeners();

function createCard(data) {
  function handleCardClick() {
    popupWithImage.open(data.name, data.link);
  }
  const argument = {
    data: data,
    handleCardClick: handleCardClick,
    handleLikeClick: (card) => {
      if (card.getLiked()) {
        api
          .deleteLikes(card.id)
          .then((res) => {
            card.liked(false);
            card.likeQuantity(res.likes.length);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        api
          .putLikes(card.id)
          .then((res) => {
            card.liked(true);
            card.likeQuantity(res.likes.length);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    handleDeleteIconClick: (card) => {
      popupDeleteCard.open(card.id);
    },
  };

  const card = new Card(argument, ".element-container", userInfo.userId);
  return card.renderElement();
}

const section = new Section(
  (item) => section.addItem(createCard(item)),
  ".elements__list"
);

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo({
      newItemName: userData.name,
      newItemAbout: userData.about,
      userId: userData._id,
    });
    userInfo.setUserAvatar(userData.avatar);

    cards.reverse().forEach(function (el) {
      section.addItem(createCard(el));
    });
  })
  .catch((err) => {
    console.log(err);
  });

function submitNewLocation(inputValues) {
  const name = inputValues["cardName"];
  const link = inputValues["cardLink"];

  return api.postCard({ name: name, link: link })
  .then((res) => {
    const card = createCard(res);
    section.addItem(card);
  });
}

const popupAddCard = new PopupWithForm(".popup-card", submitNewLocation);
popupAddCard.setEventListeners();

const formCardValidator = new FormValidator(
  validationConfig,
  popupAddCard.form
);
formCardValidator.enableValidation();

btnAddCard.addEventListener("click", function () {
  formCardValidator.cleanValidError();
  popupAddCard.open();
});
