// Display Current Year
function getCurrentYear() {
    var d = new Date();
    var year = d.getFullYear();
    document.querySelector("#displayDateYear").innerText = year;
}
getCurrentYear();

// Client section Owl Carousel
$(".owl-carousel").owlCarousel({
    loop: true, // Enables looping
    margin: 10,
    nav: true, // Enables navigation arrows
    dots: true, // Hides dots
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true, 
    autoplayTimeout: 3000, 
    autoplaySpeed: 900, 
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});
