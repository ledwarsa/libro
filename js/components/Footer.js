import { ref } from 'vue';

export default {
    template: `
        <!-- FAQ Section -->
        <section id="preguntas" class="section section-alt">
            <div class="container text-center">
                <span class="section-label">Preguntas frecuentes</span>
                <h2>Todo lo que necesitas saber<br>antes de comprar</h2>

                <div class="faq-list">
                    <div
                        class="faq-item"
                        v-for="(faq, i) in faqs"
                        :key="i"
                        :class="{ active: activeIndex === i }"
                    >
                        <div class="faq-question" @click="toggle(i)">
                            {{ faq.q }}
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="faq-answer">{{ faq.a }}</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Final CTA Band -->
        <section class="cta-band">
            <div class="container">
                <h2>¡Protege a tu familia hoy mismo!</h2>
                <p>
                    No esperes a que sea demasiado tarde. Con un solo clic puedes dar el paso más importante
                    para defender a los niños que más quieres.
                </p>
                <a :href="whatsappLink" class="btn btn-wa btn-wa-lg btn-wa-pulse" target="_blank" rel="noopener">
                    <i class="fab fa-whatsapp"></i> Pedir el libro por WhatsApp
                </a>
                <div class="trust-row">
                    <div class="trust-badge"><i class="fas fa-truck"></i> Envío a todo Colombia</div>
                    <div class="trust-badge pay-trust-breb">
                        Pagos seguros con:
                        <img src="assets/images/logo-bre-b.png" alt="Bre-B" class="trust-pay-logo">
                    </div>
                    <div class="trust-badge"><i class="fas fa-shield-alt"></i> Compra 100% segura</div>
                </div>
            </div>
        </section>

        <!-- Footer — minimal white -->
        <footer class="site-footer">
            <div class="container footer-inner-wrap">

                <div class="footer-top-row">
                    <div class="footer-brand">
                        <img src="assets/images/cropped-logo-site-1.png" alt="Fundación Red" class="footer-logo-img">
                        <p class="footer-tagline">
                            Más de una década protegiendo a niños,<br>niñas y adolescentes en Colombia.
                        </p>
                        <div class="social-icons-footer">
                            <a href="https://twitter.com/fundacionred" target="_blank" rel="noopener" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                            <a href="https://www.instagram.com/redfundacion/?hl=es-la" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.facebook.com/RedFundacion/" target="_blank" rel="noopener" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                            <a href="http://fundacionred.org" target="_blank" rel="noopener" aria-label="Sitio web"><i class="fas fa-globe"></i></a>
                        </div>
                    </div>

                    <div class="footer-links-group">
                        <div class="footer-col">
                            <h4>El Libro</h4>
                            <ul>
                                <li><a href="#que-encontraras">¿Qué encontrarás?</a></li>
                                <li><a href="#sobre-el-libro">Sobre el libro</a></li>
                                <li><a href="#autores">Autores</a></li>
                                <li><a href="#testimonios">Testimonios</a></li>
                                <li><a href="#formatos">Cómo adquirirlo</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Contacto</h4>
                            <ul>
                                <li><a href="#preguntas">Preguntas frecuentes</a></li>
                                <li><a :href="whatsappLink" target="_blank" rel="noopener">Hablar con un asesor</a></li>
                                <li><a href="http://fundacionred.org" target="_blank" rel="noopener">Fundación Red</a></li>
                            </ul>
                            <div class="footer-contact-mini">
                                <p><i class="fas fa-phone-alt"></i> +57 318 626 6792</p>
                                <p><i class="fas fa-envelope"></i> contactenos@redcontraelabusosexual.org</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer-bottom-row">
                    <p>&copy; 2026 Fundación la RED · Todos los derechos reservados</p>
                    <p>Hecho con ❤️ para proteger a la infancia colombiana</p>
                </div>
            </div>

            <!-- Floating WhatsApp -->
            <div class="floating-wa-wrapper">
                <div class="floating-wa-tooltip">💬 ¡Pide tu libro ahora!</div>
                <a :href="whatsappLink" class="floating-wa" target="_blank" rel="noopener" aria-label="Contactar por WhatsApp">
                    <i class="fab fa-whatsapp"></i>
                </a>
            </div>
        </footer>
    `,
    props: ['whatsappLink'],
    setup() {
        const activeIndex = ref(null);
        const faqs = [
            {
                q: '¿Cómo realizo el pago del libro?',
                a: 'Aceptamos pagos por Bre-B, Nequi, Daviplata y PSE. Una vez que nos escribas por WhatsApp, un asesor te guiará paso a paso en el proceso de pago de forma rápida y segura.'
            },
            {
                q: '¿En cuánto tiempo llega el libro físico?',
                a: 'El tiempo de entrega varía según tu ciudad. Para Bogotá y ciudades principales es de 2 a 4 días hábiles. Para municipios más apartados puede tomar hasta 5 a 7 días hábiles. Confirmamos el envío por WhatsApp con un número de guía.'
            },
            {
                q: '¿La versión digital es un PDF?',
                a: 'Sí, la versión digital es un archivo PDF de alta calidad que puedes leer en tu celular, tablet o computador. Lo recibes directamente por WhatsApp o correo electrónico pocas horas después de confirmar tu pago.'
            },
            {
                q: '¿El libro es apropiado para leerlo con mis hijos?',
                a: 'El libro está escrito para padres, educadores y cuidadores. Sin embargo, contiene herramientas pedagógicas específicamente diseñadas para trabajar con niños de manera didáctica, segura y sin generar miedo. Viene con juegos en línea complementarios.'
            },
            {
                q: '¿Puedo pedir varios ejemplares para un colegio o institución?',
                a: 'Sí, manejamos pedidos corporativos para colegios, iglesias, empresas y fundaciones. Escríbenos por WhatsApp indicando la cantidad que necesitas y coordinamos precio especial y logística de entrega.'
            },
            {
                q: '¿El dinero de mi compra va a la Fundación Red?',
                a: 'Sí. El 100% de los fondos recaudados por la venta del libro contribuyen directamente a los programas de protección infantil, capacitaciones y actividades de prevención que realiza la Fundación Red en Colombia.'
            }
        ];

        function toggle(i) {
            activeIndex.value = activeIndex.value === i ? null : i;
        }

        return { faqs, activeIndex, toggle };
    }
}
