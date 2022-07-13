let buttonModalOn = document.querySelector('.profile__info-button');
let modal = document.querySelector('.popup');
let buttonModalOff = document.querySelector('.popup__close');
let page = document.querySelector('.page');

buttonModalOn.addEventListener('click', function(){
  modal.classList.add('popup_condition_visible');
  page.classList.add('page_place_lock');
});

buttonModalOff.addEventListener('click', function(){
  modal.classList.remove('popup_condition_visible');
  page.classList.remove('page_place_lock');
});