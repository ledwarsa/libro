import { createApp, ref, computed } from 'vue';

import HeaderComponent from './components/Header.js';
import HeroComponent   from './components/Hero.js';
import AboutComponent  from './components/About.js';
import ReviewComponent from './components/Review.js';
import AuthorsComponent from './components/Authors.js';
import FooterComponent from './components/Footer.js';

const app = createApp({
    components: {
        'site-header':   HeaderComponent,
        'hero-section':  HeroComponent,
        'about-section': AboutComponent,
        'review-section': ReviewComponent,
        'authors-section': AuthorsComponent,
        'site-footer':   FooterComponent
    },
    setup() {
        // ─── CONFIGURE WHATSAPP HERE ──────────────────────────────
        const whatsappNumber  = ref('573042916654');  // sin + ni guiones
        const whatsappMessage = ref('Hola quiero comprar mi libro.');

        const whatsappLink = computed(() =>
            `https://wa.me/c/${whatsappNumber.value}?text=${encodeURIComponent(whatsappMessage.value)}`
        );

        return { whatsappLink };
    },
    template: `
        <div>
            <site-header  :whatsappLink="whatsappLink"></site-header>
            <hero-section :whatsappLink="whatsappLink"></hero-section>
            <about-section :whatsappLink="whatsappLink"></about-section>
            <review-section :whatsappLink="whatsappLink"></review-section>
            <authors-section></authors-section>
            <site-footer  :whatsappLink="whatsappLink"></site-footer>
        </div>
    `
});

app.mount('#app');
