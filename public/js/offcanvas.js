$(() => {
  $('.nav-hamburger-icon').click(() => {
    animateOffcanvas();
  });
});


// Moves the offcanvas-navbar into view
function openOffcanvas() {
  const offcanvasNavbar = $('.offcanvas-nav');
  offcanvasNavbar.addClass('offcanvas-open');
}

// Moves the offcanvas-navbar out of view
function closeOffcanvas() {
  const offcanvasNavbar = $('.offcanvas-nav');
  offcanvasNavbar.removeClass('offcanvas-open');
}

// Calls openOffcanvas or closeOffcanvas depending on its position
function animateOffcanvas() {
  const offcanvasNavbar = $('.offcanvas-nav');
  if (offcanvasNavbar.hasClass('offcanvas-open')) {
    closeOffcanvas();
  }	else {
    openOffcanvas();
  }
}
