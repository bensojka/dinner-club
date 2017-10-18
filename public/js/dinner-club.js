$(document).ready(() => {
  $('.create-btn').on('click', (event) => {
    event.preventDefault();

    const emailData = $('.email-create').val().trim();
    const passData = $('.password-create').val().trim();

    // add user to db or if existing (get ID);
    // go to next page.

    const user = {
      email: emailData,
      name: null,
      password: passData,
    };

    let check = 0;
    if (emailData !== '' && passData !== '') {
      $.post('/api/new', user)
      // On success, run the following code
        .done((data) => {
          // Log the data we found
          check = 1;
          if (data.toUpperCase() === emailData.toUpperCase()) {
            alert('User already exists');
          }
        });
    } else {
      alert('Please complete both forms');
    }

    setTimeout(() => {
      if (check === 0 && emailData !== '' && passData !== '') {
        alert('User Successfully Created');
      }
    }, 500);
    $('.email-create').val('');
    $('.password-create').val('');
  });

  $('.login-btn').click((event) => {
    event.preventDefault();

    const emailData = $('.email-login').val().trim();
    const passData = $('.password-login').val();

    const user = {
      email: emailData,
      name: null,
      password: passData,
    };

    $.get('/api/login', user)
    // On success, run the following code
      .done((data) => {
        // Log the data we found
        console.log(data);
        if (data) {
          window.location = (`/groups.html?id=${data}`);
        } else {
          alert('Incorrect Password');
        }
      });
    // $(".email-login").val("");
    // $(".password-login").val("");
  });
});
