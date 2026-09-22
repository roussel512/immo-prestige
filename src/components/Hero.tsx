import React from 'react';
import { EyeOff, Coins, ShieldCheck, Shield } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="flex flex-col gap-4 text-left pt-2">
      {/* Geographies Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D2026] subtle-border w-fit shadow-sm">
        <span className="w-2 h-2 rounded-full bg-[#F2CA50] animate-ping"></span>
        <span className="text-[11px] font-semibold text-[#F2CA50] tracking-wider uppercase">
          France · Espagne · Maroc
        </span>
      </div>

      {/* Main Title & Subtitle */}
      <div className="flex flex-col gap-2">
        <h1 className="font-serif text-[28px] sm:text-[34px] leading-tight text-[#E1E2EB]">
          Des villas d'exception,{' '}
          <span className="italic text-[#F2CA50] font-serif font-normal">
            rien que pour vous
          </span>
        </h1>
        <p className="text-sm sm:text-base text-[#D0C5AF] leading-relaxed">
          46 biens avec piscine privée, chacun présenté par sa{' '}
          <strong className="text-[#E1E2EB] font-semibold">vidéo réelle</strong> non
          retouchée. Choisissez la vôtre, vérifiez votre date et réservez en
          quelques minutes.
        </p>
      </div>

      {/* Quick Trust Badges Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
        <div className="flex items-center gap-2.5 bg-[#1D2026] px-3.5 py-2.5 rounded-xl border border-[#4D4635]/40 hover:border-[#D4AF37]/50 transition-colors shadow-sm">
          <EyeOff className="w-4 h-4 text-[#F2CA50] shrink-0" />
          <span className="text-xs sm:text-sm text-[#E1E2EB] font-semibold">
            Tous sans vis-à-vis
          </span>
        </div>

        <div className="flex items-center gap-2.5 bg-[#1D2026] px-3.5 py-2.5 rounded-xl border border-[#4D4635]/40 hover:border-[#D4AF37]/50 transition-colors shadow-sm">
          <Coins className="w-4 h-4 text-[#F2CA50] shrink-0" />
          <span className="text-xs sm:text-sm text-[#E1E2EB] font-semibold">
            Tarifs dès 100 €
          </span>
        </div>

        <div className="flex items-center gap-2.5 bg-[#1D2026] px-3.5 py-2.5 rounded-xl border border-[#4D4635]/40 hover:border-[#D4AF37]/50 transition-colors shadow-sm">
          <ShieldCheck className="w-4 h-4 text-[#F2CA50] shrink-0" />
          <span className="text-xs sm:text-sm text-[#E1E2EB] font-semibold">
            Localisation vérifiée
          </span>
        </div>

        <div className="flex items-center gap-2.5 bg-[#1D2026] px-3.5 py-2.5 rounded-xl border border-[#4D4635]/40 hover:border-[#D4AF37]/50 transition-colors shadow-sm">
          <Shield className="w-4 h-4 text-[#F2CA50] shrink-0" />
          <span className="text-xs sm:text-sm text-[#E1E2EB] font-semibold">
            Acompte garanti
          </span>
        </div>
      </div>
    </section>
  );
};
