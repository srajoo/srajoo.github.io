$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('.navbar').addClass('navbar-inverse');
    } else {
       $('.navbar').removeClass('navbar-inverse');
    }
});
$("#scroll-down").click(function() {
    $('html,body').animate({
        scrollTop: $("#about  ").offset().top},
        'slow');
});