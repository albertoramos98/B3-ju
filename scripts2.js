document.addEventListener('DOMContentLoaded', function() { // <-- TUDO TEM QUE ESTAR AQUI DENTRO

    // 1. INICIALIZA O AOS (ANIMAÇÕES AO ROLAR A PÁGINA)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }

    // 2. CONTROLA O CARROSSEL DE BANNERS DO TOPO (HERO)
    // Usando os seletores corretos do seu código: .hero-pagination, .hero-next, .hero-prev
    const heroSwiper = new Swiper('.hero-swiper', {
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.hero-pagination', // <<< CORRIGIDO
            clickable: true,
        },
        navigation: {
            nextEl: '.hero-next', // <<< CORRIGIDO
            prevEl: '.hero-prev', // <<< CORRIGIDO
        },
        // Lógica para reiniciar a animação do texto
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

    // 3. CONTROLA O CARROSSEL DE PRODUTOS
    // Usando os seletores corretos: .product-pagination, .product-next, .product-prev
    // E removendo slidesPerGroup para loop perfeito
    const productSwiper = new Swiper('.product-swiper', {
        loop: true, 
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: { el: '.product-pagination', clickable: true }, // <<< CORRIGIDO
        navigation: { nextEl: '.product-next', prevEl: '.product-prev' }, // <<< CORRIGIDO
        breakpoints: {
            576: { slidesPerView: 2 }, // slidesPerGroup removido
            768: { slidesPerView: 3 }, // slidesPerGroup removido
            1200: { slidesPerView: 5, spaceBetween: 30 } // slidesPerGroup removido
        }
    });

    // 4. CONTROLA O CARROSSEL DE CLIENTES
    // Assumindo que usa os seletores padrão ou não tem navegação/paginação específica
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

    // 5. CONTROLA O MENU MOBILE (AGORA DENTRO DO DOMContentLoaded)
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileNav = document.getElementById('mobile-nav');

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

}); // <-- FIM DO DOMContentLoaded