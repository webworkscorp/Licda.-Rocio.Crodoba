
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-legalPrimary/20 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="flex flex-col items-center text-center">
            <img 
              src="https://i.imgur.com/GSAYvkY.png" 
              alt="Logo Licda. Rocío Córdoba" 
              className="h-20 w-auto mb-6 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
            <span className="font-serif text-3xl text-legalDark tracking-wide">
              Licda. Rocío Córdoba
            </span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-legalSecondary mt-3 font-bold">
              Boutique Legal & Notarial
            </span>
          </div>
          
          {/* Redes Sociales */}
          <div className="flex gap-8 items-center pt-2">
            <a 
              href="https://www.instagram.com/servicios.legalescr?igsh=MXZldjk3dWc2ODAwcw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-legalPrimary hover:text-legalSecondary transition-all duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a 
              href="https://www.tiktok.com/@servicioslegalescr?_r=1&_t=ZM-92uIjrkuAcS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-legalPrimary hover:text-legalSecondary transition-all duration-300 transform hover:scale-110"
              aria-label="TikTok"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
              </svg>
            </a>
          </div>

          <div className="w-12 h-[1px] bg-legalPrimary/40"></div>
          
          <div className="text-[9px] uppercase tracking-[0.3em] text-legalMuted font-medium opacity-60">
            © {new Date().getFullYear()} Rocío Córdoba. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};
