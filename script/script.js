const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
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
  templateCard: "#element-container",
  templateElement: ".element",
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
const btnCloseModalProfile = modalProfile.querySelector(
  selectors.btnCloseModalProfile
);
const btnOpenModalProfile = document.querySelector(
  selectors.btnOpenModalProfile
);
const infoTitle = document.querySelector(selectors.title);
const infoSubtitle = document.querySelector(selectors.subtitle);
const modalCard = document.querySelector(selectors.modalCard);
const btnCloseModalCard = modalCard.querySelector(selectors.btnCloseModalCard);
const btnOpenModalCard = document.querySelector(selectors.btnOpenModalCard);
const formCard = modalCard.querySelector(selectors.formCard);
const inputCardTitle = modalCard.querySelector(selectors.nameInput);
const inputCardLink = modalCard.querySelector(selectors.jobInput);
const templateCard = document
  .querySelector(selectors.templateCard)
  .content.querySelector(selectors.templateElement);
const btnCloseModalImage = document.querySelector(selectors.btnCloseModalImage);
const modalImage = document.querySelector(selectors.modalImage);
const popups = document.querySelectorAll(selectors.popup);
const modalImageImg = document.querySelector(selectors.modalImageImg);
const modalImageTitle = document.querySelector(selectors.modalImageTitle);
const list = document.querySelector(selectors.list);
const keyEsc = 27;

function fillProfilePopupFields() {
  nameInput.value = infoTitle.textContent;
  jobInput.value = infoSubtitle.textContent;
}

function createCard(element) {
  const cardElement = templateCard.cloneNode(true);
  const elementLike = cardElement.querySelector(selectors.elementLike);
  const cardTitle = cardElement.querySelector(selectors.cardTitle);
  const cardImage = cardElement.querySelector(selectors.cardImage);
  const buttonDel = cardElement.querySelector(selectors.buttonDel);

  buttonDel.addEventListener("click", function () {
    cardElement.remove();
  });

  cardImage.src = element.link;
  cardImage.alt = element.name;
  cardTitle.textContent = element.name;

  addCardImageClickListener(cardImage);
  addLikeCardListener(elementLike);

  return cardElement;
}

initialCards.forEach(function (element) {
  const elementTemplateCard = createCard(element);
  list.prepend(elementTemplateCard);
});

function closePopupClickBtn(evt) {
  if (evt.which === keyEsc) {
    const openedPopup = document.querySelector(".popup_opened");
    
    closePopup(openedPopup);
  }
}

function openPopup(item) {
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

function addCardImageClickListener(item) {
  item.addEventListener("click", function (e) {
    const imageSrc = e.target.getAttribute("src");
    const imageAlt = e.target.getAttribute("alt");

    modalImageImg.src = imageSrc;
    modalImageTitle.textContent = imageAlt;
    modalImageImg.alt = imageAlt;

    openPopup(modalImage);
  });
}

function addLikeCardListener(item) {
  item.addEventListener("click", function (e) {
    e.target.classList.toggle("element__like_active");
  });
}

function addSubmitListeners() {
  formCard.addEventListener("submit", function (evt) {
    evt.preventDefault();

    const elements = {
      name: inputCardTitle.value,
      link: inputCardLink.value,
    };

    const newCard = createCard(elements);
    list.prepend(newCard);

    closePopup(modalCard);

    inputCardTitle.value = "";
    inputCardLink.value = "";

    const btnSubmitPopupCard = formCard.querySelector(
      selectors.btnSubmitPopupCard
    );
    btnSubmitPopupCard.setAttribute("disabled", "disabled");
    btnSubmitPopupCard.classList.add("popup__button_disabled");
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
