export default {
    template: `
        <footer class="site-footer">
            <div class="footer-top">
                <div class="container footer-grid">
                    <div class="footer-col footer-logo">
                        <img src="assets/images/cropped-logo-site-1.png" alt="Logo Fundación Red">
                    </div>
                    <div class="footer-col footer-social">
                        <div class="social-icons">
                            <a href="https://twitter.com/fundacionred" target="_blank"><i class="fab fa-twitter"></i></a>
                            <a href="https://www.instagram.com/redfundacion/?hl=es-la" target="_blank"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.facebook.com/RedFundacion/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                            <a href="http://fundacionred.org" target="_blank"><i class="fas fa-globe"></i></a>
                        </div>
                        <a href="http://fundacionred.org" target="_blank" class="footer-web-link">www.fundacionred.org</a>
                    </div>
                    <div class="footer-col footer-contact">
                        <p>Dirección: Calle 127B # 50A-01 Tierra Linda.</p>
                        <p>Ciudad: Bogotá-Colombia</p>
                        <p>Celular: +57 318 626 6792</p>
                        <p>Email: contactenos@redcontraelabusosexual.org</p>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container">
                    <p>&copy; 2026 Fundación la RED - Todos los derechos reservados</p>
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
