$(document).ready(function(){

	//$(".third").css({"width":"200px","height":"200px","background-color":"yellow"});



	//$("div").hide();

	//$("div").fadeOut(5000);

	//hiding


	$("#slider").click(function(){
		// $("div").slideToggle(7000);
		// $("div").eq(0).siblings().eq(0).html("Up");

		//$("#top").html("ok");

		$(".third").animate({

	width:600,
	height:600
	


},2000,function(){

	//perform some task after the animation is done
	$(".third").css({"background-color":"red","width":"300"});

	
});


	});







})