// Splide Slider
document.addEventListener("DOMContentLoaded", function () {
    new Splide("#splide", {
      type: "loop",
      perPage: 1,
      autoplay: true,
      interval: 2000,
    }).mount();
  });

  //Testimonials
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#Testimonials_splide', {
        type: 'loop',
        perPage: 3, // डेस्कटॉप पर 3 आइटम
        autoplay: true,
        breakpoints: {
            768: {
                perPage: 1, // मोबाइल स्क्रीन पर 1 आइटम
            }
        }
    }).mount();
});