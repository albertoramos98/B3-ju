document.addEventListener('DOMContentLoaded', function() {

    // 1. INICIALIZA O AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }

    // 2. HERO SWIPER (só inicia se existir)
    if (document.querySelector('.hero-swiper')) {
        new Swiper('.hero-swiper', {
            loop: true,
            effect: 'fade',
            autoplay: { delay: 5000, disableOnInteraction: false },
            pagination: { el: '.hero-pagination', clickable: true },
            navigation: { nextEl: '.hero-next', prevEl: '.hero-prev' }
        });
    }

    // 3. PRODUCT SWIPER
    if (document.querySelector('.product-swiper')) {
        new Swiper('.product-swiper', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 20,
            autoplay: { delay: 4000, disableOnInteraction: false },
            pagination: { el: '.product-pagination', clickable: true },
            navigation: { nextEl: '.product-next', prevEl: '.product-prev' },
            breakpoints: {
                576: { slidesPerView: 2, slidesPerGroup: 2 },
                768: { slidesPerView: 3, slidesPerGroup: 3 },
                1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 30 }
            }
        });
    }

    // 4. CLIENTS SWIPER
    if (document.querySelector('.clients-swiper')) {
        new Swiper('.clients-swiper', {
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
    }

    // 5. CASES SWIPER
    if (document.querySelector('.cases-swiper')) {
        new Swiper('.cases-swiper', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: { el: '.cases-pagination', clickable: true },
            navigation: { nextEl: '.cases-next', prevEl: '.cases-prev' },
            breakpoints: {
                768: { slidesPerView: 2, spaceBetween: 30 }
            }
        });
    }

    // 6. MENU MOBILE
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileNav = document.getElementById('mobile-nav');

    if (mobileMenuButton && mobileNav) {
        mobileMenuButton.addEventListener('click', function() {
            mobileNav.style.display = (mobileNav.style.display === 'block') ? 'none' : 'block';
        });
    }

    // 7. COOKIE BANNER
    const existingBanner = document.getElementById("cookie-banner");

    if (!existingBanner) {
        const cookieBanner = document.createElement("div");
        cookieBanner.id = "cookie-banner";
        cookieBanner.innerHTML = `
            <p>Nós usamos cookies para melhorar sua experiência. 
                Ao continuar a navegar, você concorda com a nossa 
                <a href="politica.html">Política de Privacidade</a>.
            </p>
            <button id="accept-cookies">Entendi e Aceitar</button>
        `;
        document.body.appendChild(cookieBanner);

        const cookieAccepted = localStorage.getItem("cookiesAccepted");
        if (!cookieAccepted) cookieBanner.style.display = "flex";

        document.getElementById("accept-cookies").addEventListener("click", () => {
            localStorage.setItem("cookiesAccepted", "true");
            cookieBanner.style.display = "none";
        });
    }

});
