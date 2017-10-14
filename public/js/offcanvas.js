$(function() {
    $('.nav-hamburger-icon').click(function(){
        animateOffcanvas();
    })
});


//Moves the offcanvas-navbar into view
function openOffcanvas() {
    var offcanvasNavbar = $(".offcanvas-nav");
    offcanvasNavbar.addClass("offcanvas-open");
}

//Moves the offcanvas-navbar out of view
function closeOffcanvas() {
    var offcanvasNavbar = $(".offcanvas-nav");
    offcanvasNavbar.removeClass("offcanvas-open");
}

//Calls openOffcanvas or closeOffcanvas depending on its position
function animateOffcanvas() {
    var offcanvasNavbar = $(".offcanvas-nav");
    if (offcanvasNavbar.hasClass("offcanvas-open")) {
        closeOffcanvas();
    }	else {
        openOffcanvas();
    }
}