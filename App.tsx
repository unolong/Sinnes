import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Philosophy from './components/Philosophy';
import Workshop from './components/Workshop';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Philosophy />
        <Workshop />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;