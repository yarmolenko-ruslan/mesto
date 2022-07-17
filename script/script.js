// Ищем основные переменные для открытия popup
let modal = document.querySelector('.popup'); // Ищу элемент popup'а
let buttonModalOff = document.querySelector('.popup__close'); // Ищу кнопку закрытия popup'а
let buttonSubmit = document.querySelector('.popup__button'); // Ищу кнопку "Сохранить" в popup
let buttonModalOn = document.querySelector('.profile__info-button'); // Ищу кнопку открытия popup'а


// Делаем открывание popup
buttonModalOn.addEventListener('click', function(){
  modal.classList.add('popup_opened');
});

buttonModalOff.addEventListener('click', function(){
  modal.classList.remove('popup_opened');
});

buttonSubmit.addEventListener('click', function(){
  modal.classList.remove('popup_opened');
});

// Делаем редактирование информации имени и о себе
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

