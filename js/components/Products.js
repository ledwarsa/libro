export default {
    template: `
        <section id="productos" class="section thick-red-border">
            <div class="container">
                <h2>Formatos y Otras Publicaciones</h2>
                <div class="products-grid">
                    <div class="product-card" v-for="(product, index) in products" :key="index">
                        <img :src="product.image" :alt="product.title">
                        <h3>{{ product.title }}</h3>
                        <a :href="whatsappLink" class="btn-primary" target="_blank">Comprar por WhatsApp</a>
                    </div>
                </div>
            </div>
        </section>
    `,
    props: ['whatsappLink'],
    data() {
        return {
            products: [
                {
                    title: 'Lo que debes saber sobre el Abuso Sexual Infantil',
                    image: 'assets/images/web-la-red02.png'
                },
                {
                    title: 'Libro Físico - Los Niños del Viento',
                    image: 'assets/images/miratlc.png'
                },
                {
                    title: 'Cuento: Lisi y LPV por Colombia',
                    image: 'assets/images/web-la-22.png'
                },
                {
                    title: 'Ebooks Cuento: Los pequeños valientes',
                    image: 'assets/images/web-la-re2d2.png'
                }
            ]
        }
    }
}
