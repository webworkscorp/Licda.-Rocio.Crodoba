
import React from 'react';
import { PRACTICE_AREAS } from '../constants.tsx';

export const PracticeAreas: React.FC = () => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="areas" className="py-32 bg-legalNeutral scroll-mt-28">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl space-y-6">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-legalSecondary font-extrabold">Áreas</h2>
            <h3 className="font-serif text-5xl md:text-6xl text-legalDark leading-tight">Áreas de <br /><span className="italic text-legalSecondary">Práctica Especializada</span></h3>
          </div>
          <p className="text-legalDark/80 text-lg max-w-sm italic font-light">
            Soluciones jurídicas sólidas para los desafíos más complejos de la vida civil, laboral y familiar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {PRACTICE_AREAS.map((area, index) => (
            <div key={index} className="group space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-legalMuted font-serif text-4xl italic group-hover:text-legalSecondary transition-colors duration-500">0{index + 1}</span>
                <div className="h-[1px] flex-grow bg-legalPrimary group-hover:bg-legalSecondary transition-all duration-700"></div>
              </div>
              <h4 className="font-serif text-3xl text-legalDark group-hover:translate-x-2 transition-transform duration-500">{area.title}</h4>
              <p className="text-base text-legalDark/90 leading-relaxed font-normal">{area.description}</p>
              <a href="#contacto" onClick={handleNav} className="inline-block text-[10px] uppercase tracking-widest font-bold text-legalSecondary border-b-2 border-legalPrimary hover:border-legalSecondary transition-all">
                Más información
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
