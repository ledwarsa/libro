export default {
    template: `
        <!-- Social Proof Bar -->
        <div class="social-proof-bar">
            <div class="container">
                <div class="proof-stat">
                    <i class="fas fa-book-open"></i>
                    <div>
                        <div class="proof-stat-num">350</div>
                        <div class="proof-stat-label">Páginas de contenido</div>
                    </div>
                </div>
                <div class="proof-stat">
                    <i class="fas fa-users"></i>
                    <div>
                        <div class="proof-stat-num">+500</div>
                        <div class="proof-stat-label">Familias protegidas</div>
                    </div>
                </div>
                <div class="proof-stat">
                    <i class="fas fa-user-graduate"></i>
                    <div>
                        <div class="proof-stat-num">6</div>
                        <div class="proof-stat-label">Expertos autores</div>
                    </div>
                </div>
                <div class="proof-stat">
                    <i class="fas fa-star"></i>
                    <div>
                        <div class="proof-stat-num">4.9★</div>
                        <div class="proof-stat-label">Calificación promedio</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Benefits / What's Inside -->
        <section id="que-encontraras" class="section section-alt">
            <div class="container text-center">
                <span class="section-label">Qué encontrarás</span>
                <h2>Un manual completo para proteger<br>a tus hijos desde hoy</h2>
                <p style="max-width:620px; margin:0 auto;">
                    Cada capítulo fue diseñado con un lenguaje empático y claro para que cualquier padre,
                    madre o cuidador pueda actuar con conocimiento y confianza.
                </p>

                <div class="benefits-grid">
                    <div class="benefit-card">
                        <div class="benefit-icon"><i class="fas fa-search"></i></div>
                        <h3>Detección Temprana</h3>
                        <p>Señales físicas y conductuales para identificar si un menor está en riesgo, antes de que sea tarde.</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-icon"><i class="fas fa-home"></i></div>
                        <h3>Prevención en el Hogar</h3>
                        <p>Pautas concretas para crear ambientes seguros y conversations abiertas con tus hijos desde temprana edad.</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-icon"><i class="fas fa-palette"></i></div>
                        <h3>Herramientas Pedagógicas</h3>
                        <p>Ilustraciones, gráficas y juegos en línea diseñados para enseñar a los niños a reconocer el peligro sin miedo.</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-icon"><i class="fas fa-balance-scale"></i></div>
                        <h3>Rutas de Denuncia</h3>
                        <p>Pasos claros para acceder a la justicia colombiana, entender el proceso judicial y exigir tus derechos.</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-icon"><i class="fas fa-brain"></i></div>
                        <h3>Perfil del Agresor</h3>
                        <p>Análisis psicológico y neurológico de los patrones que usan los agresores para acercarse a las víctimas.</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-icon"><i class="fas fa-heart"></i></div>
                        <h3>Recuperación y Resiliencia</h3>
                        <p>Memorias, testimonios e historias reales que ofrecen esperanza y guían el proceso de sanación.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- About the Book -->
        <section id="sobre-el-libro" class="section">
            <div class="container">
                <div class="about-layout">
                    <div class="about-img-wrapper">
                        <img src="assets/images/dra_libro.png" alt="Los Niños del Viento - libro sobre abuso infantil">
                        <div class="about-img-badge">
                            <span class="big">350</span>
                            <span class="small">Páginas de<br>conocimiento</span>
                        </div>
                    </div>
                    <div class="about-content">
                        <span class="section-label">Sobre el libro</span>
                        <h2>Más de una década de investigación en tus manos</h2>
                        <p>
                            <strong>Los Niños del Viento</strong> nació de 10+ años de trabajo de la Fundación Red combatiendo
                            el Abuso Sexual Infantil (ASI) en Colombia. No es solo un libro: es un escudo de conocimiento
                            para toda la familia.
                        </p>
                        <ul class="about-list">
                            <li><i class="fas fa-check-circle"></i> Escrito por Alexandra Moreno Piraquive, fundadora de la Fundación Red, y Lisa Marie Wills</li>
                            <li><i class="fas fa-check-circle"></i> Incluye aportes de 4 especialistas adicionales en psicología, neurología y derecho</li>
                            <li><i class="fas fa-check-circle"></i> Apoya leyes impulsadas en el Congreso de Colombia para proteger a los menores</li>
                            <li><i class="fas fa-check-circle"></i> Contiene recursos pedagógicos con juegos en línea complementarios</li>
                            <li><i class="fas fa-check-circle"></i> Lenguaje empático y didáctico: apto para padres, educadores y profesionales</li>
                        </ul>
                        <a :href="whatsappLink" class="btn btn-wa" target="_blank" rel="noopener">
                            <i class="fab fa-whatsapp"></i> Adquirir por WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `,
    props: ['whatsappLink']
}
