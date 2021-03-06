$(() => {
  const groupsArr = [[1, 'Jay\'s Group']];
  const usersArr = [[1, 'Jay@Jay.Jay']];
  const locationsArr = [[1, 'Applebees']];
  const referenceArr = [[1, 1, 1]];

  $(document).ready(() => {
    const userId = getAllUrlParams().id;
    console.log(userId);

    // $.get('/api/groups/', userId)
    $.get(`/api/groups/${userId}`)
      .done((response) => {
        console.log(`We received an HTTP get request from the front end with the user ID: ${userId}`);
        console.log(response);

        // const group = response.find(group =>

        // You can use whatever search criteria you want here!
          // group.name === 'Awesome!');

        // console.log(group);

        response.forEach((group) => {
          console.log(`Group Name: ${group.name}`);
        });

        const grpId = 1;
        const locId = 1;
        const voteId = null;
        
        const data = {
          groupId: grpId,
          locationId: locId,
          userId: userId,
          vote: voteId,
        };
        console.log("data.groupId: " + data.groupId);
        $.post('/api/usergrouplocation/new', data)
        .done((data) => {
          console.log(data);
        });
  
        // get usergrouplocation by userID
        $.get('/api/all/usergrouplocation', data)
        .done((data) => {
          console.log('Get all uGL: ');
          console.log(data);
        });




        for (let i = 0; i < groupsArr.length; i += 1) {
          const groupList = $('.group-list');
          const newGroup = new $('<div/>', { class: 'group', id: groupsArr[i][0] });
          const newGroupBtn = new $('<button/>', { class: 'group-open btn', id: groupsArr[i][1], text: groupsArr[i][1] });
          newGroup.append(newGroupBtn);
          for (let j = 0; i < referenceArr.length; i = +1) {
            const newUser = $('<p/>', { class: 'group-user', id: referenceArr[i][0], text: usersArr[0][1] });
            newGroup.append(newUser);
          }
          const joinButton = $('<button/>', { class: 'user-join btn', text: 'Join' });
          newGroup.append(joinButton);
          groupList.append(newGroup);
        }

        $(document).on('click', '.group-open', (event) => {
          event.preventDefault();
          const group = $('.active-group');
          const activeGroup = new $('<div/>', { class: 'current' });
          const activeGroupName = new $('<h1/>', { class: 'active-group-name', text: groupsArr[0][1] });
          activeGroup.append(activeGroupName);
          const activeGroupVotes = new $('<p/>', { class: 'active-group-vote', text: `${locationsArr[0][1]} ${referenceArr[0][2]}` });
          activeGroup.append(activeGroupVotes);
          group.html(activeGroup);
        });


        for (let i = 0; i < locationsArr.length; i += 1) {
          const locations = $('.locations');
          const newLocation = new $('<div/>', { class: 'location', id: locationsArr[i][0] });
          const locationName = new $('<h1/>', { class: 'location-name', text: locationsArr[i][1], id: locationsArr[i][0] });
          const locationVote = new $('<button/>', { class: 'location-vote-btn btn', text: 'Vote!', id: locationsArr[i][0] });
          newLocation.append(locationName);
          newLocation.append(locationVote);
          locations.append(newLocation);
        }
      });

    // $.get('/api/groups', id)
    //   .done((data) => {
    //     console.log(data);
    // });
  });

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

    $.get('/api/all/groups', data)
      .done((data) => {
        console.log('Get all groups: ');
        console.log(data);
      });
  });


  $(document).on('click', '.create-location', (event) => {
    event.preventDefault();
    const name = $('.group-location-name').val().trim();
    const url = window.location.href;
    const urlAux = url.split('=');
    const id = urlAux[1];

    const data = {
      name,
      id,
    };
    $.post('/api/locations/new', data)
      .done((data) => {
        console.log(data);
      });

    $.get('/api/all/locations', data)
      .done((data) => {
        console.log('Get all locations: ');
        console.log(data);
      });
  });


  // $(document).ready(() => {
  //   const url = window.location.href;
  //   const urlAux = url.split('=');
  //   const id = urlAux[1];
  //   $.get('/api/groups', id)
  //     .done((data) => {
  //       console.log(data);
  //     });
  // });
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

function getAllUrlParams(url) {
  // get query string from url (optional) or window
  let queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  const obj = {};

  // if query string exists
  if (queryString) {
    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    const arr = queryString.split('&');

    for (let i = 0; i < arr.length; i++) {
      // separate the keys and the values
      const a = arr[i].split('=');

      // in case params look like: list[]=thing1&list[]=thing2
      var paramNum = undefined;
      let paramName = a[0].replace(/\[\d*\]/, (v) => {
        paramNum = v.slice(1, -1);
        return '';
      });

      // set parameter value (use 'true' if empty)
      let paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      paramValue = paramValue.toLowerCase();

      // if parameter name already exists
      if (obj[paramName]) {
        // convert value to array (if still string)
        if (typeof obj[paramName] === 'string') {
          obj[paramName] = [obj[paramName]];
        }
        // if no array index number specified...
        if (typeof paramNum === 'undefined') {
          // put the value on the end of the array
          obj[paramName].push(paramValue);
        }
        // if array index number specified...
        else {
          // put the value at that index number
          obj[paramName][paramNum] = paramValue;
        }
      }
      // if param name doesn't exist yet, set it
      else {
        obj[paramName] = paramValue;
      }
    }
  }

  return obj;
}
