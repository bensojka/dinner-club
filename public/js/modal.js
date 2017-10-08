
$(function() {
    const modalWrapper = $('.modal-wrapper');

    $('.open-modal-btn').click(function(){
        openModal();
    });

    $('.close-modal-btn').click(function(){
        closeModal();
    });

});

function openModal(){
    const modalWrapper = $('.modal-wrapper');
    modalWrapper.css('opacity', '1');
    modalWrapper.css('visibility', 'visible');
}

function closeModal(){
    const modalWrapper = $('.modal-wrapper');
    modalWrapper.css('opacity', '0');
    modalWrapper.css('visibility', '0');
}