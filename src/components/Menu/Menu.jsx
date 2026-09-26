import './Menu.css';

const menuItems = [
  {
    name: 'Café de la Casa',
    description: 'Café de especialidad con notas de cacao y caramelo.',
    price: '$12.500',
  },
  {
    name: 'Valluno Latte',
    description: 'Espresso, leche cremosa y espuma artesanal.',
    price: '$14.000',
  },
  {
    name: 'Cold Brew Cali',
    description: 'Enfriado, suave y con un toque cítrico.',
    price: '$13.500',
  },
  {
    name: 'Tostadas de Aguacate',
    description: 'Pan artesanal, aguacate, chile y limón.',
    price: '$16.000',
  },
  {
    name: 'Almuerzo Valle',
    description: 'Proteína del día, arroz y ensalada fresca.',
    price: '$22.000',
  },
  {
    name: 'Pan de yuca con queso',
    description: 'Bocado perfecto para acompañar tu café.',
    price: '$11.000',
  },
];

function Menu() {
  return (
    <section className="section menu" id="menu">
      <div className="section-inner">
        <span className="section-tag">Menú</span>
        <h2 className="section-heading">Sabores que te invitan a quedarte.</h2>
        <p className="section-subtitle">
          Una selección de café, brunch y snacks para cada momento del día.
        </p>

        <div className="menu-grid" aria-label="Menú de Aroma Valle">
          {menuItems.map((item) => (
            <article className="menu-item" key={item.name}>
              <div className="menu-item-top">
                <h3>{item.name}</h3>
                <span>{item.price}</span>
              </div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
