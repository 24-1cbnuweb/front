function toggle() {
  var navMenu = document.querySelector(".nav_menu");

  // navMenu가 보이는지 여부를 확인하고 토글합니다.
  if (navMenu.style.display === "block") {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "block";
  }
}

window.addEventListener("scroll", function () {
  var searchbar = document.querySelector(".scrollSearch");

  if (window.pageYOffset > 500) {
    searchbar.style.position = "fixed";
    searchbar.style.top = "0";
    searchbar.style.right ="0";
    searchbar.style.display="flex";
    searchbar.style.margin= "40px";
    searchbar.style.width = "300px";
  } else {
    searchbar.style.position = "none";
    searchbar.style.display = "none";
  }
});

