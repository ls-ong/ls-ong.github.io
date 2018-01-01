$(document).ready(function() {

	/* hover */	

	var ogcolor = $("body").css("background-color");
	var old = $("#guts-flash").html();

	var id = ["#hexa", "#rainf", "#dive", "#act", "#bi", "#flyers"]
	// var color = ["#ffe9da", "#eefcee", "#fff1f1", "#f1f7ff", "#ffedd6", "#eee"]
	var newcolor = ["#ffd874", "#2ed656", "#f87ad5", "#63c7ff", "#ff8b66", "#704c4c"]
	var pagecolor = ["#fff7e3", "#d5f7dd", "#eee", "#dff3ff", "#ffe8e0", "#f0eded"]

	var colorChange = function(id, color) {
		$(id).hover(
			function(){
				var now = $(id + "-new").html();
			    $("#guts-flash").animate({opacity: 0}, 0, function () {
			        $("#guts-flash").stop().html(now).animate({opacity: 1});
			    $("body").stop().animate({backgroundColor: color}, 500);
		    });
		}, function () {
			$("#guts-flash").animate({opacity: 0}, 0,  function () {
		        $("#guts-flash").stop().html(old).animate({opacity: 1});
		    $("body").stop().animate({backgroundColor: ogcolor}, 500);
		    });
		});
	}

	// var textChange = function(id) {
	// 	$(id).hover(function(){
	// 	    $("#index *").animate({
	// 	    	"color": "black"
	// 	    }, 200).stop();
	//     }, function(){
	//     	$("#index *").animate({
	// 	    	"color": "white"
	// 	    }, 200);
	// 	});
	// }

	for (i = 0; i < id.length; i++) {
		colorChange(id[i], pagecolor[i]);
		// textChange(id[i]);
	}

	$("#world").hover(function(){
		var nowearth = $("#world-new").html();
	    $("#guts-flash").animate({opacity: 0}, 0, function () {
	        $("#guts-flash").stop().html(nowearth).animate({opacity: 1});
	    $("#earth-p").stop().fadeIn(500);
	    });
	}, function () {
	    $("#guts-flash").animate({opacity: 0}, 0, function () {
	        $("#guts-flash").stop().html(old).animate({opacity: 1});
	    $("#earth-p").stop().fadeOut(500);
	    });
	});


	/* click */

	var buttons = [".other-nav a", ".internal", ".hvr-backward", "#lian-home-button", "#about-button"]

	var fade = function(button) {
	    $(button).click(
	    	function(e){
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
