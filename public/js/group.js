$(function(){
    $(document).on('click', '.group-btn', function(event){
        contents = $($(this).next('div'));

        if(contents.hasClass('closed')){
            contents.removeClass('closed').addClass('open')
        } else {
            contents.removeClass('open').addClass('closed')
        }
    });

    $(document).on('click', '.create-group', function(event){
        event.preventDefault();
        let name = $('.group-name').val().trim();
        var url = window.location.href;
        var urlAux = url.split('=');
        var id = urlAux[1];

        data = {
            name: name,
            id: id
        };
        $.post('/api/groups/new', data)
       .done(function(data){
           console.log(data);
       })
    });

    $(document).ready(function(){
        var url = window.location.href;
        var urlAux = url.split('=');
        var id = urlAux[1];
        $.get('/api/groups', id)
            .done(function(data){
                console.log(data);
            })
    })
});

function populateGroups(){
    const groupWrapper = $('.groups-wrapper');
    let newGroup = new $('<div/>', {'class': 'group', id: '2'});
    let newGroupButton = new $('<button/>', {'class': 'group-btn', id: '2', text: 'Group'});
    let newGroupContents = new $('<div/>', {'class': 'closed group-contents'});
    let newGroupTitle = new $('<h2/>', {'class': 'group-title', text: 'Group Two'});
    let newGroupList = new $('<ul/>', {'class': 'group-list'});
    let newGroupListItem = new $('<li/>', {'class': 'group-list-item', text: 'test'});
    let newGroupVoteForm = new $('<form/>', {'class': 'vote-form'});
    let newGroupVoteSelect = new $('<select/>');
    let newGroupVoteOption = new $('<option/>', {value: 'Mcdonalds', text: 'Mcdonalds'});
    let newGroupVoteButton = new $('<button/>', {text: 'Submit'});

    newGroupList.append(newGroupListItem);
    newGroupVoteSelect = newGroupVoteSelect.append(newGroupVoteOption);
    newGroupVoteForm = newGroupVoteForm.append(newGroupVoteSelect);
    newGroupVoteForm = newGroupVoteForm.append(newGroupVoteButton);
    newGroupContents = newGroupContents.append(newGroupTitle);
    newGroupContents = newGroupContents.append(newGroupList);
    newGroupContents = newGroupContents.append(newGroupVoteForm);
    newGroup = newGroup.append(newGroupButton);
    newGroup = newGroup.append(newGroupContents);
    groupWrapper.append(newGroup);
}

function groupVote(){

}