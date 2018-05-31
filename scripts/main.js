$(document).ready(function () {
    //$('.header').load("../html/nav.html");

    var counter = 0;
    var inst = setInterval(change, 8000);
    // var text = 3;
    var text = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum", "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words"];
    // $("#testimonials").slideUp(5000);

    function change() {
        $("#testimonials").slideDown(4000).text(text[counter]).css({
            "font-size": "24pt",
            "font-weight": "bold"
        }).slideUp(4000);
        counter++;
        if (counter >= text.length) {
            counter = 0;
        }

    }

    slickSlider();


});

function slickSlider() {
    $('.carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        infinite: true,
    });

}