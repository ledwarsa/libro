import { ref } from 'vue';

export default {
    template: `
        <header class="site-header">
            <div class="container header-inner">
                <div class="logo">
                    <a href="#inicio">
                        <img src="assets/images/cropped-logo-site-1.png" alt="Logo Fundación Red">
                    </a>
                </div>
                
                <button class="mobile-toggle" @click="isMenuOpen = !isMenuOpen">
                    <i class="fas" :class="isMenuOpen ? 'fa-times' : 'fa-bars'"></i>
                </button>

                <nav class="main-nav" :class="{ 'is-open': isMenuOpen }">
                    <ul @click="isMenuOpen = false">
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#sobre-el-libro">El Libro</a></li>
                        <li><a href="#autores">Autores</a></li>
                        <li><a href="#resena">Reseña</a></li>
                    </ul>
                </nav>
                <div class="cta" :class="{ 'is-open': isMenuOpen }">
                    <a :href="whatsappLink" class="btn-whatsapp" target="_blank"><i class="fab fa-whatsapp"></i> Adquirir Ahora</a>
                </div>
            </div>
        </header>
    `,
    props: ['whatsappLink'],
    setup() {
        const isMenuOpen = ref(false);
        return { isMenuOpen };
    }
}
