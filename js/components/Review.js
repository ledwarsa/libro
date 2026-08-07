export default {
    template: `
        <!-- Review / Reseña section (compact) -->
        <section id="resena" class="section section-alt">
            <div class="container">
                <div class="review-layout">
                    <div class="review-content">
                        <span class="section-label">Reseña oficial</span>
                        <h2>Un escudo protector para cada niño de Colombia</h2>
                        <p class="review-quote">
                            "Llegan como el viento, inicialmente imperceptible, en secreto ruge,
                            se aleja, y nadie lo ve…"
                        </p>
                        <ul class="review-bullets">
                            <li><i class="fas fa-check"></i> Cifras, datos y testimonios reales que explican el fenómeno del ASI de forma sencilla</li>
                            <li><i class="fas fa-check"></i> Manual estructurado para leer como guía paso a paso en cualquier situación</li>
                            <li><i class="fas fa-check"></i> Alexandra Moreno habla como madre, mujer y ciudadana: un lenguaje que conecta</li>
                            <li><i class="fas fa-check"></i> 350 páginas que pueden cambiar la vida de un niño para siempre</li>
                        </ul>
                        <a :href="whatsappLink" class="btn btn-wa" target="_blank" rel="noopener">
                            <i class="fab fa-whatsapp"></i> Quiero mi libro ahora
                        </a>
                    </div>
                    <div class="review-image">
                        <img src="assets/images/dra-libro-2.png" alt="Reseña del libro Los Niños del Viento">
                    </div>
                </div>

            </div>
        </section>

        <!-- Pricing / Formats -->
        <section id="formatos" class="section">
            <div class="container text-center">
                <span class="section-label">¿Cómo adquirirlo?</span>
                <h2>Elige tu formato preferido</h2>
                <p style="max-width:520px; margin:0 auto;">
                    Escríbenos por WhatsApp y en minutos coordinamos tu pedido.
                    Enviamos a todo Colombia con métodos de pago fáciles.
                </p>

                <div class="pricing-grid">
                    <div class="pricing-card">
                        <div class="pricing-icon">📱</div>
                        <h3>Libro Digital</h3>
                        <p class="pricing-desc">Recíbelo al instante por WhatsApp o Email</p>
                        <div class="pricing-price">
                            <span class="price-amount">$61.000</span>
                            <span class="price-currency">COP</span>
                        </div>
                        <ul class="pricing-features">
                            <li><i class="fas fa-check-circle"></i> PDF de alta calidad</li>
                            <li><i class="fas fa-check-circle"></i> Entrega inmediata</li>
                            <li><i class="fas fa-check-circle"></i> Lee en cualquier dispositivo</li>
                            <li><i class="fas fa-check-circle"></i> Pago por Nequi o Daviplata</li>
                        </ul>
                        <a :href="whatsappDigital" class="btn btn-wa" target="_blank" rel="noopener" style="width:100%">
                            <i class="fab fa-whatsapp"></i> Pedir versión digital
                        </a>
                    </div>

                    <div class="pricing-card featured">
                        <div class="pricing-badge-top">⭐ Más vendido</div>
                        <div class="pricing-icon">📗</div>
                        <h3>Libro Físico</h3>
                        <p class="pricing-desc">Impreso y enviado a tu puerta en todo Colombia</p>
                        <div class="pricing-price">
                            <span class="price-amount">$61.000</span>
                            <span class="price-currency">COP</span>
                            <span class="price-note">+ envío</span>
                        </div>
                        <ul class="pricing-features">
                            <li><i class="fas fa-check-circle"></i> Edición impresa de calidad</li>
                            <li><i class="fas fa-check-circle"></i> Envío a todo el territorio nacional</li>
                            <li><i class="fas fa-check-circle"></i> Pago rápido y seguro con Bre-B</li>
                            <li><i class="fas fa-check-circle"></i> Apoya a la Fundación Red con tu compra</li>
                        </ul>
                        <a :href="whatsappFisico" class="btn btn-wa btn-wa-pulse" target="_blank" rel="noopener" style="width:100%">
                            <i class="fab fa-whatsapp"></i> Pedir libro físico
                        </a>
                    </div>
                </div>

                <!-- Trust badges -->
                <div class="cta-band" style="margin-top: 48px; border-radius: 20px; padding: 36px 24px;">
                    <div class="trust-row">
                        <div class="trust-badge"><i class="fas fa-truck"></i> Envío seguro a Colombia</div>
                        <div class="trust-badge pay-trust-breb">
                            <img src="assets/images/logo-bre-b.png" alt="Bre-B" class="trust-pay-logo">
                        </div>
                        <div class="trust-badge"><i class="fas fa-heart"></i> Apoya la Fundación Red</div>
                    </div>
                </div>
            </div>
        </section>
    `,
    props: ['whatsappLink'],
    computed: {
        whatsappDigital() {
            const num = '573042916654';
            const msg = encodeURIComponent('Hola quiero comprar mi libro.');
            return `https://wa.me/c/${num}?text=${msg}`;
        },
        whatsappFisico() {
            const num = '573042916654';
            const msg = encodeURIComponent('Hola quiero comprar mi libro.');
            return `https://wa.me/c/${num}?text=${msg}`;
        }
    }
}
