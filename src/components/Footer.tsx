import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-8 pb-12 border-t border-[#4D4635]/40 flex flex-col gap-4 text-center text-xs text-[#D0C5AF]">
      <div className="flex items-center justify-center gap-2">
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#F2CA50] to-[#896C00] p-[1px]">
          <div className="w-full h-full rounded-full bg-[#0B0E14] flex items-center justify-center">
            <span className="font-serif text-[#F2CA50] font-bold text-xs">IP</span>
          </div>
        </div>
        <span className="font-serif text-base font-bold text-[#F2CA50]">
          Immo Prestige
        </span>
      </div>

      <p className="max-w-xs sm:max-w-md mx-auto text-[11px] leading-relaxed text-[#D0C5AF]">
        Location exclusive de villas d'exception avec piscine privée, 100% sans
        vis-à-vis en France, Espagne, Maroc et Antilles.
      </p>

      <div className="flex justify-center gap-4 text-[11px] text-[#D0C5AF]/80 flex-wrap">
        <a href="#conditions" className="hover:text-[#F2CA50] transition-colors">
          Conditions générales
        </a>
        <span>·</span>
        <a href="#confidentialite" className="hover:text-[#F2CA50] transition-colors">
          Confidentialité
        </a>
        <span>·</span>
        <a href="#mentions" className="hover:text-[#F2CA50] transition-colors">
          Mentions légales
        </a>
      </div>

      <p className="text-[10px] text-[#D0C5AF]/60">
        © 2026 Immo Prestige. Tous droits réservés. L'excellence à votre service.
      </p>
    </footer>
  );
};
