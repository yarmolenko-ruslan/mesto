// Ищем основные переменные для открытия popup
let modal = document.querySelector('.popup'); // Ищу элемент popup'а
let buttonModalOff = document.querySelector('.popup__close'); // Ищу кнопку закрытия popup'а
let buttonSubmit = document.querySelector('.popup__button'); // Ищу кнопку "Сохранить" в popup
let page = document.querySelector('.page'); // Ищу класс заданный на body
let buttonModalOn = document.querySelector('.profile__info-button'); // Ищу кнопку открытия popup'а


// Делаем открывание popup
buttonModalOn.addEventListener('click', function(){ // Вешаю прослушивание клика по кнопке открытия
  modal.classList.add('popup_opened');  // Добавляю класс к popup  для его открытия
  page.classList.add('page_place_lock'); // Добавляю класс к body чтобы убрать скрол по Y (чтобы не прокручивался фон позади popup)
});

buttonModalOff.addEventListener('click', function(){ // Вешаю прослушивание клика по кнопке закрытия
  modal.classList.remove('popup_opened'); // Убираю класс с popup  для его закрытия
  page.classList.remove('page_place_lock'); // Убираю класс с body чтобы страница прокручивалась
});

buttonSubmit.addEventListener('click', function(){ // Вешаю прослушивание клика по кнопке "Сохранить"
  modal.classList.remove('popup_opened');// Убираю класс с popup  для его закрытия
  page.classList.remove('page_place_lock'); // Убираю класс с body чтобы страница прокручивалась
});

// Делаем редактирование информации имени и о себе

let formElement = document.querySelector('.popup__form'); // Находим обертку input в popup
let nameInput = document.querySelector('.popup__input_place_top'); // Находим верхний popup
let jobInput = document.querySelector('.popup__input_place_bottom'); // Находим нижний popup

function formSubmitHandler (evt) {
    evt.preventDefault(); // Отменяем обычную отправку формы, чтобы написать свою логику

  let infoTitle = document.querySelector('.profile__info-title'); // Находим блок "Имя" на главной странице
  let infoSubtitle = document.querySelector('.profile__info-subtitle'); // Находим "О себе"

  infoTitle.textContent = `${nameInput.value}`; // Меняем значение блока "Имя" на главной странице на значение, которое указывается в input'е в popup'е
  infoSubtitle.textContent = `${jobInput.value}`; // Меняем значение блока "О себе" на главной странице на значение, которое указывается в input'е в popup'е
}

formElement.addEventListener('submit', formSubmitHandler); // Отслеживаем действие по кнопке "Сохоранить" и вешаем вызов функции formSubmitHandler

let like = document.querySelectorAll('.element__like'); // Находим кнопку лайка в карточках

like.forEach(function (item) { // перебераем методом forEach массив, чтобы выделить каждый элемент из массива
  item.addEventListener("click", function () { // Отслеживаем клик по кнопке лайк и запускаем функцию на каждый елемент в массиве
    this.classList.toggle("element__like_active"); // Добавляем и удаляем класс, меняющий кнопку лайк на закрашенную
  });
});