const modalMain = document.getElementById('modal_main');
const modalClose = document.querySelectorAll('.modal__close_times');
const showSuccessButton = document.querySelector('.show-success');
const modalSuccessPopUp = document.getElementById('modal_success');

showSuccessButton.onclick = function() {
  modalMain.classList.remove('modal_active');
  modalSuccessPopUp.classList.add('modal_active');
}

for (let i = 0; i < modalClose.length; i++) {
  modalClose[i].onclick = function() {
    let modalWindow = this.closest('.modal');
    console.log(modalWindow);
    modalWindow.classList.remove('modal_active');
  }
}
