var open = document.querySelector(".navbar-toggler");
var changeIcon = true;

open.addEventListener("click", function () {

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

});

