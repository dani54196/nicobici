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

import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <header>
          <h1>
            sub titulo
            <br />
          </h1>
          <p>
            Descripcion Descripcion Descripcion Descripcion Descripcion
            Descripcion Descripcion Descripcion Descripcion
          </p>
        </header>
        <section className="tiles">
          <article className="style1">
            <span className="image">
              <img src={bic01} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Rockhopper Elite - Specialized</h2>
              <div className="content">
                <p>Descripcion</p>
              </div>
            </Link>
            <div className="boton">
              <div className="button primary small">$159,000</div>
            </div>
          </article>

          <article className="style1">
            <span className="image">
              <img src={bic02} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Roubaix Sport - Specialized</h2>
              <div className="content">
                <p>descripcion</p>
              </div>
            </Link>
            <div className="boton">
              <div className="button primary small">$250,000</div>
            </div>
          </article>

          <article className="style1">
            <span className="image">
              <img src={bic03} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Diverge Sport Carbon - Specialized</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
            <div className="boton">
              <div className="button primary small">$150,000</div>
            </div>
          </article>
          <article className="style1">
            <span className="image">
              <img src={bic04} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Tarmac SL6 Sport - Specialized</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
            <div className="boton">
              <div className="button primary small">$150,000</div>
            </div>
          </article>
          <article className="style1">
            <span className="image">
              <img src={bic05} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Sirrus X - Specialized</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
            <div className="boton">
              <div className="button primary small">$120,000</div>
            </div>
          </article>
          <article className="style1">
            <span className="image">
              <img src={bic06} alt="" />
            </span>
            <Link to="/Generic">
              <h2>SCULTURA TEAM - Merida</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
            <div className="boton">
              <div className="button primary small">$192,000</div>
            </div>
          </article>
          <article className="style1">
            <span className="image">
              <img src={bic07} alt="" />
            </span>
            <Link to="/Generic">
              <h2>SCULTURA ENDURANCE 9000 - Merida</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
            <div className="boton">
              <div className="button primary small">$267,500</div>
            </div>
          </article>
          <article className="style1">
            <span className="image">
              <img src={bic08} alt="" />
            </span>
            <Link to="/Generic">
              <h2>SPEEDER 200 - Merida</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
            <div className="boton">
              <div className="button primary small">$200,000</div>
            </div>
          </article>
          <article className="style1">
            <span className="image">
              <img src={bic09} alt="" />
            </span>
            <Link to="/Generic">
              <h2>MATTS J. 24+ - Merida</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
            <div className="boton">
              <div className="button primary small">$247,000</div>
            </div>
          </article>
          <article className="style1">
            <span className="image">
              <img src={bic10} alt="" />
            </span>
            <Link to="/Generic">
              <h2>REACTO 8000 - Merida</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
            <div className="boton">
              <div className="button primary small">$211,000</div>
            </div>
          </article>
        </section>

        <section className="tiles">
          <article className="style1">
            <span className="image">
              <img src={cas01} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Align II - Specialized</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
            <div className="boton">
              <div className="button primary small">$12.000</div>
            </div>
          </article>
          <article className="style1">
            <span className="image">
              <img src={cas02} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Chamonix 2 - Specialized</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
            <div className="boton">
              <div className="button primary small">$17,500</div>
            </div>
          </article>
          <article className="style1">
            <span className="image">
              <img src={cas03} alt="" />
            </span>
            <Link to="/Generic">
              <h2>CHARGER MTB - Merida</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
            <div className="boton">
              <div className="button primary small">$20.000</div>
            </div>
          </article>
          <article className="style1">
            <span className="image">
              <img src={cas04} alt="" />
            </span>
            <Link to="/Generic">
              <h2>SHADOW Junior - Merida</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
            <div className="boton">
              <div className="button primary small">$25.000</div>
            </div>
          </article>
          <article className="style1">
            <span className="image">
              <img src={cas05} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Propero III - Specialized</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
            <div className="boton">
              <div className="button primary small">$14.000</div>
            </div>
          </article>
        </section>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
