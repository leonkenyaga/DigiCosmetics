import './App.css';
import Banner2 from './components/Banner/Banner2';
import Header2 from './components/Header/Header2';
import Hero from './components/Hero/Hero';
import Slider from './components/Slider/Slider';
import Virtual from './components/Virtual/Virtual';
import Products from './components/Products/Products';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Banner2 />
      <Header2 />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
