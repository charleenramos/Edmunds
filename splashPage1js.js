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


