export default {
    template: `
        <section id="sobre-el-libro" class="section section-bg">
            <div class="container about-grid">
                <div class="about-img">
                    <img src="assets/images/fotoseccion-opt.jpg" alt="Niña leyendo">
                </div>
                <div class="about-content">
                    <h2>Sobre el Libro</h2>
                    <p><b>Los Niños del viento</b> aborda uno de los temas más críticos de nuestra sociedad: el Abuso Sexual Infantil y su impacto en la edad adulta.</p>
                    <p>A través de sus diferentes capítulos, expertos y especialistas desglosan los retos prioritarios en la intervención del maltrato infantil en Colombia, la psicopatología asociada, y cómo la prevención eficaz debe comenzar desde el hogar.</p>
                    <a :href="whatsappLink" class="btn-whatsapp" target="_blank"><i class="fab fa-whatsapp"></i> Adquirir por WhatsApp</a>
                </div>
            </div>
        </section>
    `,
    props: ['whatsappLink']
}
