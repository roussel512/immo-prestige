import React from 'react';
import { Lock, ShieldCheck } from 'lucide-react';

interface ConfidentialityNoticeProps {
  onLearnMore?: () => void;
}

export const ConfidentialityNotice: React.FC<ConfidentialityNoticeProps> = ({ onLearnMore }) => {
  return (
    <div className="p-4 rounded-xl bg-[#191C22] subtle-border text-xs text-[#D0C5AF]">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-[#10131A] flex items-center justify-center text-[#F2CA50] shrink-0 mt-0.5 border border-[#D4AF37]/20">
          <Lock className="w-4 h-4 text-[#F2CA50]" />
        </div>
        <div className="flex-1">
          <h4 className="text-[#E1E2EB] font-bold text-sm">
            Pourquoi l'adresse exacte n'est pas affichée publiquement
          </h4>
          <p className="mt-1 leading-relaxed text-[#D0C5AF]">
            Pour préserver la quiétude et l'intimité de nos hôtes, la
            localisation précise vous est délivrée immédiatement après validation
            sur WhatsApp ou lors d'une visite officiellement planifiée.
          </p>
          {onLearnMore && (
            <button
              onClick={onLearnMore}
              className="mt-2 text-[#F2CA50] text-[11px] font-semibold hover:underline flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Consulter notre charte de discrétion & géolocalisation</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
