import React, { useState } from 'react';
import {
  EyeOff,
  Star,
  MapPin,
  Users,
  Waves,
  Maximize2,
  Bed,
  Flame,
  Calendar,
  CheckCircle2,
  Map,
  Heart,
  Image as ImageIcon,
  Check
} from 'lucide-react';
import { Villa } from '../types';

interface VillaCardProps {
  villa: Villa;
  isFavorite: boolean;
  onToggleFavorite: (villaId: string) => void;
  onSelectVilla: (villa: Villa) => void;
  onViewRadius: (villa: Villa) => void;
  onEditImage: (villa: Villa) => void;
}

export const VillaCard: React.FC<VillaCardProps> = ({
  villa,
  isFavorite,
  onToggleFavorite,
  onSelectVilla,
  onViewRadius,
  onEditImage
}) => {
  const [selectedDate, setSelectedDate] = useState('2026-08-15');
  const [dateCheckStatus, setDateCheckStatus] = useState<string | null>(null);

  const handleCheckDate = () => {
    if (!selectedDate) return;
    const formatted = new Date(selectedDate).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    setDateCheckStatus(`Disponible le ${formatted} · Acompte garanti de 75 €`);
  };

  // WhatsApp Pre-filled URL
  const waMessage = encodeURIComponent(
    `Bonjour Immo Prestige, je souhaite réserver la ${villa.title} (${villa.code}) située à ${villa.location} pour la date du ${selectedDate}. Pouvez-vous me confirmer la disponibilité ?`
  );
  const waUrl = `https://wa.me/33673548450?text=${waMessage}`;

  return (
    <article className="bg-[#1D2026] rounded-2xl overflow-hidden subtle-border shadow-2xl flex flex-col group hover:border-[#D4AF37]/50 transition-all duration-300">
      {/* Visual & Video Banner Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#10131A]">
        <img
          src={villa.imageUrl}
          alt={villa.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
          onClick={() => onSelectVilla(villa)}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1D2026] via-transparent to-black/50 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
          <span className="px-2.5 py-1 rounded-full bg-[#0B0E14]/85 backdrop-blur-md text-[10px] font-bold text-[#F2CA50] subtle-border flex items-center gap-1 shadow-sm">
            <EyeOff className="w-3 h-3" /> Sans vis-à-vis
          </span>
          {villa.flag && villa.region !== 'Montpellier' && (
            <span className="px-2 py-0.5 rounded bg-black/60 text-white text-[10px] font-semibold border border-white/10">
              {villa.flag} {villa.country}
            </span>
          )}
        </div>

        {/* Top Right Code Badge & Favorite / Image Edit button */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
          <button
            onClick={() => onEditImage(villa)}
            className="p-1.5 rounded-lg bg-black/65 backdrop-blur-md text-white/80 hover:text-[#F2CA50] hover:bg-black/85 border border-white/10 transition-all"
            title="Modifier dynamiquement l'image à partir d'un lien HTML"
          >
            <ImageIcon className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onToggleFavorite(villa.id)}
            className={`p-1.5 rounded-lg bg-black/65 backdrop-blur-md border border-white/10 transition-all ${
              isFavorite ? 'text-red-400' : 'text-white/80 hover:text-white'
            }`}
            title={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          >
            <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-current' : ''}`} />
          </button>

          <span className="px-2 py-0.5 rounded bg-black/70 text-white font-mono text-[11px] border border-white/10 font-bold">
            {villa.code}
          </span>
        </div>

        {/* Bottom Overlays on Image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10">
          <span className="px-2.5 py-1 rounded-lg bg-[#0B0E14]/90 backdrop-blur-md text-xs text-[#E1E2EB] font-medium flex items-center gap-1.5 border border-[#D4AF37]/30">
            <MapPin className="w-3.5 h-3.5 text-[#F2CA50]" />
            {villa.location}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-[#0B0E14]/90 backdrop-blur-md text-xs text-[#F2CA50] font-bold flex items-center gap-1 border border-[#D4AF37]/30">
            <Star className="w-3.5 h-3.5 fill-current" />
            {villa.rating}/5
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex flex-col gap-4">
        {/* Title & Description */}
        <div>
          <div className="flex justify-between items-start">
            <h3
              onClick={() => onSelectVilla(villa)}
              className="font-serif text-xl sm:text-2xl text-[#E1E2EB] font-bold hover:text-[#F2CA50] transition-colors cursor-pointer"
            >
              {villa.title}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#D0C5AF] mt-1.5 leading-relaxed">
            {villa.description}
          </p>

          {/* Specs Grid Pills */}
          <div className="flex flex-wrap gap-2 mt-3.5">
            <span className="px-2.5 py-1 rounded-lg bg-[#272A31] text-xs text-[#D0C5AF] flex items-center gap-1.5">
              <Users className="w-3 h-3 text-[#F2CA50]" />
              Jusqu'à {villa.capacityMax} pers.
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-[#272A31] text-xs text-[#D0C5AF] flex items-center gap-1.5">
              <Waves className="w-3 h-3 text-[#F2CA50]" />
              {villa.poolType}
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-[#272A31] text-xs text-[#D0C5AF] flex items-center gap-1.5">
              <Maximize2 className="w-3 h-3 text-[#F2CA50]" />
              Grande terrasse
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-[#272A31] text-xs text-[#D0C5AF] flex items-center gap-1.5">
              <Bed className="w-3 h-3 text-[#F2CA50]" />
              {villa.bedrooms} chambres
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-[#272A31] text-xs text-[#D0C5AF] flex items-center gap-1.5">
              <Flame className="w-3 h-3 text-[#F2CA50]" />
              Barbecue & Wi-Fi
            </span>
          </div>
        </div>

        {/* Zone Approximative Nocturne */}
        <div className="p-3 rounded-xl bg-[#191C22] subtle-border flex items-center justify-between text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#272A31] flex items-center justify-center text-[#F2CA50] relative overflow-hidden border border-[#D4AF37]/30">
              <Map className="w-5 h-5 text-[#F2CA50]" />
              <span className="absolute inset-0 border border-[#F2CA50]/40 rounded-lg animate-pulse" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#E1E2EB]">
                {villa.verifiedZone}
              </p>
              <p className="text-[11px] text-[#D0C5AF]">
                Adresse exacte délivrée à la réservation
              </p>
            </div>
          </div>
          <button
            onClick={() => onViewRadius(villa)}
            className="px-2.5 py-1.5 rounded-md text-[11px] font-bold text-[#F2CA50] bg-[#F2CA50]/10 border border-[#D4AF37]/30 hover:bg-[#F2CA50]/20 active:scale-95 transition-all"
          >
            Voir rayon
          </button>
        </div>

        {/* Date Checker Module */}
        <div className="p-3.5 rounded-xl bg-[#272A31]/70 border border-[#4D4635]/40 flex flex-col gap-2.5">
          <label className="text-xs font-bold text-[#E1E2EB] flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#F2CA50]" /> Vérifier une date disponible
          </label>
          <div className="flex gap-2">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => {
                setSelectedDate(e.target.value);
                setDateCheckStatus(null);
              }}
              className="bg-[#0B0E14] text-[#E1E2EB] border border-[#4D4635]/60 rounded-lg px-3 py-2 text-xs flex-1 focus:ring-1 focus:ring-[#F2CA50] focus:border-[#F2CA50] outline-none"
            />
            <button
              onClick={handleCheckDate}
              className="px-3.5 py-2 rounded-lg bg-[#191C22] text-[#F2CA50] border border-[#D4AF37]/40 text-xs font-bold hover:bg-[#F2CA50]/15 active:scale-95 transition-all"
            >
              Vérifier
            </button>
          </div>
          {dateCheckStatus && (
            <div className="flex items-center gap-1.5 text-[11px] text-green-400 bg-green-950/40 p-2 rounded-lg border border-green-800/40 animate-fadeIn">
              <Check className="w-3.5 h-3.5 shrink-0 text-green-400" />
              <span>{dateCheckStatus}</span>
            </div>
          )}
        </div>

        {/* Testimonial snippet */}
        <div className="p-3 rounded-xl bg-[#191C22]/80 italic text-xs text-[#D0C5AF] border-l-2 border-[#F2CA50]">
          {villa.testimonial.text}
          <div className="text-[11px] font-normal not-italic text-[#E1E2EB] mt-1 font-semibold">
            <strong>{villa.testimonial.author}</strong> — Client vérifié ({villa.testimonial.date})
          </div>
        </div>

        {/* Pricing & Deposit Summary */}
        <div className="pt-3 border-t border-[#4D4635]/40 flex flex-col gap-3">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#F2CA50]">
                {villa.price} €
              </span>
              <span className="text-[#D0C5AF] text-xs ml-1">
                {villa.priceUnit}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-[#D0C5AF] block">
                {villa.priceUnit === '/ 24h' ? (
                  <>
                    Acompte 1 jour :{' '}
                    <strong className="text-[#E1E2EB] font-bold">75 €</strong>
                  </>
                ) : (
                  <>
                    Acompte bloquant :{' '}
                    <strong className="text-[#E1E2EB] font-bold">30 %</strong>
                  </>
                )}
              </span>
              <span className="text-[10px] text-[#D0C5AF]/80">
                {villa.priceUnit === '/ 24h'
                  ? 'Dès 2 jours : 30% · Solde sur place'
                  : 'Solde à l\'arrivée après visite'}
              </span>
            </div>
          </div>

          {/* Primary Action: Book on WhatsApp */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#F2CA50] text-[#0B0E14] font-bold text-xs sm:text-sm tracking-wider uppercase text-center gold-glow active:scale-[0.98] transition-transform flex items-center justify-center gap-2 hover:brightness-105"
          >
            <CheckCircle2 className="w-5 h-5" />
            Réserver ce bien sur WhatsApp
          </a>

          {/* Secondary Action: View Details */}
          <button
            onClick={() => onSelectVilla(villa)}
            className="w-full py-2.5 px-3 rounded-xl bg-[#191C22] hover:bg-[#272A31] text-[#E1E2EB] border border-white/10 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors active:scale-98"
          >
            <span>Voir la fiche détaillée & photos</span>
          </button>
        </div>
      </div>
    </article>
  );
};
