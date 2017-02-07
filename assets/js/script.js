$(document).ready(function() {

	/* hover */	

	var ogcolor = $("body").css("background-color");
	var old = $("#guts").html();

	$("#hexa").hover(function(){
		var now = $("#hexa-new").html();
	    $("#guts").animate({opacity: 0}, 0, function () {
	        $("#guts").stop().html(now).animate({opacity: 1});
	    $("body").stop().animate({backgroundColor: "#ffeee1"}, 200);
	    });
	}, function () {
		$("#guts").animate({opacity: 0}, 0, function () {
	        $("#guts").stop().html(old).animate({opacity: 1});
	    $("body").stop().animate({backgroundColor: ogcolor}, 200);
	    });
	});

	$("#p2").hover(function(){
		var nowp2 = $("#p2-new").html();
	    $("#guts").animate({opacity: 0}, 0, function () {
	        $("#guts").stop().html(nowp2).animate({opacity: 1});
	    $("body").stop().animate({backgroundColor: "#ebf2f4"}, 200);
	    });
	}, function () {
		$("#guts").animate({opacity: 0}, 0, function () {
	        $("#guts").stop().html(old).animate({opacity: 1});	    
	    $("body").stop().animate({backgroundColor: ogcolor}, 200);
	    });
	});

	$("#p3").hover(function(){
		var nowp3 = $("#p3-new").html();
	    $("#guts").animate({opacity: 0}, 0, function () {
	        $("#guts").stop().html(nowp3).animate({opacity: 1});
	    $("body").stop().animate({backgroundColor: "#eee"}, 200);
	    });
	}, function () {
	    $("#guts").animate({opacity: 0}, 0, function () {
	        $("#guts").stop().html(old).animate({opacity: 1});
	    $("body").stop().animate({backgroundColor: ogcolor}, 200);
	    });
	});

	$("#p4").hover(function(){
		var nowp3 = $("#p4-new").html();
	    $("#guts").animate({opacity: 0}, 0, function () {
	        $("#guts").stop().html(nowp3).animate({opacity: 1});
	    $("body").stop().animate({backgroundColor: "#FFF9F9"}, 200);
	    });
	}, function () {
	    $("#guts").animate({opacity: 0}, 0, function () {
	        $("#guts").stop().html(old).animate({opacity: 1});
	    $("body").stop().animate({backgroundColor: ogcolor}, 200);
	    });
	});

	/* click */

    $(".hvr-backward").click(function(e){
        redirect = $(this).attr("href");
        e.preventDefault();
        $("#guts p, .nav").fadeOut(100, function(){
            document.location.href = redirect
        });
    });

    $("#lian-home-button").click(function(e){
        redirect = $(this).attr("href");
        e.preventDefault();
        $("#guts, .nav").fadeOut(100, function(){
            document.location.href = redirect
        });
    });

	/* pics */


	$("#earth").hover(function(){
		var nowearth= $("#earth-new").html();
	    $("#guts").animate({opacity: 0}, 0, function () {
	        $("#guts").stop().html(nowearth).animate({opacity: 1});
	    $("#earth-p").stop().fadeIn(100);
	    });
	}, function () {
	    $("#guts").animate({opacity: 0}, 0, function () {
	        $("#guts").stop().html(old).animate({opacity: 1});
	    $("#earth-p").stop().fadeOut(100);
	    });
	});

	$("#human").hover(function(){
		var nowhuman= $("#human-new").html();
	    $("#guts").animate({opacity: 0}, 0, function () {
	        $("#guts").stop().html(nowhuman).animate({opacity: 1});
	    $("#human-p").stop().fadeIn(100);
	    });
	}, function () {
	    $("#guts").animate({opacity: 0}, 0, function () {
	        $("#guts").stop().html(old).animate({opacity: 1});
	    $("#human-p").stop().fadeOut(100);
	    });
	});

});

