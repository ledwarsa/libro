export default {
    template: `
        <header class="site-header">
            <div class="container header-inner">
                <div class="logo">
                    <a href="#inicio">
                        <img src="assets/images/cropped-logo-site-1.png" alt="Logo Fundación Red">
                    </a>
                </div>
                <nav class="main-nav">
                    <ul>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#sobre-el-libro">El Libro</a></li>
                        <li><a href="#autores">Autores</a></li>
                        <li><a href="#productos">Otras Publicaciones</a></li>
                    </ul>
                </nav>
                <div class="cta">
                    <a :href="whatsappLink" class="btn-primary" target="_blank">Comprar Ahora</a>
                </div>
            </div>
        </header>
    `,
    props: ['whatsappLink']
}
