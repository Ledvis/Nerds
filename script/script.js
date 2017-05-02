var popup = document.querySelector(".modal-popup");
var link = document.querySelector(".link");
var close = popup.querySelector(".close");
var overlay = document.querySelector(".overlay");
var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var storage = localStorage.getItem("name");

link.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.add("modal-popup-show");
	overlay.classList.add("overlay-show");
	if (storage) {
		storage = name.value;
		email.focus();
	} else {
		name.focus();
	}
});

close.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.remove("modal-popup-show");
	overlay.classList.remove("overlay-show");
});

window.addEventListener("keydown", function (event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-popup-show")) {
			popup.classList.remove("modal-popup-show");
			overlay.classList.remove("overlay-show");
		}
	}
});

form.addEventListener("submit", function (event) {
	if (!name.value || !email.value) {
		event.preventDefault();
		popup.classList.add("modal-popup-error");
	} else {
		localStorage.setItem("name", name.value);
	}
});
