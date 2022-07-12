let buttonModalOn = document.querySelector('.profile__info-button');
let modal = document.querySelector('.modal');
let buttonModalOff = document.querySelector('.modal__close');

buttonModalOn.addEventListener('click', function(){
  modal.classList.add('modal_condition_visible');
});

buttonModalOff.addEventListener('click', function(){
  modal.classList.remove('modal_condition_visible');
});