var proj = document.querySelector("#project-section");
var pix = document.querySelector("#pix");
var text = document.querySelector("#home-text");
var fired = false;

window.addEventListener("wheel", function (e) {
	if (e.deltaY > 1 && fired == false) {
		setTimeout(function() {
			fired = true;
			pix.style.top = "-110vh";
			// text.innerHTML = "Lian Song"
			// text.style.backgroundColor = "rgba(232, 168, 149, .2)"
			text.style.textDecoration = "underline"
			text.style.fontWeight = 400
		}, 160);
	}

	if (document.querySelector("#front-page").getBoundingClientRect().top == 0 && e.deltaY < 0 && fired == true) {
		setTimeout(function() {
			fired = false;
			pix.style.top = "0vh";
			// text.innerHTML = "Home"
			// text.style.backgroundColor = "transparent"
			text.style.textDecoration = "none"
			text.style.fontWeight = 300
		}, 100);
	}
});

