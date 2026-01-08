
import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { PracticeAreas } from './components/PracticeAreas.tsx';
import { Services } from './components/Services.tsx';
import { Policy } from './components/Policy.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';

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