document.addEventListener('DOMContentLoaded', function () {
  if (typeof AOS !== 'undefined') { AOS.init(); }
  if (typeof Swiper !== 'undefined') {
    new Swiper('.swiper', {
      loop: true,
      autoplay: { delay: 4000 },
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
    });
  }
});