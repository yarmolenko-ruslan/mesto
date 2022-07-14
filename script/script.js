// Ищем основные переменные для открытия popup
let modal = document.querySelector('.popup'); // Ищу элемент popup'а
let buttonModalOff = document.querySelector('.popup__close'); // Ищу кнопку закрытия popup'а
let buttonSubmit = document.querySelector('.popup__button'); // Ищу кнопку "Сохранить" в popup
let page = document.querySelector('.page'); // Ищу класс заданный на body
let buttonModalOn = document.querySelector('.profile__info-button'); // Ищу кнопку открытия popup'а


// Делаем открывание popup
buttonModalOn.addEventListener('click', function(){ // Вешаю прослушивание клика по кнопке открытия
  modal.classList.add('popup_condition_visible');  // Добавляю класс к popup  для его открытия
  page.classList.add('page_place_lock'); // Добавляю класс к body чтобы убрать скрол по Y (чтобы не прокручивался фон позади popup)
});

buttonModalOff.addEventListener('click', function(){ // Вешаю прослушивание клика по кнопке закрытия
  modal.classList.remove('popup_condition_visible'); // Убираю класс с popup  для его закрытия
  page.classList.remove('page_place_lock'); // Убираю класс с body чтобы страница прокручивалась
});

buttonSubmit.addEventListener('click', function(){ // Вешаю прослушивание клика по кнопке "Сохранить"
  modal.classList.remove('popup_condition_visible');// Убираю класс с popup  для его закрытия
  page.classList.remove('page_place_lock'); // Убираю класс с body чтобы страница прокручивалась
});


let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_place_top');
let jobInput = document.querySelector('.popup__input_place_bottom');

function formSubmitHandler (evt) {
    evt.preventDefault();

  let infoTitle = document.querySelector('.profile__info-title');
  let infoSubtitle = document.querySelector('.profile__info-subtitle');

  infoTitle.textContent = `${nameInput.value}`;
  infoSubtitle.textContent = `${jobInput.value}`;
}

formElement.addEventListener('submit', formSubmitHandler);

let like = document.querySelectorAll('.element__like');

like.forEach(function (item) {
  item.addEventListener("click", function () {
    this.classList.toggle("element__like_active");
  });
});