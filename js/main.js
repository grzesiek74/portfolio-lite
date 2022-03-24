const nav_mobile = document.querySelector(".mobile");
const burger_btn = document.querySelector(".burger");
const burger_icon = document.querySelector(".fa-bars");
const xmark_icon = document.querySelector(".fa-xmark");

burger_btn.addEventListener("click", () => {
  burger_icon.classList.toggle("show");
  xmark_icon.classList.toggle("show");
  nav_mobile.classList.toggle("active");
});

const nav_links = document.querySelectorAll(".nav-link");

nav_links.forEach((link) => {
  link.addEventListener("click", () => {
    nav_mobile.classList.remove("active");
    burger_icon.classList.toggle("show");
    xmark_icon.classList.toggle("show");
  });
});

// przycisk na górę strony w jQuery

// $(window).scroll(function () {
//   if ($(window).scrollTop() > 300) {
//     $(".back_to_home").addClass("back_active");
//   } else {
//     $(".back_to_home").removeClass("back_active");
//   }
// });

// powrót na górę strony w jQ

// $(".back_to_home").on("click", function (e) {
//   e.preventDefault();
//   $("html, body").animate(
//     {
//       scrollTop: 0,
//     },
//     "300"
//   );
// });

// przycisk na górę strony w JS

const back_home = document.querySelector(".back_to_home");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    back_home.classList.add("back_active");
  } else {
    back_home.classList.remove("back_active");
  }
});

back_home.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});
