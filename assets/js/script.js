$(document).ready(function() {

	/* hover */	

	var ogcolor = $("body").css("background-color");
	var old = $("#guts-about").html();

	/* PRODUCT */

	$("#hexa").hover(function(){
		var now = $("#hexa-new").html();
	    $("#guts-about").animate({opacity: 0}, 0, function () {
	        $("#guts-about").stop().html(now).animate({opacity: 1});
	    $("body").stop().animate({backgroundColor: "#ffe9da"}, 200);
	    });
	}, function () {
		$("#guts-about").animate({opacity: 0}, 0, function () {
	        $("#guts-about").stop().html(old).animate({opacity: 1});
	    $("body").stop().animate({backgroundColor: ogcolor}, 200);
	    });
	});

	$("#rainf").hover(function(){
		var nowp2 = $("#rainf-new").html();
	    $("#guts-about").animate({opacity: 0}, 0, function () {
	        $("#guts-about").stop().html(nowp2).animate({opacity: 1});
	    $("body").stop().animate({backgroundColor: "#eefcee"}, 200);
	    });
	}, function () {
		$("#guts-about").animate({opacity: 0}, 0, function () {
	        $("#guts-about").stop().html(old).animate({opacity: 1});	    
	    $("body").stop().animate({backgroundColor: ogcolor}, 200);
	    });
	});

	$("#dive").hover(function(){
		var nowp3 = $("#dive-new").html();
	    $("#guts-about").animate({opacity: 0}, 0, function () {
	        $("#guts-about").stop().html(nowp3).animate({opacity: 1});
	    $("body").stop().animate({backgroundColor: "#fff1f1"}, 200);
	    });
	}, function () {
	    $("#guts-about").animate({opacity: 0}, 0, function () {
	        $("#guts-about").stop().html(old).animate({opacity: 1});
	    $("body").stop().animate({backgroundColor: ogcolor}, 200);
	    });
	});

	$("#act").hover(function(){
		var nowp3 = $("#act-new").html();
	    $("#guts-about").animate({opacity: 0}, 0, function () {
	        $("#guts-about").stop().html(nowp3).animate({opacity: 1});
	    $("body").stop().animate({backgroundColor: "#f1f7ff"}, 200);
	    });
	}, function () {
	    $("#guts-about").animate({opacity: 0}, 0, function () {
	        $("#guts-about").stop().html(old).animate({opacity: 1});
	    $("body").stop().animate({backgroundColor: ogcolor}, 200);
	    });
	});

	/* VISUAL */

	$("#bi").hover(function(){
		var nowp3 = $("#bi-new").html();
	    $("#guts-about").animate({opacity: 0}, 0, function () {
	        $("#guts-about").stop().html(nowp3).animate({opacity: 1});
	    $("body").stop().animate({backgroundColor: "#ffedd6"}, 200);
	    });
	}, function () {
	    $("#guts-about").animate({opacity: 0}, 0, function () {
	        $("#guts-about").stop().html(old).animate({opacity: 1});
	    $("body").stop().animate({backgroundColor: ogcolor}, 200);
	    });
	});

	$("#flyers").hover(function(){
		var nowp3 = $("#flyers-new").html();
	    $("#guts-about").animate({opacity: 0}, 0, function () {
	        $("#guts-about").stop().html(nowp3).animate({opacity: 1});
	    $("body").stop().animate({backgroundColor: "#eee"}, 200);
	    });
	}, function () {
	    $("#guts-about").animate({opacity: 0}, 0, function () {
	        $("#guts-about").stop().html(old).animate({opacity: 1});
	    $("body").stop().animate({backgroundColor: ogcolor}, 200);
	    });
	});

	/* click */

    $(".hvr-backward").click(function(e){
        redirect = $(this).attr("href");
        e.preventDefault();
        $("body").fadeOut(100, function(){
            document.location.href = redirect
        });
    });

    $("#lian-home-button").click(function(e){
        redirect = $(this).attr("href");
        e.preventDefault();
        $("body").fadeOut(100, function(){
            document.location.href = redirect
        });
    });

	$("#about-button").click(function(e){
        redirect = $(this).attr("href");
        e.preventDefault();
        $("body").fadeOut(100, function(){
            document.location.href = redirect
        });
    });

	/* pics */


	$("#world").hover(function(){
		var nowearth= $("#world-new").html();
	    $("#guts-about").animate({opacity: 0}, 0, function () {
	        $("#guts-about").stop().html(nowearth).animate({opacity: 1});
	    $("#earth-p").stop().fadeIn(100);
	    });
	}, function () {
	    $("#guts-about").animate({opacity: 0}, 0, function () {
	        $("#guts-about").stop().html(old).animate({opacity: 1});
	    $("#earth-p").stop().fadeOut(100);
	    });
	});
});

