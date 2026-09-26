import './App.css';
import Hero from './components/Hero/Hero';
import Benefits from './components/Benefits/Benefits';
import Menu from './components/Menu/Menu';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app-shell">
      <Hero />
      <Benefits />
      <Menu />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
