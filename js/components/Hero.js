export default {
    template: `
        <section id="inicio" class="hero" style="background-image: url('assets/images/Capa-24.png');">
            <div class="container">
                <div class="hero-content">
                    <h1>Los niños del viento</h1>
                    <p>Un recurso indispensable para descifrar a los abusadores sexuales de menores y entender que la prevención del Abuso Sexual Infantil empieza en casa.</p>
                    <a :href="whatsappLink" class="btn-whatsapp" target="_blank">
                        <i class="fab fa-whatsapp"></i> Lo quiero comprar
                    </a>
                </div>
            </div>
        </section>
    `,
    props: ['whatsappLink']
}
