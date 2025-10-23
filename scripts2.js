document.addEventListener('DOMContentLoaded', function() { // <-- START of the main function

    // 1. INICIALIZA O AOS (ANIMAÇÕES AO ROLAR A PÁGINA)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }

    // 2. CONTROLA O CARROSSEL DE BANNERS DO TOPO (HERO)
    const heroSwiper = new Swiper('.hero-swiper', {
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.hero-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.hero-next',
            prevEl: '.hero-prev',
        },
        on: {
            slideChangeTransitionStart: function () {
                this.slides.forEach(slide => {
                    const content = slide.querySelector('.hero-content');
                    if (content) content.style.opacity = 0;
                });
            },
            slideChangeTransitionEnd: function () {
                const activeSlide = this.slides[this.activeIndex];
                const content = activeSlide.querySelector('.hero-content');
                if (content) {
                    if (typeof AOS !== 'undefined') AOS.refreshHard();
                    content.style.opacity = 1;
                }
            }
        }
    });

    // 3. CONTROLA O CARROSSEL DE PRODUTOS (AGORA COM LOOP INFINITO 🔁)
    const productSwiper = new Swiper('.product-swiper', {
        loop: true, // 🔁 agora o carrossel gira infinitamente
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.product-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.product-next',
            prevEl: '.product-prev'
        },
        // autoplay opcional (ativa se quiser)
         autoplay: {
             delay: 4000,
             disableOnInteraction: false,
         },
        breakpoints: {
            576: {
                slidesPerView: 2,
                slidesPerGroup: 2
            },
            768: {
                slidesPerView: 3,
                slidesPerGroup: 3
            },
            1200: {
                slidesPerView: 5,
                slidesPerGroup: 5,
                spaceBetween: 30
            }
        }
    });

    // 4. CONTROLA O CARROSSEL DE CLIENTES
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

    // 5. CONTROLA O MENU MOBILE
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileNav = document.getElementById('mobile-nav');

    if (mobileMenuButton && mobileNav) {
        mobileMenuButton.addEventListener('click', function() {
            mobileNav.style.display = (mobileNav.style.display === 'block') ? 'none' : 'block';
        });
    }

}); // <-- END of the main function
// 6. CARROSSEL CASES DE SUCESSO (NOVO)
    const casesSwiper = new Swiper('.cases-swiper', {
        loop: true, // Loop infinito
        slidesPerView: 1, // Começa com 1 slide visível em telas pequenas
        spaceBetween: 30, // Espaço entre os slides
        pagination: { 
            el: '.cases-pagination', // Usa a classe customizada
            clickable: true 
        },
        navigation: { 
            nextEl: '.cases-next', // Usa a classe customizada
            prevEl: '.cases-prev'  // Usa a classe customizada
        },
        breakpoints: {
            // A partir de 768px (tablets), mostra 2 cases lado a lado
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            }
            // Não precisa de breakpoint maior se 2 for o ideal
        }
    });