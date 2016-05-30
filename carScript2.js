/*=================
SEARCH FORM
=================*/
$(document).on('pageinit', "#searchpage", function() {
	/* 'ENTER' IN TEXTBOX EXECUTES SEARCH */
	$('#search_btn').click();
	
});

/* HANDLES INITIAL SEARCHES */
	$("#search_btn").click(function(){
		$("#load_more").data("resultPage", 0);
		$("#indicators").hide();
		$("#contents").empty();
		$(this).button("disable");
		doSearch();
	});
	
$(document).on('pageinit', "#searchpage", function() {
	/* 'ENTER' IN TEXTBOX EXECUTES SEARCH */
	window.sdkAsyncInit = function() 
	// Instantiate the SDK
	     var res = new EDMUNDSAPI('rw3yh74wqjp9aazevc38ea8r'); //API Key
	     
	     // Optional parameters
	var options = {};

		// Callback function to be called when the API response is returned
		function success(res) {
			var body = document.getElementById('results-body');
			body.innerHTML = "The first model in the response is " + 
			res.models[0].name;
		}

			// Oops, Houston we have a problem!
			function fail(data) {
				console.log(data);
		}

			// Fire the API 
			res.api('/api/vehicle/v2/toyota/models', options, success, fail);

	    // Additional initialization code such as adding Event Listeners goes here

});

// Load the SDK asynchronously
	  (function(d, s, id){
	     	var js, sdkjs = d.getElementsByTagName(s)[0];
	     	if (d.getElementById(id)) {return;}
	     	js = d.createElement(s); js.id = id;
	     	js.src = "path/to/sdk/file";
	     	sdkjs.parentNode.insertBefore(js, sdkjs);
	   }(document, 'script', 'edmunds-jssdk'));

