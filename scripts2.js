document.addEventListener('DOMContentLoaded', function() { // <-- START of the main function

    // 1. INICIALIZA O AOS (ANIMAÇÕES AO ROLAR A PÁGINA)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }

    // 2. CONTROLA O CARROSSEL DE BANNERS DO TOPO (HERO)
    // Using correct selectors and adding back AOS refresh logic
    const heroSwiper = new Swiper('.hero-swiper', {
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.hero-pagination', // Your custom class
            clickable: true,
        },
        navigation: {
            nextEl: '.hero-next', // Your custom class
            prevEl: '.hero-prev', // Your custom class
        },
        // Logic to restart text animation on slide change
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

    // 3. CONTROLA O CARROSSEL DE PRODUTOS (WITH LOOP AND NO slidesPerGroup)
    const productSwiper = new Swiper('.product-swiper', {
        loop: false, // <<< MUDANÇA: Loop desativado para slidesPerGroup funcionar melhor
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: { el: '.product-pagination', clickable: true }, 
        navigation: { nextEl: '.product-next', prevEl: '.product-prev' }, 
        breakpoints: {
            576: {
                slidesPerView: 2,
                slidesPerGroup: 2 // <<< ADICIONADO DE VOLTA
            },
            768: {
                slidesPerView: 3,
                slidesPerGroup: 3 // <<< ADICIONADO DE VOLTA
            },
            1200: {
                slidesPerView: 5,
                slidesPerGroup: 5, // <<< ADICIONADO DE VOLTA
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

    // 5. CONTROLA O MENU MOBILE (NOW INSIDE DOMContentLoaded)
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileNav = document.getElementById('mobile-nav');

    if (mobileMenuButton && mobileNav) {
        mobileMenuButton.addEventListener('click', function() {
            // Toggles the display of the mobile menu panel
            if (mobileNav.style.display === 'block') {
                mobileNav.style.display = 'none';
            } else {
                mobileNav.style.display = 'block';
            }
        });
    }

}); // <-- END of the main function