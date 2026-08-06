export default {
    template: `
        <section id="inicio" class="hero" style="background-image: url('assets/images/banner.png'); background-size: cover; background-position: center;">
            <div class="container hero-container">
                <div class="hero-content">
                    <h1>Los niños del viento</h1>
                    <p>Un recurso indispensable para descifrar a los abusadores sexuales de menores y entender que la prevención del Abuso Sexual Infantil empieza en casa.</p>
                    <a :href="whatsappLink" class="btn-whatsapp" target="_blank">
                        <i class="fab fa-whatsapp"></i> Lo quiero adquirir
                    </a>
                </div>
                <div class="hero-image">
                    <img src="assets/hero-image.png" alt="Los niños del viento libro">
                </div>
            </div>
        </section>
    `,
    props: ['whatsappLink']
}
