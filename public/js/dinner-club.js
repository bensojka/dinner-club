// A $( document ).ready() block.
//
// Execute the javascript after the web browser has parsed
// the entire HTML document and built the Document Object 
// Model in memory
//
$( document ).ready(function() {

	console.log("document ready dinner-club.js");
	
	// $(".devour-buttons").on("click", function() {
	// 	console.log("A Devour Button was Pressed!");
	// 	var buttonId = $(this).attr("value");
	// 	console.log(`Button Id: ${buttonId}`);	
	// 	$("#" + buttonId).appendTo("#devoured-burgers");	
	// 	$("#" + buttonId + " > button").hide();	
	// 	$.ajax({
	// 		method: "PUT",
	// 		url: "/" + buttonId,			
	// 		data: { devoured: true }
	// 	})
	// 	.done(function( msg ) {
	// 		console.log( msg );
	// 		location.reload();
	// 	});
	// });	


	$(".login-btn").on("click", function(event) {
		event.preventDefault();
		console.log("login-btn Submit Button was Pressed!");
		
		var emailData = $(".email-login").val().trim();
		console.log("email: " + emailData);
				
		// add user to db or if existing (get ID);
		// go to next page.

		// var burgerName = $("#burgerInput").val().trim();
		// $.ajax({
		// 	method: "POST",
		// 	url: "/",
		// 	data: { burger_name: burgerName }
		// })
		// .done(function( msg ) {
		// 	$("#burgerInput").val("");
		// 	console.log( msg );
		// 	location.reload();
		// });
	});

});
	