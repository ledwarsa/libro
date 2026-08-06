export default {
    template: `
        <section id="resena" class="section section-gray">
            <div class="container">
                <h2 class="review-title">Reseña del Libro</h2>
                <div class="review-body text-center">
                    <p>“Los Niños del Viento: Afrontando el Abuso Sexual Infantil” es un libro inspirado en la lucha contra el abuso sexual infantil (ASI) y la experiencia de más de una década de trabajo desarrollado por las autoras-compiladoras Alexandra Moreno Piraquive y Lisa Marie Wills Moreno. En sus páginas, el lector encontrará información que ha sido investigada, reunida y compilada desde los inicios de la Fundación Red.</p>
                    <p>Es una completa obra en la que se recopilan herramientas pedagógicas para niños, niñas y adolescentes creadas por la fundación, leyes para la prevención de este delito en Colombia impulsadas por su fundadora y otros elementos que resultarán de gran utilidad para el lector. Memorias, testimonios, cifras y datos, permitirán entender el fenómeno del ASI de una manera sencilla y la importancia de ser un agente activo en lucha contra este fenómeno.</p>
                    <p>El libro ha sido elaborado con la estructura de un manual de instrucciones, en el que la Autora habla en primera persona como madre, mujer y ciudadana, con un lenguaje empático y didáctico. Tanto padres de familia como cuidadores, profesionales involucrados con la infancia y la adolescencia, y demás personas interesadas en el tema, podrán encontrar en sus 350 páginas una completa herramienta que ayudará a la prevención, detección y denuncia de este delito.</p>
                    <p>Contiene además ilustraciones y gráficas pedagógicas en las que se evidencia el valor e importancia de educarse en temas de violencia sexual en menores de edad. Estas fueron diseñadas con el objetivo de reconocer si un NNA es víctima de abuso, enseñar las pautas para la prevención del delito, saber cómo responder ante la revelación de un niño víctima, así como entender las vías de acceso a la justicia y el proceso judicial, con un lenguaje ameno y claro.</p>
                    <p>Ciertamente, el contenido es enriquecido con los aportes de profesionales afines a la temática, especializados en diferentes áreas del conocimiento que nos comparten acerca del perfil del agresor, las consecuencias neurológicas del maltrato en menores de edad, la importancia de la prevención en el hogar, formas de maltrato, entre otros. Adicionalmente, incluye juegos en línea diseñados con el fin de reforzar los conocimientos en la materia.</p>
                    <p>“Los Niños del Viento: Afrontando el Abuso Sexual Infantil”, a través de inspiradoras historias y utilizando el conocimiento brindado por la Fundación Red, busca generar un impacto positivo en la defensa de los niños, niñas y adolecentes.  Es una pieza fundamental con la que todos podemos convertirnos en un escudo protector en contra de los agresores, que arrebatan la alegría de niños y niñas, pues llegan como el viento, inicialmente imperceptible, en secreto ruge, se aleja, y nadie lo ve.</p>
                    <div class="review-action">
                        <a :href="whatsappLink" class="btn-whatsapp" target="_blank">
                            <i class="fab fa-whatsapp"></i> Quiero adquirir el libro
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `,
    props: ['whatsappLink']
}
