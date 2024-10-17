import React from 'react';
import BackgroundAnimation from './components/BackgroundAnimation';
import './css/style.css';
import './App.css';
import LenisScroll from './components/lenisScroll';
import Header from './components/header';
import Hero from './components/hero';
import B2b from './components/b2b';
import Saaslandscape from './components/saas-landscape';
import Services from './components/services';
import Slider from './components/slider';
import Clients from './components/clients';
import Footer from './components/footer';

function App() {
  return (
    <>
      <BackgroundAnimation />
      <LenisScroll>
        <Header />
        <Hero />
        <B2b />
        <Saaslandscape />
        <Services />
        <Slider />
        <Clients />
        <Footer />
      </LenisScroll>
    </>
  );
}

export default App;
