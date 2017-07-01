$(document).ready(function() {


// setInterval(function(){
console.log("Before");

//Jquery Ajax Call
$.ajax({ //Asynchronous Call -- AJAX   -- Stack  --Task 1

	url:"https://jsonplaceholder.typicode.com/photos",//server url
	success:function(a){

		//$("#title").html(a.title);
        console.log("inside 1");


	}


});

console.log("After");

// },2000);

setInterval(function(){
$.ajax({ //Asynchronous Call -- AJAX   -- Stack  --Task 2

    url:"title.json",//server url  //data got loaded first
    success:function(a){

        $("#title").html(a.title);
        $("img")[0].src=a.src1;
        $("img")[1].src=a.src2;
        $("img")[2].src=a.src3;
        console.log("inside 2");


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
