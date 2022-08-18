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
  closeModalProfileBtn: ".popup-profile__close",
  openModalProfileBtn: ".profile__info-button",
  form: ".popup-profile__form",
  nameInput: ".popup__input_place_top",
  jobInput: ".popup__input_place_bottom",
  title: ".profile__info-title",
  subtitle: ".profile__info-subtitle",
  modalCard: ".popup-card",
  closeModalCardBtn: ".popup-card__close",
  openModalCardBtn: ".profile__button",
  formCard: ".popup-card__form",
  list: ".elements__list",
  templateCard: "#element-container",
  templateElement: ".element",
  cardTitle: ".element__title",
  cardImage: ".element__image",
  buttonDel: ".element__trash-btn",
  modalImage: ".popup-image",
  closeModalImageBtn: ".popup-image__close",
  modalImageImg: ".popup-image__img",
  modalImageTitle: ".popup-image__title",
  elementLike: ".element__like",
  popup: ".popup",
};

const modalProfile = document.querySelector(selectors.modalProfile);
const formElement = modalProfile.querySelector(selectors.form);
const nameInput = modalProfile.querySelector(selectors.nameInput);
const jobInput = modalProfile.querySelector(selectors.jobInput);
const closeModalProfileBtn = modalProfile.querySelector(
  selectors.closeModalProfileBtn
);
const openModalProfileBtn = document.querySelector(
  selectors.openModalProfileBtn
);
const infoTitle = document.querySelector(selectors.title);
const infoSubtitle = document.querySelector(selectors.subtitle);
const modalCard = document.querySelector(selectors.modalCard);
const closeModalCardBtn = modalCard.querySelector(selectors.closeModalCardBtn);
const openModalCardBtn = document.querySelector(selectors.openModalCardBtn);
const formCard = modalCard.querySelector(selectors.formCard);
const inputCardTitle = modalCard.querySelector(selectors.nameInput);
const inputCardLink = modalCard.querySelector(selectors.jobInput);
const templateCard = document
  .querySelector(selectors.templateCard)
  .content.querySelector(selectors.templateElement);
const closeModalImageBtn = document.querySelector(selectors.closeModalImageBtn);
const modalImage = document.querySelector(selectors.modalImage);
const popups = document.querySelectorAll(selectors.popup);
const modalImageImg = document.querySelector(selectors.modalImageImg);
const modalImageTitle = document.querySelector(selectors.modalImageTitle);
const list = document.querySelector(selectors.list);

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

function openPopup(openBtnModal, modal) {
  openBtnModal.addEventListener("click", function () {
    modal.classList.add("popup_opened");
  });
}

function openPopup(item) {
  item.classList.add("popup_opened");
}

function closePopup(item) {
  item.classList.remove("popup_opened");
}

openModalProfileBtn.addEventListener("click", function () {
  openPopup(modalProfile);

  fillProfilePopupFields();
});
openModalCardBtn.addEventListener("click", function () {
  openPopup(modalCard);
});
closeModalProfileBtn.addEventListener("click", function () {
  closePopup(modalProfile);
});
closeModalCardBtn.addEventListener("click", function () {
  closePopup(modalCard);
});
closeModalImageBtn.addEventListener("click", function () {
  closePopup(modalImage);
});

function addCardImageClickListener(item) {
  item.addEventListener("click", function (e) {
    const imageSrc = e.target.getAttribute("src");
    const imageAlt = e.target.getAttribute("alt");

    modalImageImg.src = imageSrc;
    modalImageTitle.textContent = imageAlt;
  });

  item.addEventListener("click", function () {
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
  });

  formElement.addEventListener("submit", function (evt) {
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
