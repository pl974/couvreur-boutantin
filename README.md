# Couvreur Boutantin - Site Astro JS

Site professionnel pour artisan couvreur a Dunkerque et littoral nord. Optimise SEO, conversion et UI/UX.

## Caracteristiques principales

### UI/UX optimise conversion
- Hero avec CTA au-dessus de la ligne de flottaison
- Formulaire de contact simplifie
- Statistiques animees (15+ ans, 500+ clients)
- Processus visuel en 4 etapes
- Galerie avant/apres
- Fourchettes de prix transparentes
- Bandeau CTA flottant urgence
- Bouton WhatsApp flottant
- Animations au scroll
- Design responsive

### SEO professionnel
- Schema markup (LocalBusiness, Service, FAQPage)
- Meta tags optimises
- Sitemap automatique
- Maillage interne
- URLs canoniques
- Images optimisees WebP

### Pages generees
- **Page d'accueil** avec 10+ sections
- **6 pages services** dynamiques
- **8 pages zones** dynamiques
- Page contact
- Pages legales

## Installation rapide

```bash
# 1. Cloner le repo
git clone [url]
cd couvreur-boutantin

# 2. Installer dependances
npm install

# 3. Generer les images (IMPORTANT)
# Creer .env avec votre cle API Freepik
echo "FREEPIK_API_KEY=votre_cle" > .env
node generate-images.js
node optimize-images.js

# 4. Lancer en dev
npm run dev

# 5. Build production
npm run build
```

## Structure du projet

```
src/
  components/         # 17 composants reutilisables
    Button.astro
    Header.astro
    Footer.astro
    Hero.astro
    ContactForm.astro
    ServiceCard.astro
    CityCard.astro
    Testimonial.astro
    FAQ.astro
    TrustBadges.astro
    Stats.astro       # NOUVEAU - Chiffres animes
    ProcessSteps.astro # NOUVEAU - Processus visuel
    Gallery.astro     # NOUVEAU - Galerie avant/apres
    PriceRange.astro  # NOUVEAU - Tarifs indicatifs
    CTAFloat.astro    # NOUVEAU - Bandeau flottant
    WhatsAppButton.astro # NOUVEAU - Bouton WhatsApp
  layouts/
    BaseLayout.astro  # Layout avec SEO
  pages/
    index.astro       # Page d'accueil AMELIOREE
    contact.astro
    services/
      index.astro
      [slug].astro    # 6 pages services
    zones/
      index.astro
      [slug].astro    # 8 pages zones
  styles/
    global.css        # CSS variables et utilities
  utils/
    seo.ts            # Helpers SEO et donnees
public/
  images/             # Images optimisees WebP
    hero/
    services/
    about/
    zones/
    gallery/
  robots.txt
  favicon.svg
```

## Composants disponibles

### Conversion
- **Hero** - Section principale avec formulaire
- **ContactForm** - Formulaire optimise (compact/complet)
- **Button** - Bouton reutilisable (3 variants)
- **CTAFloat** - Bandeau urgence flottant
- **WhatsAppButton** - Contact direct WhatsApp

### Contenu
- **ServiceCard** - Carte de service
- **CityCard** - Carte de zone
- **Testimonial** - Avis client avec etoiles
- **FAQ** - Questions avec schema markup
- **TrustBadges** - Badges de confiance
- **Stats** - Statistiques animees
- **ProcessSteps** - Processus visuel
- **Gallery** - Galerie avant/apres
- **PriceRange** - Fourchettes de prix

### Layout
- **Header** - Navigation sticky
- **Footer** - Footer avec liens SEO

## Generation des images

Le site necessite 29 images professionnelles. Utilisez les scripts fournis :

```bash
# 1. Obtenir cle API Freepik
# https://www.freepik.com/api

# 2. Configurer .env
FREEPIK_API_KEY=votre_cle_api

# 3. Generer (15-20 min, ~29 credits)
node generate-images.js

# 4. Optimiser en WebP
node optimize-images.js
```

**Images generees** :
- 3 hero backgrounds
- 6 services
- 3 equipe/about
- 8 zones/villes
- 6 realisations avant/apres
- 3 supplementaires

Voir `GUIDE-IMAGES.md` pour details.

## Pages dynamiques

### Services (6)
- Reparation toiture
- Renovation toiture
- Demoussage
- Zinguerie
- Isolation
- Urgence

### Zones (8)
- Dunkerque
- Calais
- Gravelines
- Grande-Synthe
- Coudekerque-Branche
- Saint-Pol-sur-Mer
- Bray-Dunes
- Loon-Plage

## Configuration

### Personnalisation
1. **Telephone** : Chercher `+33328000000` et remplacer
2. **Email** : Chercher `contact@couvreur-boutantin.fr`
3. **Mentions legales** : Completer SIRET, assurance
4. **Couleurs** : Modifier variables CSS dans `global.css`
5. **Contenu** : Modifier `src/utils/seo.ts`

### SEO
- Schema markup : `src/layouts/BaseLayout.astro`
- Donnees services/zones : `src/utils/seo.ts`
- Sitemap : genere automatiquement

## Scripts disponibles

```bash
npm run dev       # Dev server
npm run build     # Build production
npm run preview   # Preview build

node generate-images.js  # Generer images
node optimize-images.js  # Optimiser images
```

## Performance

### Objectifs
- Lighthouse Score : 90+
- Temps de chargement : <2s
- First Contentful Paint : <1s
- Images WebP optimisees
- CSS inline critique

### Optimisations
- Images WebP (-60% poids)
- CSS minifie
- HTML compresse
- Lazy loading images
- Fonts optimisees

## Conversion

### Elements cles
- CTA au-dessus ligne de flottaison
- Formulaire simplifie (3 champs)
- Bouton WhatsApp flottant
- Bandeau urgence flottant
- Telephone cliquable partout
- Preuve sociale (temoignages)
- Transparence (tarifs)
- Processus clair (4 etapes)

### Metriques visees
- Taux de rebond : <45%
- Temps sur page : >2min
- Taux de conversion : >5%

## Documentation

- `RAPPORT-ANALYSE.md` - Analyse complete du site
- `AMELIORATIONS-RESTANTES.md` - Ameliorations a faire
- `GUIDE-IMAGES.md` - Guide generation images

## Technologies

- Astro JS 4.x
- TypeScript strict
- CSS Variables
- Schema.org JSON-LD
- Sharp (optimisation images)
- Freepik API (generation images)

## Support

**Ameliorations prioritaires** : Voir `AMELIORATIONS-RESTANTES.md`

**Documentation Astro** : https://docs.astro.build

**Freepik API** : https://www.freepik.com/api

---

**Status** : Production ready apres generation des images
**Version** : 2.0.0 (UI/UX optimise)
**Derniere mise a jour** : Novembre 2024
