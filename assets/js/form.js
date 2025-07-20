document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    observer: true,
    observeParents: true,
  });

  // Swiper form
  new Swiper(".swiper-container", {
    slidesPerView: 1,
    allowTouchMove: false,
    spaceBetween: 1500,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const form = document.querySelector('#formWrapper form');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Ngăn gửi mặc định
  });
});