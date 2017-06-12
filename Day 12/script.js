$(document).ready(function(){

	//$(".third").css({"width":"200px","height":"200px","background-color":"yellow"});



	$("div").hide();

	//$("div").fadeOut(5000);

	//hiding


	$("#slider").click(function(){
		$("div").slideToggle(7000);
		$("div").eq(0).siblings().eq(0).html("Up");

		//$("#top").html("ok");


	});






})