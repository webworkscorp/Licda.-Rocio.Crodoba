
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-32 bg-white relative overflow-hidden scroll-mt-28">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-4 border border-legalPrimarySoft z-0"></div>
              <img 
                src="https://i.imgur.com/DVMVnXV.jpeg" 
                alt="Narrativa de Confianza" 
                className="w-full aspect-[4/5] object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-1000 shadow-xl"
              />
            </div>
          </div>
          
          <div className="md:col-span-7 space-y-10 order-1 md:order-2">
            <div className="space-y-4">
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-legalSecondary font-extrabold">Narrativa de Confianza</h2>
              <h3 className="font-serif text-5xl md:text-6xl text-legalDark leading-tight">Cada situación legal requiere análisis, estrategia y <span className="italic text-legalSecondary">acompañamiento humano.</span></h3>
            </div>
            
            <div className="space-y-6 text-lg text-legalDark font-light leading-relaxed max-w-2xl">
              <p>
                Nuestro despacho boutique trabaja con responsabilidad, claridad y compromiso profesional en cada caso. Entendemos que el derecho no es solo una cuestión de leyes, sino de personas buscando seguridad en momentos de incertidumbre.
              </p>
              <p>
                Nos especializamos en la protección de sus intereses más valiosos. Desde la resolución de conflictos familiares hasta la gestión de deudas y trámites notariales, cada paso se toma con una visión estratégica diseñada para su tranquilidad.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 pt-8 border-t border-legalPrimary/30">
              <div className="space-y-2">
                <span className="block font-serif text-3xl text-legalSecondary font-medium">Ética</span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-legalDark font-extrabold">Innegociable</span>
              </div>
              <div className="space-y-2">
                <span className="block font-serif text-3xl text-legalSecondary font-medium">Estrategia</span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-legalDark font-extrabold">Preventiva</span>
              </div>
              <div className="space-y-2">
                <span className="block font-serif text-3xl text-legalSecondary font-medium">Cercanía</span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-legalDark font-extrabold">Personalizada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
