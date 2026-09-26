import './Hero.css';

function Hero() {
  return (
    <header className="hero">
      <div className="hero-inner">
        <nav className="topbar" aria-label="Navegación principal">
          <div className="brand" aria-label="Aroma Valle home">
            <span className="brand-mark">☕</span>
            <span>Aroma Valle</span>
          </div>

          <div className="nav-links" aria-label="Enlaces de navegación">
            <a href="#beneficios">Beneficios</a>
            <a href="#menu">Menú</a>
            <a href="#opiniones">Opiniones</a>
            <a href="#contacto">Contacto</a>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-copy">
            <span className="eyebrow">Café de especialidad en Cali</span>
            <h1>Tu momento favorito empieza con un café bien servido.</h1>
            <p>
              Aroma Valle combina sabores de origen, ambiente cálido y una experiencia
              hecha para detenerte, conversar y volver.
            </p>

            <div className="hero-actions">
              <a href="#contacto" className="primary-button">
                Reserva tu mesa
              </a>
              <a href="#menu" className="secondary-button">
                Ver menú
              </a>
            </div>

            <ul className="hero-stats" aria-label="Estadísticas de Aroma Valle">
              <li>
                <strong>4.9/5</strong>
                <span>valoración</span>
              </li>
              <li>
                <strong>12+</strong>
                <span>cafés de origen</span>
              </li>
              <li>
                <strong>7am-9pm</strong>
                <span>atención</span>
              </li>
            </ul>
          </div>

          <div className="hero-card" aria-label="Resumen de la experiencia Aroma Valle">
            <div className="card-badge">Hoy en casa</div>
            <div className="card-visual">
              <div className="cup-symbol">☕</div>
            </div>
            <div className="card-bottom">
              <div>
                <p className="card-label">Especial del día</p>
                <h2>Valluno Latte</h2>
              </div>
              <span className="card-price">$14.000</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
