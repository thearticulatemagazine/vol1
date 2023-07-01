function fadeIn(el, display) {
	el.style.opacity = 0;
	el.style.display = display || "block";
	(function fade() {
		var val = parseFloat(el.style.opacity);
		if (!((val += 0.1) > 1)) {
			el.style.opacity = val;
			requestAnimationFrame(fade);
		}
	})();
}
function fadeOut(el) {
	el.style.opacity = 1;
	(function fade() {
		if ((el.style.opacity -= 0.1) < 0) {
			el.style.display = "none";
		} else {
			requestAnimationFrame(fade);
		}
	})();
}


var lastScrollTop;
navbar = document.getElementById("MagicMenu");
window.addEventListener("scroll", function () {
	const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

	// SHOW alertbar only on scrolling downwards
	if (scrollTop > lastScrollTop) {
		fadeOut(navbar);
	} else {
		if (navbar.style.display == "none") {
			fadeIn(navbar);
		}
	}
	el = document.getElementById("alertbar");
	if (scrollTop + 700 > document.documentElement.scrollHeight - this.window.innerHeight) {
		if (el.style.display == "none") {
			fadeIn(el);
		}
	} else {
		if (el.style.display != "none") {
		fadeOut(el);
		}
	}

	 if (window.scrollY >= scrollableHeight){
		if (el.style.display != "none") {
			fadeOut(el);
		}

	} 
  lastScrollTop = scrollTop;
});

function toggleNavMenu() {
	var navmenu = document.getElementById("navbarColor02");

	if(navmenu.classList.contains("show")) {
		navmenu.classList.remove("show");
	}
	else {
		navmenu.classList.add("show");
	}
}

 // alertbar later
//  $(document).scroll(function () {
// 	var y = $(this).scrollTop();
// 	if (y > 280) {
// 		$('.alertbar').fadeIn();
// 	} else {
// 		$('.alertbar').fadeOut();
// 	}
// });