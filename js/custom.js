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

// Function to scroll to a specific section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Add event listeners to each navigation link (like the one with `data-target`)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();  // Prevent default anchor behavior
        const targetSection = this.getAttribute('data-target');
        scrollToSection(targetSection);
    });
});

// Add event listener to links like "Explore our services" (with href pointing to sections)
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();  // Prevent default anchor behavior
        const targetSection = this.getAttribute('href').substring(1);  // Get the target section (remove '#')
        scrollToSection(targetSection);  // Scroll to the target section
    });
});
