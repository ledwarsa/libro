import { ref } from 'vue';

export default {
    template: `
        <header class="site-header" :class="{ visible: isVisible }">
            <div class="container header-inner">
                <a href="#inicio" class="logo">
                    <img src="assets/images/cropped-logo-site-1.png" alt="Logo Fundación Red">
                </a>

                <nav class="main-nav" :class="{ 'is-open': isMenuOpen }">
                    <ul @click="isMenuOpen = false">
                        <li><a href="#que-encontraras">El Libro</a></li>
                        <li><a href="#autores">Autores</a></li>
                        <li><a href="#testimonios">Testimonios</a></li>
                        <li><a href="#preguntas">FAQ</a></li>
                    </ul>
                </nav>

                <div class="header-right">
                    <a :href="whatsappLink" class="btn btn-wa header-cta" target="_blank" rel="noopener">
                        <i class="fab fa-whatsapp"></i> Comprar ahora
                    </a>
                    <button class="mobile-toggle" @click="isMenuOpen = !isMenuOpen" aria-label="Menú">
                        <i class="fas" :class="isMenuOpen ? 'fa-times' : 'fa-bars'"></i>
                    </button>
                </div>
            </div>
        </header>
    `,
    props: ['whatsappLink'],
    setup() {
        const isMenuOpen = ref(false);
        const isVisible  = ref(false);

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => {
                // Only show after the full hero (100vh) has scrolled out
                isVisible.value = window.scrollY > (window.innerHeight - 72);
                if (!isVisible.value) isMenuOpen.value = false;
            }, { passive: true });
        }

        return { isMenuOpen, isVisible };
    }
}
