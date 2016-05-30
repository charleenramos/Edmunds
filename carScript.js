$(document).ready(function(){


		$('#picOne').fadeIn(1500).delay(3500).fadeOut(1500);
	    $('#picTwo').delay(5000).fadeIn(1500);


});

$(document).ready(function(){

   $(".delay-4_5s").css("color", "black").delay(12000).queue(function(next){
   			$("#wrapper").fadeOut().parent().css('background', 'white').queue(function(next2){
   				setTimeout(function(){
   					window.location.replace("http://charleenramos.github.io/Edmunds/VehicleSearchForm.html");
   				}, 500);
   				next2();
   			});
   			next();
   		}
   	);
});

/*=================
SEARCH FORM
=================*/
$(document).on('pageinit', "#searchpage", function() {
	/* 'ENTER' IN TEXTBOX EXECUTES SEARCH */
	$('#search_btn').click();
	
});
	
$(document).on('pageinit', "#searchpage", function() {
	/* 'ENTER' IN TEXTBOX EXECUTES SEARCH */
	window.sdkAsyncInit = function() 
	// Instantiate the SDK
	     var res = new EDMUNDSAPI('rw3yh74wqjp9aazevc38ea8r'); //API Key
	     
	     // Optional parameters
17.			var options = {};
18.
19.			// Callback function to be called when the API response is returned
20.			function success(res) {
21.				var body = document.getElementById('results-body');
22.				body.innerHTML = "The first model in the response is " + 
23.				res.models[0].name;
24.			}
25.
26.			// Oops, Houston we have a problem!
27.			function fail(data) {
28.				console.log(data);
29.			}
30.
31.			// Fire the API 
32.			res.api('/api/vehicle/v2/toyota/models', options, success, fail);
33.
34.		    // Additional initialization code such as adding Event Listeners goes here

});
