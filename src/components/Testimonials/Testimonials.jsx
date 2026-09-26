import './Testimonials.css';

const testimonials = [
  {
    quote:
      'El ambiente es perfecto para trabajar y conversar. El café sabe increíble y la atención es muy cercana.',
    author: 'Camila R.',
    role: 'Diseñadora',
  },
  {
    quote:
      'Reservé una mesa para salir con amigos y fue super fácil. La experiencia completa se siente muy cuidada.',
    author: 'Daniel T.',
    role: 'Marketing',
  },
  {
    quote:
      'Cada detalle está bien pensado: la música, la luz, el servicio y por supuesto el café. Lo recomiendo mucho.',
    author: 'Sofía M.',
    role: 'Fotógrafa',
  },
];

function Testimonials() {
  return (
    <section className="section testimonials" id="opiniones">
      <div className="section-inner">
        <span className="section-tag">Opiniones</span>
        <h2 className="section-heading">La gente vuelve por la experiencia.</h2>

        <div className="testimonials-grid" aria-label="Testimonios de clientes">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.author}>
              <div className="stars" aria-label="Calificación de cinco estrellas">★★★★★</div>
              <p className="testimonial-quote">“{item.quote}”</p>
              <div className="testimonial-person">
                <strong>{item.author}</strong>
                <span>{item.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
