document.addEventListener('DOMContentLoaded', function() {
  // Menu Mobile
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileNav = document.getElementById('mobile-nav');
  if (mobileMenuButton && mobileNav) {
      mobileMenuButton.addEventListener('click', function() {
          mobileNav.style.display = (mobileNav.style.display === 'block') ? 'none' : 'block';
      });
  }

  // Carrossel de Produtos (COM AVANÇO EM PÁGINAS)
  const productSwiper = new Swiper('.product-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      
      // AQUI ESTÁ A CORREÇÃO:
      breakpoints: {
          576: {
              slidesPerView: 2,
              slidesPerGroup: 2 // Avança de 2 em 2
          },
          768: {
              slidesPerView: 3,
              slidesPerGroup: 3 // Avança de 3 em 3
          },
          1200: {
              slidesPerView: 5,
              slidesPerGroup: 5, // <-- AVANÇA DE 5 EM 5
              spaceBetween: 30
          }
      }
  });

  // Carrossel de Clientes
  const clientsSwiper = new Swiper('.clients-swiper', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 20,
      autoplay: { delay: 2500, disableOnInteraction: false },
      breakpoints: {
          576: { slidesPerView: 4 },
          768: { slidesPerView: 6 },
          992: { slidesPerView: 7 }
      }
  });
});