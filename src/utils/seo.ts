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
