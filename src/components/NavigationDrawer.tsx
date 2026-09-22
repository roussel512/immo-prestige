import React from 'react';
import { X, Compass, Home, Heart, MessageCircle, Phone, Lock } from 'lucide-react';
import { ActiveTab } from '../types';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  activeTab,
  setActiveTab
}) => {
  if (!isOpen) return null;

  const navigateTo = (tab: ActiveTab) => {
    setActiveTab(tab);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Drawer Panel */}
      <div className="relative w-72 max-w-[80%] h-full bg-[#10131A] border-r border-[#4D4635]/40 shadow-2xl p-5 flex flex-col justify-between text-[#E1E2EB]">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#4D4635]/30">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F2CA50] to-[#896C00] p-[1px]">
                <div className="w-full h-full rounded-full bg-[#0B0E14] flex items-center justify-center">
                  <span className="font-serif text-[#F2CA50] font-bold text-xs">IP</span>
                </div>
              </div>
              <span className="font-serif text-base font-bold text-[#F2CA50]">
                Immo Prestige
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-[#D0C5AF] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-2 mt-6">
            <button
              onClick={() => navigateTo('explorer')}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-left transition-all ${
                activeTab === 'explorer'
                  ? 'bg-[#F2CA50]/15 text-[#F2CA50] border border-[#D4AF37]/30'
                  : 'text-[#D0C5AF] hover:bg-[#1D2026] hover:text-white'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Explorer l'accueil</span>
            </button>

            <button
              onClick={() => navigateTo('villas')}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-left transition-all ${
                activeTab === 'villas'
                  ? 'bg-[#F2CA50]/15 text-[#F2CA50] border border-[#D4AF37]/30'
                  : 'text-[#D0C5AF] hover:bg-[#1D2026] hover:text-white'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Catalogue des 46 Villas</span>
            </button>

            <button
              onClick={() => navigateTo('favoris')}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-left transition-all ${
                activeTab === 'favoris'
                  ? 'bg-[#F2CA50]/15 text-[#F2CA50] border border-[#D4AF37]/30'
                  : 'text-[#D0C5AF] hover:bg-[#1D2026] hover:text-white'
              }`}
            >
              <Heart className="w-4 h-4" />
              <span>Mes Villas Favorites</span>
            </button>

            <button
              onClick={() => navigateTo('concierge')}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-left transition-all ${
                activeTab === 'concierge'
                  ? 'bg-[#F2CA50]/15 text-[#F2CA50] border border-[#D4AF37]/30'
                  : 'text-[#D0C5AF] hover:bg-[#1D2026] hover:text-white'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              <span>Conciergerie WhatsApp</span>
            </button>
          </nav>
        </div>

        {/* Footer info */}
        <div className="pt-4 border-t border-[#4D4635]/30 text-xs text-[#D0C5AF] flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-[#F2CA50]" />
            <span className="text-[11px]">100% Sans vis-à-vis garanti</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#25D366]" />
            <span className="text-[11px] font-semibold text-white">+33 6 73 54 84 50</span>
          </div>
        </div>
      </div>
      {/* Click outside to close */}
      <div className="flex-1" onClick={onClose} />
    </div>
  );
};
