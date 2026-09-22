import React from 'react';
import { MessageSquare, PhoneCall } from 'lucide-react';

export const ConciergeBanner: React.FC = () => {
  return (
    <section className="p-5 rounded-2xl bg-[#0F172A] border border-[#25D366]/35 flex flex-col gap-3.5 relative overflow-hidden shadow-2xl">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0 border border-[#25D366]/40 shadow-inner">
          <MessageSquare className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-serif text-lg sm:text-xl text-[#E1E2EB] font-bold">
            Une question ou une visite ?
          </h3>
          <p className="text-xs text-[#25D366] font-semibold mt-0.5 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping"></span>
            Réponse instantanée en moins de 10 min sur WhatsApp
          </p>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-[#D0C5AF] leading-relaxed">
        Nous pouvons organiser une visite du bien avant toute transaction. Écrivez
        en direct à notre équipe 7j/7 au{' '}
        <strong className="text-white font-bold tracking-wider">
          +33 6 73 54 84 50
        </strong>
        .
      </p>

      <div className="flex flex-col sm:flex-row gap-2 pt-1">
        <a
          href="https://wa.me/33673548450?text=Bonjour%20la%20Conciergerie%20Immo%20Prestige,%20je%20souhaite%20planifier%20une%20visite%20ou%20poser%20une%20question"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-center text-xs sm:text-sm active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-[#25D366]/25"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>Écrire à la Conciergerie WhatsApp</span>
        </a>

        <a
          href="tel:+33673548450"
          className="py-3 px-4 rounded-xl bg-[#1D2026] text-[#E1E2EB] hover:text-[#F2CA50] border border-white/10 text-center text-xs sm:text-sm font-semibold active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Appeler</span>
        </a>
      </div>
    </section>
  );
};
