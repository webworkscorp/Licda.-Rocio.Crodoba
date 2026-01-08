
import React from 'react';

export const Hero: React.FC = () => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center bg-legalNeutral overflow-hidden scroll-mt-24">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-legalPrimarySoft/40 to-transparent z-0"></div>
      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#8B5E5E 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-12 gap-12 items-center relative z-10 pt-32 pb-20">
        <div className="md:col-span-7 lg:col-span-6 space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="h-[1px] w-12 bg-legalSecondary/60"></span>
              <span className="text-legalSecondary uppercase tracking-[0.5em] text-[10px] font-extrabold block">
                Boutique Legal
              </span>
            </div>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-[100px] leading-[0.85] text-legalDark font-light tracking-tight">
              Solidez <br />
              <span className="italic text-legalSecondary font-normal">Jurídica.</span>
            </h1>
          </div>
          
          <div className="max-w-md space-y-10">
            <p className="text-lg md:text-xl text-legalDark/90 font-light leading-relaxed border-l-[1px] border-legalSecondary/30 pl-8">
              Asesoría jurídica especializada en derecho de familia y laboral. Un enfoque donde la <span className="font-medium">estrategia legal</span> se encuentra con el <span className="italic">trato humano</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 items-center pt-4">
              <a 
                href="#contacto" 
                onClick={(e) => handleNav(e, 'contacto')}
                className="bg-legalPrimary text-legalDark px-12 py-5 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-legalSecondary hover:text-white transition-all duration-300 text-center shadow-[0_15px_30px_rgba(232,207,207,0.4)] w-full sm:w-auto"
              >
                Agendar Consulta
              </a>
              <a 
                href="#areas" 
                onClick={(e) => handleNav(e, 'areas')}
                className="group flex items-center gap-3 text-legalSecondary py-4 text-[11px] uppercase tracking-[0.3em] font-bold hover:text-legalDark transition-all duration-300 relative"
              >
                <span>Ver Áreas de Práctica</span>
                <span className="absolute bottom-3 left-0 w-0 h-[1px] bg-legalSecondary transition-all duration-500 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-5 lg:col-span-6 relative mt-16 md:mt-0 flex items-center justify-center">
          <div className="relative w-full max-w-[420px] aspect-[3/4] z-10 shadow-2xl overflow-visible border border-legalPrimary/20">
            <img 
              src="https://i.imgur.com/vmWP0NT.jpeg" 
              alt="Licda. Rocío Córdoba" 
              className="w-full h-full object-cover object-center grayscale-[5%] hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-legalPrimary/5 mix-blend-soft-light pointer-events-none"></div>
            <div className="absolute -bottom-6 -right-6 bg-white py-5 px-10 border border-legalPrimary/30 shadow-xl z-30 min-w-[240px]">
              <span className="font-serif text-2xl text-legalDark block italic leading-tight">Licda. Rocío Córdoba</span>
              <div className="flex items-center gap-3 mt-2">
                <span className="h-[1px] w-4 bg-legalSecondary"></span>
                <span className="text-[8px] uppercase tracking-[0.4em] text-legalSecondary font-extrabold block">Abogada & Notaria</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
