/**
 * Utilitaires SEO
 * Fonctions helpers pour le referencement
 */

/**
 * Genere les donnees structurees pour une page de service
 */
export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.name,
    "provider": {
      "@type": "RoofingContractor",
      "name": "Couvreur Boutantin",
      "url": "https://couvreur-boutantin.fr"
    },
    "areaServed": {
      "@type": "City",
      "name": "Dunkerque"
    },
    "description": service.description,
    "url": service.url
  };
}

/**
 * Genere les donnees structurees HowTo pour les pages services
 * Ameliore les chances d'apparaitre en position 0 (featured snippets)
 */
export function generateHowToSchema(service: {
  name: string;
  steps: Array<{ name: string; text: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `Comment obtenir une ${service.name.toLowerCase()} a Dunkerque`,
    "description": `Guide pour faire realiser une ${service.name.toLowerCase()} par un professionnel a Dunkerque`,
    "totalTime": "PT48H",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": "Devis gratuit"
    },
    "step": service.steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text
    }))
  };
}

/**
 * Genere les donnees structurees pour une page de ville
 */
export function generateCitySchema(city: {
  name: string;
  postalCode: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Couvreur",
    "provider": {
      "@type": "RoofingContractor",
      "name": "Couvreur Boutantin",
      "url": "https://couvreur-boutantin.fr"
    },
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "postalCode": city.postalCode
    },
    "description": city.description,
    "url": city.url
  };
}

/**
 * Liste des services avec leurs donnees SEO
 */
export const services = [
  {
    slug: 'reparation-toiture',
    name: 'Reparation toiture',
    title: 'Reparation de toiture a Dunkerque',
    description: 'Reparation de toiture professionnelle a Dunkerque. Intervention rapide pour fuites, tuiles cassees et dommages. Devis gratuit sous 24h.',
    shortDescription: 'Intervention rapide pour reparer tous types de dommages sur votre toiture : fuites, tuiles cassees, infiltrations.',
    image: '/images/services/service-reparation.webp',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`
  },
  {
    slug: 'renovation-toiture',
    name: 'Renovation toiture',
    title: 'Renovation de toiture a Dunkerque',
    description: 'Renovation complete de toiture a Dunkerque et alentours. Remplacement de couverture, charpente et isolation. Artisan RGE certifie.',
    shortDescription: 'Renovation complete de votre toiture : remplacement de couverture, refection de charpente et amelioration de l\'isolation.',
    image: '/images/services/service-renovation.webp',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`
  },
  {
    slug: 'demoussage',
    name: 'Demoussage toiture',
    title: 'Demoussage de toiture a Dunkerque',
    description: 'Service professionnel de demoussage et nettoyage de toiture a Dunkerque. Traitement anti-mousse longue duree. Prolongez la vie de votre toit.',
    shortDescription: 'Nettoyage et traitement anti-mousse professionnel pour proteger votre toiture et prolonger sa duree de vie.',
    image: '/images/services/service-demoussage.webp',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>`
  },
  {
    slug: 'zinguerie',
    name: 'Zinguerie',
    title: 'Zinguerie a Dunkerque',
    description: 'Travaux de zinguerie a Dunkerque : gouttieres, descentes, faitage et solins. Installation et reparation par artisan qualifie.',
    shortDescription: 'Installation et reparation de gouttieres, descentes d\'eau pluviale, faitages et solins en zinc.',
    image: '/images/services/service-zinguerie.webp',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
  },
  {
    slug: 'isolation',
    name: 'Isolation toiture',
    title: 'Isolation de toiture a Dunkerque',
    description: 'Isolation de toiture et combles a Dunkerque. Artisan RGE pour aides financieres. Reduisez vos factures d\'energie.',
    shortDescription: 'Isolation performante de votre toiture et combles. Artisan RGE certifie, eligible aux aides financieres.',
    image: '/images/services/service-isolation.webp',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v18M3 12h18"/><circle cx="12" cy="12" r="9"/></svg>`
  },
  {
    slug: 'urgence',
    name: 'Urgence toiture',
    title: 'Urgence toiture a Dunkerque',
    description: 'Intervention d\'urgence toiture 24h/24 a Dunkerque. Bache de protection, reparation rapide apres tempete ou sinistre.',
    shortDescription: 'Intervention rapide pour urgences toiture : bachage, securisation et reparation suite a tempete ou sinistre.',
    image: '/images/services/service-urgence.webp',
    badge: '24/7',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`
  }
];

/**
 * Liste des villes avec leurs donnees SEO
 */
export const cities = [
  {
    slug: 'dunkerque',
    name: 'Dunkerque',
    postalCode: '59140',
    title: 'Couvreur a Dunkerque',
    description: 'Votre couvreur professionnel a Dunkerque (59140). Reparation, renovation et entretien de toiture. Devis gratuit, intervention rapide.',
    shortDescription: 'Artisan couvreur intervenant sur tout Dunkerque et ses quartiers pour tous vos travaux de toiture.',
    image: '/images/zones/dunkerque-ville.webp'
  },
  {
    slug: 'calais',
    name: 'Calais',
    postalCode: '62100',
    title: 'Couvreur a Calais',
    description: 'Couvreur professionnel a Calais (62100). Tous travaux de toiture : reparation, renovation, demoussage. Devis gratuit.',
    shortDescription: 'Intervention sur Calais et communes voisines pour la reparation et l\'entretien de votre toiture.',
    image: '/images/zones/calais-architecture.webp'
  },
  {
    slug: 'gravelines',
    name: 'Gravelines',
    postalCode: '59820',
    title: 'Couvreur a Gravelines',
    description: 'Artisan couvreur a Gravelines (59820). Reparation de toiture, zinguerie et demoussage. Intervention rapide, devis gratuit.',
    shortDescription: 'Couvreur de proximite pour Gravelines, Petit-Fort-Philippe et Grand-Fort-Philippe.',
    image: '/images/zones/gravelines-toits.webp'
  },
  {
    slug: 'grande-synthe',
    name: 'Grande-Synthe',
    postalCode: '59760',
    title: 'Couvreur a Grande-Synthe',
    description: 'Couvreur professionnel a Grande-Synthe (59760). Tous travaux de couverture et zinguerie. Artisan local de confiance.',
    shortDescription: 'Votre artisan couvreur pour Grande-Synthe et les communes environnantes.',
    image: '/images/zones/grande-synthe.webp'
  },
  {
    slug: 'coudekerque',
    name: 'Coudekerque-Branche',
    postalCode: '59210',
    title: 'Couvreur a Coudekerque-Branche',
    description: 'Couvreur a Coudekerque-Branche (59210). Reparation, renovation et entretien de toiture. Devis gratuit sous 24h.',
    shortDescription: 'Artisan couvreur intervenant sur Coudekerque-Branche et Coudekerque-Village.',
    image: '/images/zones/maisons-dunkerque.webp'
  },
  {
    slug: 'saint-pol-sur-mer',
    name: 'Saint-Pol-sur-Mer',
    postalCode: '59430',
    title: 'Couvreur a Saint-Pol-sur-Mer',
    description: 'Votre couvreur a Saint-Pol-sur-Mer (59430). Tous travaux de toiture realises par un artisan certifie RGE.',
    shortDescription: 'Couvreur local pour Saint-Pol-sur-Mer, Fort-Mardyck et quartiers voisins.',
    image: '/images/zones/quartier-residentiel.webp'
  },
  {
    slug: 'bray-dunes',
    name: 'Bray-Dunes',
    postalCode: '59123',
    title: 'Couvreur a Bray-Dunes',
    description: 'Artisan couvreur a Bray-Dunes (59123). Specialiste toiture en bord de mer. Reparation et entretien.',
    shortDescription: 'Expert en toiture pour Bray-Dunes et communes littorales du Nord.',
    image: '/images/zones/littoral-nord.webp'
  },
  {
    slug: 'loon-plage',
    name: 'Loon-Plage',
    postalCode: '59279',
    title: 'Couvreur a Loon-Plage',
    description: 'Couvreur professionnel a Loon-Plage (59279). Intervention rapide pour tous travaux de couverture et zinguerie.',
    shortDescription: 'Artisan couvreur pour Loon-Plage et zone industrielle dunkerquoise.',
    image: '/images/zones/toiture-flamande.webp'
  }
];

/**
 * Articles de blog pour le referencement longue traine
 */
export const blogArticles = [
  {
    slug: 'comment-reparer-fuite-toiture',
    title: 'Comment reparer une fuite de toiture ?',
    description: 'Guide complet pour identifier et reparer une fuite de toiture. Conseils de professionnels et etapes a suivre.',
    excerpt: 'Decouvrez les etapes essentielles pour identifier l\'origine d\'une fuite et les solutions pour reparer votre toiture efficacement.',
    image: '/images/services/service-reparation.webp',
    category: 'Reparation',
    date: '2024-11-15',
    readTime: '7 min'
  },
  {
    slug: 'prix-renovation-toiture-2024',
    title: 'Prix renovation toiture en 2024 : guide complet',
    description: 'Tous les prix pour renover votre toiture en 2024. Tarifs au m2 selon les materiaux et types de travaux.',
    excerpt: 'Quel budget prevoir pour renover votre toiture ? Decouvrez les tarifs moyens au m2 selon le type de couverture et les travaux.',
    image: '/images/services/service-renovation.webp',
    category: 'Renovation',
    date: '2024-11-10',
    readTime: '10 min'
  },
  {
    slug: 'quand-demousser-toiture',
    title: 'Quand et pourquoi demousser sa toiture ?',
    description: 'Tout savoir sur le demoussage de toiture : frequence, signes d\'alerte et benefices pour votre couverture.',
    excerpt: 'Le demoussage est essentiel pour prolonger la vie de votre toiture. Apprenez a reconnaitre les signes et la bonne frequence.',
    image: '/images/services/service-demoussage.webp',
    category: 'Entretien',
    date: '2024-11-05',
    readTime: '5 min'
  },
  {
    slug: 'aides-isolation-toiture-2024',
    title: 'Aides isolation toiture 2024 : MaPrimeRenov et CEE',
    description: 'Guide des aides financieres pour l\'isolation de toiture en 2024. MaPrimeRenov, CEE, eco-PTZ expliques.',
    excerpt: 'Beneficiez des aides de l\'Etat pour isoler votre toiture. Decouvrez les montants et conditions pour MaPrimeRenov et les CEE.',
    image: '/images/services/service-isolation.webp',
    category: 'Isolation',
    date: '2024-10-28',
    readTime: '8 min'
  },
  {
    slug: 'entretien-gouttieres-guide',
    title: 'Entretien des gouttieres : le guide complet',
    description: 'Comment entretenir vos gouttieres pour eviter les problemes. Nettoyage, verification et remplacement.',
    excerpt: 'Des gouttieres bien entretenues protegent votre maison. Suivez notre guide pour un entretien efficace et preventif.',
    image: '/images/services/service-zinguerie.webp',
    category: 'Zinguerie',
    date: '2024-10-20',
    readTime: '6 min'
  }
];

/**
 * Temoignages clients pour la page dediee
 */
export const testimonials = [
  {
    id: 1,
    name: 'Pierre Dumont',
    location: 'Dunkerque',
    date: '2024-10-15',
    rating: 5,
    title: 'Intervention rapide et professionnelle',
    text: 'Suite a une fuite importante apres la tempete, l\'equipe de Couvreur Boutantin est intervenue en urgence. Le travail a ete realise rapidement et proprement. Je recommande vivement leurs services.',
    service: 'Reparation toiture',
    image: '/images/gallery/realisation-01-apres.webp'
  },
  {
    id: 2,
    name: 'Marie Lefebvre',
    location: 'Calais',
    date: '2024-09-28',
    rating: 5,
    title: 'Renovation complete reussie',
    text: 'Tres satisfaite de la renovation complete de ma toiture. L\'equipe a respecte les delais annonces, le chantier est reste propre et le resultat est impeccable. Excellent rapport qualite-prix.',
    service: 'Renovation toiture',
    image: '/images/gallery/realisation-01-apres.webp'
  },
  {
    id: 3,
    name: 'Jean-Marc Bernard',
    location: 'Grande-Synthe',
    date: '2024-09-10',
    rating: 5,
    title: 'Demoussage impeccable',
    text: 'Demoussage et traitement hydrofuge realises avec soin. Ma toiture a retrouve son aspect d\'origine. L\'equipe est tres professionnelle et les conseils d\'entretien tres utiles.',
    service: 'Demoussage',
    image: '/images/gallery/realisation-02-apres.webp'
  },
  {
    id: 4,
    name: 'Sophie Martin',
    location: 'Gravelines',
    date: '2024-08-22',
    rating: 5,
    title: 'Isolation performante',
    text: 'Isolation des combles realisee par des professionnels competents. L\'accompagnement pour les aides MaPrimeRenov a ete tres apprecie. On ressent deja la difference en termes de confort.',
    service: 'Isolation',
    image: '/images/services/service-isolation.webp'
  },
  {
    id: 5,
    name: 'Philippe Rousseau',
    location: 'Coudekerque-Branche',
    date: '2024-08-05',
    rating: 5,
    title: 'Zinguerie de qualite',
    text: 'Remplacement complet des gouttieres en zinc. Travail soigne, finitions parfaites. L\'artisan a pris le temps d\'expliquer les travaux et de repondre a toutes mes questions.',
    service: 'Zinguerie',
    image: '/images/gallery/realisation-03-apres.webp'
  },
  {
    id: 6,
    name: 'Isabelle Petit',
    location: 'Saint-Pol-sur-Mer',
    date: '2024-07-18',
    rating: 5,
    title: 'Service d\'urgence efficace',
    text: 'Appel en urgence pour une fuite un dimanche soir. Intervention le lendemain matin pour bacher et securiser. Reparation definitive dans la semaine. Service reactif et fiable.',
    service: 'Urgence toiture',
    image: '/images/services/service-urgence.webp'
  }
];

/**
 * Realisations / Etudes de cas
 */
export const realisations = [
  {
    id: 1,
    slug: 'renovation-maison-dunkerque-centre',
    title: 'Renovation complete - Dunkerque centre',
    description: 'Renovation totale de la toiture d\'une maison de ville dans le centre de Dunkerque. Remplacement integral de la couverture en tuiles.',
    shortDescription: 'Maison de ville, renovation complete avec tuiles neuves',
    client: 'M. et Mme Durand',
    location: 'Dunkerque',
    date: '2024-09',
    duration: '2 semaines',
    surface: '120 m2',
    budget: '15 000 - 20 000',
    services: ['Renovation toiture', 'Zinguerie'],
    beforeImage: '/images/gallery/realisation-01-avant.webp',
    afterImage: '/images/gallery/realisation-01-apres.webp',
    gallery: [
      '/images/gallery/realisation-01-avant.webp',
      '/images/gallery/realisation-01-apres.webp'
    ]
  },
  {
    id: 2,
    slug: 'demoussage-villa-calais',
    title: 'Demoussage professionnel - Villa a Calais',
    description: 'Nettoyage complet et traitement hydrofuge d\'une villa a Calais. Elimination des mousses et lichens avec protection longue duree.',
    shortDescription: 'Villa individuelle, demoussage et traitement hydrofuge',
    client: 'Mme Lefebvre',
    location: 'Calais',
    date: '2024-08',
    duration: '2 jours',
    surface: '180 m2',
    budget: '2 500 - 3 500',
    services: ['Demoussage'],
    beforeImage: '/images/gallery/realisation-02-avant.webp',
    afterImage: '/images/gallery/realisation-02-apres.webp',
    gallery: [
      '/images/gallery/realisation-02-avant.webp',
      '/images/gallery/realisation-02-apres.webp'
    ]
  },
  {
    id: 3,
    slug: 'zinguerie-gravelines',
    title: 'Remplacement zinguerie - Gravelines',
    description: 'Remplacement complet des gouttieres, descentes et faitages en zinc pour une maison a Gravelines.',
    shortDescription: 'Maison individuelle, zinguerie complete en zinc',
    client: 'M. Bernard',
    location: 'Gravelines',
    date: '2024-07',
    duration: '3 jours',
    surface: '45 ml',
    budget: '4 000 - 5 500',
    services: ['Zinguerie'],
    beforeImage: '/images/gallery/realisation-03-avant.webp',
    afterImage: '/images/gallery/realisation-03-apres.webp',
    gallery: [
      '/images/gallery/realisation-03-avant.webp',
      '/images/gallery/realisation-03-apres.webp'
    ]
  }
];

/**
 * Genere le schema Article pour un article de blog
 */
export function generateArticleSchema(article: {
  title: string;
  description: string;
  image: string;
  date: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": `https://couvreur-boutantin.fr${article.image}`,
    "datePublished": article.date,
    "dateModified": article.date,
    "author": {
      "@type": "Organization",
      "name": "Couvreur Boutantin"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Couvreur Boutantin",
      "logo": {
        "@type": "ImageObject",
        "url": "https://couvreur-boutantin.fr/images/about/certification-rge.webp"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://couvreur-boutantin.fr/blog/${article.slug}/`
    }
  };
}

/**
 * Genere le schema Review pour les temoignages
 */
export function generateReviewSchema(reviews: Array<{
  name: string;
  rating: number;
  text: string;
  date: string;
}>) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Couvreur Boutantin",
    "review": reviews.map(review => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "reviewBody": review.text,
      "datePublished": review.date
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": reviews.length.toString()
    }
  };
}
