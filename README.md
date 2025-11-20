# Couvreur Boutantin - Site Astro JS

Site professionnel pour artisan couvreur a Dunkerque et littoral nord. Optimise SEO et conversion.

## Structure du projet

```
src/
  components/     # Composants reutilisables
  layouts/        # Layout principal avec SEO
  pages/          # Pages du site
    services/     # Pages de services (dynamiques)
    zones/        # Pages de villes (dynamiques)
  styles/         # CSS global et variables
  utils/          # Utilitaires SEO et donnees
public/
  images/         # Images WebP
```

## Composants

- **Button** - Bouton reutilisable (variants: primary, secondary, outline)
- **Header** - Navigation principale avec CTA telephone
- **Footer** - Pied de page avec liens et SEO local
- **Hero** - Section hero avec formulaire et CTA
- **ContactForm** - Formulaire optimise conversion
- **ServiceCard** - Carte de service
- **CityCard** - Carte de zone d'intervention
- **Testimonial** - Avis client
- **FAQ** - Questions frequentes avec schema markup
- **TrustBadges** - Badges de confiance

## Pages

### Principales
- `/` - Accueil
- `/services/` - Index des services
- `/zones/` - Index des zones
- `/contact/` - Contact

### Services (dynamiques)
- `/services/reparation-toiture/`
- `/services/renovation-toiture/`
- `/services/demoussage/`
- `/services/zinguerie/`
- `/services/isolation/`
- `/services/urgence/`

### Zones (dynamiques)
- `/zones/dunkerque/`
- `/zones/calais/`
- `/zones/gravelines/`
- `/zones/grande-synthe/`
- `/zones/coudekerque/`
- `/zones/saint-pol-sur-mer/`
- `/zones/bray-dunes/`
- `/zones/loon-plage/`

## SEO

- Schema markup LocalBusiness, Service, FAQPage
- Meta tags Open Graph et Twitter
- Sitemap automatique
- URLs canoniques
- Maillage interne optimise

## Installation

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Images requises

Ajouter dans `public/images/` :
- `hero-toiture.webp` (1920x1080)
- `artisan-couvreur.webp` (500x400)
- `og-default.webp` (1200x630)
- `apple-touch-icon.png` (180x180)

## Personnalisation

1. Modifier le numero de telephone dans les composants
2. Ajouter les vraies images WebP
3. Completer les mentions legales (SIRET, assurance)
4. Configurer le formulaire backend

## Technologies

- Astro JS 4.x
- TypeScript
- CSS Variables
- Schema.org JSON-LD
