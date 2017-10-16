$( document ).ready(function() {

	console.log("document ready dinner-club.js");

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

		  $.post("/api/new", user)
		  // On success, run the following code
		  .done(function(data) {
			// Log the data we found
			if(data.toUpperCase() === emailData.toUpperCase()){
			    alert('User already exists')
            }
		  });
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
			}
        });
    })
});
	