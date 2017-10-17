$( document ).ready(function() {

	$(".create-btn").on("click", function(event) {
		event.preventDefault();
		
		var emailData = $(".email-create").val().trim();
		var passData = $(".password-create").val().trim();
				
		// add user to db or if existing (get ID);
		// go to next page.

		var user = {
			email: emailData,
			name: null,
			password: passData
		  };

		var check = 0;

		  $.post("/api/new", user)
		  // On success, run the following code
		  .done(function(data) {
			// Log the data we found
              check = 1;
			if(data.toUpperCase() === emailData.toUpperCase()){
			    alert('User already exists')
            }
		  });
		  setTimeout(function(){
		      if(check === 0){
		          alert('User Successfully Created')
              }
          }, 500);
		$(".email-create").val("");
		$(".password-create").val("");
	});

	$('.login-btn').click(function(event) {
	    event.preventDefault();

        var emailData = $(".email-login").val().trim();
        var passData = $(".password-login").val();

        var user = {
            email: emailData,
            name: null,
            password: passData
        };

        $.get("/api/login", user)
        // On success, run the following code
        .done(function(data) {
            // Log the data we found
            console.log(data);
            if(data){
            	window.location = ('/groups.html?id=' + data)
			} else {
                alert('Incorrect Password')
            }
		});
	// $(".email-login").val("");
    // $(".password-login").val("");

    })
});
	