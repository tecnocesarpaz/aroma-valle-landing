import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section contact" id="contacto">
      <div className="section-inner contact-inner">
        <div className="contact-copy">
          <span className="section-tag">Reserva</span>
          <h2 className="section-heading">Haz tu visita parte del plan.</h2>
          <p className="section-subtitle">
            Te esperamos para compartir un buen café, una conversación bonita y un espacio pensado para desconectar.
          </p>

          <div className="contact-card contact-summary" aria-label="Datos de contacto y reserva">
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
          </div>
        </div>

        <div className="reservation-panel" aria-label="Formulario de reserva de mesa">
          <div className="reservation-header">
            <h3>Reserva tu mesa</h3>
            <span>Tu momento empieza aquí</span>
          </div>

          <form className="reservation-form" onSubmit={handleSubmit}>
            <label>
              Nombre
              <input type="text" name="name" placeholder="Tu nombre" required />
            </label>

            <div className="field-row">
              <label>
                Personas
                <select name="people" defaultValue="2" aria-label="Número de personas">
                  <option value="2">2 personas</option>
                  <option value="3">3 personas</option>
                  <option value="4">4 personas</option>
                  <option value="5">5 personas</option>
                  <option value="6">6 personas</option>
                </select>
              </label>

              <label>
                Fecha
                <input type="date" name="date" required />
              </label>
            </div>

            <label>
              Hora
              <input type="time" name="time" required />
            </label>

            <label>
              Comentarios
              <textarea name="comment" rows="3" placeholder="¿Algo especial?" />
            </label>

            <button type="submit" className="primary-button reservation-button">
              Confirmar reserva
            </button>

            {submitted && (
              <p className="success-message" aria-live="polite">
                ¡Reserva enviada! Te esperamos en Aroma Valle.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
