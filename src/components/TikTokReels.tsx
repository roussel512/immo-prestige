import React from 'react';
import { Play, Heart, Share2, EyeOff, Video, ChevronRight } from 'lucide-react';
import { Villa } from '../types';

interface TikTokReelsProps {
  villas: Villa[];
  onSelectReel: (villa: Villa) => void;
  onBookWhatsApp: (villa: Villa) => void;
}

export const TikTokReels: React.FC<TikTokReelsProps> = ({
  villas,
  onSelectReel,
  onBookWhatsApp
}) => {
  // Select top villas with reels
  const reelVillas = villas.slice(0, 4);

  return (
    <section className="flex flex-col gap-3.5">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#1D2026] flex items-center justify-center text-[#F2CA50] border border-[#D4AF37]/30 shadow-sm">
            <Play className="w-4 h-4 fill-current ml-0.5" />
          </div>
          <div>
            <h2 className="font-serif text-lg sm:text-xl text-[#E1E2EB] font-bold">
              Exclusivités TikTok
            </h2>
            <p className="text-xs text-[#F2CA50] font-medium">
              @immo.prestige1 · Vidéos réelles HD
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#F2CA50]/15 text-[#F2CA50] border border-[#D4AF37]/30 uppercase tracking-wider">
            Live Réel
          </span>
        </div>
      </div>

      {/* Horizontal 9:16 Reel Cards Scroller */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 snap-x snap-mandatory">
        {reelVillas.map((villa) => (
          <div
            key={villa.id}
            className="shrink-0 w-64 sm:w-72 snap-center rounded-2xl overflow-hidden bg-[#10131A] subtle-border relative shadow-2xl flex flex-col group"
          >
            {/* 9:16 Aspect Ratio Container */}
            <div className="relative aspect-[9/16] w-full overflow-hidden bg-[#1D2026]">
              {/* Background Image / Video Poster */}
              <img
                src={villa.imageUrl}
                alt={villa.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-black/20 to-black/60 pointer-events-none" />

              {/* Top Badges */}
              <div className="absolute top-3 inset-x-3 flex justify-between items-center z-10 pointer-events-none">
                <span className="px-2 py-1 rounded-full bg-[#0B0E14]/85 backdrop-blur-md text-[10px] font-bold text-[#F2CA50] subtle-border flex items-center gap-1">
                  <EyeOff className="w-3 h-3" /> Sans vis-à-vis
                </span>
                <span className="px-2 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-bold text-[#E1E2EB] flex items-center gap-1 border border-white/10">
                  <Video className="w-3 h-3 text-[#F2CA50]" /> Vidéo Réelle HD
                </span>
              </div>

              {/* Central Play Trigger */}
              <button
                onClick={() => onSelectReel(villa)}
                aria-label={`Lire la vidéo de ${villa.title}`}
                className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-[#0B0E14]/70 backdrop-blur-md subtle-border text-[#F2CA50] flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xl group-hover:bg-[#F2CA50] group-hover:text-[#3C2F00] z-20 cursor-pointer"
              >
                <Play className="w-6 h-6 fill-current ml-1" />
              </button>

              {/* TikTok Social Counters Overlay Right */}
              <div className="absolute right-3 bottom-24 flex flex-col gap-3 items-center text-white/90 z-10">
                <button
                  onClick={() => onSelectReel(villa)}
                  className="flex flex-col items-center hover:scale-110 transition-transform"
                >
                  <div className="w-9 h-9 rounded-full bg-[#0B0E14]/65 backdrop-blur-sm flex items-center justify-center text-[#F2CA50] border border-white/10 shadow">
                    <Heart className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-[10px] font-bold mt-1 text-white">
                    {villa.tiktokLikes || '24.8k'}
                  </span>
                </button>

                <button
                  onClick={() => onSelectReel(villa)}
                  className="flex flex-col items-center hover:scale-110 transition-transform"
                >
                  <div className="w-9 h-9 rounded-full bg-[#0B0E14]/65 backdrop-blur-sm flex items-center justify-center text-[#E1E2EB] border border-white/10 shadow">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold mt-1 text-white">
                    {villa.tiktokShares || '1.2k'}
                  </span>
                </button>
              </div>

              {/* Bottom Information Overlay */}
              <div className="absolute bottom-3 inset-x-3 text-left z-10">
                <span className="inline-block px-2 py-0.5 rounded bg-[#F2CA50] text-[#3C2F00] font-bold text-[9px] uppercase tracking-wider mb-1">
                  {villa.flag} {villa.location}
                </span>
                <h3 className="font-serif text-base sm:text-lg text-white font-bold leading-snug drop-shadow-md">
                  {villa.title}
                </h3>
                <p className="text-xs text-[#D0C5AF] drop-shadow line-clamp-1 mt-0.5">
                  {villa.poolType} · Jusqu'à {villa.capacityMax} pers.
                </p>

                {/* Price and CTA */}
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/15">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[#F2CA50] font-bold text-sm">
                      {villa.price} €
                    </span>
                    <span className="text-white/60 text-[10px]">
                      {villa.priceUnit}
                    </span>
                  </div>
                  <button
                    onClick={() => onBookWhatsApp(villa)}
                    className="px-3 py-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F2CA50] text-[#0B0E14] text-[11px] font-bold shadow-md hover:brightness-110 active:scale-95 transition-all"
                  >
                    Réserver
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
