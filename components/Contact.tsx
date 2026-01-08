
import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) {
      alert("Por favor complete su nombre y el detalle de la consulta.");
      return;
    }

    const phone = "50685253636";
    const text = `*Consulta Legal - Sitio Web*\n\n*Nombre:* ${name}\n*Detalle:* ${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phone}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contacto" className="py-32 bg-legalNeutral scroll-mt-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-legalSecondary font-bold">Contacto</h2>
            <h3 className="font-serif text-5xl md:text-6xl text-legalDark">Agende una <br className="hidden md:block" /><span className="italic">Consulta Profesional</span></h3>
            <p className="text-legalDark/70 text-lg font-light leading-relaxed max-w-xl mx-auto md:mx-0">
              Estamos listos para analizar su caso con la profundidad y el compromiso que requiere. Complete el formulario para iniciar su proceso legal.
            </p>
          </div>

          <div className="bg-white p-10 md:p-16 shadow-[0_20px_50px_rgba(232,207,207,0.2)] relative border border-legalMuted/30">
            <div className="absolute top-0 right-0 w-24 h-24 bg-legalPrimarySoft/30 -z-0"></div>
            
            <form className="relative z-10 space-y-10" onSubmit={handleWhatsAppSubmit}>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest font-bold text-legalDark">Nombre</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border-b border-legalMuted focus:border-legalSecondary outline-none py-2 transition-all font-light placeholder:text-gray-300" 
                  placeholder="Su nombre completo" 
                  required
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest font-bold text-legalDark">Detalle de la consulta</label>
                <textarea 
                  rows={4} 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-transparent border-b border-legalMuted focus:border-legalSecondary outline-none py-2 transition-all font-light placeholder:text-gray-300" 
                  placeholder="Describa brevemente su requerimiento legal..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="bg-legalPrimary text-legalDark w-full py-5 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-legalSecondary hover:text-white transition-all duration-300 shadow-lg shadow-legalPrimary/40"
              >
                Solicitar Cita Previa
              </button>
              
              <p className="text-[10px] text-center text-legalDark/40 italic font-light">
                Toda la información suministrada es tratada bajo estricto secreto profesional.
              </p>
            </form>
          </div>

          <div className="grid md:grid-cols-3 gap-12 pt-16 border-t border-legalPrimary/30">
            <div className="space-y-3">
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-legalSecondary">Comunicación Directa</h4>
              <p className="text-lg text-legalDark font-light">8526-3636 / 2293-5351</p>
              <p className="text-legalDark/60 font-light text-sm">rociocordoba2005@icloud.com</p>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-legalSecondary">Sede Principal</h4>
              <p className="text-legalDark/70 text-base font-light leading-relaxed">
                San Antonio de Belén, <br />
                Heredia, Costa Rica.
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-legalSecondary">Disponibilidad</h4>
              <p className="text-legalDark/70 text-base font-light leading-relaxed">
                Lunes a Viernes <br />
                9:00 AM — 6:00 PM (Cita previa)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
