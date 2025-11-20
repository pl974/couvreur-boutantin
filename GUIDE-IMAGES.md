# Guide de generation et optimisation des images

## Prerequis

1. Obtenir une cle API Freepik : https://www.freepik.com/api
2. Installer les dependances Node.js :
```bash
npm install sharp
```

## Etape 1 : Configuration

Creer un fichier `.env` a la racine du projet :
```bash
FREEPIK_API_KEY=votre_cle_api_ici
```

## Etape 2 : Generer les images

Cette commande va generer 29 images pour le site :
- 3 images hero
- 6 images services
- 3 images about/equipe
- 8 images zones/villes
- 6 images galerie (avant/apres)
- 3 images supplementaires

```bash
node generate-images.js
```

**Duree estimee** : 15-20 minutes
**Cout estimatif** : Environ 29 credits Freepik

## Etape 3 : Optimiser les images

Cette commande va :
- Convertir les JPEG en WebP
- Reduire le poids de 60-70%
- Optimiser pour le web

```bash
node optimize-images.js
```

**Duree estimee** : 1-2 minutes

## Resultats attendus

**Avant optimisation** :
- Format : JPEG
- Poids moyen : 400-600 KB par image
- Total : ~12-15 MB

**Apres optimisation** :
- Format : WebP
- Poids moyen : 120-180 KB par image
- Total : ~4-5 MB
- Gain : 60-70%

## Structure des images generees

```
public/images/
├── hero/
│   ├── hero-toiture-dunkerque.webp
│   ├── hero-couvreur-travail.webp
│   └── hero-toiture-renovation.webp
├── services/
│   ├── service-reparation.webp
│   ├── service-renovation.webp
│   ├── service-demoussage.webp
│   ├── service-zinguerie.webp
│   ├── service-isolation.webp
│   └── service-urgence.webp
├── about/
│   ├── artisan-couvreur.webp
│   ├── equipe-couvreurs.webp
│   └── certification-rge.webp
├── zones/
│   ├── dunkerque-ville.webp
│   ├── calais-architecture.webp
│   ├── gravelines-toits.webp
│   ├── grande-synthe.webp
│   ├── littoral-nord.webp
│   ├── maisons-dunkerque.webp
│   ├── quartier-residentiel.webp
│   └── toiture-flamande.webp
└── gallery/
    ├── realisation-01-avant.webp
    ├── realisation-01-apres.webp
    ├── realisation-02-avant.webp
    ├── realisation-02-apres.webp
    ├── realisation-03-avant.webp
    └── realisation-03-apres.webp
```

## Troubleshooting

### Erreur "API Key not found"
- Verifiez que le fichier `.env` existe
- Verifiez que la cle API est correcte

### Erreur "Task failed"
- Certains prompts peuvent etre refuses
- Relancez le script, il continuera avec les suivants

### Images trop lourdes
- Ajustez `quality` dans `OPTIMIZATION_CONFIG`
- Valeurs recommandees : 75-85

### Erreur Sharp
```bash
npm install sharp --force
```

## Performance Web

**Impact SEO et UX** :
- Temps de chargement page : -40%
- Score Lighthouse : +15-20 points
- Taux de rebond : -20-30%
- Google PageSpeed : 90+

## Regenerer des images specifiques

Editez `generate-images.js` et commentez les images non souhaitees, ou modifiez les prompts pour regenerer certaines images.
