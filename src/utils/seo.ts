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
 * Contenu SEO optimise pour position 0 et 1
 */
export const blogArticles = [
  {
    slug: 'comment-reparer-fuite-toiture',
    title: 'Comment reparer une fuite de toiture ?',
    description: 'Guide complet pour identifier et reparer une fuite de toiture. Conseils de couvreurs professionnels, etapes et couts.',
    excerpt: 'Une fuite de toiture necessite une intervention rapide. Decouvrez comment identifier l\'origine, les solutions temporaires et le cout des reparations par un professionnel.',
    image: '/images/services/service-reparation.webp',
    category: 'Reparation',
    date: '2024-11-21',
    readTime: '8 min',
    content: `
<h2>Identifier rapidement l'origine de la fuite</h2>
<p>Une <strong>fuite de toiture</strong> se manifeste generalement par des taches d'humidite au plafond ou des gouttes d'eau. L'origine n'est pas toujours situee juste au-dessus de la tache visible. L'eau peut en effet cheminer le long des elements de charpente avant de penetrer dans votre habitation.</p>

<h3>Les signes qui ne trompent pas</h3>
<p>Plusieurs indices revelent une infiltration d'eau par le toit :</p>
<ul>
<li><strong>Taches brunâtres</strong> au plafond qui s'agrandissent apres la pluie</li>
<li><strong>Peinture qui cloque</strong> ou se decolle</li>
<li><strong>Odeur de moisi</strong> dans les combles</li>
<li><strong>Gouttieres debordantes</strong> ou mal fixees</li>
<li><strong>Tuiles cassees</strong> visibles depuis le sol</li>
</ul>

<h3>Localiser la zone d'infiltration</h3>
<p>Montez dans vos combles avec une lampe torche. Recherchez les traces d'humidite sur les chevrons et la sous-toiture. Notez que le point d'entree reel se situe souvent <strong>plusieurs metres au-dessus</strong> de la zone humide visible.</p>

<div class="info-box">
<p><strong>Attention :</strong> Ne montez jamais sur votre toit par temps de pluie ou de vent. La securite passe avant tout.</p>
</div>

<h2>Solutions temporaires en cas d'urgence</h2>
<p>Avant l'intervention d'un couvreur, vous pouvez limiter les degats. Ces solutions sont <strong>provisoires</strong> et ne remplacent pas une reparation definitive.</p>

<h3>Bache de protection</h3>
<p>Une bache epaisse fixee sur la zone endommagee empeche l'eau de penetrer. Assurez-vous qu'elle depasse d'au moins <strong>50 cm de chaque cote</strong> de la zone touchee. Lestez-la avec des planches ou des sacs de sable.</p>

<h3>Mastic d'etancheite</h3>
<p>Pour une tuile felee ou un solin decolle, le mastic bitumineux offre une solution d'attente efficace. Appliquez-le sur surface seche uniquement.</p>

<h2>Cout de reparation d'une fuite de toiture</h2>
<p>Le prix d'une <strong>reparation de toiture</strong> varie selon l'ampleur des degats et le type de couverture.</p>

<table>
<tr><th>Type de reparation</th><th>Prix moyen</th></tr>
<tr><td>Remplacement de quelques tuiles</td><td>150 - 400 EUR</td></tr>
<tr><td>Reparation de solin</td><td>200 - 500 EUR</td></tr>
<tr><td>Refection de faitage</td><td>500 - 1 200 EUR</td></tr>
<tr><td>Reparation importante</td><td>800 - 2 500 EUR</td></tr>
<tr><td>Intervention urgence (week-end)</td><td>+50% du tarif normal</td></tr>
</table>

<p>Ces tarifs incluent generalement le <strong>deplacement et la main d'oeuvre</strong>. Un couvreur serieux etablit toujours un devis detaille avant intervention.</p>

<h2>Quand faire appel a un professionnel ?</h2>
<p>Certaines situations exigent l'intervention immediate d'un <strong>couvreur qualifie</strong> :</p>

<h3>Situations necessitant une urgence</h3>
<ul>
<li>Fuite importante avec ecoulement continu</li>
<li>Degats suite a tempete ou chute d'arbre</li>
<li>Affaissement visible de la toiture</li>
<li>Infiltration pres des installations electriques</li>
</ul>

<h3>Avantages de faire appel a un expert</h3>
<p>Un couvreur professionnel dispose des competences et equipements adequats. Il identifie la cause reelle du probleme et propose une <strong>reparation durable</strong>. Ses travaux sont couverts par la garantie decennale.</p>

<blockquote>"Une fuite mal reparee reviendra systematiquement. Mieux vaut investir dans une intervention professionnelle que de multiplier les reparations de fortune." - Couvreur Boutantin</blockquote>

<h2>Prevenir les futures fuites</h2>
<p>L'entretien regulier de votre toiture previent la majorite des infiltrations.</p>

<h3>Inspection annuelle recommandee</h3>
<p>Faites controler votre toit <strong>une fois par an</strong>, de preference au printemps. Un couvreur verifiera l'etat des tuiles, solins, faitages et gouttieres.</p>

<h3>Gestes d'entretien simples</h3>
<ul>
<li>Nettoyez vos gouttieres deux fois par an</li>
<li>Taillez les branches proches du toit</li>
<li>Surveillez l'apparition de mousse</li>
<li>Controlez apres chaque tempete importante</li>
</ul>

<h2>Votre toiture fuit a Dunkerque ?</h2>
<p>Notre equipe de couvreurs intervient <strong>sous 24 a 48h</strong> sur Dunkerque et tout le littoral nord. Nous proposons un diagnostic gratuit et un devis detaille sans engagement. Nos reparations sont garanties par notre assurance decennale.</p>

<p>Contactez-nous au <strong>03 28 00 00 00</strong> ou demandez votre devis en ligne. Nous intervenons egalement en urgence le week-end pour les situations critiques.</p>
`
  },
  {
    slug: 'prix-renovation-toiture-2024',
    title: 'Prix renovation toiture 2024 : tarifs au m2',
    description: 'Decouvrez les prix de renovation de toiture en 2024. Tarifs au m2 selon materiaux, budget moyen et aides financieres disponibles.',
    excerpt: 'Budget renovation toiture : comptez entre 80 et 250 EUR/m2 selon le type de couverture. Decouvrez tous les tarifs detailles et les aides disponibles en 2024.',
    image: '/images/services/service-renovation.webp',
    category: 'Renovation',
    date: '2024-11-21',
    readTime: '10 min',
    content: `
<h2>Prix moyen d'une renovation de toiture au m2</h2>
<p>Le cout d'une <strong>renovation de toiture</strong> en 2024 varie entre <strong>80 et 250 EUR par m2</strong>. Ce prix depend du type de couverture, de l'etat de la charpente et des travaux annexes necessaires.</p>

<p>Pour une maison standard de 100 m2 de toiture, prevoyez un budget entre <strong>8 000 et 25 000 EUR</strong>. Ce tarif comprend la depose de l'ancienne couverture, la fourniture des materiaux et la pose par un professionnel.</p>

<h3>Tableau des prix par type de couverture</h3>
<table>
<tr><th>Type de toiture</th><th>Prix au m2 (pose comprise)</th><th>Duree de vie</th></tr>
<tr><td>Tuiles terre cuite</td><td>80 - 120 EUR</td><td>50-70 ans</td></tr>
<tr><td>Tuiles beton</td><td>60 - 90 EUR</td><td>40-50 ans</td></tr>
<tr><td>Ardoises naturelles</td><td>120 - 180 EUR</td><td>80-100 ans</td></tr>
<tr><td>Ardoises fibro-ciment</td><td>70 - 100 EUR</td><td>30-40 ans</td></tr>
<tr><td>Zinc</td><td>100 - 150 EUR</td><td>50-80 ans</td></tr>
<tr><td>Bac acier</td><td>50 - 80 EUR</td><td>30-50 ans</td></tr>
</table>

<h2>Ce qui influence le prix de votre renovation</h2>
<p>Plusieurs facteurs font varier significativement le cout final de vos travaux.</p>

<h3>L'etat de la charpente</h3>
<p>Une charpente saine permet de poser directement la nouvelle couverture. Si des elements sont endommages, leur <strong>remplacement ou renforcement</strong> ajoute 2 000 a 10 000 EUR au devis.</p>

<h3>L'accessibilite du chantier</h3>
<p>Un toit difficile d'acces necessite des echafaudages specifiques. Ce poste represente <strong>5 a 15% du cout total</strong>. Les maisons mitoyennes ou en centre-ville sont souvent plus couteuses a renover.</p>

<h3>Les travaux complementaires</h3>
<p>La renovation de toiture s'accompagne souvent de travaux annexes :</p>
<ul>
<li><strong>Isolation des combles :</strong> 20 a 80 EUR/m2</li>
<li><strong>Remplacement des gouttieres :</strong> 40 a 100 EUR/ml</li>
<li><strong>Pose de fenetres de toit :</strong> 500 a 1 500 EUR par fenetre</li>
<li><strong>Installation d'une VMC :</strong> 400 a 1 200 EUR</li>
</ul>

<h2>Budget moyen selon la surface</h2>
<p>Voici les fourchettes de prix constates pour differentes surfaces de toiture :</p>

<table>
<tr><th>Surface toiture</th><th>Budget renovation complete</th></tr>
<tr><td>80 m2 (petite maison)</td><td>7 000 - 15 000 EUR</td></tr>
<tr><td>100 m2 (maison standard)</td><td>9 000 - 20 000 EUR</td></tr>
<tr><td>150 m2 (grande maison)</td><td>14 000 - 30 000 EUR</td></tr>
<tr><td>200 m2 (tres grande maison)</td><td>18 000 - 40 000 EUR</td></tr>
</table>

<div class="info-box">
<p><strong>Conseil :</strong> Demandez toujours plusieurs devis detailles. Comparez les prestations incluses, pas seulement les prix.</p>
</div>

<h2>Aides financieres pour renover sa toiture</h2>
<p>Plusieurs dispositifs permettent de reduire le cout de vos travaux en 2024.</p>

<h3>MaPrimeRenov'</h3>
<p>Cette aide de l'Etat concerne les travaux d'<strong>isolation de toiture</strong>. Le montant varie selon vos revenus :</p>
<ul>
<li>Menages tres modestes : jusqu'a 75 EUR/m2</li>
<li>Menages modestes : jusqu'a 60 EUR/m2</li>
<li>Menages intermediaires : jusqu'a 40 EUR/m2</li>
</ul>

<h3>Certificats d'Economie d'Energie (CEE)</h3>
<p>Les fournisseurs d'energie proposent des primes pour l'isolation. Cumulables avec MaPrimeRenov', elles representent <strong>10 a 20 EUR/m2</strong> supplementaires.</p>

<h3>Eco-pret a taux zero</h3>
<p>L'eco-PTZ permet d'emprunter jusqu'a <strong>50 000 EUR sans interets</strong> pour des travaux de renovation energetique. La duree de remboursement peut atteindre 20 ans.</p>

<h3>TVA reduite a 5,5%</h3>
<p>Les travaux d'isolation beneficient d'une TVA a 5,5% au lieu de 20%. Pour une renovation de toiture avec isolation, cette difference represente une <strong>economie significative</strong>.</p>

<h2>Comment choisir son couvreur ?</h2>
<p>La selection d'un artisan competent garantit la qualite et la perennite de vos travaux.</p>

<h3>Les certifications a verifier</h3>
<ul>
<li><strong>Certification RGE :</strong> obligatoire pour beneficier des aides</li>
<li><strong>Garantie decennale :</strong> indispensable pour tout travail de couverture</li>
<li><strong>Assurance RC Pro :</strong> vous protege en cas de dommage</li>
</ul>

<h3>Points a controler dans le devis</h3>
<p>Un devis serieux detaille chaque poste : depose, fournitures, pose, evacuation des dechets. Mefiez-vous des devis trop vagues ou anormalement bas.</p>

<blockquote>"Un toit bien renove vous protege pendant 50 ans. Ne negligez pas la qualite des materiaux et de la pose pour economiser quelques euros." - Couvreur Boutantin</blockquote>

<h2>Renovation de toiture a Dunkerque</h2>
<p>Notre entreprise realise des renovations de toiture depuis plus de 15 ans sur le littoral nord. Nous intervenons a <strong>Dunkerque, Calais, Gravelines</strong> et toutes les communes environnantes.</p>

<p>Artisan certifie <strong>RGE Qualibat</strong>, nous vous accompagnons dans vos demarches d'aides financieres. Demandez votre devis gratuit au 03 28 00 00 00.</p>
`
  },
  {
    slug: 'quand-demousser-toiture',
    title: 'Quand demousser sa toiture ? Signes et frequence',
    description: 'Decouvrez quand et pourquoi demousser votre toiture. Signes d\'alerte, frequence recommandee et prix du demoussage professionnel.',
    excerpt: 'Demoussez votre toiture tous les 3 a 5 ans pour prolonger sa duree de vie. Decouvrez les signes qui montrent qu\'il est temps d\'agir et les tarifs moyens.',
    image: '/images/services/service-demoussage.webp',
    category: 'Entretien',
    date: '2024-11-21',
    readTime: '6 min',
    content: `
<h2>Pourquoi la mousse est nocive pour votre toit</h2>
<p>La <strong>mousse sur une toiture</strong> n'est pas qu'un probleme esthetique. Elle retient l'humidite contre les tuiles et accelere leur degradation. Dans le Nord, le climat humide favorise particulierement son developpement.</p>

<p>Une toiture envahie par la mousse presente plusieurs risques :</p>
<ul>
<li><strong>Porosite des tuiles</strong> qui les rend gelives en hiver</li>
<li><strong>Infiltrations</strong> car l'eau stagne sous la vegetation</li>
<li><strong>Decollement des tuiles</strong> sous l'effet des racines</li>
<li><strong>Obstruction des gouttieres</strong> par les debris vegetaux</li>
</ul>

<h2>Les signes qui indiquent un demoussage necessaire</h2>
<p>Plusieurs indices revelent que votre toiture a besoin d'un <strong>traitement anti-mousse</strong>.</p>

<h3>Signes visibles depuis le sol</h3>
<p>Observez votre toit depuis votre jardin ou la rue :</p>
<ul>
<li>Zones vertes ou noires sur les tuiles</li>
<li>Lichens blancs ou jaunes sur les faitieres</li>
<li>Tuiles qui paraissent plus sombres que le reste</li>
<li>Vegetation qui depasse entre les tuiles</li>
</ul>

<h3>Signes dans les gouttieres</h3>
<p>Lors du nettoyage de vos gouttieres, la presence de <strong>debris vegetaux abondants</strong> indique que la mousse prolifere sur votre toit.</p>

<div class="info-box">
<p><strong>Le saviez-vous ?</strong> Un versant nord ou ombrage par des arbres se couvre de mousse deux fois plus vite qu'un versant bien expose au soleil.</p>
</div>

<h2>Frequence de demoussage recommandee</h2>
<p>La periodicite ideale du <strong>demoussage de toiture</strong> depend de plusieurs facteurs.</p>

<h3>Tableau des frequences selon l'environnement</h3>
<table>
<tr><th>Situation</th><th>Frequence recommandee</th></tr>
<tr><td>Zone urbaine sans arbres</td><td>Tous les 5 a 7 ans</td></tr>
<tr><td>Zone residentielle classique</td><td>Tous les 3 a 5 ans</td></tr>
<tr><td>Proximite d'arbres</td><td>Tous les 2 a 3 ans</td></tr>
<tr><td>Climat humide (littoral Nord)</td><td>Tous les 3 a 4 ans</td></tr>
<tr><td>Versant nord ombrage</td><td>Tous les 2 a 3 ans</td></tr>
</table>

<h3>La meilleure saison pour demousser</h3>
<p>Le <strong>printemps</strong> (mars a mai) et l'<strong>automne</strong> (septembre a novembre) sont les periodes ideales. La mousse est gorgée d'eau et se detache facilement. Evitez les periodes de gel ou de canicule.</p>

<h2>Prix du demoussage de toiture</h2>
<p>Le cout d'un <strong>demoussage professionnel</strong> varie selon la surface et les prestations incluses.</p>

<h3>Tarifs moyens constates</h3>
<table>
<tr><th>Prestation</th><th>Prix au m2</th></tr>
<tr><td>Demoussage simple</td><td>8 - 12 EUR</td></tr>
<tr><td>Demoussage + traitement anti-mousse</td><td>12 - 18 EUR</td></tr>
<tr><td>Demoussage + hydrofuge</td><td>18 - 25 EUR</td></tr>
<tr><td>Forfait complet (demoussage + traitement + hydrofuge)</td><td>20 - 28 EUR</td></tr>
</table>

<p>Pour une toiture de 100 m2, comptez entre <strong>800 et 2 800 EUR</strong> selon les prestations choisies. Le traitement hydrofuge prolonge l'efficacite du demoussage de plusieurs annees.</p>

<h2>Demoussage : faire soi-meme ou appeler un pro ?</h2>
<p>Le nettoyage de toiture comporte des risques. Pesez le pour et le contre avant de vous lancer.</p>

<h3>Les dangers du demoussage amateur</h3>
<ul>
<li><strong>Chutes de hauteur :</strong> premiere cause d'accident domestique grave</li>
<li><strong>Deterioration des tuiles</strong> avec un nettoyeur haute pression mal utilise</li>
<li><strong>Produits inadaptes</strong> qui fragilisent la couverture</li>
<li><strong>Traitement incomplet</strong> qui favorise une repousse rapide</li>
</ul>

<h3>Avantages du professionnel</h3>
<p>Un couvreur dispose des <strong>equipements de securite</strong> et de la technique adaptee. Son intervention est couverte par son assurance. Le resultat dure plus longtemps grace aux produits professionnels utilises.</p>

<blockquote>"Un bon demoussage suivi d'un traitement hydrofuge protege votre toiture pendant 5 a 7 ans. L'investissement est vite rentabilise."</blockquote>

<h2>Le traitement hydrofuge : un complement efficace</h2>
<p>L'<strong>hydrofuge</strong> applique apres le demoussage impermeabilise les tuiles tout en les laissant respirer.</p>

<h3>Les benefices de l'hydrofuge</h3>
<ul>
<li>Empeche l'eau de penetrer dans les tuiles poreuses</li>
<li>Ralentit considerablement la repousse des mousses</li>
<li>Facilite le nettoyage naturel par la pluie</li>
<li>Prolonge la duree de vie de votre couverture</li>
</ul>

<h3>Duree de protection</h3>
<p>Un hydrofuge de qualite professionnelle offre une <strong>protection de 5 a 10 ans</strong>. Les produits colores peuvent egalement raviver l'aspect de tuiles ternies.</p>

<h2>Demoussage de toiture dans le Nord</h2>
<p>Notre equipe intervient pour le <strong>demoussage de toiture</strong> a Dunkerque, Calais, Gravelines et sur tout le littoral. Nous utilisons des produits <strong>respectueux de l'environnement</strong> et adaptes aux tuiles de la region.</p>

<p>Demandez votre devis gratuit au 03 28 00 00 00. Nous evaluons l'etat de votre toiture et vous conseillons sur les traitements les plus adaptes.</p>
`
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
