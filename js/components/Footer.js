export default {
    template: `
        <footer class="site-footer">
            <div class="footer-top">
                <div class="container">
                    <img src="assets/images/cropped-logo-site-1.png" alt="Logo Fundación Red">
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container">
                    <p>Dirección: Calle 127B # 50A-01 Tierra Linda. Bogotá-Colombia | Celular: +57 318 626 6792 | Email: contactenos@redcontraelabusosexual.org</p>
                    <p>&copy; 2020 Fundación la RED - Todos los derechos reservados</p>
                </div>
            </div>
            
            <!-- Floating WA Button -->
            <a :href="whatsappLink" class="floating-wa" target="_blank" title="Contáctanos por WhatsApp">
                <i class="fab fa-whatsapp"></i>
            </a>
        </footer>
    `,
    props: ['whatsappLink']
}
