document.addEventListener('DOMContentLoaded', function() {

    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 1000, once: true });
    }

    // HERO CAROUSEL
    const heroSwiper = new Swiper('.hero-swiper', {
        loop: true,
        effect: 'fade',
        autoplay: { delay: 5000, disableOnInteraction: false },
        pagination: { el: '.hero-pagination', clickable: true },
        navigation: { nextEl: '.hero-next', prevEl: '.hero-prev' },
    });

    // PRODUTOS CAROUSEL
const productSwiper = new Swiper('.product-swiper', {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    pagination: { el: '.product-pagination', clickable: true },
    navigation: { nextEl: '.product-next', prevEl: '.product-prev' },
    breakpoints: {
        576: { slidesPerView: 2, slidesPerGroup: 2 },
        768: { slidesPerView: 3, slidesPerGroup: 3 },
        1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 30 }
    }
});

    // CLIENTES CAROUSEL
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

// 5. CONTROLA O MENU MOBILE (ADICIONADO/REATIVADO)
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileNav = document.getElementById('mobile-nav');

    // Verifica se os elementos existem antes de adicionar o listener
    if (mobileMenuButton && mobileNav) {
        mobileMenuButton.addEventListener('click', function() {
            // Alterna a exibição do painel do menu mobile
            if (mobileNav.style.display === 'block') {
                mobileNav.style.display = 'none';
            } else {
                mobileNav.style.display = 'block';
            }
        });
    }
