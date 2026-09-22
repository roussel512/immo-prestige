import React from 'react';
import { DESTINATIONS } from '../data/villasData';
import { Search, SlidersHorizontal } from 'lucide-react';

interface DestinationFilterProps {
  selectedDestination: string;
  onSelectDestination: (dest: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  minCapacity: number;
  onCapacityChange: (cap: number) => void;
  showFilters: boolean;
  onToggleFilters: () => void;
  totalFilteredCount: number;
}

export const DestinationFilter: React.FC<DestinationFilterProps> = ({
  selectedDestination,
  onSelectDestination,
  searchQuery,
  onSearchChange,
  minCapacity,
  onCapacityChange,
  showFilters,
  onToggleFilters,
  totalFilteredCount
}) => {
  return (
    <section className="flex flex-col gap-3">
      {/* Title & Counter */}
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-lg sm:text-xl text-[#E1E2EB] font-bold">
          Nos Destinations
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#D0C5AF]">
            {totalFilteredCount} bien{totalFilteredCount > 1 ? 's' : ''} disponible{totalFilteredCount > 1 ? 's' : ''}
          </span>
          <button
            onClick={onToggleFilters}
            className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 transition-all ${
              showFilters
                ? 'bg-[#F2CA50]/20 text-[#F2CA50] border-[#D4AF37]'
                : 'bg-[#1D2026] text-[#D0C5AF] border-[#4D4635]/40 hover:text-white'
            }`}
            title="Afficher les filtres avancés"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Search Input Bar (Optional expansion or visible) */}
      {showFilters && (
        <div className="p-3 bg-[#191C22] rounded-xl subtle-border flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#D0C5AF] absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Rechercher par nom, ville (ex: Cannes, Ibiza, Marrakech...)"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-[#0B0E14] text-xs text-[#E1E2EB] pl-9 pr-3 py-2 rounded-lg border border-[#4D4635]/50 focus:border-[#D4AF37] focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#D0C5AF] whitespace-nowrap">
              Capacité min :
            </span>
            <select
              value={minCapacity}
              onChange={(e) => onCapacityChange(Number(e.target.value))}
              className="bg-[#0B0E14] text-xs text-[#F2CA50] font-bold py-2 px-3 rounded-lg border border-[#4D4635]/50 focus:border-[#D4AF37] focus:outline-none cursor-pointer"
            >
              <option value={0}>Tous groupes</option>
              <option value={15}>15+ personnes</option>
              <option value={20}>20+ personnes</option>
              <option value={25}>25+ personnes</option>
            </select>
          </div>
        </div>
      )}

      {/* Destination Chips Horizontal Scroller */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 py-1">
        {DESTINATIONS.map((dest) => {
          const isActive = selectedDestination === dest.label;
          return (
            <button
              key={dest.label}
              onClick={() => onSelectDestination(dest.label)}
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all active:scale-95 ${
                isActive
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#E5C158] text-[#0B0E14] shadow-md shadow-[#D4AF37]/20'
                  : 'bg-[#1D2026] text-[#D0C5AF] border border-[#4D4635]/40 hover:border-[#D4AF37]/50 hover:text-[#E1E2EB]'
              }`}
            >
              {dest.flag && <span className="mr-1">{dest.flag}</span>}
              {dest.label} ({dest.count})
            </button>
          );
        })}
      </div>
    </section>
  );
};
