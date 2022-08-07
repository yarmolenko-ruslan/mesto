const initialCards = [{
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
    modalProfile: '.popup-profile',
    closeModalProfile: '.popup-profile__close',
    openModalProfile: '.profile__info-button',
    form: '.popup-profile__form',
    nameInput: '.popup__input_place_top',
    jobInput: '.popup__input_place_bottom',
    title: '.profile__info-title',
    subtitle: '.profile__info-subtitle',
    modalCard: '.popup-card',
    closeModalCard: '.popup-card__close',
    openModalCard: '.profile__button',
    formCard: '.popup-card__form',
    list: '.elements__list',
    templateContainer: '#element-container',
    templateElement: '.element',
    cardTitle: '.element__title',
    cardImage: '.element__image',
    buttonDel: '.element__trash-btn',
    modalImage: '.popup-image',
    closeModalImage: '.popup-image__close',
    modalImageImg: '.popup-image__img',
    modalImageTitle: '.popup-image__title',
    elementLike: '.element__like',
    popup: '.popup'
}

// Ищем элементы в DOM и записываем их в переменные для дальнейшего использования
const modalProfile = document.querySelector(selectors.modalProfile);
const formElement = modalProfile.querySelector(selectors.form);
const nameInput = modalProfile.querySelector(selectors.nameInput);
const jobInput = modalProfile.querySelector(selectors.jobInput);
const closeModalProfile = modalProfile.querySelector(selectors.closeModalProfile);
const openModalProfile = document.querySelector(selectors.openModalProfile);
const infoTitle = document.querySelector(selectors.title);
const infoSubtitle = document.querySelector(selectors.subtitle);
const modalCard = document.querySelector(selectors.modalCard);
const closeModalCard = modalCard.querySelector(selectors.closeModalCard);
const openModalCard = document.querySelector(selectors.openModalCard);
const formCard = modalCard.querySelector(selectors.formCard);
const inputCardTitle = modalCard.querySelector(selectors.nameInput);
const inputCardLink = modalCard.querySelector(selectors.jobInput);
const templateContainer = document.querySelector(selectors.templateContainer).content.querySelector(selectors.templateElement);
const closeModalImage = document.querySelector(selectors.closeModalImage);
const modalImage = document.querySelector(selectors.modalImage);
const popup = document.querySelectorAll(selectors.popup);
const modalImageImg = document.querySelector(selectors.modalImageImg);
const modalImageTitle = document.querySelector(selectors.modalImageTitle);

// Функция заполняет значения полей name и job в input ввода текста
function bringPopupText() {
    nameInput.value = infoTitle.textContent;
    jobInput.value = infoSubtitle.textContent;
}

// Функция заполняет поля в карточках, которые берет в объекте initialCards
function createCard(link, name) {
    // Клонируем элемент темплейта
    const cardElement = templateContainer.cloneNode(true);
    // Находим кнопку лайка в карточке
    const elementLike = cardElement.querySelector(selectors.elementLike);
    // Находим и записываем в переменную подпись в карточке
    const cardTitle = cardElement.querySelector(selectors.cardTitle);
    // Запоминаем в переменную изображение в карточке
    const cardImage = cardElement.querySelector(selectors.cardImage);
    // Запоминаем в переменную кнопку удаления карточки
    const buttonDel = cardElement.querySelector(selectors.buttonDel);

    // Функция удаления карточки со страницы
    buttonDel.addEventListener('click', function() {
        cardElement.remove();
    });

    // Заполняем значение src из объекта в карточку
    cardImage.src = link;
    // Заносим значение alt из объекта в карточку
    cardImage.alt = name;
    // Заносим значение подписи из массива в карточку
    cardTitle.textContent = name;

    // отправляем функции renderCard
    renderCard(cardElement);
    // отправляем функции generatePopupImages изображение
    generatePopupImages(cardImage);
    // отправляем функции settinglike кнопку лайка в каждой карточке
    settinglike(elementLike);
}

// Функция вывода новой карточки
function renderCard(cardElement) {
    // ищем место относительно какого элемента будем вставлять карточку
    const list = document.querySelector(selectors.list);
    // вставляем карточку на ее место внутри контейнера/сначала
    list.prepend(cardElement);
};

// Функция открытия попапов
function openPopup(openBtnModal, modal) {
    openBtnModal.addEventListener('click', function() {
        modal.classList.add('popup_opened');
    });

    // запускаем функцию bringPopupText для заполнения полей
    bringPopupText();
}

// Функция закрытия попапов
function closePopup(closeBtnModal, modal) {
    closeBtnModal.addEventListener('click', function() {
        modal.classList.remove('popup_opened');
    });
}

// Передаем кнопку и сами попапы для их открытия
openPopup(openModalProfile, modalProfile);
openPopup(openModalCard, modalCard);
// Передаем кнопку и сами попапы для их открытия
closePopup(closeModalProfile, modalProfile);
closePopup(closeModalCard, modalCard);
closePopup(closeModalImage, modalImage);

// Функция создает попап картинов в карточках
function generatePopupImages(item) {
    item.addEventListener('click', function(e) {

        const imageSrc = e.target.getAttribute('src');
        const imageAlt = e.target.getAttribute('alt');

        modalImageImg.src = imageSrc; // вносим значение src нажатой карточки с модальное окно
        modalImageTitle.textContent = imageAlt; // меняем текст в подписи модального окна на значение alt в выбранной карточке
    });

    openPopup(item, modalImage);
};

// Функция позволяет поставить лайк карточкам
function settinglike(item) {
    item.addEventListener('click', function(e) {
        e.target.classList.toggle('element__like_active');
    });
}

// Функция запоминает в значения link и name ссылку на картинку и подпись к карточке
function createInitialCard() {
    initialCards.forEach(function(item) {
        createCard(item.link, item.name);
    });
}
// Вызываем функцию createInitialCard
createInitialCard();

// Функция следит за кнопками 'Сохранить' и 'Создать' в попапах
function addSubmitListeners() {
    formCard.addEventListener('submit', function(evt) {
        evt.preventDefault();

        createCard(inputCardLink.value, inputCardTitle.value);

        closePopupSubmit(modalCard);
    });

    formElement.addEventListener('submit', function(evt) {
        evt.preventDefault();

        infoTitle.textContent = nameInput.value;
        infoSubtitle.textContent = jobInput.value;

        closePopupSubmit(modalProfile);
    });
};

// Вызываем функцию addSubmitListeners
addSubmitListeners();

// Функция закрытия попапов с кнопками
function closePopupSubmit(item) {
    item.classList.remove('popup_opened');
}

// Перебираем попапы и создаем функцию их закрытия через нажатие на фон
popup.forEach(function(el) {
    el.addEventListener('click', function(event) {
        if (event.target.classList.contains('popup_opened')) {
            closePopupSubmit(el);
        }
    });
});