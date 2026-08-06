import { createApp, ref, computed } from 'vue';

import HeaderComponent from './components/Header.js';
import HeroComponent from './components/Hero.js';
import AboutComponent from './components/About.js';
import ReviewComponent from './components/Review.js';
import AuthorsComponent from './components/Authors.js';
import FooterComponent from './components/Footer.js';

const app = createApp({
    components: {
        'site-header': HeaderComponent,
        'hero-section': HeroComponent,
        'about-section': AboutComponent,
        'review-section': ReviewComponent,
        'authors-section': AuthorsComponent,
        'site-footer': FooterComponent
    },
    setup() {
        const whatsappNumber = ref('1234567890');
        const whatsappMessage = ref('Hola, estoy interesado en adquirir el libro Los Niños del Viento.');
        
        const whatsappLink = computed(() => {
            return `https://wa.me/${whatsappNumber.value}?text=${encodeURIComponent(whatsappMessage.value)}`;
        });

        return {
            whatsappLink
        };
    },
    template: `
        <div>
            <site-header :whatsappLink="whatsappLink"></site-header>
            <hero-section :whatsappLink="whatsappLink"></hero-section>
            <about-section :whatsappLink="whatsappLink"></about-section>
            <authors-section></authors-section>
            <review-section></review-section>
            <site-footer :whatsappLink="whatsappLink"></site-footer>
        </div>
    `
});

app.mount('#app');
