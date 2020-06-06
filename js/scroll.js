$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});



$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
    $(".overlay").hide();
});