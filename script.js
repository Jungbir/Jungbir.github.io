// navbar onscroll
const navbar = document.querySelector('#navUl');

window.onscroll = function() {
	var top = window.scrollY;
	if (top >= 100) {
		navbar.classList.add('navGlass');
	}
	else {
		navbar.classList.remove('navGlass');
	}
}
