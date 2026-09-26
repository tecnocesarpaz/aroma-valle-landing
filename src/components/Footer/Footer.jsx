import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="section-inner footer-inner">
        <div className="footer-brand">
          <div className="brand" aria-label="Aroma Valle">
            <span className="brand-mark">☕</span>
            <span>Aroma Valle</span>
          </div>
          <p>Café de especialidad para momentos que merecen pausa.</p>
        </div>

        <div className="footer-links" aria-label="Enlaces del footer">
          <a href="#beneficios">Beneficios</a>
          <a href="#menu">Menú</a>
          <a href="#opiniones">Opiniones</a>
          <a href="#contacto">Contacto</a>
        </div>

        <div className="footer-meta">
          <p>📍 Cali, Colombia</p>
          <p>📞 +57 315 456 7890</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
