$(document).ready(function() {

	/* hover */	

	var ogcolor = $("body").css("background-color");
	var old = $("#guts-flash").html();

	var id = ["#hexa", "#rainf", "#dive", "#act", "#bi", "#flyers"]
	var color = ["#ffe9da", "#eefcee", "#fff1f1", "#f1f7ff", "#ffedd6", "#eee"]

	var colorChange = function(id, color) {

		$(id).hover(function(){
			var now = $(id + "-new").html();
		    $("#guts-flash").animate({opacity: 0}, 0, function () {
		        $("#guts-flash").stop().html(now).animate({opacity: 1});
		    $("body").stop().animate({backgroundColor: color}, 200);
		    });
		}, function () {
			$("#guts-flash").animate({opacity: 0}, 0,  function () {
		        $("#guts-flash").stop().html(old).animate({opacity: 1});
		    $("body").stop().animate({backgroundColor: ogcolor}, 200);
		    });
		});
	}

	for (i = 0; i < id.length; i++) {
		colorChange(id[i], color[i]);
	}

	$("#world").hover(function(){
		var nowearth = $("#world-new").html();
	    $("#guts-flash").animate({opacity: 0}, 0, function () {
	        $("#guts-flash").stop().html(nowearth).animate({opacity: 1});
	    $("#earth-p").stop().fadeIn(200);
	    });
	}, function () {
	    $("#guts-flash").animate({opacity: 0}, 0, function () {
	        $("#guts-flash").stop().html(old).animate({opacity: 1});
	    $("#earth-p").stop().fadeOut(200);
	    });
	});

	/* click */

	var buttons = [".hvr-backward", "#lian-home-button", "#about-button"]

	var fade = function(button) {

	    $(button).click(function(e){
	        redirect = $(this).attr("href");
	        e.preventDefault();
	        $("body").fadeOut(100, function(){
	            document.location.href = redirect
	        });
	    });
	}

	for (i = 0; i < buttons.length; i++) {
		fade(buttons[i]);
	}
});
