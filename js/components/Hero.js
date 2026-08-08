export default {
    template: `
        <section id="inicio" class="hero">
            <div class="hero-grid">
                <!-- LEFT: Book image -->
                <div class="hero-book-col">
                    <div class="book-shadow-glow"></div>
                    <img
                        src="assets/hero-image.png"
                        alt="Libro Los Niños del Viento – Fundación Red"
                        class="hero-book-img"
                    >
                </div>

                <!-- RIGHT: Copy -->
                <div class="hero-copy-col">

                    <!-- Logo (not badge) -->
                    <div class="hero-logo-wrap">
                        <img src="assets/images/cropped-logo-site-1.png" alt="Fundación Red" class="hero-logo">
                    </div>

                    <h1 class="hero-h1">
                        Protege a los<br>
                        que más amas<br>
                        <em>con este libro</em>
                    </h1>

                    <p class="hero-sub">
                        Un libro para prevenir el abuso sexual infantil.
                        La guía de <strong>350 páginas</strong> escrita por expertos
                        de la Fundación Red para familias colombianas.
                    </p>

                    <a :href="whatsappLink" class="btn btn-wa btn-wa-lg btn-wa-pulse" target="_blank" rel="noopener">
                        <i class="fab fa-whatsapp"></i> ¡Quiero mi libro ahora!
                    </a>

                    <div class="hero-pay-trust">
                        <span class="pay-label">Pagos seguros con:</span>
                        <span class="pay-pill pay-pill-img">
                            <img src="assets/images/logo-bre-b.png" alt="Bre-B" class="pay-logo">
                        </span>
                    </div>

                </div>
            </div>
        </section>
    `,
    props: ['whatsappLink']
}
