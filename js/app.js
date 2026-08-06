import { createApp, ref, computed } from 'vue';

import HeaderComponent from './components/Header.js';
import HeroComponent from './components/Hero.js';
import AboutComponent from './components/About.js';
import ProductsComponent from './components/Products.js';
import AuthorsComponent from './components/Authors.js';
import FooterComponent from './components/Footer.js';

const app = createApp({
    components: {
        'site-header': HeaderComponent,
        'hero-section': HeroComponent,
        'about-section': AboutComponent,
        'products-section': ProductsComponent,
        'authors-section': AuthorsComponent,
        'site-footer': FooterComponent
    },
    setup() {
        const whatsappNumber = ref('1234567890');
        const whatsappMessage = ref('Hola, estoy interesado en comprar el libro Los Niños del Viento.');
        
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
            <products-section :whatsappLink="whatsappLink"></products-section>
            <site-footer :whatsappLink="whatsappLink"></site-footer>
        </div>
    `
});

app.mount('#app');
