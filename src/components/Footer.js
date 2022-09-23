import React from 'react';
import ContactForm from './ContactForm';
import config from '../../config';
export default function Footer() {
  return (
    <footer id="footer">
      <div className="map">
        <h2>Encontranos en: </h2>
        <p>
          Unit 101157, Courier Point, 13 Freeland Park, Wareham Road, Poole,
          Dorset, BH16 6FH, UK
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2523.9131593584284!2d-2.0767083565660656!3d50.7586438855177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4873af4739b304f7%3A0x89963957abac7301!2sUK%20Postbox%20Limited!5e0!3m2!1sen!2sar!4v1663948288930!5m2!1sen!2sar"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="inner">
        <ContactForm />
  
        <ul className="copyright">
          <li>&copy; Nicobici.</li>
          <li>
            Design: <a href="http://softwareofsouth.xyz">SOS</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
