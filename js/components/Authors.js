export default {
    template: `
        <!-- Testimonials -->
        <section id="testimonios" class="section section-dark">
            <div class="container text-center">
                <span class="section-label white">Testimonios reales</span>
                <h2 style="color:#fff;">Lo que dicen quienes ya lo leyeron</h2>
                <p>Padres, educadores y psicólogos que transformaron su forma de proteger a los niños.</p>

                <div class="testimonials-grid">
                    <div class="testimonial-card" v-for="(t, i) in testimonials" :key="i">
                        <div class="testimonial-quote">"</div>
                        <div class="testimonial-stars">
                            <i class="fas fa-star" v-for="n in 5" :key="n"></i>
                        </div>
                        <p class="testimonial-text">{{ t.text }}</p>
                        <div class="testimonial-author">
                            <div class="testimonial-avatar">{{ t.initials }}</div>
                            <div>
                                <div class="testimonial-name">{{ t.name }}</div>
                                <div class="testimonial-role">{{ t.role }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Authors -->
        <section id="autores" class="section">
            <div class="container text-center">
                <span class="section-label">Equipo de expertos</span>
                <h2>Autores y Columnistas</h2>
                <p style="max-width:560px; margin:0 auto;">
                    Especialistas en psicología, neurología, derecho y prevención del abuso infantil
                    que contribuyeron con su conocimiento a esta obra.
                </p>

                <div class="authors-grid">
                    <div class="author-card" v-for="(author, index) in authors" :key="index">
                        <div class="author-img-wrapper" v-if="author.image">
                            <img :src="author.image" :alt="author.name" :style="author.imageStyle">
                        </div>
                        <div class="author-img-wrapper" v-else style="background:#f0f0f0; display:flex; align-items:center; justify-content:center; font-size:28px; color:#ccc;">
                            <i class="fas fa-user"></i>
                        </div>
                        <h3>{{ author.name }}</h3>
                        <p>{{ author.role }}</p>
                    </div>
                </div>
            </div>
        </section>
    `,
    data() {
        return {
            testimonials: [
                {
                    text: 'Este libro cambió completamente la forma en que hablo con mis hijos sobre el tema. Las herramientas pedagógicas son increíbles y muy fáciles de usar en casa.',
                    name: 'María Fernanda R.',
                    role: 'Madre de familia · Bogotá',
                    initials: 'MF'
                },
                {
                    text: 'Como psicóloga lo recomiendo a todas mis pacientes. El análisis del perfil del agresor y las rutas de denuncia están explicados con una claridad excepcional.',
                    name: 'Dra. Carolina Vásquez',
                    role: 'Psicóloga Clínica · Medellín',
                    initials: 'CV'
                },
                {
                    text: 'Lo usamos en el colegio para capacitar a los docentes. El lenguaje es empático, práctico y no genera pánico. Una herramienta indispensable para cualquier institución educativa.',
                    name: 'Juan Pablo Herrera',
                    role: 'Rector · Cali',
                    initials: 'JP'
                }
            ],
            authors: [
                { name: 'Alexandra Moreno Piraquive', role: 'Fundadora de la Fundación Red · Autora principal', image: 'assets/images/alexandra-moreno.jpg', imageStyle: 'object-position: top; transform: scale(2.5); transform-origin: 50% 12%;' },
                { name: 'Lisa Marie Wills', role: 'Miembro honorario de la Fundación Red · Coautora', image: 'assets/images/lisa-marie-wills.jpg', imageStyle: 'object-position: top;' },
                { name: 'Edwin Olaya', role: 'Especialista · Capítulo XIII', image: 'assets/images/unnamed-2.jpg' },
                { name: 'Dora Nelsy Duarte', role: 'Especialista · Capítulo XV', image: 'assets/images/unnamed-2-1.jpg' },
                { name: 'Lucas Raspall', role: 'Especialista · Capítulo XIV', image: 'assets/images/unnamed-2-2.jpg' },
                { name: 'Miguel Barrios Acosta', role: 'Especialista · Capítulo XVI', image: 'assets/images/unnamed-2-3.jpg' }
            ]
        }
    }
}
