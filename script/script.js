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

// Ищем основные переменные нужные для дальнейшего использования
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
const list = document.querySelector(selectors.list);

const closeModalImage = document.querySelector(selectors.closeModalImage);
const modalImage = document.querySelector(selectors.modalImage);
const popup = document.querySelectorAll(selectors.popup);
const modalImageImg = document.querySelector(selectors.modalImageImg);
const modalImageTitle = document.querySelector(selectors.modalImageTitle);

// Функция открытия модального окна и изменения текста
function openModal() {
    modalProfile.classList.add('popup_opened');

    changeText();
}

function openPopup(item) {
    item.classList.add('popup_opened');
}

function closePopup(item) {
    item.classList.remove('popup_opened');
}

// Функция обновляет текущее значение name и job в input ввода текста
function changeText() {
    nameInput.value = infoTitle.textContent;
    jobInput.value = infoSubtitle.textContent;
}

// Выполняет сохранение новых значений в поля name и job и закрывает попап
function submitModalProfile(evt) {
    evt.preventDefault();

    infoTitle.textContent = nameInput.value;
    infoSubtitle.textContent = jobInput.value;

    closePopup(modalProfile);
}

// Функция создания и добавления новой карточки места
function createCard(link, name) {

    const cardElement = templateContainer.cloneNode(true); // Слонируем элемент темплейта
    const cardTitle = cardElement.querySelector(selectors.cardTitle); // Находим и записываем в переменную подпись в карточке
    const cardImage = cardElement.querySelector(selectors.cardImage); // Запоминаем в переменную изображение в карточке
    const buttonDel = cardElement.querySelector(selectors.buttonDel); // Запоминаем в переменную кнопку удаления карточки

    // Функция удаления карточки со страницы
    buttonDel.addEventListener('click', function() {
        cardElement.remove();
    });

    cardImage.src = link; // Заносим значение src из массива в карточку
    cardImage.alt = name; // Заносим значение alt из массива в карточку
    cardTitle.textContent = name; // Заносим значение подписи из массива в карточку

    list.prepend(cardElement); // вставляем карточку на ее место внутри контейнера/сначала

    // Ищем все необходимые элементы для создания попапа с картинкой
    const allImages = document.querySelectorAll(selectors.cardImage);

    // функция позволяющая отследить по какой карточке кликнул пользователь, после чего взять src и alt с кликнутой картинки и перенести их в модальное окно с картинкой на весь экран
    allImages.forEach(function(el) {

        el.addEventListener('click', function(e) {

            modalImage.classList.add('popup_opened');

            const imageSrc = e.target.getAttribute('src'); // записываем в переменную значение src на нажатой карточке
            const imageAlt = e.target.getAttribute('alt'); // записываем в переменную значение alt на нажатой карточке

            modalImageImg.src = imageSrc; // вносим значение src нажатой карточки с модальное окно
            modalImageTitle.textContent = imageAlt; // меняем текст в подписи модального окна на значение alt в выбранной карточке
        });
    });

    // записываем в переменную кнопки like
    const elementsLike = document.querySelectorAll(selectors.elementLike);

    // перебираем кнопки и записываем каждую в el
    elementsLike.forEach(function(el) {
        // добавляем слушатель на кнопку like 
        el.addEventListener('click', function(e) {
            // на нажатой кнопке like добавляем класс, который меняет ее на активную
            e.target.classList.toggle('element__like_active');
        });
    });
};

// функция запоминает в значения link и name ссылку на картинку и подпись к карточке
function createInitialCard() {
    initialCards.forEach(function(item) {
        createCard(item.link, item.name);
    });
}

// функция следит за формой создания новой карточки
function addEventListener() {
    formCard.addEventListener('submit', function(evt) {
        evt.preventDefault();

        createCard(inputCardLink.value, inputCardTitle.value);

        closePopup(modalCard);
    })
}

addEventListener(); // вызываем функцию для отслеживания изменений в форме создания карточки
createInitialCard(); // вызываем функцию для заполнения данных в карточку




// следим за нажатием кнопки "сохранить"
formElement.addEventListener('submit', submitModalProfile);
// следим за нажатие кнопки открытия попапа
openModalProfile.addEventListener("click", function() {
    openPopup(modalProfile);
});
// следим за нажатием кнопки открытия попапа создания карточки
openModalCard.addEventListener('click', function() {
    openPopup(modalCard);
});
// следим за нажатием кнопки закрытия попапа
closeModalProfile.addEventListener('click', function() {
    closePopup(modalProfile);
});
// следим за нажатием кнопки закрытия попапа создания карточки
closeModalCard.addEventListener('click', function() {
    closePopup(modalCard);
});
// следим за нажатием кнопки закрытия попапа c фотографией
closeModalImage.addEventListener('click', function() {
    closePopup(modalImage);
});



// перебираем попапы и создаем функцию их закрытия
popup.forEach(function(popup) {
    // создаем слушатель и слушаем клик по темной области для закрытия попапа
    popup.addEventListener('click', function(event) {
        if (event.target === event.currentTarget) {
            closePopup(modalImage);
            closePopup(modalCard);
            closePopup(modalProfile);
        }
    });
});