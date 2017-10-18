
$(() => {
  const modalWrapper = $('.modal-wrapper');

  $('.open-modal-btn').click(() => {
    openModal();
  });

  $('.close-modal-btn').click(() => {
    closeModal();
  });

  $('.login-btn').click(() => {
    event.preventDefault();
  });
});

function openModal() {
  const modalWrapper = $('.modal-wrapper');
  modalWrapper.css('opacity', '1');
  modalWrapper.css('visibility', 'visible');
  modalWrapper.css('z-index', '10');
}

function closeModal() {
  const modalWrapper = $('.modal-wrapper');
  modalWrapper.css('opacity', '0');
  modalWrapper.css('visibility', '0');
  modalWrapper.css('z-index', '-1');
}

