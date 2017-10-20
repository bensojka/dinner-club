$(() => {
  $(document).on('click', '.group-btn', function () {
    const contents = $($(this).next('div'));

    if (contents.hasClass('closed')) {
      contents.removeClass('closed').addClass('open');
    } else {
      contents.removeClass('open').addClass('closed');
    }
  });

  $(document).on('click', '.create-group', (event) => {
    event.preventDefault();
    const name = $('.group-name').val().trim();
    const url = window.location.href;
    const urlAux = url.split('=');
    const id = urlAux[1];

    const data = {
      name,
      id,
    };
    $.post('/api/groups/new', data)
      .done((data) => {
        console.log(data);
      });
  });

  $(document).ready(() => {
    const url = window.location.href;
    const urlAux = url.split('=');
    const id = urlAux[1];
    $.get('/api/groups', id)
      .done((data) => {
        console.log(data);
      });
  });
});

function populateGroups() {
  const groupWrapper = $('.groups-wrapper');
  let newGroup = new $('<div/>', { class: 'group', id: '2' });
  const newGroupButton = new $('<button/>', { class: 'group-btn', id: '2', text: 'Group' });
  let newGroupContents = new $('<div/>', { class: 'closed group-contents' });
  const newGroupTitle = new $('<h2/>', { class: 'group-title', text: 'Group Two' });
  const newGroupList = new $('<ul/>', { class: 'group-list' });
  const newGroupListItem = new $('<li/>', { class: 'group-list-item', text: 'test' });
  let newGroupVoteForm = new $('<form/>', { class: 'vote-form' });
  let newGroupVoteSelect = new $('<select/>');
  const newGroupVoteOption = new $('<option/>', { value: 'Mcdonalds', text: 'Mcdonalds' });
  const newGroupVoteButton = new $('<button/>', { text: 'Submit' });

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

function groupVote() {

}
