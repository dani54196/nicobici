import React from 'react';

import Layout from '../components/Layout';

import bic01 from '../assets/images/RockhopperEliteSpecialized.png';
import bic02 from '../assets/images/RoubaixSportSpecialized.png';
import bic03 from '../assets/images/DivergeSportSpecialized.png';
import bic04 from '../assets/images/TarmacSL6SportSpecialized.png';
import bic05 from '../assets/images/SirrusXSpecialized.png';
import bic06 from '../assets/images/SCULTURATEAMMerida.png';
import bic07 from '../assets/images/SCULTURAENDURANCE9000Merida.png';
import bic08 from '../assets/images/SPEEDER200Merida.png';
import bic09 from '../assets/images/MATTSJ.24+Merida.png';
import bic10 from '../assets/images/REACTO8000Merida.jpg';
import cas01 from '../assets/images/AlignIISpecialized2.jpg';
import cas02 from '../assets/images/Chamonix2Specialized.png';
import cas03 from '../assets/images/CHARGERMTBMerida.jpg';
import cas04 from '../assets/images/Chamonix2Specialized.png';
import cas05 from '../assets/images/ProperoIIISpecialized.jpg';

import logo from '../assets/img/website-icon.png';

import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <header>
          <img src={logo} wi />
          <p>Descripcion</p>
        </header>
        <h1>Bicicletas</h1>
        <section className="tiles">
          <article className="style1">
            <span className="image ">
              <img src={bic01} alt="" />
            </span>
            <h2>Rockhopper Elite - Specialized</h2>
            <h3>$159,000</h3>
            <p>
              <a class="cta" href="#google">
                Saber mas
              </a>
            </p>
            <div id="google" class="modaloverlay">
              <div class="modal">
                <a href="#close" class="close">
                  &times;
                </a>
                <div>
                  <h1>Rockhopper Elite - Specialized</h1>
                  <p>
                    Cuadro de aluminio Premium A1 liviano pero duradero, el
                    Rockhopper cuenta con tubos de aluminio conificados para
                    mantener el peso bajo y la resistencia alta, al mismo tiempo
                    que brinda mayor espacio libre para el soporte, enrutamiento
                    interno de cables liso y compatibilidad con tija
                    telescópica. Con el objetivo de asegurar de que Rockhopper
                    ofrezca el mejor ajuste y el mejor rendimiento para cada
                    persona, sin importar su medida, han emparejado cada tamaño
                    de cuadro Rockhopper con el tamaño de rueda óptimo. El
                    resultado es una Rockhopper que se adapta a cada ciclista.
                    *La horquilla Judy SoloAir de RockShox ofrece sensibilidad y
                    rendimiento con suspensión neumática a las masas. El
                    amortiguador TurnKey reparte hábilmente el recorrido
                    permitiéndote concentrarte en lo que viene.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="style1">
            <span className="image ">
              <img src={bic02} alt="" />
            </span>
            <h2>Roubaix Sport - Specialized</h2>
            <h3>$250,000</h3>
            <p>
              <a class="cta" href="#googlea">
                Saber mas
              </a>
            </p>
            <div id="googlea" class="modaloverlay">
              <div class="modal">
                <a href="#close" class="close">
                  &times;
                </a>
                <div>
                  <h1>Roubaix Sport - Specialized</h1>
                  <p>
                    Con seis victorias en la París-Roubaix, la Roubaix ha
                    comprobado que Más Suave es Más Rápido. Hasta ahora, sin
                    embargo, admitimos que lo suave ha venido con algunas
                    concesiones. Pero ya no. La nueva Roubaix Sport ahora ofrece
                    elasticidad sin concesiones al incluir el nuevo y radical
                    Future Shock 1.5 que te da más control sobre rutas con
                    baches, además de un nuevo poste de asiento Pavé, para crear
                    la Roubaix más equilibrada que hayamos hecho, con
                    aerodinámica que iguala a la Tarmac y un cuadro Rider-First
                    Engineered con peso realmente reducido. ¿Sigue siendo
                    cómoda? Por supuesto, pero no diríamos que es una bici de
                    confort, el foco de cada decisión de ingeniería que tomamos
                    fue el rendimiento. Esta es la nueva Roubaix. Esta Roubaix
                    Sport ofrece una espectacular relación calidad-precio, pero
                    al igual que el cuadro, lo hace sin concesiones. En sus
                    especificaciones incluimos el grupo 105 de 11 velocidades de
                    Shimano para obtener cambios precisos y poderosos frenos de
                    disco hidráulicos SRAM, así como ruedas DT R470 Disc
                    confiables y fuertes, el flamante poste de asiento S-Works
                    Pavé, llantas Turbo Pro de 28mm y nuestro popular asiento
                    Power Sport .
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="style1">
            <span className="image ">
              <img src={bic03} alt="" />
            </span>
            <h2>Diverge Sport Carbon - Specialized</h2>
            <h3>$150,000</h3>
            <p>
              <a class="cta" href="#3">
                Saber mas
              </a>
            </p>
            <div id="3" class="modaloverlay">
              <div class="modal">
                <a href="#close" class="close">
                  &times;
                </a>
                <div>
                  <h1>Diverge Sport Carbon - Specialized</h1>
                  <p>
                    Con un cuadro de carbono FACT 8r, el cuadro Diverge Sport es
                    una bicicleta de carreras increíblemente capaz y liviana.
                    Anótalo para tu KOM de escalada de tierra local, o escala un
                    pico gigante en el campo, el Diverge ligero y animado te
                    llevará allí más rápido. Velocidad, control y confianza
                    Future Shock 1.5 es la tecnología ideal para el ciclista de
                    gravel. Con 20 mm de elasticidad axial, Future Shock 1.5 se
                    ajusta progresivamente específicamente para la conducción en
                    grava. Esto te mantiene confiado y en control, capaz de
                    mantener baja la potencia y no pisar los frenos en caminos
                    de tierra accidentados y en grava gruesa y suelta, todo
                    mientras mantienes tus manos, brazos y cuello frescos.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="style1">
            <span className="image ">
              <img src={bic04} alt="" />
            </span>
            <h2>Diverge Sport Carbon - Specialized</h2>
            <h3>$150,000</h3>
            <p>
              <a class="cta" href="#4">
                Saber mas
              </a>
            </p>
            <div id="4" class="modaloverlay">
              <div class="modal">
                <a href="#close" class="close">
                  &times;
                </a>
                <div>
                  <h1>Tarmac SL6 Sport - Specialized</h1>
                  <p>
                    Cuando desarrollamos la Tarmac, no solo queríamos que fuera
                    rápida. Queríamos que fuera rápido en todas partes. Largas
                    subidas, llanos ventosos, etapas de Grand Tour, fondos
                    locales: construimos una bicicleta de carrera para ser la
                    más completa que existe. ¿Cómo lo hicimos? Comenzamos con
                    nuestro cuadro Rider-First Engineered™ con una calidad de
                    conducción perfectamente ajustada para cada tamaño,
                    agregamos una tecnología aerodinámica seria que lo hace 30
                    segundos más rápido que el Tarmac SL5 en 40 kilómetros, y
                    luego lo hicimos un 20% más liviano. Nada es más ligero, más
                    rápido y mejor manejo. Esta Tarmac viene con una
                    especificación confiable que incluye cambios mecánicos
                    Shimano Tiagra de 10 velocidades, frenos de disco
                    hidráulicos de parada rápida, ruedas duraderas Axis Sport
                    Disc y nuestro sillín Power favorito de los fanáticos.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="style1">
            <span className="image ">
              <img src={bic05} alt="" />
            </span>
            <h2>Sirrus X - Specialized</h2>
            <h3>$120,000</h3>
            <p>
              <a class="cta" href="#5">
                Saber mas
              </a>
            </p>
            <div id="5" class="modaloverlay">
              <div class="modal">
                <a href="#close" class="close">
                  &times;
                </a>
                <div>
                  <h1>Sirrus X - Specialized</h1>
                  <p>
                    Sirrus X es tu boleto para montar más y para lugares que
                    nunca imaginaste posibles. Es un tipo de bicicleta cómoda,
                    capaz, "vamos a hacer cosas" que te inspirará a montar más
                    que nunca. Con llantas más grandes que inspiran confianza,
                    una posición de conducción un poco más erguida, una
                    transmisión de uno en uno súper intuitiva y muchos soportes
                    para portabultos y guardabarros, es más que un compañero
                    sólido en el pavimento. Sirrus X es una opción marcada
                    cuando es hora de golpear un poco de grava. También hemos
                    equipado cada Sirrus X con comodidad de nivel superior
                    gracias a nuestro sillín, puños y pedales Shared Platform
                    Body Geometry científicamente probados y diseñados
                    ergonómicamente.{' '}
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="style1">
            <span className="image ">
              <img src={bic06} alt="" />
            </span>
            <h2>SCULTURA TEAM - Merida</h2>
            <h3>$120,000</h3>
            <p>
              <a class="cta" href="#6">
                Saber mas
              </a>
            </p>
            <div id="6" class="modaloverlay">
              <div class="modal">
                <a href="#close" class="close">
                  &times;
                </a>
                <div>
                  <h1>SCULTURA TEAM - Merida</h1>
                  <p>
                    Puesta a prueba en las carreras por el equipo Bahrain
                    Victorious, nuestra nueva SCULTURA TEAM es la alternativa en
                    comodidad a la bicicleta aerodinámica REACTO. Si bien la
                    nueva SCULTURA ha aprendido mucho de la REACTO en términos
                    de aerodinámica, hemos hecho un esfuerzo adicional para
                    reducir el peso aún más y convertirla en la bicicleta de
                    carreras de carretera pura más cómoda de nuestra historia.
                    Equipada con componentes de gama alta de Shimano, Vision,
                    Continental y MERIDA, la TEAM es la bicicleta perfecta
                    cuando la comodidad, el peso y la aceleración ultrarrápida
                    son esenciales para tu próxima sesión de carretera. Como
                    novedad para 2022, nos complace presentar la quinta
                    generación de nuestra bicicleta de carretera. Si bien
                    incorporamos detalles aerodinámicos seleccionados de nuestra
                    galardonada bicicleta aerodinámica REACTO, la nueva SCULTURA
                    es la más aerodinámica de la historia. Sin embargo, sigue
                    siendo fiel a su enfoque ligero que prioriza la agilidad y
                    comodidad del ciclista. De hecho, lleva estos factores al
                    siguiente nivel. La nueva SCULTURA demuestra un cumplimiento
                    sobresaliente, proporcionando al ciclista una comodidad de
                    conducción líder en su clase que ayudará a mantener el
                    cuerpo fresco para el sprint final. Las nuevas versiones de
                    carbono CF5 y CF3 comparten su geometría con nuestra REACTO
                    que tantos hitos ha logrado con el Team Bahrain Victorious.
                    Disponible en carbono y aluminio y con opción de freno de
                    disco o de llanta, nuestra bicicleta de carretera clásica
                    combina una comodidad excepcional con una aceleración y un
                    pedigrí de escalada líder en su clase.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="style1">
            <span className="image ">
              <img src={bic07} alt="" />
            </span>
            <h2>SCULTURA ENDURANCE 9000 - Merida</h2>
            <h3>$267,500</h3>
            <p>
              <a class="cta" href="#7">
                Saber mas
              </a>
            </p>
            <div id="7" class="modaloverlay">
              <div class="modal">
                <a href="#close" class="close">
                  &times;
                </a>
                <div>
                  <h1>SCULTURA ENDURANCE 9000 - Merida</h1>
                  <p>
                    El modelo superior de nuestra gama SCULTURA ENDURANCE, para
                    el que solo los últimos equipos de Shimano, Reynolds y
                    Continental son lo suficientemente buenos. El cuadro de
                    carbono de la 9000 ofrece un rendimiento líder en su clase
                    que, combinado con los neumáticos de hasta 35 mm de ancho,
                    proporciona la máxima comodidad de conducción, incluso en
                    las salidas más prolongadas. La tecnología de integración de
                    cables WIRE PORT mantiene limpia la cabina y reduce la
                    resistencia del aire alrededor de la parte delantera de la
                    bicicleta. Lanzada en 2021, nuestra SCULTURA ENDURANCE
                    consiguió un éxito instantáneo entre la prensa ciclista
                    internacional. Además de recibir un premio de 'comodidad' de
                    RennRad, también logró obtener una larga lista de elogios
                    como 'excelente comodidad', 'inspirador de confianza',
                    'sensación viva' y 'agradable' por sitios web / revistas de
                    ciclismo de referencia como Gran Fondo, Cyclingnews,
                    Cyclingtips y Road.cc. En comparación con su homónimo, el
                    SCULTURA, el ENDURANCE tiene una geometría más relajada,
                    mucho espacio libre para los neumáticos y una perfecta
                    integración de los últimos componentes. Firmemente
                    establecida en la línea de carreteras MERIDA, la SCULTURA
                    ENDURANCE encuentra su lugar entre la SCULTURA por un lado y
                    la SILEX por el otro. Los neumáticos anchos son una garantía
                    incluso en los caminos bacheados, mientras que un tubo de
                    dirección más largo proporciona una posición de conducción
                    más relajada. ¡La SCULTURA ENDURANCE es la elección perfecta
                    para los ciclistas que quieren disfrutar de largas horas en
                    el sillín mientras se sienten cómodos y relajados en la
                    bicicleta
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className="style1">
            <span className="image ">
              <img src={bic08} alt="" />
            </span>
            <h2>SPEEDER 200 - Merida</h2>
            <h3>$200,000</h3>
            <p>
              <a class="cta" href="#8">
                Saber mas
              </a>
            </p>
            <div id="8" class="modaloverlay">
              <div class="modal">
                <a href="#close" class="close">
                  &times;
                </a>
                <div>
                  <h1>SPEEDER 200 - Merida</h1>
                  <p>
                    El cuadro SPEEDER se ha vuelto aún más deportivo. Al
                    aumentar la longitud del tubo superior, hemos logrado un
                    "reach" un poco más largo que ofrece al piloto una posición
                    de conducción más deportiva sin dejar de ser cómodo. Además,
                    este cambio de geometría permite una distancia entre ejes
                    más larga, que tiene un efecto positivo en la estabilidad y,
                    en combinación con el ángulo del tubo de dirección
                    ligeramente más suave, mejora la estabilidad de conducción a
                    altas velocidades.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="style1">
            <span className="image ">
              <img src={bic09} alt="" />
            </span>
            <h2>MATTS J. 24+ - Merida</h2>
            <h3>$247,000</h3>
            <p>
              <a class="cta" href="#9">
                Saber mas
              </a>
            </p>
            <div id="9" class="modaloverlay">
              <div class="modal">
                <a href="#close" class="close">
                  &times;
                </a>
                <div>
                  <h1>MATTS J. 24+ - Merida</h1>
                  <p>
                    No siempre tienen que ser las últimas novedades en
                    bicicletas eléctricas de enduro o de montaña con las que el
                    equipo de MBR disfruta en sus pruebas. A veces puede ser la
                    simplicidad y un diseño bien desarrollado de una bicicleta
                    de montaña para niños lo que les anime a echar un vistazo
                    más de cerca. En este caso, fue la MATTS J. 24+ la que
                    pidieron incluir en su review, y nosotros encantados. Una
                    vez más, a nuestra MATTS J. 24+ no sólo la hicieron una
                    revisión estética, si no que fue puesta a prueba por el hijo
                    de 8 años del editor de la revista, Benjamin Haworth, y a
                    juzgar por las "marcas de batalla" de la bicicleta de
                    prueba, su hijo no se cortó a la hora de descubrir de qué es
                    capaz la MATTS J. 24+. Uno de los detalles clave que se
                    señaló es que nuestra MTB para niños ofrece una combinación
                    perfecta, con un “standover” pensado para ellos, un gran
                    tamaño de las cubiertas y los frenos de disco, que como
                    resultado se traduce en "dar confianza al instante".
                    Recordaros la importancia del “standover”, que no es otra
                    cosa que la altura de la parte central del tubo horizontal
                    al suelo, que en le caso de la MATTS tiene una pequeña curva
                    para bajar la altura del tubo y permitir un mejor manejo de
                    la bici por parte de los niños. Para estaturas más bajas
                    como es el caso de los niños, les permite bajar de la bici
                    más cómodamente, poner los pies en el suelo sin que les
                    moleste el tubo y un mayor control de la bici en curvas y
                    situaciones más complicadas.{' '}
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="style1">
            <span className="image ">
              <img src={bic10} alt="" />
            </span>
            <h2>REACTO 8000 - Merida</h2>
            <h3>$211,000</h3>
            <p>
              <a class="cta" href="#10">
                Saber mas
              </a>
            </p>
            <div id="10" class="modaloverlay">
              <div class="modal">
                <a href="#close" class="close">
                  &times;
                </a>
                <div>
                  <h1>REACTO 8000 - Merida</h1>
                  <p>
                    El cuadro Superlite CF4 está fabricado con fibras de la más
                    alta calidad para conseguir un peso mínimo (versión de disco
                    de aproximadamente 950 g - M / L). Geometría profesional y
                    agresiva con tubos perfilados 'NACA Fastback' y tubo de
                    dirección cónico (1 1/4 ") para conseguir una excelente
                    eficiencia aerodinámica y pedalier BB386 para una
                    transferencia de potencia excepcional. Los frenos de disco
                    poseen la tecnología "Disc Cooler" cuyo objetivo es la
                    liberación rápida de calor para mantener la potencia de
                    frenanda, y el sistema RAT de ejes pasantes.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>

        <h1>Cascos</h1>

        <section className="tiles">
          <article className="style1">
            <span className="image ">
              <img src={cas01} alt="" />
            </span>
            <h2>Align II - Specialized</h2>
            <h3>$12,000</h3>
            <p>
              <a class="cta" href="#c1">
                Saber mas
              </a>
            </p>
            <div id="c1" class="modaloverlay">
              <div class="modal">
                <a href="#close" class="close">
                  &times;
                </a>
                <div>
                  <h1>Align II - Specialized</h1>
                  <p>
                    Protección certificada, estética limpia, cómodo ajuste y
                    precio económico—esto es lo que encontrarás en el Align II.
                    La característica más destacable del Align II es la
                    integración del revolucionario sistema Multi-Directional
                    Impact Protection System (MIPS), un sistema patentado para
                    disminuir las fuerzas rotacionales causadas por los
                    impactos. Además, el Align II se ha convertido en el único
                    casco por debajo de 50 € que ha obtenido la calificación más
                    alta de Cinco Estrellas en las pruebas independientes
                    realizadas en el reconocido Instituto y Universidad
                    Politécnica de Virginia. Cuando incluimos el sistema MIPS lo
                    hicimos sin sacrificar la comodidad del casco—el Align II
                    incluye el sistema de regulación y ajuste de las correas
                    Tri-Fix, sistema de ajuste Headset SX para un ajuste fácil y
                    perfecto, nuestro sistema de ventilación 4th Dimension
                    Cooling System y tres diferentes tallas de carcasa para un
                    ajuste perfecto. Si buscas un casco repleto de funciones sin
                    arruinarte, el Align II es tu casco.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="style1">
            <span className="image ">
              <img src={cas02} alt="" />
            </span>
            <h2>Chamonix 2 - Specialized</h2>
            <h3>$17,500</h3>
            <p>
              <a class="cta" href="#c2">
                Saber mas
              </a>
            </p>
            <div id="c2" class="modaloverlay">
              <div class="modal">
                <a href="#close" class="close">
                  &times;
                </a>
                <div>
                  <h1>Chamonix 2 - Specialized</h1>
                  <p>
                    Características premium, protección certificada y de
                    elegante estilo, hacen del Chamonix el perfecto acompañante
                    para cualquier ciclista. También descubrirás que está
                    equipado con la protección de alto nivel, cortesía de la
                    tecnología revolucionaria MIPS (Sistema de Protección de
                    Impacto Multidireccional).
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="style1">
            <span className="image ">
              <img src={cas03} alt="" />
            </span>
            <h2>CHARGER MTB - Merida</h2>
            <h3>$20,000</h3>
            <p>
              <a class="cta" href="#c3">
                Saber mas
              </a>
            </p>
            <div id="c3" class="modaloverlay">
              <div class="modal">
                <a href="#close" class="close">
                  &times;
                </a>
                <div>
                  <h1>CHARGER MTB - Merida</h1>
                  <p>
                    El diseño de alta calidad In-Mold proporciona una protección
                    óptima, un bajo peso y un alto nivel de confort. El casco de
                    MTB tiene 21 entradas de aire que garantizan una optima
                    refrigeracion de la cabeza en verano. Las almohadillas de
                    forma ergonómica y el sistema de retención MERIDA 2D Micro
                    Dial garantizan un ajuste óptimo de la talla con la máxima
                    comodidad.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="style1">
            <span className="image ">
              <img src={cas04} alt="" />
            </span>
            <h2>SHADOW Junior - Merida</h2>
            <h3>$25,000</h3>
            <p>
              <a class="cta" href="#c4">
                Saber mas
              </a>
            </p>
            <div id="c4" class="modaloverlay">
              <div class="modal">
                <a href="#close" class="close">
                  &times;
                </a>
                <div>
                  <h1>SHADOW Junior - Merida</h1>
                  <p>
                    Las 20 aberturas de aire ofrecen la máxima ventilación. Las
                    correas ajustables y el sistema de retención 2D Micro Dial
                    garantizan un ajuste óptimo y la máxima comodidad. La malla
                    anti insectos integrada en las rejillas de ventilación
                    frontal proporciona protección sin bloquear el aire
                    entrante. La visera se puede quitar para una apariencia más
                    deportiva.{' '}
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="style1">
            <span className="image ">
              <img src={cas05} alt="" />
            </span>
            <h2>Propero III - Specialized</h2>
            <h3>$14,000</h3>
            <p>
              <a class="cta" href="#c5">
                Saber mas
              </a>
            </p>
            <div id="c5" class="modaloverlay">
              <div class="modal">
                <a href="#close" class="close">
                  &times;
                </a>
                <div>
                  <h1>Propero III - Specialized</h1>
                  <p>
                    Este diseño inspirado en las carreras es conocido por su
                    increíble ajuste y su tremendo valor. Tiene muchas
                    características similares al S-Works Prevail, como el
                    sistema de correas Tri-Fix y 4th Dimension Cooling, lo que
                    le otorga al Propero III un rendimiento increíble a un
                    precio más asequible. Cumple con la norma de seguridad de la
                    CPSC de EE.UU. para cascos de bicicleta para personas de 5
                    años o más.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
