export default {
    template: `
        <section id="autores" class="section">
            <div class="container">
                <h2 style="text-align: center;">Autores y Columnistas</h2>
                <div class="authors-grid">
                    <div class="author-card" v-for="(author, index) in authors" :key="index">
                        <div class="author-image-wrapper" v-if="author.image">
                            <img :src="author.image" :alt="author.name" class="author-image" :style="author.imageStyle">
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
            authors: [
                { name: 'Alexandra Moreno Piraquive', role: 'Fundadora de la Fundación Red', image: 'assets/images/alexandra-moreno.jpg', imageStyle: 'object-position: top; transform: scale(2.5); transform-origin: 50% 12%;' },
                { name: 'Lisa Marie Wills', role: 'Miembro honorario de la Fundación Red', image: 'assets/images/lisa-marie-wills.jpg', imageStyle: 'object-position: top;' },
                { name: 'Edwin Olaya', role: 'Columnista (Capítulo XIII)', image: 'assets/images/unnamed-2.jpg' },
                { name: 'Dora Nelsy Duarte', role: 'Columnista (Capítulo XV)', image: 'assets/images/unnamed-2-1.jpg' },
                { name: 'Lucas Raspall', role: 'Columnista (Capítulo XIIII)', image: 'assets/images/unnamed-2-2.jpg' },
                { name: 'Miguel Barrios Acosta', role: 'Columnista (Capítulo XVI)', image: 'assets/images/unnamed-2-3.jpg' }
            ]
        }
    }
}
