$(function(){
    const groupContents = $('.group-contents');

    $('.group-btn').click(function(){
        expandGroup();

    })
});

function expandGroup(){
    const group = $('.group');
    const contents = $('.group-contents');

    console.log(contents.hasClass('closed'));

    if(contents.hasClass('closed')){
        contents.removeClass('closed').addClass('open');
    }
}