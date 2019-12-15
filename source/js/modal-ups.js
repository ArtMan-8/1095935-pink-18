var modalError = document.querySelector('.modal-ups--error');
var modalErrorBtn = modalError.querySelector('.modal-ups__btn');

var modalSuccess = document.querySelector('.modal-ups--success');
var modalSuccessBtn = modalSuccess.querySelector('.modal-ups__btn');

var formHistory = document.querySelector('.history-form');
var formSurname = formHistory.querySelector('#userSurname');
var formName = formHistory.querySelector('#userName');
var formEmail = formHistory.querySelector('#contactsEmail');

formHistory.addEventListener('submit', function (evt) {
  if (formSurname.value && formName.value && formEmail.value) {
    evt.preventDefault();
    modalSuccess.classList.remove('modal-ups--close');
    modalSuccess.classList.add('modal-ups--open');
  } else {
    evt.preventDefault();
    modalError.classList.remove('modal-ups--close');
    modalError.classList.add('modal-ups--open');
  }
})

modalErrorBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalError.classList.remove('modal-ups--open');
  modalError.classList.add('modal-ups--close');
})

modalSuccessBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalSuccess.classList.remove('modal-ups--open');
  modalSuccess.classList.add('modal-ups--close');
})
