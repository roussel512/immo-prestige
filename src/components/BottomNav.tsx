import React from 'react';
import { Compass, Home, Heart, MessageCircle } from 'lucide-react';
import { ActiveTab } from '../types';

interface BottomNavProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  favoritesCount: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  setActiveTab,
  favoritesCount
}) => {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 bg-[#0B0E14]/95 backdrop-blur-lg border-t border-[#4D4635]/35 shadow-2xl">
      <div className="max-w-md mx-auto flex justify-around items-center px-4 py-2">
        {/* Tab 1: Explorer */}
        <button
          onClick={() => setActiveTab('explorer')}
          className={`flex flex-col items-center justify-center gap-1 transition-all active:scale-95 py-1 px-3 rounded-xl ${
            activeTab === 'explorer'
              ? 'text-[#F2CA50] font-bold'
              : 'text-[#D0C5AF] hover:text-[#FFE088]'
          }`}
        >
          <Compass className={`w-5 h-5 ${activeTab === 'explorer' ? 'stroke-[2.5]' : ''}`} />
          <span className="text-[10px] tracking-wide">Explorer</span>
        </button>

        {/* Tab 2: Villas */}
        <button
          onClick={() => setActiveTab('villas')}
          className={`flex flex-col items-center justify-center gap-1 transition-all active:scale-95 py-1 px-3 rounded-xl ${
            activeTab === 'villas'
              ? 'text-[#F2CA50] font-bold'
              : 'text-[#D0C5AF] hover:text-[#FFE088]'
          }`}
        >
          <Home className={`w-5 h-5 ${activeTab === 'villas' ? 'stroke-[2.5]' : ''}`} />
          <span className="text-[10px] tracking-wide">Villas</span>
        </button>

        {/* Tab 3: Favoris */}
        <button
          onClick={() => setActiveTab('favoris')}
          className={`flex flex-col items-center justify-center gap-1 transition-all active:scale-95 py-1 px-3 rounded-xl relative ${
            activeTab === 'favoris'
              ? 'text-[#F2CA50] font-bold'
              : 'text-[#D0C5AF] hover:text-[#FFE088]'
          }`}
        >
          <div className="relative">
            <Heart className={`w-5 h-5 ${activeTab === 'favoris' ? 'fill-[#F2CA50]' : ''}`} />
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-gradient-to-r from-[#D4AF37] to-[#F2CA50] text-[#0B0E14] text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow">
                {favoritesCount}
              </span>
            )}
          </div>
          <span className="text-[10px] tracking-wide">Favoris</span>
        </button>

        {/* Tab 4: Concierge */}
        <button
          onClick={() => setActiveTab('concierge')}
          className={`flex flex-col items-center justify-center gap-1 transition-all active:scale-95 py-1 px-3 rounded-xl ${
            activeTab === 'concierge'
              ? 'text-[#F2CA50] font-bold'
              : 'text-[#D0C5AF] hover:text-[#FFE088]'
          }`}
        >
          <MessageCircle className={`w-5 h-5 ${activeTab === 'concierge' ? 'stroke-[2.5]' : ''}`} />
          <span className="text-[10px] tracking-wide">Concierge</span>
        </button>
      </div>
    </nav>
  );
};
