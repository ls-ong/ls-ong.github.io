$(document).ready(function() {

	// var html = '';
	// for (var i = 1; i <= 60; i ++) {
	//     html += '<div class="shapec-'+i+'"><div class="random-shape"></div></div>';
	// }

	// document.querySelector('.shapes').innerHTML += html;

	$('a:not(#email)').click(function(e) {
		e.preventDefault();
		newLocation = this.href;
		$('body').fadeOut(100, newpage);
		});

		function newpage() {
		window.location = newLocation;
	}

	$(body).css('display','none');
	$(body).fadeIn(100);

});

