
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants.tsx';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      // Calculamos un pequeño offset para el navbar fijo
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: id === 'inicio' ? 0 : offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-legalNeutral/95 backdrop-blur-md py-4 shadow-sm border-b border-legalPrimary/20' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          {/* Logo y Nombre - Ahora con funcionalidad de scroll al inicio */}
          <a 
            href="#inicio" 
            onClick={(e) => scrollToSection(e, '#inicio')}
            className="flex items-center gap-4 group cursor-pointer"
          >
            <img 
              src="https://i.imgur.com/GSAYvkY.png" 
              alt="Logo Licda. Rocío Córdoba" 
              className="h-10 lg:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-serif text-2xl lg:text-3xl tracking-tight leading-none text-legalDark">
                Licda. Rocío Córdoba
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-legalSecondary mt-1.5 font-sans font-bold">
                Abogados & Notarios
              </span>
            </div>
          </a>

          {/* Menú Desktop */}
          <div className="hidden md:flex gap-10 items-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-[11px] uppercase tracking-[0.2em] font-bold text-legalDark/80 hover:text-legalSecondary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={(e) => scrollToSection(e, '#contacto')}
              className="border-2 border-legalSecondary text-legalSecondary px-7 py-2 text-[11px] uppercase tracking-widest font-bold hover:bg-legalSecondary hover:text-white transition-all duration-300"
            >
              Cita Previa
            </a>
          </div>

          {/* Botón Hamburguesa Móvil */}
          <button 
            className="md:hidden text-legalDark p-2 z-[110] focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menú"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
            </svg>
          </button>
        </div>
      </nav>

      {/* Menú Móvil - Corregido para que sea siempre visible y cubra todo el viewport */}
      <div 
        className={`md:hidden fixed inset-0 w-full h-full bg-legalNeutral z-[100] flex flex-col items-center justify-center p-8 gap-8 transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-10'
        }`}
      >
        {/* Botón de cierre superior */}
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-8 right-8 text-legalDark p-2 hover:text-legalSecondary transition-colors"
          aria-label="Cerrar menú"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <img 
          src="https://i.imgur.com/GSAYvkY.png" 
          alt="Logo" 
          className="h-24 w-auto mb-4" 
        />
        <div className="flex flex-col items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-3xl font-serif text-legalDark hover:text-legalSecondary transition-colors"
              onClick={(e) => scrollToSection(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col items-center gap-6 mt-4">
          <a
            href="#contacto"
            className="border-2 border-legalSecondary text-legalSecondary px-12 py-4 text-sm uppercase tracking-widest font-bold hover:bg-legalSecondary hover:text-white transition-all"
            onClick={(e) => scrollToSection(e, '#contacto')}
          >
            Agendar Cita
          </a>
          
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-[10px] uppercase tracking-[0.4em] text-legalMuted hover:text-legalSecondary font-bold transition-colors"
          >
            — Regresar —
          </button>
        </div>
      </div>
    </>
  );
};
