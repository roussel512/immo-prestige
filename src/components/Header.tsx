import React from 'react';
import { MessageCircle, Menu, ShieldCheck } from 'lucide-react';
import { ActiveTab } from '../types';

interface HeaderProps {
  onOpenMenu: () => void;
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMenu,
  activeTab,
  setActiveTab
}) => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#10131A]/90 backdrop-blur-md border-b border-[#4D4635]/40 shadow-lg">
      <div className="flex justify-between items-center w-full px-4 sm:px-6 py-2.5 max-w-4xl mx-auto">
        {/* Left: Menu & Brand Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenMenu}
            aria-label="Menu principal"
            className="text-[#F2CA50] p-2 rounded-lg hover:bg-[#1D2026] active:scale-95 transition-all flex items-center justify-center border border-[#D4AF37]/20"
          >
            <Menu className="w-5 h-5" />
          </button>

          <button
            onClick={() => setActiveTab('explorer')}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            {/* Elegant Monogram Logo */}
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#F2CA50] via-[#D4AF37] to-[#896C00] p-[1.5px] shadow-md">
              <div className="w-full h-full rounded-full bg-[#0B0E14] flex items-center justify-center">
                <span className="font-serif text-[#F2CA50] font-bold text-sm tracking-wider">IP</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-[17px] font-bold tracking-tight text-[#F2CA50] leading-tight group-hover:text-[#FFE088] transition-colors">
                Immo Prestige
              </span>
              <span className="text-[8.5px] tracking-widest text-[#D0C5AF]/90 uppercase font-semibold -mt-0.5">
                L'EXCELLENCE À VOTRE SERVICE
              </span>
            </div>
          </button>
        </div>

        {/* Right Actions: WhatsApp Direct + Concierge */}
        <div className="flex items-center gap-2">
          {/* WhatsApp Direct Pill with Pulse Indicator */}
          <a
            href="https://wa.me/33673548450?text=Bonjour%20Immo%20Prestige,%20je%20souhaite%20des%20renseignements%20sur%20vos%20villas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/35 text-xs font-bold hover:bg-[#25D366]/25 active:scale-95 transition-all shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
            <span>WhatsApp</span>
          </a>

          {/* Concierge Icon Button */}
          <button
            onClick={() => setActiveTab('concierge')}
            aria-label="Contacter la conciergerie"
            className={`p-2 rounded-lg transition-all ${
              activeTab === 'concierge'
                ? 'bg-[#D4AF37]/20 text-[#F2CA50] border border-[#D4AF37]'
                : 'text-[#F2CA50] hover:bg-[#1D2026] border border-transparent'
            }`}
          >
            <ShieldCheck className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
