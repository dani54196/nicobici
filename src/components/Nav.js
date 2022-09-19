import React from 'react';
import { Link } from 'gatsby';

export default function Nav({ onClose = () => {} }) {
  return (
    <nav id="menu">
      <div className="inner">
        <h2>Menu</h2>
        <ul>
          <li>
            <Link to="/">Bicicletas</Link>
          </li>
          <li>
            <Link to="/Generic">Cascos</Link>
          </li>
          <li>
            <Link to="/Elements">Contacto</Link>
          </li>
        </ul>
      </div>
      <a
        className="close"
        onClick={e => {
          e.preventDefault();
          onClose();
        }}
        href="#menu"
      >
        Close
      </a>
    </nav>
  );
}
