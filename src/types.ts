export interface Villa {
  id: string;
  code: string; // e.g. "IP-02"
  title: string;
  location: string;
  region: string; // 'Paris / IDF' | 'Côte d’Azur' | 'Marseille' | 'Montpellier' | 'Espagne' | 'Maroc' | 'Antilles' | 'Provence' | 'Corse'
  country: string;
  flag: string;
  description: string;
  price: number;
  priceUnit: '/ 24h' | '/ semaine';
  depositNote: string;
  rating: number;
  reviewsCount: number;
  capacityMax: number;
  bedrooms: number;
  poolType: string;
  amenities: string[];
  imageUrl: string;
  galleryUrls: string[];
  videoThumbnail?: string;
  tiktokLikes?: string;
  tiktokShares?: string;
  verifiedZone: string;
  testimonial: {
    text: string;
    author: string;
    date: string;
  };
  features: string[];
}

export type ActiveTab = 'explorer' | 'villas' | 'favoris' | 'concierge';
