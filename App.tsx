
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PracticeAreas } from './components/PracticeAreas';
import { Services } from './components/Services';
import { Policy } from './components/Policy';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-legalSecondary/30 selection:text-legalAccent">
      <Navbar />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Services />
        <Policy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
