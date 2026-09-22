import React, { useState } from 'react';
import {
  X,
  Star,
  MapPin,
  Users,
  Bed,
  Waves,
  EyeOff,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  Heart,
  Share2,
  Image as ImageIcon
} from 'lucide-react';
import { Villa } from '../types';

interface VillaDetailModalProps {
  villa: Villa | null;
  isOpen: boolean;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onEditImage: (villa: Villa) => void;
}

export const VillaDetailModal: React.FC<VillaDetailModalProps> = ({
  villa,
  isOpen,
  onClose,
  isFavorite,
  onToggleFavorite,
  onEditImage
}) => {
  if (!isOpen || !villa) return null;

  const [activeImage, setActiveImage] = useState(villa.imageUrl);
  const [selectedDays, setSelectedDays] = useState(2);

  const isPerDay = villa.priceUnit === '/ 24h';
  const totalPrice = isPerDay ? villa.price * selectedDays : villa.price;
  const acompte = isPerDay
    ? selectedDays <= 2
      ? 75
      : Math.round(totalPrice * 0.3)
    : Math.round(villa.price * 0.3);
  const solde = totalPrice - acompte;

  const waMessage = encodeURIComponent(
    `Bonjour Immo Prestige, je souhaite réserver la ${villa.title} (${villa.code}) à ${villa.location} pour une durée estimée de ${selectedDays} jours. Merci de me contacter.`
  );
  const waUrl = `https://wa.me/33673548450?text=${waMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#191C22] rounded-2xl subtle-border shadow-2xl my-6 border border-[#D4AF37]/35 text-[#E1E2EB] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-4 bg-[#10131A] border-b border-[#4D4635]/40 shrink-0">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-black/80 text-[#F2CA50] font-mono text-xs font-bold border border-[#D4AF37]/40">
              {villa.code}
            </span>
            <h3 className="font-serif text-lg font-bold text-[#E1E2EB]">
              {villa.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onEditImage(villa)}
              className="p-1.5 rounded-lg bg-[#272A31] text-[#D0C5AF] hover:text-[#F2CA50] transition-colors"
              title="Modifier les liens dynamiques des images"
            >
              <ImageIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => onToggleFavorite(villa.id)}
              className={`p-1.5 rounded-lg bg-[#272A31] transition-colors ${
                isFavorite ? 'text-red-400' : 'text-[#D0C5AF] hover:text-white'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#272A31] text-[#D0C5AF] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex flex-col gap-5">
          {/* Main Photo Gallery */}
          <div className="flex flex-col gap-2">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-[#0B0E14] border border-[#4D4635]/50">
              <img
                src={activeImage}
                alt={villa.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="px-2.5 py-1 rounded-full bg-[#0B0E14]/85 backdrop-blur-md text-[10px] font-bold text-[#F2CA50] subtle-border flex items-center gap-1">
                  <EyeOff className="w-3 h-3" /> 100% Sans vis-à-vis
                </span>
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {villa.galleryUrls && villa.galleryUrls.length > 1 && (
              <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
                {villa.galleryUrls.map((url, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(url)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border transition-all ${
                      activeImage === url
                        ? 'border-[#F2CA50] scale-105'
                        : 'border-white/10 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={url} alt={`Vue ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Specifications */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="p-2.5 rounded-xl bg-[#10131A] subtle-border flex flex-col gap-1">
              <span className="text-[#D0C5AF] text-[10px] uppercase font-semibold">
                Capacité Max
              </span>
              <span className="text-[#E1E2EB] font-bold flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-[#F2CA50]" />
                {villa.capacityMax} invités
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-[#10131A] subtle-border flex flex-col gap-1">
              <span className="text-[#D0C5AF] text-[10px] uppercase font-semibold">
                Chambres
              </span>
              <span className="text-[#E1E2EB] font-bold flex items-center gap-1">
                <Bed className="w-3.5 h-3.5 text-[#F2CA50]" />
                {villa.bedrooms} suites
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-[#10131A] subtle-border flex flex-col gap-1">
              <span className="text-[#D0C5AF] text-[10px] uppercase font-semibold">
                Bassin privé
              </span>
              <span className="text-[#E1E2EB] font-bold flex items-center gap-1 truncate">
                <Waves className="w-3.5 h-3.5 text-[#F2CA50] shrink-0" />
                {villa.poolType}
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-[#10131A] subtle-border flex flex-col gap-1">
              <span className="text-[#D0C5AF] text-[10px] uppercase font-semibold">
                Note certifiée
              </span>
              <span className="text-[#F2CA50] font-bold flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-current" />
                {villa.rating} / 5 ({villa.reviewsCount} avis)
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#E1E2EB] mb-1.5">
              Description de la Propriété
            </h4>
            <p className="text-xs sm:text-sm text-[#D0C5AF] leading-relaxed">
              {villa.description}
            </p>
          </div>

          {/* Equipment & Features list */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#E1E2EB] mb-2">
              Prestations & Équipements Inclus
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {villa.amenities.map((item, idx) => (
                <div
                  key={idx}
                  className="p-2 rounded-lg bg-[#10131A] text-[#D0C5AF] flex items-center gap-2 border border-white/5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F2CA50] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quotation & Deposit Simulator */}
          <div className="p-4 rounded-xl bg-[#10131A] subtle-border flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h4 className="font-serif text-sm font-bold text-[#F2CA50]">
                Simulation Tarifaire & Calcul d'Acompte
              </h4>
              <span className="text-xs font-mono text-white font-bold">
                {villa.price} € {villa.priceUnit}
              </span>
            </div>

            {isPerDay && (
              <div className="flex items-center gap-2 text-xs">
                <span className="text-[#D0C5AF]">Nombre de jours prévus :</span>
                <div className="flex gap-1.5">
                  {[1, 2, 3, 5, 7].map((d) => (
                    <button
                      key={d}
                      onClick={() => setSelectedDays(d)}
                      className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                        selectedDays === d
                          ? 'bg-[#F2CA50] text-[#0B0E14]'
                          : 'bg-[#272A31] text-[#D0C5AF]'
                      }`}
                    >
                      {d}j
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-3 gap-2 p-2.5 rounded-lg bg-[#191C22] text-xs border border-white/5 text-center">
              <div>
                <span className="text-[10px] text-[#D0C5AF] block">Total Estimé</span>
                <span className="text-sm font-bold text-white">{totalPrice} €</span>
              </div>
              <div className="border-x border-white/10">
                <span className="text-[10px] text-[#D0C5AF] block">Acompte Bloquant</span>
                <span className="text-sm font-bold text-[#F2CA50]">{acompte} €</span>
              </div>
              <div>
                <span className="text-[10px] text-[#D0C5AF] block">Solde sur Place</span>
                <span className="text-sm font-bold text-white">{solde} €</span>
              </div>
            </div>

            <p className="text-[11px] text-[#D0C5AF] italic">
              L'acompte est rigoureusement déduit de la facture totale. Remboursement intégral garanti si annulation.
            </p>
          </div>
        </div>

        {/* Modal Bottom CTA Bar */}
        <div className="p-4 bg-[#10131A] border-t border-[#4D4635]/40 flex flex-col sm:flex-row gap-2 shrink-0">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#F2CA50] text-[#0B0E14] font-bold text-xs sm:text-sm uppercase tracking-wider gold-glow active:scale-98 transition-all flex items-center justify-center gap-2 text-center"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Réserver ce bien sur WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
