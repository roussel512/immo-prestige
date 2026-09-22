import React, { useState } from 'react';
import { ShieldCheck, CalendarX, RotateCcw, Calculator } from 'lucide-react';

export const DepositSection: React.FC = () => {
  const [testDays, setTestDays] = useState(3);
  const [testRate, setTestRate] = useState(170);

  const totalCost = testDays * testRate;
  const depositAmount = testDays <= 2 ? 75 : Math.round(totalCost * 0.3);
  const balanceAmount = totalCost - depositAmount;

  return (
    <section className="flex flex-col gap-4 p-5 rounded-2xl bg-[#191C22] subtle-border shadow-xl">
      {/* Transparence Tag */}
      <div className="flex items-center gap-2">
        <span className="px-2.5 py-0.5 rounded-full bg-[#F2CA50]/15 text-[#F2CA50] text-[10px] uppercase font-bold tracking-wider border border-[#D4AF37]/30">
          Transparence
        </span>
      </div>

      {/* Section Title */}
      <h2 className="font-serif text-xl sm:text-2xl text-[#E1E2EB] font-bold">
        L'acompte, et ce qu'il vous garantit
      </h2>

      <p className="text-xs sm:text-sm text-[#D0C5AF] leading-relaxed">
        Verser des arrhes à distance peut susciter des doutes. Chez Immo
        Prestige, l'acompte{' '}
        <strong className="text-[#E1E2EB] font-semibold">n'est jamais un supplément</strong> :
        il est rigoureusement déduit de la facture totale.
      </p>

      {/* Comparison Box */}
      <div className="p-4 rounded-xl bg-[#10131A] subtle-border flex flex-col gap-3">
        <div className="flex items-center justify-between border-b border-[#4D4635]/40 pb-3">
          <div>
            <span className="text-[11px] text-[#D0C5AF] uppercase font-semibold">
              1 à 2 jours
            </span>
            <div className="font-serif text-xl sm:text-2xl text-[#F2CA50] font-bold">
              75 € fixes
            </div>
          </div>
          <div className="text-right">
            <span className="text-[11px] text-[#D0C5AF] uppercase font-semibold">
              Dès 3 jours
            </span>
            <div className="font-serif text-xl sm:text-2xl text-[#F2CA50] font-bold">
              30 % du total
            </div>
          </div>
        </div>

        <p className="text-xs text-[#D0C5AF] italic">
          Exemple : pour 3 jours à 150 € (450 € au total) → Acompte de 135 €, le
          solde de 315 € est réglé uniquement sur place.
        </p>

        {/* Interactive Mini Simulator */}
        <div className="pt-2 border-t border-white/5 flex flex-col gap-2">
          <div className="flex items-center gap-1.5 text-xs text-[#F2CA50] font-bold">
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulateur d'acompte en direct :</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-[10px] text-[#D0C5AF] block">Durée (jours) :</span>
              <div className="flex items-center gap-1 mt-1">
                {[1, 2, 3, 5, 7].map((d) => (
                  <button
                    key={d}
                    onClick={() => setTestDays(d)}
                    className={`px-2 py-1 rounded text-xs font-bold transition-all ${
                      testDays === d
                        ? 'bg-[#F2CA50] text-[#0B0E14]'
                        : 'bg-[#272A31] text-[#D0C5AF]'
                    }`}
                  >
                    {d}j
                  </button>
                ))}
              </div>
            </div>
            <div>
              <span className="text-[10px] text-[#D0C5AF] block">Tarif/24h choisi :</span>
              <select
                value={testRate}
                onChange={(e) => setTestRate(Number(e.target.value))}
                className="mt-1 bg-[#272A31] text-xs text-[#F2CA50] font-bold rounded p-1 border border-white/10 w-full"
              >
                <option value={150}>150 € / 24h</option>
                <option value={170}>170 € / 24h (Villa Garrigue)</option>
                <option value={210}>210 € / 24h (Côte d'Azur)</option>
                <option value={240}>240 € / 24h (Paris Domaine)</option>
              </select>
            </div>
          </div>

          <div className="mt-2 p-2.5 rounded-lg bg-[#191C22] border border-[#D4AF37]/30 flex justify-between items-center text-xs">
            <div>
              <span className="text-[10px] text-[#D0C5AF] block">Total séjour : {totalCost} €</span>
              <span className="text-[#F2CA50] font-bold">Acompte à réserver : {depositAmount} €</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-[#D0C5AF] block">Solde à régler sur place :</span>
              <span className="text-white font-bold">{balanceAmount} €</span>
            </div>
          </div>
        </div>
      </div>

      {/* Guarantee Checklist */}
      <div className="flex flex-col gap-3 pt-2">
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-[#F2CA50]/15 text-[#F2CA50] flex items-center justify-center shrink-0 mt-0.5 border border-[#D4AF37]/30">
            <ShieldCheck className="w-3.5 h-3.5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#E1E2EB]">
              La préparation complète du domaine
            </h4>
            <p className="text-[11px] text-[#D0C5AF] leading-snug">
              Nettoyage complet du bassin, filtration activée 24h avant et
              mobilier préparé.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-[#F2CA50]/15 text-[#F2CA50] flex items-center justify-center shrink-0 mt-0.5 border border-[#D4AF37]/30">
            <CalendarX className="w-3.5 h-3.5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#E1E2EB]">
              Date bloquée sans double réservation
            </h4>
            <p className="text-[11px] text-[#D0C5AF] leading-snug">
              Le calendrier est immédiatement clôturé pour votre groupe
              exclusif.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-[#F2CA50]/15 text-[#F2CA50] flex items-center justify-center shrink-0 mt-0.5 border border-[#D4AF37]/30">
            <RotateCcw className="w-3.5 h-3.5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#E1E2EB]">
              Remboursement intégral en cas d'annulation
            </h4>
            <p className="text-[11px] text-[#D0C5AF] leading-snug">
              Si un empêchement survient de notre part, votre acompte est
              recrédité immédiatement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
