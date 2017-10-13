$(function(){
    const groupContents = $('.group-contents');

    $('.group-btn').on('click', function(){
        expandGroup();
    })
});

function expandGroup(){
    const group = $('.group');
    const contents = $('.group-contents');

    if(contents.hasClass('.closed')){
        contents.removeClass('.closed');
        contents.addClass('.open');
    }
}