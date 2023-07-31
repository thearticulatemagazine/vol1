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
  const scrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight;
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
  if (
    scrollTop + 700 >
    document.documentElement.scrollHeight - this.window.innerHeight
  ) {
    if (el.style.display == "none") {
      fadeIn(el);
    }
  } else {
    if (el.style.display != "none") {
      fadeOut(el);
    }
  }

  if (window.scrollY >= scrollableHeight) {
    if (el.style.display != "none") {
      fadeOut(el);
    }
  }
  lastScrollTop = scrollTop;
});

function toggleNavMenu() {
  var navmenu = document.getElementById("navbarColor02");

  if (navmenu.classList.contains("show")) {
    navmenu.classList.remove("show");
  } else {
    navmenu.classList.add("show");
  }
}

const copyButtons = document.querySelectorAll(".share-btn.share-btn-copy");

copyButtons.forEach((cb) => {
  cb.addEventListener("click", function handleClick(event) {
    var sb = document.getElementById("snackbar");
    navigator.clipboard.writeText(cb.dataset.link).then(
      () => {
        sb.className = "show";
        setTimeout(function () {
          sb.classList.remove("show");
        }, 2000); // Has to be in sync with animation time!
      },
      () => {
        sb.className = "show";
        sb.classList.add = "toast-warn";
        const errHTML = `<strong>ERROR while copying link. Try reloading.</strong>`;
        sb.innerHTML = errHTML;
        setTimeout(function () {
          sb.className = "";
        }, 2000);
      }
    );
  });
});

if (/Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)) {
  var sharebars = document.querySelectorAll(".sharebar");

  for (var i = 0; i < sharebars.length; i++) {
    sharebars[i].style.display = "none";
  }

  var fab = document.getElementById("share-fab");
  fab.classList.toggle("hidden");

  const shareData = {
    title: document.title,
    text: "",
    url: window.location.href,
  };

  const btn = document.querySelector("#share-fab");

  // Share must be triggered by "user activation"
  btn.addEventListener("click", async () => {
    try {
      await navigator.share(shareData);
      console.log("Share successful");
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  });
}
