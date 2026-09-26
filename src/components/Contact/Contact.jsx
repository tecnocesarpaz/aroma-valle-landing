import './Contact.css';

function Contact() {
  return (
    <section className="section contact" id="contacto">
      <div className="section-inner contact-inner">
        <div className="contact-copy">
          <span className="section-tag">Reserva</span>
          <h2 className="section-heading">Haz tu visita parte del plan.</h2>
          <p className="section-subtitle">
            Te esperamos para compartir un buen café, una conversación bonita y un espacio pensado para desconectar.
          </p>
        </div>

        <div className="contact-card" aria-label="Datos de contacto y reserva">
          <div className="contact-item">
            <span className="contact-icon" aria-hidden="true">📍</span>
            <div>
              <h3>Dirección</h3>
              <p>Calle 5 # 12-40, El Peñón, Cali</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon" aria-hidden="true">🕒</span>
            <div>
              <h3>Horario</h3>
              <p>Lun - Dom: 7:00am - 9:00pm</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon" aria-hidden="true">📞</span>
            <div>
              <h3>Contacto</h3>
              <p>+57 315 456 7890</p>
            </div>
          </div>

          <a href="tel:+573154567890" className="primary-button contact-button">
            Reserva tu mesa
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
