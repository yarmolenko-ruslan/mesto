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

// Запишим все елементы в объект для удобства их вызова (при изменении класса в HTML нужно будет поменять его в одном месте и все будет работать)
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
  buttonDel: '.element__trash-btn',
  modalImage: '.popup-image',
  modalImageClose: '.popup-image__close',
  modalImageImg: '.popup-image__img',
  modalImageTitle: '.popup-image__title',
  elementLike: '.element__like',
  popup: '.popup'
}

// Ищем основные переменные нужные для дальнейшего использования
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
const list = document.querySelector(selectors.list);

// Функция открытия модального окна и изменения текста
function openModal() {
  modal.classList.add('popup_opened');
  
  changeText();
}

// Функция обновляет текущее значение name и job в input ввода текста
function changeText() {
  nameInput.value = infoTitle.textContent;
  jobInput.value = infoSubtitle.textContent;
}

// Открытие попапа создание карточек мест
function openCard() {
  modalCard.classList.add('popup_opened');
}

// Закрытие карточки редактирования текста
function closeModal() {
  modal.classList.remove('popup_opened');
}

// Закрытие попапа создание новых карточек
function closeCard() {
  modalCard.classList.remove('popup_opened');
}

// Выполняет сохранение новых значений в поля name и job и закрывает попап
function formSubmitHandler(evt) {
  evt.preventDefault();

  infoTitle.textContent = `${nameInput.value}`;
  infoSubtitle.textContent = `${jobInput.value}`;

  closeModal();
}

// Функция создания и добавления новой карточки места
function createCard(link, name) {

  const cardElement = template.cloneNode(true); // Слонируем элемент темплейта
  const cardTitle = cardElement.querySelector(selectors.cardTitle); // Находим и записываем в переменную подпись в карточке
  const cardImg = cardElement.querySelector(selectors.cardImg); // Запоминаем в переменную изображение в карточке
  const buttonDel = cardElement.querySelector(selectors.buttonDel); // Запоминаем в переменную кнопку удаления карточки
  
  // Функция удаления карточки со страницы
  buttonDel.addEventListener('click', function() {
    cardElement.remove();
  });

  cardImg.src = link; // Заносим значение src из массива в карточку
  cardImg.alt = name; // Заносим значение alt из массива в карточку
  cardTitle.textContent = name; // Заносим значение подписи из массива в карточку
  
  list.prepend(cardElement); // вставляем карточку на ее место внутри контейнера/сначала
  };

  // функция запоминает в значения link и name ссылку на картинку и подпись к карточке
  function createInitialCard() {
    initialCards.forEach(function (item) {
      createCard(item.link, item.name);
    });
  }
  
  // функция следит за формой создания новой карточки
  function addEventListener() {
    formCard.addEventListener('submit', function (evt) {
      evt.preventDefault();
      createCard(inputCardLink.value, inputCardTitle.value);
      closeCard();
    })
  }

addEventListener(); // вызываем функцию для отслеживания изменений в форме создания карточки
createInitialCard(); // вызываем функцию для заполнения данных в карточку

// Ищем все необходимые элементы для создания попапа с картинкой
  const allImages = document.querySelectorAll(selectors.cardImg);
  const popupImage = document.querySelector(selectors.modalImage);
  const popapImageClose = document.querySelector(selectors.modalImageClose);
  const modalImageImg = document.querySelector(selectors.modalImageImg);
  const modalImageTitle = document.querySelector(selectors.modalImageTitle);
  
// функция позволяющая отследить по какой карточке кликнул пользователь, после чего взять src и alt с кликнутой картинки и перенести их в модальное окно с картинкой на весь экран
  allImages.forEach(function(el) { 
  
    el.addEventListener('click', function(e){
  
      popupImage.classList.add('popup_opened');

    const imageSrc = e.target.getAttribute('src'); // записываем в переменную значение src на нажатой карточке
    const imageAlt = e.target.getAttribute('alt'); // записываем в переменную значение alt на нажатой карточке
  
    modalImageImg.src = imageSrc; // вносим значение src нажатой карточки с модальное окно
    modalImageTitle.textContent = imageAlt; // меняем текст в подписи модального окна на значение alt в выбранной карточке
    });
  });

  // закрываем модальное окно с картинкой
  function closeImage() {
    popupImage.classList.remove('popup_opened');
  }

formElement.addEventListener('submit', formSubmitHandler); // следим за нажатием кнопки "сохранить"
buttonModalOn.addEventListener("click", openModal); // следим за нажатие кнопки открытия попапа
buttonModalOff.addEventListener('click', closeModal); // следим за нажатием кнопки закрытия попапа
openCardBtn.addEventListener('click', openCard); // следим за нажатием кнопки открытия попапа создания карточки
closeCardBtn.addEventListener('click', closeCard); // следим за нажатием кнопки закрытия попапа создания карточки
popapImageClose.addEventListener('click', closeImage); // следим за нажатием кнопки закрытия попапа c фотографией

// записываем в переменную кнопки like
const elementsLike = document.querySelectorAll(selectors.elementLike);

// перебираем кнопки и записываем каждую в el
elementsLike.forEach(function(el){

  // добавляем слушатель на кнопку like 
  el.addEventListener('click', function(e){

    // на нажатой кнопке like добавляем класс, который меняет ее на активную
    e.target.classList.toggle('element__like_active');
  });
});

// заносим в переменную все попапы
const popup = document.querySelectorAll(selectors.popup);

// перебираем попапы и создаем функцию их закрытия
popup.forEach(function(e){
  function closePopup(){
    e.classList.remove('popup_opened');
  };

  // создаем слушатель и слушаем клик по темной области для закрытия попапа
  e.addEventListener('click', function(event) {
    if (event.target === event.currentTarget) {
      closePopup();
    }
  });
});