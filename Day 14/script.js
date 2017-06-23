$(document).ready(function() {


setInterval(function(){



$.ajax({

	url:"title.json",
	success:function(a){

		$("#title").html(a.title);




	}


});

},2000);




























    var slideCount = $("#slider ul li").length;
    var slideWidth = $("#slider ul li").width();
    var slideHeight = $("#slider ul li").height();

    var sliderUlWidth = slideWidth * slideCount;

    //$("#slider").css({width:slideWidth,height:slideHeight});

    $("#slider ul").css({ width: sliderUlWidth, marginLeft: -slideWidth });





    function moveLeft() {

        $("#slider ul").animate({

            left: +slideWidth


        }, 5000, function() {
            $("#slider ul li:last-child").prependTo("#slider ul");
            $("#slider ul").css('left', '');
        });





    }

    function moveRight() {

        $("#slider ul").animate({
            right: +slideWidth

        }, 5000, function() {

            $("#slider ul li:first-child").appendTo("#slider ul");
            $("#slider ul").css("right", "");




        });





    }

    $("a.control_prev").click(function() {
        moveLeft();
    })

    $("a.control_next").click(function() {
        moveRight();
    })
})
