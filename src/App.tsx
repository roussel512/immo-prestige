import React, { useState, useEffect, useMemo } from 'react';
import { Villa, ActiveTab } from './types';
import { INITIAL_VILLAS } from './data/villasData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TikTokReels } from './components/TikTokReels';
import { DestinationFilter } from './components/DestinationFilter';
import { ConfidentialityNotice } from './components/ConfidentialityNotice';
import { VillaCard } from './components/VillaCard';
import { DepositSection } from './components/DepositSection';
import { GuaranteesSection } from './components/GuaranteesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ConciergeBanner } from './components/ConciergeBanner';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';
import { ReelPlayerModal } from './components/ReelPlayerModal';
import { ImageEditorModal } from './components/ImageEditorModal';
import { VerifiedRadiusModal } from './components/VerifiedRadiusModal';
import { VillaDetailModal } from './components/VillaDetailModal';
import { NavigationDrawer } from './components/NavigationDrawer';
import {
  Heart,
  MessageCircle,
  Building,
  Sparkles,
  PhoneCall,
  Search,
  Filter,
  CheckCircle2,
  Calendar,
  Lock
} from 'lucide-react';

export default function App() {
  const [villas, setVillas] = useState<Villa[]>(() => {
    const saved = localStorage.getItem('immo_prestige_villas');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_VILLAS;
      }
    }
    return INITIAL_VILLAS;
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('immo_prestige_favs');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return ['villa-garrigue'];
  });

  const [activeTab, setActiveTab] = useState<ActiveTab>('explorer');
  const [selectedDestination, setSelectedDestination] = useState<string>('Tous');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [minCapacity, setMinCapacity] = useState<number>(0);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // Modals state
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);
  const [selectedReelVilla, setSelectedReelVilla] = useState<Villa | null>(null);
  const [editingImageVilla, setEditingImageVilla] = useState<Villa | null>(null);
  const [radiusVilla, setRadiusVilla] = useState<Villa | null>(null);
  const [inspectingVilla, setInspectingVilla] = useState<Villa | null>(null);

  // Persist villas on modification
  useEffect(() => {
    localStorage.setItem('immo_prestige_villas', JSON.stringify(villas));
  }, [villas]);

  // Persist favorites
  useEffect(() => {
    localStorage.setItem('immo_prestige_favs', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (villaId: string) => {
    setFavorites((prev) =>
      prev.includes(villaId) ? prev.filter((id) => id !== villaId) : [...prev, villaId]
    );
  };

  const handleUpdateImage = (villaId: string, newImageUrl: string) => {
    setVillas((prev) =>
      prev.map((v) => (v.id === villaId ? { ...v, imageUrl: newImageUrl } : v))
    );
  };

  const handleBookWhatsApp = (villa: Villa) => {
    const message = encodeURIComponent(
      `Bonjour Immo Prestige, je souhaite réserver la ${villa.title} (${villa.code}) à ${villa.location}. Merci de me donner la marche à suivre.`
    );
    window.open(`https://wa.me/33673548450?text=${message}`, '_blank');
  };

  // Filter logic
  const filteredVillas = useMemo(() => {
    return villas.filter((villa) => {
      // Destination filter
      if (selectedDestination !== 'Tous') {
        const matchRegion = villa.region.toLowerCase() === selectedDestination.toLowerCase();
        const matchCountry = villa.country.toLowerCase() === selectedDestination.toLowerCase();
        if (!matchRegion && !matchCountry) return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchText =
          villa.title.toLowerCase().includes(q) ||
          villa.location.toLowerCase().includes(q) ||
          villa.description.toLowerCase().includes(q) ||
          villa.code.toLowerCase().includes(q);
        if (!matchText) return false;
      }
      // Capacity
      if (minCapacity > 0 && villa.capacityMax < minCapacity) {
        return false;
      }
      return true;
    });
  }, [villas, selectedDestination, searchQuery, minCapacity]);

  const favoriteVillas = useMemo(() => {
    return villas.filter((v) => favorites.includes(v.id));
  }, [villas, favorites]);

  return (
    <div className="bg-[#0B0E14] text-[#E1E2EB] min-h-screen selection:bg-[#F2CA50] selection:text-[#3C2F00] pb-24">
      {/* Top Header */}
      <Header
        onOpenMenu={() => setIsMenuDrawerOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Container - Maximum ergonomics matching screenshot */}
      <main className="w-full max-w-xl mx-auto pt-16 sm:pt-20 px-4 flex flex-col gap-8">
        {/* VIEW 1: EXPLORER (The Main Hub faithfully matching the screenshot) */}
        {activeTab === 'explorer' && (
          <>
            {/* HERO SECTION */}
            <Hero />

            {/* SECTION 3: TIKTOK VIRAL & EXCLUSIVE 9:16 VIDEOS */}
            <TikTokReels
              villas={villas}
              onSelectReel={(v) => setSelectedReelVilla(v)}
              onBookWhatsApp={handleBookWhatsApp}
            />

            {/* SECTION 4: DESTINATION FILTER CHIPS */}
            <DestinationFilter
              selectedDestination={selectedDestination}
              onSelectDestination={setSelectedDestination}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              minCapacity={minCapacity}
              onCapacityChange={setMinCapacity}
              showFilters={showFilters}
              onToggleFilters={() => setShowFilters(!showFilters)}
              totalFilteredCount={filteredVillas.length}
            />

            {/* CONFIDENTIALITY NOTICE ACCORDION */}
            <ConfidentialityNotice onLearnMore={() => setRadiusVilla(villas[0])} />

            {/* SECTION 5: VILLA CATALOG CARDS (Immersive Feed) */}
            <section className="flex flex-col gap-6">
              {filteredVillas.map((villa) => (
                <VillaCard
                  key={villa.id}
                  villa={villa}
                  isFavorite={favorites.includes(villa.id)}
                  onToggleFavorite={toggleFavorite}
                  onSelectVilla={(v) => setInspectingVilla(v)}
                  onViewRadius={(v) => setRadiusVilla(v)}
                  onEditImage={(v) => setEditingImageVilla(v)}
                />
              ))}

              {filteredVillas.length === 0 && (
                <div className="p-8 rounded-2xl bg-[#191C22] subtle-border text-center flex flex-col items-center gap-3">
                  <p className="text-sm text-[#D0C5AF]">
                    Aucune villa ne correspond aux filtres sélectionnés.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedDestination('Tous');
                      setSearchQuery('');
                      setMinCapacity(0);
                    }}
                    className="px-4 py-2 rounded-xl bg-[#F2CA50] text-[#0B0E14] text-xs font-bold"
                  >
                    Réinitialiser les filtres
                  </button>
                </div>
              )}
            </section>

            {/* SECTION 6: ACOMPTE & TRANSPARENCE GARANTIES */}
            <DepositSection />

            {/* SECTION 7: SIX GARANTIES ECRITES */}
            <GuaranteesSection />

            {/* SECTION 8: REVIEWS & SOCIAL PROOF */}
            <ReviewsSection />

            {/* DIRECT CONCIERGE BANNER */}
            <ConciergeBanner />
          </>
        )}

        {/* VIEW 2: VILLAS (Dedicated Catalog & Filter Browser) */}
        {activeTab === 'villas' && (
          <div className="flex flex-col gap-6 pt-2">
            <div>
              <span className="text-xs text-[#F2CA50] uppercase font-bold tracking-wider">
                Catalogue Intégral
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl text-white font-bold mt-1">
                Toutes nos villas avec piscine privée
              </h1>
              <p className="text-xs sm:text-sm text-[#D0C5AF] mt-1">
                46 propriétés de prestige 100% sans vis-à-vis en France, Espagne, Maroc et Antilles.
              </p>
            </div>

            <DestinationFilter
              selectedDestination={selectedDestination}
              onSelectDestination={setSelectedDestination}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              minCapacity={minCapacity}
              onCapacityChange={setMinCapacity}
              showFilters={true}
              onToggleFilters={() => {}}
              totalFilteredCount={filteredVillas.length}
            />

            <div className="flex flex-col gap-6">
              {filteredVillas.map((villa) => (
                <VillaCard
                  key={villa.id}
                  villa={villa}
                  isFavorite={favorites.includes(villa.id)}
                  onToggleFavorite={toggleFavorite}
                  onSelectVilla={(v) => setInspectingVilla(v)}
                  onViewRadius={(v) => setRadiusVilla(v)}
                  onEditImage={(v) => setEditingImageVilla(v)}
                />
              ))}
            </div>
          </div>
        )}

        {/* VIEW 3: FAVORIS (Saved Properties) */}
        {activeTab === 'favoris' && (
          <div className="flex flex-col gap-6 pt-2">
            <div>
              <span className="text-xs text-[#F2CA50] uppercase font-bold tracking-wider">
                Sélection Privée
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl text-white font-bold mt-1">
                Vos Villas Favorites ({favoriteVillas.length})
              </h1>
              <p className="text-xs sm:text-sm text-[#D0C5AF] mt-1">
                Retrouvez vos propriétés présélectionnées pour vos futurs séjours d'exception.
              </p>
            </div>

            {favoriteVillas.length > 0 ? (
              <div className="flex flex-col gap-6">
                {favoriteVillas.map((villa) => (
                  <VillaCard
                    key={villa.id}
                    villa={villa}
                    isFavorite={true}
                    onToggleFavorite={toggleFavorite}
                    onSelectVilla={(v) => setInspectingVilla(v)}
                    onViewRadius={(v) => setRadiusVilla(v)}
                    onEditImage={(v) => setEditingImageVilla(v)}
                  />
                ))}
              </div>
            ) : (
              <div className="p-8 rounded-2xl bg-[#191C22] subtle-border text-center flex flex-col items-center gap-3">
                <Heart className="w-8 h-8 text-[#D0C5AF]" />
                <p className="text-sm text-[#E1E2EB] font-semibold">
                  Vous n'avez pas encore ajouté de villa à vos favoris.
                </p>
                <p className="text-xs text-[#D0C5AF]">
                  Cliquez sur l'icône de cœur sur n'importe quelle carte pour l'enregistrer ici.
                </p>
                <button
                  onClick={() => setActiveTab('explorer')}
                  className="px-4 py-2 rounded-xl bg-[#F2CA50] text-[#0B0E14] text-xs font-bold mt-2"
                >
                  Découvrir les villas
                </button>
              </div>
            )}
          </div>
        )}

        {/* VIEW 4: CONCIERGE (VIP Direct Line & WhatsApp Support) */}
        {activeTab === 'concierge' && (
          <div className="flex flex-col gap-6 pt-2">
            <div>
              <span className="text-xs text-[#F2CA50] uppercase font-bold tracking-wider">
                Assistance Privée 7j/7
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl text-white font-bold mt-1">
                La Conciergerie Immo Prestige
              </h1>
              <p className="text-xs sm:text-sm text-[#D0C5AF] mt-1">
                Nos conseillers dédiés vous accompagnent à chaque étape, de la visite privée au règlement final.
              </p>
            </div>

            <ConciergeBanner />

            {/* Fast Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="https://wa.me/33673548450?text=Bonjour,%20je%20souhaite%20planifier%20une%20visite%20sur%20place%20d'une%20villa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#1D2026] subtle-border hover:border-[#25D366] transition-colors flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Organiser une visite sur place</h4>
                  <p className="text-[11px] text-[#D0C5AF] mt-0.5">
                    Planifiez une inspection physique des lieux avec notre régisseur local.
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/33673548450?text=Bonjour,%20j'ai%20une%20demande%20sur-mesure%20(chef,%20chauffeur,%20dates%20spéciales)"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#1D2026] subtle-border hover:border-[#D4AF37] transition-colors flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-[#F2CA50]/20 text-[#F2CA50] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Demande sur-mesure & VIP</h4>
                  <p className="text-[11px] text-[#D0C5AF] mt-0.5">
                    Chef à domicile, chauffeur, organisation d'anniversaires ou retraites.
                  </p>
                </div>
              </a>
            </div>

            <GuaranteesSection />
          </div>
        )}

        {/* FOOTER */}
        <Footer />
      </main>

      {/* Bottom Sticky Navigation */}
      <BottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        favoritesCount={favorites.length}
      />

      {/* MODALS */}
      {/* 1. TikTok 9:16 Video Player Modal */}
      <ReelPlayerModal
        villa={selectedReelVilla}
        isOpen={!!selectedReelVilla}
        onClose={() => setSelectedReelVilla(null)}
        onBookWhatsApp={handleBookWhatsApp}
      />

      {/* 2. Dynamic Image Link Editor Modal */}
      <ImageEditorModal
        villa={editingImageVilla}
        isOpen={!!editingImageVilla}
        onClose={() => setEditingImageVilla(null)}
        onUpdateImage={handleUpdateImage}
      />

      {/* 3. Verified Confidential Radius Modal */}
      <VerifiedRadiusModal
        villa={radiusVilla}
        isOpen={!!radiusVilla}
        onClose={() => setRadiusVilla(null)}
      />

      {/* 4. Comprehensive Villa Detail Modal */}
      <VillaDetailModal
        villa={inspectingVilla}
        isOpen={!!inspectingVilla}
        onClose={() => setInspectingVilla(null)}
        isFavorite={inspectingVilla ? favorites.includes(inspectingVilla.id) : false}
        onToggleFavorite={toggleFavorite}
        onEditImage={(v) => setEditingImageVilla(v)}
      />

      {/* 5. Navigation Drawer */}
      <NavigationDrawer
        isOpen={isMenuDrawerOpen}
        onClose={() => setIsMenuDrawerOpen(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
}
