document.addEventListener('DOMContentLoaded', function() {

    // 1. INICIALIZA AOS (ANIMAÇÕES DE SCROLL)
    // Isso é seguro e não quebra o layout.
    AOS.init({
        duration: 1000,
        once: true,
    });

    // 2. CARROSSEL DE PRODUTOS
    const productSwiper = new Swiper('.product-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        breakpoints: {
            576: { slidesPerView: 2, slidesPerGroup: 2 },
            768: { slidesPerView: 3, slidesPerGroup: 3 },
            1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 30 }
        }
    });

    // 3. CARROSSEL DE CLIENTES
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