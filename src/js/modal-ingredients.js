(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-ingredients-modal-open]'),
    closeModalBtn: document.querySelector('[data-ingredients-modal-close]'),
    modal: document.querySelector('[data-ingredients-modal]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('modal-is-hidden');
  }
})();
