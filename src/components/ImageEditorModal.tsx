import React, { useState } from 'react';
import { X, Image as ImageIcon, Check, RefreshCw, Link as LinkIcon, ExternalLink } from 'lucide-react';
import { Villa } from '../types';

interface ImageEditorModalProps {
  villa: Villa | null;
  isOpen: boolean;
  onClose: () => void;
  onUpdateImage: (villaId: string, newImageUrl: string) => void;
}

export const ImageEditorModal: React.FC<ImageEditorModalProps> = ({
  villa,
  isOpen,
  onClose,
  onUpdateImage
}) => {
  if (!isOpen || !villa) return null;

  const [imageUrlInput, setImageUrlInput] = useState(villa.imageUrl);
  const [previewError, setPreviewError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Curated high quality presets for dynamic swapping
  const presets = [
    {
      title: 'Piscine Miroir Sunset',
      url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Infinity Pool Vue Mer',
      url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Riad & Patio Luxuriant',
      url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Manoir Contemporain',
      url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Calanques Méditerranée',
      url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Domaine d\'Exception Cannes',
      url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const handleApply = () => {
    if (!imageUrlInput.trim()) return;
    onUpdateImage(villa.id, imageUrlInput.trim());
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-md bg-[#191C22] rounded-2xl subtle-border shadow-2xl p-5 border border-[#D4AF37]/35 text-[#E1E2EB]">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#4D4635]/40">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#272A31] flex items-center justify-center text-[#F2CA50] border border-[#D4AF37]/30">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-base font-bold text-[#E1E2EB]">
                Lien Dynamique d'Image
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

        {/* Input for dynamic HTML link */}
        <div className="mt-4 flex flex-col gap-3">
          <div>
            <label className="text-xs font-semibold text-[#D0C5AF] block mb-1 flex items-center gap-1.5">
              <LinkIcon className="w-3.5 h-3.5 text-[#F2CA50]" />
              Collez un lien d'image direct (HTML / URL externe) :
            </label>
            <input
              type="url"
              value={imageUrlInput}
              onChange={(e) => {
                setImageUrlInput(e.target.value);
                setPreviewError(false);
              }}
              placeholder="https://domaine.com/photo-villa.jpg"
              className="w-full bg-[#0B0E14] text-xs text-[#E1E2EB] p-2.5 rounded-xl border border-[#4D4635]/60 focus:border-[#D4AF37] outline-none"
            />
          </div>

          {/* Live Preview */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] text-[#D0C5AF]">Aperçu en direct :</span>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-[#0B0E14] border border-[#4D4635]/50 flex items-center justify-center">
              {imageUrlInput && !previewError ? (
                <img
                  src={imageUrlInput}
                  alt="Aperçu dynamique"
                  className="w-full h-full object-cover"
                  onError={() => setPreviewError(true)}
                />
              ) : (
                <div className="p-4 text-center text-xs text-red-400">
                  Impossible de charger l'image. Veuillez vérifier l'URL ou choisir un préréglage ci-dessous.
                </div>
              )}
            </div>
          </div>

          {/* Quick Curated Presets */}
          <div>
            <span className="text-[11px] text-[#D0C5AF] block mb-1.5 font-semibold">
              Ou sélectionnez une sélection HD Immo Prestige :
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {presets.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setImageUrlInput(p.url);
                    setPreviewError(false);
                  }}
                  className="p-1.5 rounded-lg bg-[#10131A] hover:bg-[#272A31] border border-white/5 text-[10px] text-left text-[#D0C5AF] hover:text-[#F2CA50] truncate transition-colors"
                >
                  {p.title}
                </button>
              ))}
            </div>
          </div>

          {/* Success Banner */}
          {isSuccess && (
            <div className="p-2.5 rounded-lg bg-green-950/40 border border-green-700/50 text-green-300 text-xs flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>Image mise à jour dynamiquement !</span>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-5 pt-3 border-t border-[#4D4635]/40 flex gap-2">
          <button
            onClick={onClose}
            className="py-2.5 px-4 rounded-xl bg-[#272A31] hover:bg-[#32353C] text-xs font-semibold text-[#D0C5AF] transition-colors"
          >
            Annuler
          </button>
          <button
            onClick={handleApply}
            className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F2CA50] text-[#0B0E14] font-bold text-xs uppercase tracking-wider gold-glow active:scale-95 transition-all flex items-center justify-center gap-1.5"
          >
            <Check className="w-4 h-4" />
            <span>Appliquer le lien</span>
          </button>
        </div>
      </div>
    </div>
  );
};
