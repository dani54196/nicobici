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
                    telesc??pica. Con el objetivo de asegurar de que Rockhopper
                    ofrezca el mejor ajuste y el mejor rendimiento para cada
                    persona, sin importar su medida, han emparejado cada tama??o
                    de cuadro Rockhopper con el tama??o de rueda ??ptimo. El
                    resultado es una Rockhopper que se adapta a cada ciclista.
                    *La horquilla Judy SoloAir de RockShox ofrece sensibilidad y
                    rendimiento con suspensi??n neum??tica a las masas. El
                    amortiguador TurnKey reparte h??bilmente el recorrido
                    permiti??ndote concentrarte en lo que viene.
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
                    Con seis victorias en la Par??s-Roubaix, la Roubaix ha
                    comprobado que M??s Suave es M??s R??pido. Hasta ahora, sin
                    embargo, admitimos que lo suave ha venido con algunas
                    concesiones. Pero ya no. La nueva Roubaix Sport ahora ofrece
                    elasticidad sin concesiones al incluir el nuevo y radical
                    Future Shock 1.5 que te da m??s control sobre rutas con
                    baches, adem??s de un nuevo poste de asiento Pav??, para crear
                    la Roubaix m??s equilibrada que hayamos hecho, con
                    aerodin??mica que iguala a la Tarmac y un cuadro Rider-First
                    Engineered con peso realmente reducido. ??Sigue siendo
                    c??moda? Por supuesto, pero no dir??amos que es una bici de
                    confort, el foco de cada decisi??n de ingenier??a que tomamos
                    fue el rendimiento. Esta es la nueva Roubaix. Esta Roubaix
                    Sport ofrece una espectacular relaci??n calidad-precio, pero
                    al igual que el cuadro, lo hace sin concesiones. En sus
                    especificaciones incluimos el grupo 105 de 11 velocidades de
                    Shimano para obtener cambios precisos y poderosos frenos de
                    disco hidr??ulicos SRAM, as?? como ruedas DT R470 Disc
                    confiables y fuertes, el flamante poste de asiento S-Works
                    Pav??, llantas Turbo Pro de 28mm y nuestro popular asiento
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
                    una bicicleta de carreras incre??blemente capaz y liviana.
                    An??talo para tu KOM de escalada de tierra local, o escala un
                    pico gigante en el campo, el Diverge ligero y animado te
                    llevar?? all?? m??s r??pido. Velocidad, control y confianza
                    Future Shock 1.5 es la tecnolog??a ideal para el ciclista de
                    gravel. Con 20 mm de elasticidad axial, Future Shock 1.5 se
                    ajusta progresivamente espec??ficamente para la conducci??n en
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
                    Cuando desarrollamos la Tarmac, no solo quer??amos que fuera
                    r??pida. Quer??amos que fuera r??pido en todas partes. Largas
                    subidas, llanos ventosos, etapas de Grand Tour, fondos
                    locales: construimos una bicicleta de carrera para ser la
                    m??s completa que existe. ??C??mo lo hicimos? Comenzamos con
                    nuestro cuadro Rider-First Engineered??? con una calidad de
                    conducci??n perfectamente ajustada para cada tama??o,
                    agregamos una tecnolog??a aerodin??mica seria que lo hace 30
                    segundos m??s r??pido que el Tarmac SL5 en 40 kil??metros, y
                    luego lo hicimos un 20% m??s liviano. Nada es m??s ligero, m??s
                    r??pido y mejor manejo. Esta Tarmac viene con una
                    especificaci??n confiable que incluye cambios mec??nicos
                    Shimano Tiagra de 10 velocidades, frenos de disco
                    hidr??ulicos de parada r??pida, ruedas duraderas Axis Sport
                    Disc y nuestro sill??n Power favorito de los fan??ticos.
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
                    Sirrus X es tu boleto para montar m??s y para lugares que
                    nunca imaginaste posibles. Es un tipo de bicicleta c??moda,
                    capaz, "vamos a hacer cosas" que te inspirar?? a montar m??s
                    que nunca. Con llantas m??s grandes que inspiran confianza,
                    una posici??n de conducci??n un poco m??s erguida, una
                    transmisi??n de uno en uno s??per intuitiva y muchos soportes
                    para portabultos y guardabarros, es m??s que un compa??ero
                    s??lido en el pavimento. Sirrus X es una opci??n marcada
                    cuando es hora de golpear un poco de grava. Tambi??n hemos
                    equipado cada Sirrus X con comodidad de nivel superior
                    gracias a nuestro sill??n, pu??os y pedales Shared Platform
                    Body Geometry cient??ficamente probados y dise??ados
                    ergon??micamente.{' '}
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
                    comodidad a la bicicleta aerodin??mica REACTO. Si bien la
                    nueva SCULTURA ha aprendido mucho de la REACTO en t??rminos
                    de aerodin??mica, hemos hecho un esfuerzo adicional para
                    reducir el peso a??n m??s y convertirla en la bicicleta de
                    carreras de carretera pura m??s c??moda de nuestra historia.
                    Equipada con componentes de gama alta de Shimano, Vision,
                    Continental y MERIDA, la TEAM es la bicicleta perfecta
                    cuando la comodidad, el peso y la aceleraci??n ultrarr??pida
                    son esenciales para tu pr??xima sesi??n de carretera. Como
                    novedad para 2022, nos complace presentar la quinta
                    generaci??n de nuestra bicicleta de carretera. Si bien
                    incorporamos detalles aerodin??micos seleccionados de nuestra
                    galardonada bicicleta aerodin??mica REACTO, la nueva SCULTURA
                    es la m??s aerodin??mica de la historia. Sin embargo, sigue
                    siendo fiel a su enfoque ligero que prioriza la agilidad y
                    comodidad del ciclista. De hecho, lleva estos factores al
                    siguiente nivel. La nueva SCULTURA demuestra un cumplimiento
                    sobresaliente, proporcionando al ciclista una comodidad de
                    conducci??n l??der en su clase que ayudar?? a mantener el
                    cuerpo fresco para el sprint final. Las nuevas versiones de
                    carbono CF5 y CF3 comparten su geometr??a con nuestra REACTO
                    que tantos hitos ha logrado con el Team Bahrain Victorious.
                    Disponible en carbono y aluminio y con opci??n de freno de
                    disco o de llanta, nuestra bicicleta de carretera cl??sica
                    combina una comodidad excepcional con una aceleraci??n y un
                    pedigr?? de escalada l??der en su clase.
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
                    el que solo los ??ltimos equipos de Shimano, Reynolds y
                    Continental son lo suficientemente buenos. El cuadro de
                    carbono de la 9000 ofrece un rendimiento l??der en su clase
                    que, combinado con los neum??ticos de hasta 35 mm de ancho,
                    proporciona la m??xima comodidad de conducci??n, incluso en
                    las salidas m??s prolongadas. La tecnolog??a de integraci??n de
                    cables WIRE PORT mantiene limpia la cabina y reduce la
                    resistencia del aire alrededor de la parte delantera de la
                    bicicleta. Lanzada en 2021, nuestra SCULTURA ENDURANCE
                    consigui?? un ??xito instant??neo entre la prensa ciclista
                    internacional. Adem??s de recibir un premio de 'comodidad' de
                    RennRad, tambi??n logr?? obtener una larga lista de elogios
                    como 'excelente comodidad', 'inspirador de confianza',
                    'sensaci??n viva' y 'agradable' por sitios web / revistas de
                    ciclismo de referencia como Gran Fondo, Cyclingnews,
                    Cyclingtips y Road.cc. En comparaci??n con su hom??nimo, el
                    SCULTURA, el ENDURANCE tiene una geometr??a m??s relajada,
                    mucho espacio libre para los neum??ticos y una perfecta
                    integraci??n de los ??ltimos componentes. Firmemente
                    establecida en la l??nea de carreteras MERIDA, la SCULTURA
                    ENDURANCE encuentra su lugar entre la SCULTURA por un lado y
                    la SILEX por el otro. Los neum??ticos anchos son una garant??a
                    incluso en los caminos bacheados, mientras que un tubo de
                    direcci??n m??s largo proporciona una posici??n de conducci??n
                    m??s relajada. ??La SCULTURA ENDURANCE es la elecci??n perfecta
                    para los ciclistas que quieren disfrutar de largas horas en
                    el sill??n mientras se sienten c??modos y relajados en la
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
                    El cuadro SPEEDER se ha vuelto a??n m??s deportivo. Al
                    aumentar la longitud del tubo superior, hemos logrado un
                    "reach" un poco m??s largo que ofrece al piloto una posici??n
                    de conducci??n m??s deportiva sin dejar de ser c??modo. Adem??s,
                    este cambio de geometr??a permite una distancia entre ejes
                    m??s larga, que tiene un efecto positivo en la estabilidad y,
                    en combinaci??n con el ??ngulo del tubo de direcci??n
                    ligeramente m??s suave, mejora la estabilidad de conducci??n a
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
                    No siempre tienen que ser las ??ltimas novedades en
                    bicicletas el??ctricas de enduro o de monta??a con las que el
                    equipo de MBR disfruta en sus pruebas. A veces puede ser la
                    simplicidad y un dise??o bien desarrollado de una bicicleta
                    de monta??a para ni??os lo que les anime a echar un vistazo
                    m??s de cerca. En este caso, fue la MATTS J. 24+ la que
                    pidieron incluir en su review, y nosotros encantados. Una
                    vez m??s, a nuestra MATTS J. 24+ no s??lo la hicieron una
                    revisi??n est??tica, si no que fue puesta a prueba por el hijo
                    de 8 a??os del editor de la revista, Benjamin Haworth, y a
                    juzgar por las "marcas de batalla" de la bicicleta de
                    prueba, su hijo no se cort?? a la hora de descubrir de qu?? es
                    capaz la MATTS J. 24+. Uno de los detalles clave que se
                    se??al?? es que nuestra MTB para ni??os ofrece una combinaci??n
                    perfecta, con un ???standover??? pensado para ellos, un gran
                    tama??o de las cubiertas y los frenos de disco, que como
                    resultado se traduce en "dar confianza al instante".
                    Recordaros la importancia del ???standover???, que no es otra
                    cosa que la altura de la parte central del tubo horizontal
                    al suelo, que en le caso de la MATTS tiene una peque??a curva
                    para bajar la altura del tubo y permitir un mejor manejo de
                    la bici por parte de los ni??os. Para estaturas m??s bajas
                    como es el caso de los ni??os, les permite bajar de la bici
                    m??s c??modamente, poner los pies en el suelo sin que les
                    moleste el tubo y un mayor control de la bici en curvas y
                    situaciones m??s complicadas.{' '}
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
                    El cuadro Superlite CF4 est?? fabricado con fibras de la m??s
                    alta calidad para conseguir un peso m??nimo (versi??n de disco
                    de aproximadamente 950 g - M / L). Geometr??a profesional y
                    agresiva con tubos perfilados 'NACA Fastback' y tubo de
                    direcci??n c??nico (1 1/4 ") para conseguir una excelente
                    eficiencia aerodin??mica y pedalier BB386 para una
                    transferencia de potencia excepcional. Los frenos de disco
                    poseen la tecnolog??a "Disc Cooler" cuyo objetivo es la
                    liberaci??n r??pida de calor para mantener la potencia de
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
                    Protecci??n certificada, est??tica limpia, c??modo ajuste y
                    precio econ??mico???esto es lo que encontrar??s en el Align II.
                    La caracter??stica m??s destacable del Align II es la
                    integraci??n del revolucionario sistema Multi-Directional
                    Impact Protection System (MIPS), un sistema patentado para
                    disminuir las fuerzas rotacionales causadas por los
                    impactos. Adem??s, el Align II se ha convertido en el ??nico
                    casco por debajo de 50 ??? que ha obtenido la calificaci??n m??s
                    alta de Cinco Estrellas en las pruebas independientes
                    realizadas en el reconocido Instituto y Universidad
                    Polit??cnica de Virginia. Cuando incluimos el sistema MIPS lo
                    hicimos sin sacrificar la comodidad del casco???el Align II
                    incluye el sistema de regulaci??n y ajuste de las correas
                    Tri-Fix, sistema de ajuste Headset SX para un ajuste f??cil y
                    perfecto, nuestro sistema de ventilaci??n 4th Dimension
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
                    Caracter??sticas premium, protecci??n certificada y de
                    elegante estilo, hacen del Chamonix el perfecto acompa??ante
                    para cualquier ciclista. Tambi??n descubrir??s que est??
                    equipado con la protecci??n de alto nivel, cortes??a de la
                    tecnolog??a revolucionaria MIPS (Sistema de Protecci??n de
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
                    El dise??o de alta calidad In-Mold proporciona una protecci??n
                    ??ptima, un bajo peso y un alto nivel de confort. El casco de
                    MTB tiene 21 entradas de aire que garantizan una optima
                    refrigeracion de la cabeza en verano. Las almohadillas de
                    forma ergon??mica y el sistema de retenci??n MERIDA 2D Micro
                    Dial garantizan un ajuste ??ptimo de la talla con la m??xima
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
                    Las 20 aberturas de aire ofrecen la m??xima ventilaci??n. Las
                    correas ajustables y el sistema de retenci??n 2D Micro Dial
                    garantizan un ajuste ??ptimo y la m??xima comodidad. La malla
                    anti insectos integrada en las rejillas de ventilaci??n
                    frontal proporciona protecci??n sin bloquear el aire
                    entrante. La visera se puede quitar para una apariencia m??s
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
                    Este dise??o inspirado en las carreras es conocido por su
                    incre??ble ajuste y su tremendo valor. Tiene muchas
                    caracter??sticas similares al S-Works Prevail, como el
                    sistema de correas Tri-Fix y 4th Dimension Cooling, lo que
                    le otorga al Propero III un rendimiento incre??ble a un
                    precio m??s asequible. Cumple con la norma de seguridad de la
                    CPSC de EE.UU. para cascos de bicicleta para personas de 5
                    a??os o m??s.
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
