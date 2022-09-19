import React from 'react';
export default function ContactForm() {
  return (
    <section>
      <h2>Contactanos</h2>
      <form method="post" action="#">
        <div className="fields">
          <div className="field half">
            <input type="text" name="name" id="name" placeholder="Nombre" />
          </div>
          <div className="field half">
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div className="field">
            <textarea name="message" id="message" placeholder="Mensaje" />
          </div>
        </div>
        <ul className="actions">
          <li>
            <input type="submit" value="Enviar" className="primary" />
          </li>
        </ul>
      </form>
    </section>
  );
}
