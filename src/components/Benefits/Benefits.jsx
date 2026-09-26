import './Benefits.css';

const benefits = [
  {
    icon: '☕',
    title: 'Café de origen cuidado',
    description:
      'Trabajamos con perfiles complejos, tostados con precisión y preparación impecable.',
  },
  {
    icon: '🌿',
    title: 'Ambiente pensado para conversar',
    description:
      'Espacios cálidos, música suave y luz amable para disfrutar en compañía.',
  },
  {
    icon: '⏱️',
    title: 'Reservas rápidas y fáciles',
    description:
      'Planea tu visita sin complicaciones y llega con la experiencia lista desde el primer minuto.',
  },
];

function Benefits() {
  return (
    <section className="section benefits" id="beneficios">
      <div className="section-inner">
        <span className="section-tag">¿Por qué elegirnos?</span>
        <h2 className="section-heading">Una experiencia que vale la pena repetir.</h2>
        <p className="section-subtitle">
          Diseñamos cada visita para que te quedes un rato más, disfrutes el momento y vuelvas por más.
        </p>

        <div className="benefits-grid" aria-label="Beneficios de Aroma Valle">
          {benefits.map((benefit) => (
            <article className="benefit-card" key={benefit.title}>
              <div className="benefit-icon" aria-hidden="true">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
