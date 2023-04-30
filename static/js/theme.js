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

// document.onscroll = function () {
//   el = document.getElementById("alertbar");
//   if ($(window).scrollTop() + 700 > $(document).height() - $(window).height()) {
//     if (el.style.display == "none") {
//       fadeIn(el);
//     }
//   } else {
//     fadeOut(el);
//   }
// };


var lastScrollTop;
navbar = document.getElementById("MagicMenu");
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    fadeOut(navbar);
  } else {
    if (navbar.style.display == "none") {
      fadeIn(navbar);
    }
  }
  lastScrollTop = scrollTop;
});