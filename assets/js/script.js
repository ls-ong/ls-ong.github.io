$(document).ready(function() {

	var html = '';
	for (var i = 1; i <= 60; i ++) {
	    html += '<div class="shapec-'+i+'"><div class="random-shape"></div></div>';
	}

	document.querySelector('.shapes').innerHTML += html;
});

