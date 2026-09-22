import React from 'react';
import { X, ShieldCheck, MapPin, EyeOff, Lock, Check } from 'lucide-react';
import { Villa } from '../types';

interface VerifiedRadiusModalProps {
  villa: Villa | null;
  isOpen: boolean;
  onClose: () => void;
}

export const VerifiedRadiusModal: React.FC<VerifiedRadiusModalProps> = ({
  villa,
  isOpen,
  onClose
}) => {
  if (!isOpen || !villa) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-[#191C22] rounded-2xl subtle-border shadow-2xl p-5 border border-[#D4AF37]/35 text-[#E1E2EB]">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#4D4635]/40">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#272A31] flex items-center justify-center text-[#F2CA50] border border-[#D4AF37]/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-base font-bold text-[#E1E2EB]">
                Zone Confidentielle & Sécurisée
              </h3>
              <p className="text-[11px] text-[#D0C5AF]">
                {villa.title} ({villa.code})
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#10131A] text-[#D0C5AF] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Visual Nocturne Radar Animation */}
        <div className="mt-4 relative h-48 rounded-xl overflow-hidden bg-[#0B0E14] border border-[#4D4635]/50 flex items-center justify-center">
          {/* Radar Circles */}
          <div className="absolute w-40 h-40 rounded-full border border-[#D4AF37]/25 animate-ping opacity-40 pointer-events-none" />
          <div className="absolute w-32 h-32 rounded-full border border-[#D4AF37]/30 pointer-events-none" />
          <div className="absolute w-20 h-20 rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 flex items-center justify-center pointer-events-none">
            <div className="w-3 h-3 rounded-full bg-[#F2CA50] animate-pulse" />
          </div>

          <div className="absolute bottom-2 inset-x-2 p-2 rounded-lg bg-[#0B0E14]/85 backdrop-blur-sm border border-white/10 text-center">
            <span className="text-xs font-bold text-[#F2CA50]">
              {villa.verifiedZone}
            </span>
            <span className="block text-[10px] text-[#D0C5AF]">
              Rayon de tolérance : 2 km préservant le secret des lieux
            </span>
          </div>
        </div>

        {/* Explanatory Points */}
        <div className="mt-4 flex flex-col gap-2.5 text-xs text-[#D0C5AF]">
          <div className="flex items-start gap-2">
            <Check className="w-4 h-4 text-[#F2CA50] shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">Confidentialité Propriétaire :</strong> Le
              numéro de rue et le portail d'accès ne sont pas publics afin
              d'éviter tout démarchage intrusif.
            </span>
          </div>

          <div className="flex items-start gap-2">
            <Check className="w-4 h-4 text-[#F2CA50] shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">Délivrance Immédiate :</strong> L'itinéraire
              GPS Waze / Google Maps précis et le code de boîte à clés ou l'accueil
              du régisseur vous sont transmis après confirmation sur WhatsApp.
            </span>
          </div>

          <div className="flex items-start gap-2">
            <Check className="w-4 h-4 text-[#F2CA50] shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">Visite Préalable Disponible :</strong> Notre
              équipe peut vous organiser une visite préalable sur place 7j/7 avant
              le versement de tout acompte.
            </span>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full mt-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F2CA50] text-[#0B0E14] font-bold text-xs uppercase tracking-wider gold-glow transition-all"
        >
          Compris, fermer
        </button>
      </div>
    </div>
  );
};
