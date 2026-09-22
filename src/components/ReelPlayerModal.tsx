import React, { useState } from 'react';
import {
  X,
  Play,
  Pause,
  Heart,
  Share2,
  Volume2,
  VolumeX,
  CheckCircle2,
  EyeOff,
  Video,
  Sparkles
} from 'lucide-react';
import { Villa } from '../types';

interface ReelPlayerModalProps {
  villa: Villa | null;
  isOpen: boolean;
  onClose: () => void;
  onBookWhatsApp: (villa: Villa) => void;
}

export const ReelPlayerModal: React.FC<ReelPlayerModalProps> = ({
  villa,
  isOpen,
  onClose,
  onBookWhatsApp
}) => {
  if (!isOpen || !villa) return null;

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      {/* 9:16 Video Player Container */}
      <div className="relative w-full max-w-[380px] aspect-[9/16] rounded-2xl overflow-hidden bg-black border border-[#D4AF37]/40 shadow-2xl flex flex-col justify-between">
        {/* Background Visual (Simulating Video with subtle pulse or active playback) */}
        <div className="absolute inset-0 z-0">
          <img
            src={villa.imageUrl}
            alt={villa.title}
            className={`w-full h-full object-cover transition-transform duration-1000 ${
              isPlaying ? 'scale-105' : 'scale-100'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none" />

          {/* Simulated scanning / video play indicator line */}
          {isPlaying && (
            <div className="absolute bottom-0 inset-x-0 h-1 bg-[#F2CA50]/70 animate-pulse" />
          )}
        </div>

        {/* Top Header Bar */}
        <div className="relative z-10 p-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[9px] font-bold text-[#F2CA50] subtle-border flex items-center gap-1">
              <EyeOff className="w-2.5 h-2.5" /> 100% Sans vis-à-vis
            </span>
            <span className="px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[9px] font-bold text-white flex items-center gap-1 border border-white/10">
              <Video className="w-2.5 h-2.5 text-[#F2CA50]" /> Vidéo Réelle HD
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="p-1.5 rounded-full bg-black/60 backdrop-blur-md text-white hover:text-[#F2CA50] transition-colors"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-black/60 backdrop-blur-md text-white hover:text-red-400 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Center Play / Pause Indicator */}
        <button
          onClick={togglePlay}
          className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[#F2CA50] flex items-center justify-center z-10 opacity-75 hover:opacity-100 hover:scale-105 active:scale-95 transition-all"
        >
          {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 fill-current ml-1" />}
        </button>

        {/* Right Interaction Sidebar */}
        <div className="relative z-10 self-end mr-3 mb-24 flex flex-col gap-4 items-center">
          {/* Like */}
          <button
            onClick={() => setHasLiked(!hasLiked)}
            className="flex flex-col items-center group"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all shadow-md ${
                hasLiked
                  ? 'bg-red-500/80 text-white scale-110'
                  : 'bg-black/60 text-[#F2CA50] border border-white/15'
              }`}
            >
              <Heart className={`w-5 h-5 ${hasLiked ? 'fill-current' : ''}`} />
            </div>
            <span className="text-[10px] text-white font-bold mt-1">
              {hasLiked ? '28.5k' : villa.tiktokLikes || '28.4k'}
            </span>
          </button>

          {/* Share */}
          <button onClick={handleShare} className="flex flex-col items-center group">
            <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white transition-all shadow-md group-hover:scale-110">
              <Share2 className="w-5 h-5" />
            </div>
            <span className="text-[10px] text-white font-bold mt-1">
              {shareCopied ? 'Copié !' : villa.tiktokShares || '1.2k'}
            </span>
          </button>

          {/* Authenticity Stamp */}
          <div className="flex flex-col items-center text-[#F2CA50]">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#F2CA50]" />
            </div>
            <span className="text-[8px] uppercase tracking-widest text-[#D4AF37] font-bold mt-1">
              Certifié
            </span>
          </div>
        </div>

        {/* Bottom Details & Booking Action */}
        <div className="relative z-10 p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col gap-2.5 text-left">
          <div className="flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded bg-[#F2CA50] text-[#0B0E14] font-bold text-[9px] uppercase tracking-wider">
              {villa.flag} {villa.location}
            </span>
            <span className="text-xs text-[#D0C5AF] font-medium">
              {villa.code}
            </span>
          </div>

          <h3 className="font-serif text-lg font-bold text-white leading-tight drop-shadow">
            {villa.title}
          </h3>

          <p className="text-xs text-[#D0C5AF] line-clamp-2 leading-relaxed">
            {villa.description}
          </p>

          <div className="flex items-baseline justify-between pt-1 border-t border-white/10">
            <div>
              <span className="text-lg font-serif font-bold text-[#F2CA50]">
                {villa.price} €
              </span>
              <span className="text-xs text-white/70 ml-1">{villa.priceUnit}</span>
            </div>
            <span className="text-[10px] text-[#D0C5AF]">
              {villa.depositNote}
            </span>
          </div>

          {/* WhatsApp Direct Action */}
          <button
            onClick={() => {
              onBookWhatsApp(villa);
              onClose();
            }}
            className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#F2CA50] text-[#0B0E14] font-bold text-xs uppercase tracking-wider gold-glow active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Réserver sur WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
