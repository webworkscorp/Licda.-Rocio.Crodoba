
import React from 'react';
import { SERVICES } from '../constants.tsx';

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-32 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-legalSecondary font-extrabold">Servicios</h2>
              <h3 className="font-serif text-5xl text-legalDark">Gestión Legal & <br /><span className="italic text-legalSecondary">Notariado</span></h3>
            </div>
            <p className="text-legalDark/90 text-lg font-light leading-relaxed">
              Brindamos seguridad y respaldo en cada etapa de su vida personal o profesional a través de trámites ágiles y con absoluta validez jurídica.
            </p>
            <div className="aspect-square bg-legalNeutral overflow-hidden border border-legalPrimary/20">
               <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1470&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-40" alt="Notariado" />
            </div>
          </div>
          
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-12 lg:gap-20">
            {SERVICES.map((service, index) => (
              <div key={index} className="space-y-6 pb-8 border-b border-legalPrimary/20">
                <h4 className="font-serif text-3xl text-legalDark flex items-center gap-3">
                   <span className="w-2 h-2 rounded-full bg-legalSecondary"></span>
                   {service.title}
                </h4>
                <ul className="space-y-4">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-[15px] text-legalDark/80 font-medium">
                      <span className="text-legalSecondary mt-1.5 shrink-0">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
