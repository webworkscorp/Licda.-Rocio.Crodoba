
import React from 'react';

export const Policy: React.FC = () => {
  return (
    <section className="py-24 bg-legalPrimarySoft text-legalDark relative overflow-hidden border-y border-legalPrimary/20">
      {/* Decorative text background - Mantenemos el rosa pastel aquí porque es decorativo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none select-none">
         <span className="font-serif text-[20vw] whitespace-nowrap text-legalSecondary">ETICA • RESPONSABILIDAD</span>
      </div>
      
      <div className="max-w-3xl mx-auto px-8 text-center space-y-8 relative z-10">
        <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-legalSecondary">Protocolo Profesional</span>
        <h3 className="font-serif text-4xl md:text-5xl leading-tight italic text-legalDark">Excelencia garantizada a través del compromiso mutuo.</h3>
        
        <div className="space-y-6 text-xl md:text-2xl font-light text-legalDark leading-relaxed">
          <p>
            La atención se brinda exclusivamente mediante <strong className="text-legalDark border-b-2 border-legalSecondary/30">cita previa</strong>.
          </p>
          <p>
            Cada consulta es un acto profesional que requiere tiempo, análisis y pericia técnica; por lo tanto, <span className="underline underline-offset-8 decoration-legalSecondary/40 font-medium">todos los servicios generan honorarios</span>. No ofrecemos servicios gratuitos.
          </p>
        </div>
        
        <div className="pt-8">
           <div className="w-16 h-[1px] bg-legalSecondary/30 mx-auto"></div>
        </div>
      </div>
    </section>
  );
};
