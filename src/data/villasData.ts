import { Villa } from '../types';

export const INITIAL_VILLAS: Villa[] = [
  {
    id: 'villa-garrigue',
    code: 'IP-02',
    title: 'Villa Garrigue',
    location: 'À 20 min de Montpellier',
    region: 'Montpellier',
    country: 'France',
    flag: '🇫🇷',
    description:
      'Villa contemporaine avec piscine privée et vaste terrasse, à vingt minutes de Montpellier. Espace généreux pour recevoir jusqu\'à 25 personnes sans le moindre vis-à-vis.',
    price: 170,
    priceUnit: '/ 24h',
    depositNote: 'Acompte 1 jour : 75 € · Dès 2 jours : 30% · Solde sur place',
    rating: 4.9,
    reviewsCount: 38,
    capacityMax: 25,
    bedrooms: 5,
    poolType: 'Piscine privée exclusive',
    amenities: [
      'Jusqu\'à 25 pers.',
      'Piscine privée exclusive',
      'Grande terrasse',
      '5 chambres',
      'Barbecue & Wi-Fi',
      'Cuisine d\'été équipée',
      'Système son Sonos extérieur',
      'Bains de soleil & pergolas'
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    galleryUrls: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80'
    ],
    videoThumbnail:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    tiktokLikes: '28.4k',
    tiktokShares: '1.8k',
    verifiedZone: 'Zone Vérifiée · Montpellier Ouest',
    testimonial: {
      text: '« On était 22, personne ne s\'est senti à l\'étroit. La terrasse est immense et la piscine impeccable. »',
      author: 'Sofiane B.',
      date: 'Août 2026'
    },
    features: ['100% Sans vis-à-vis', 'Piscine chauffée', 'Climatisation réversible', 'Parking sécurisé 8 véhicules']
  },
  {
    id: 'villa-ibiza',
    code: 'IP-05',
    title: 'Villa Ibiza',
    location: 'À Ibiza, vue sur la mer',
    region: 'Espagne',
    country: 'Espagne',
    flag: '🇪🇸',
    description:
      'Villa à Ibiza avec piscine privée et vue directe sur la mer. Réveils face à la Méditerranée, pour un groupe jusqu\'à 26 personnes.',
    price: 1350,
    priceUnit: '/ semaine',
    depositNote: 'Acompte bloquant : 30 % · Solde à l\'arrivée après visite',
    rating: 4.9,
    reviewsCount: 52,
    capacityMax: 26,
    bedrooms: 7,
    poolType: 'Infinity pool panoramique',
    amenities: [
      'Jusqu\'à 26 pers.',
      'Vue mer panoramique',
      'Piscine privée',
      'Location semaine',
      '7 suites avec sdb',
      'Espace chill-out sunset',
      'Accès crique privée à 5 min',
      'Chef à domicile disponible'
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    galleryUrls: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80'
    ],
    videoThumbnail:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    tiktokLikes: '38.9k',
    tiktokShares: '2.7k',
    verifiedZone: 'Zone Vérifiée · Ibiza Côte Ouest',
    testimonial: {
      text: '« Se réveiller face à la mer à Ibiza, difficile de faire mieux. Villa spacieuse et très bien tenue. »',
      author: 'Julien V.',
      date: 'Août 2026'
    },
    features: ['Vue mer 180°', 'Coucher de soleil exclusif', 'Domaine clôturé', 'Service de conciergerie 24/7']
  },
  {
    id: 'villa-marrakech',
    code: 'IP-07',
    title: 'Villa Marrakech',
    location: 'À Marrakech, Palmeraie',
    region: 'Maroc',
    country: 'Maroc',
    flag: '🇲🇦',
    description:
      'Villa haut standing à Marrakech avec piscine privée et jardin méditerranéen. Une semaine entière pour votre famille ou votre groupe en intimité absolue.',
    price: 1250,
    priceUnit: '/ semaine',
    depositNote: 'Acompte garanti : 30 % · Remboursement garanti si annulation',
    rating: 4.9,
    reviewsCount: 64,
    capacityMax: 24,
    bedrooms: 6,
    poolType: 'Grand bassin chauffé 15m',
    amenities: [
      'Jusqu\'à 24 pers.',
      'Jardin luxuriant 5 000 m²',
      'Piscine privative',
      'Location semaine',
      'Patio traditionnel en zellige',
      'Hammam traditionnel privé',
      'Personnel de maison inclus',
      'Gouvernante & petits-déjeuners'
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    galleryUrls: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    videoThumbnail:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    tiktokLikes: '41.3k',
    tiktokShares: '3.9k',
    verifiedZone: 'Zone Vérifiée · Marrakech Palmeraie',
    testimonial: {
      text: '« Une semaine formidable. Le rapport qualité-prix est difficile à battre pour ce standing en plein cœur de Marrakech. »',
      author: 'Sofiane B.',
      date: 'Juillet 2026'
    },
    features: ['Hammam privatif', 'Gouvernante & cuisinière', 'Palmeraie sécurisée', 'Bassin 15 mètres']
  },
  {
    id: 'villa-cote-dazur',
    code: 'IP-01',
    title: 'Villa Côte d\'Azur Exclusive',
    location: 'Cannes · Côte d\'Azur',
    region: 'Côte d’Azur',
    country: 'France',
    flag: '🇫🇷',
    description:
      'Piscine à débordement féerique au crépuscule sur les hauteurs de Cannes. Architecture contemporaine, finitions marbre et verre, intimité totale pour 22 personnes.',
    price: 210,
    priceUnit: '/ 24h',
    depositNote: 'Acompte 1 jour : 75 € · Dès 2 jours : 30% · Solde sur place',
    rating: 5.0,
    reviewsCount: 44,
    capacityMax: 22,
    bedrooms: 6,
    poolType: 'Piscine à débordement féerique',
    amenities: [
      'Jusqu\'à 22 pers.',
      'Vue mer & collines cannoises',
      'Infinity pool chauffée',
      'Terrasse lounge 300 m²',
      'Salle de sport & sauna',
      'Système domotique intégral'
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    galleryUrls: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    videoThumbnail:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    tiktokLikes: '24.8k',
    tiktokShares: '1.2k',
    verifiedZone: 'Zone Vérifiée · Hauteurs de Cannes',
    testimonial: {
      text: '« La vue au crépuscule est magique, la piscine à débordement sans aucun vis-à-vis nous a conquis. »',
      author: 'Caroline D.',
      date: 'Septembre 2026'
    },
    features: ['Dominante Cannes', 'Domotique haut de gamme', 'Jacuzzi 8 places', 'Cave à vin climatisée']
  },
  {
    id: 'villa-paris-domaine',
    code: 'IP-03',
    title: 'Domaine d\'Île-de-France',
    location: 'À 35 min de Paris Porte Maillot',
    region: 'Paris / IDF',
    country: 'France',
    flag: '🇫🇷',
    description:
      'Manoir contemporain sur un parc boisé de 3 hectares. Grande piscine intérieure et extérieure chauffée, aucun voisinage pour vos réceptions d\'exception jusqu\'à 30 personnes.',
    price: 240,
    priceUnit: '/ 24h',
    depositNote: 'Acompte 1 jour : 75 € · Dès 2 jours : 30% · Solde après inspection',
    rating: 4.9,
    reviewsCount: 71,
    capacityMax: 30,
    bedrooms: 8,
    poolType: 'Double piscine intérieure & extérieure',
    amenities: [
      'Jusqu\'à 30 pers.',
      'Parc clos 3 hectares',
      'Piscine chauffée 28°C',
      'Salle de cinéma privée',
      'Court de tennis',
      'Spa & jacuzzi nordique'
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    galleryUrls: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    videoThumbnail:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    tiktokLikes: '19.4k',
    tiktokShares: '1.4k',
    verifiedZone: 'Zone Vérifiée · Yvelines / Vallée de Chevreuse',
    testimonial: {
      text: '« J\'étais méfiant à l\'idée de verser un acompte à l\'avance. Réponse en quelques minutes, informations claires, aucune mauvaise surprise le jour J. »',
      author: 'Karim D.',
      date: 'Septembre 2026'
    },
    features: ['Parc boisé 30 000 m²', 'Court de tennis', 'Cinéma privé 12 sièges', 'Piscine couverte chauffée']
  },
  {
    id: 'villa-marseille-calanques',
    code: 'IP-04',
    title: 'Domaine des Calanques',
    location: 'Marseille Sud · Vue Mer & Pins',
    region: 'Marseille',
    country: 'France',
    flag: '🇫🇷',
    description:
      'Bâtisse d\'architecte surplombant les calanques avec piscine sculptée dans la roche. Vue mer féerique, calme olympien garanti sans vis-à-vis.',
    price: 195,
    priceUnit: '/ 24h',
    depositNote: 'Acompte 1 jour : 75 € · Dès 2 jours : 30% · Solde sur place',
    rating: 4.8,
    reviewsCount: 31,
    capacityMax: 20,
    bedrooms: 5,
    poolType: 'Piscine naturelle chauffée à débordement',
    amenities: [
      'Jusqu\'à 20 pers.',
      'Vue Calanques & Mer',
      'Piscine d\'eau salée',
      'Terrasse en teck massif',
      'Terrain de pétanque ombragé',
      'Barbecue plancha pro'
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
    galleryUrls: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80'
    ],
    videoThumbnail:
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
    tiktokLikes: '16.7k',
    tiktokShares: '890',
    verifiedZone: 'Zone Vérifiée · Calanques / Cassis Ouest',
    testimonial: {
      text: '« Un séjour inoubliable face aux calanques. La piscine et le coucher de soleil sont tout simplement grandioses. »',
      author: 'Thomas G.',
      date: 'Juillet 2026'
    },
    features: ['Piscine taillée dans la roche', 'Terrain de pétanque', 'Cuisine extérieure', 'Chemin privé']
  },
  {
    id: 'villa-antilles-stbarth',
    code: 'IP-08',
    title: 'Villa Palm Saint-Barth',
    location: 'Gustavia · Baie de Saint-Jean',
    region: 'Antilles',
    country: 'France / Antilles',
    flag: '🌴',
    description:
      'Refuge caribéen ultra-exclusif perché au-dessus de la baie turquoise. Piscine miroir, brise alizé et prestations 5 étoiles pour un séjour paradisiaque.',
    price: 1850,
    priceUnit: '/ semaine',
    depositNote: 'Acompte garanti : 30 % · Solde à l\'arrivée après conciergerie',
    rating: 5.0,
    reviewsCount: 29,
    capacityMax: 18,
    bedrooms: 5,
    poolType: 'Piscine miroir chauffée',
    amenities: [
      'Jusqu\'à 18 pers.',
      'Vue panoramique Baie Saint-Jean',
      'Piscine miroir à débordement',
      'Voiturette électrique fournie',
      'Cave à champagne',
      'Conciergerie VIP 24h/24'
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80',
    galleryUrls: [
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80'
    ],
    videoThumbnail:
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80',
    tiktokLikes: '45.1k',
    tiktokShares: '5.2k',
    verifiedZone: 'Zone Vérifiée · Saint-Jean Hauteurs',
    testimonial: {
      text: '« Le paradis sur terre. Tout a été orchestré par la conciergerie avec une minutie chirurgicale. »',
      author: 'Béatrice M.',
      date: 'Août 2026'
    },
    features: ['Vue Baie Saint-Jean', 'Voiturettes de golf incluses', 'Service ménage quotidien', 'Barbecue gaz']
  }
];

export const DESTINATIONS = [
  { label: 'Tous', count: 46 },
  { label: 'Paris / IDF', count: 13 },
  { label: 'Côte d’Azur', count: 4 },
  { label: 'Marseille', count: 4 },
  { label: 'Montpellier', count: 4 },
  { label: 'Espagne', count: 6, flag: '🇪🇸' },
  { label: 'Maroc', count: 1, flag: '🇲🇦' },
  { label: 'Antilles', count: 3, flag: '🌴' },
  { label: 'Provence', count: 2 },
  { label: 'Corse', count: 1 }
];

export const WRITTEN_GUARANTEES = [
  {
    num: '01',
    title: 'Remboursement intégral si nous annulons',
    desc: 'Indisponibilité ou météo impraticable : votre acompte vous est rendu sans délai, virement immédiat.'
  },
  {
    num: '02',
    title: 'Vous ne payez jamais tout à l\'avance',
    desc: '75 € pour 1-2 jours, solde sur place après inspection complète des lieux avec notre régisseur.'
  },
  {
    num: '03',
    title: 'Ce que vous voyez est ce que vous réservez',
    desc: 'Chaque bien est certifié par sa vidéo réelle sans filtre, ni grand angle trompeur, ni retouche.'
  },
  {
    num: '04',
    title: 'Un interlocuteur unique et joignable',
    desc: 'Un seul numéro WhatsApp dédié (+33 6 73 54 84 50), 7j/7 de 8h à 22h, réponse en moins de 10 min.'
  },
  {
    num: '05',
    title: 'Confidentialité totale & 100% sans vis-à-vis',
    desc: 'Aucun drone, aucun vis-à-vis direct, hauts murs ou parcs arborés pour garantir votre intimité absolue.'
  },
  {
    num: '06',
    title: 'Protocole sanitaire & préparation du bassin',
    desc: 'Bassin traité, filtration en continue 24h avant votre arrivée, literie repassée et mobilier stérilisé.'
  }
];

export const CLIENT_REVIEWS = [
  {
    author: 'Mathilde R.',
    role: 'Séjour d\'une semaine en Espagne',
    stars: 5,
    text: '« Tout s\'est déroulé exactement comme annoncé. Le bien correspondait à la vidéo, et l\'équipe a répondu à chacune de nos questions avant la réservation. »',
    avatar: 'M'
  },
  {
    author: 'Karim D.',
    role: 'Journée à 30 min de Paris',
    stars: 5,
    text: '« J\'étais méfiant à l\'idée de verser un acompte à l\'avance. Réponse en quelques minutes, informations claires, aucune mauvaise surprise le jour J. »',
    avatar: 'K'
  },
  {
    author: 'Sofiane B.',
    role: 'Villa à Marrakech',
    stars: 5,
    text: '« Une semaine formidable. Le rapport qualité-prix est difficile à battre pour ce standing en plein cœur de Marrakech. »',
    avatar: 'S'
  },
  {
    author: 'Alexandre & Léa',
    role: 'Villa Côte d\'Azur Exclusive',
    stars: 5,
    text: '« L\'acompte sécurisé et le contact WhatsApp ultra-réactif nous ont totalement rassurés. La villa est encore plus impressionnante en vrai ! »',
    avatar: 'A'
  }
];
