/**
 * Script de generation d'images avec l'API Freepik Seedream 4
 * Genere toutes les images necessaires pour Couvreur-Boutantin.fr
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Charger la cle API depuis .env
let API_KEY = '';
try {
  const envContent = fs.readFileSync('.env', 'utf-8');
  API_KEY = envContent.match(/FREEPIK_API_KEY=(.+)/)?.[1]?.trim();
} catch (error) {
  console.log('⚠️  Fichier .env non trouve, creez-le avec FREEPIK_API_KEY=votre_cle');
}

if (!API_KEY) {
  console.error('❌ Cle API non trouvee dans .env');
  console.log('\\nCreez un fichier .env a la racine avec :');
  console.log('FREEPIK_API_KEY=votre_cle_api\\n');
  process.exit(1);
}

const API_ENDPOINT = 'https://api.freepik.com/v1/ai/text-to-image/seedream-v4';
const OUTPUT_DIR = path.join(__dirname, 'public', 'images');

// Creer les dossiers de sortie s'ils n'existent pas
const subDirs = ['hero', 'services', 'about', 'zones', 'gallery'];
subDirs.forEach(dir => {
  const dirPath = path.join(OUTPUT_DIR, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

/**
 * Definition de toutes les images a generer pour Couvreur-Boutantin.fr
 */
const imagesToGenerate = [
  // Hero Section (3 images)
  {
    filename: 'hero/hero-toiture-dunkerque.jpg',
    prompt: 'Professional French roofer working on slate roof in Dunkerque France, coastal northern France architecture, professional photography, realistic, 8k quality, blue-grey roof tiles, northern French house style',
    aspect_ratio: 'widescreen_16_9'
  },
  {
    filename: 'hero/hero-couvreur-travail.jpg',
    prompt: 'Skilled roofer repairing roof tiles on traditional French house, professional craftsmanship, safety equipment, clear blue sky, professional service photography, detailed realistic style',
    aspect_ratio: 'widescreen_16_9'
  },
  {
    filename: 'hero/hero-toiture-renovation.jpg',
    prompt: 'Modern roof renovation in progress, new tiles installation, professional roofing work, French residential area, bright daylight, construction photography, high quality',
    aspect_ratio: 'widescreen_16_9'
  },

  // Services (6 images principales)
  {
    filename: 'services/service-reparation.jpg',
    prompt: 'Close-up of roofer repairing broken roof tiles, professional tools, damaged tiles replacement, French roof, detailed repair work, technical photography style',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'services/service-renovation.jpg',
    prompt: 'Complete roof renovation with scaffolding, workers installing new roofing materials, French house, professional construction site, progress photography',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'services/service-demoussage.jpg',
    prompt: 'Roof cleaning and moss removal, pressure washing roof tiles, green moss being cleaned, before and after effect visible, professional cleaning service',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'services/service-zinguerie.jpg',
    prompt: 'Installation of zinc gutters and flashing on French roof, metalwork details, professional installation, zinc roofing elements, technical craftsmanship photography',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'services/service-isolation.jpg',
    prompt: 'Roof insulation installation in attic, thermal insulation materials, energy efficiency work, modern insulation techniques, interior roof construction photography',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'services/service-urgence.jpg',
    prompt: 'Emergency roof repair at dusk, tarp covering damaged roof, urgent intervention, storm damage, professional emergency response, dramatic lighting',
    aspect_ratio: 'classic_4_3'
  },

  // About / Team (3 images)
  {
    filename: 'about/artisan-couvreur.jpg',
    prompt: 'Professional French roofer portrait on roof, wearing safety equipment, confident pose, blue sky background, professional tradesman photography, friendly appearance',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'about/equipe-couvreurs.jpg',
    prompt: 'Team of 3 professional roofers standing together, wearing work uniforms and safety gear, friendly team photo, French craftsmen, outdoor setting with van',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'about/certification-rge.jpg',
    prompt: 'Professional certifications and quality badges for roofing company, RGE certification document, Qualibat logo, insurance papers, official credentials, clean product photography',
    aspect_ratio: 'classic_4_3'
  },

  // Zones / Cities (8 images)
  {
    filename: 'zones/dunkerque-ville.jpg',
    prompt: 'Aerial view of Dunkerque France, northern French coastal city, harbor and buildings, urban landscape, drone photography style, beautiful cityscape',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'zones/calais-architecture.jpg',
    prompt: 'Traditional French houses in Calais, northern France architecture, residential neighborhood, typical roofs, street view photography',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'zones/gravelines-toits.jpg',
    prompt: 'Rooftops of Gravelines France, coastal town architecture, varied roof styles, urban French landscape, city overview',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'zones/grande-synthe.jpg',
    prompt: 'Residential area in Grande-Synthe France, modern and traditional houses, mixed architecture, northern France suburbs, neighborhood photography',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'zones/littoral-nord.jpg',
    prompt: 'Northern French coast landscape, Pas-de-Calais region, coastal houses with typical roofs, beach and buildings, regional architecture photography',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'zones/maisons-dunkerque.jpg',
    prompt: 'Traditional brick houses in Dunkerque region, typical northern French residential architecture, slate roofs, street scene, architectural photography',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'zones/quartier-residentiel.jpg',
    prompt: 'Modern residential neighborhood in northern France, contemporary houses with various roof types, clean streets, suburban architecture',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'zones/toiture-flamande.jpg',
    prompt: 'Flemish style roof architecture common in northern France, traditional red tiles, characteristic northern French building style, architectural detail photography',
    aspect_ratio: 'classic_4_3'
  },

  // Gallery / Realisations (6 images avant/apres)
  {
    filename: 'gallery/realisation-01-avant.jpg',
    prompt: 'Old damaged roof with broken tiles and moss, before renovation, worn out roofing, needs repair, realistic damage photography',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'gallery/realisation-01-apres.jpg',
    prompt: 'Same roof completely renovated, new tiles perfectly installed, clean and pristine, after renovation, professional roofing result, bright and clean',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'gallery/realisation-02-avant.jpg',
    prompt: 'Moss covered roof before cleaning, green growth on tiles, neglected roof condition, needs maintenance',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'gallery/realisation-02-apres.jpg',
    prompt: 'Same roof after professional cleaning and treatment, spotless tiles, no moss, perfectly maintained, pristine condition',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'gallery/realisation-03-avant.jpg',
    prompt: 'Damaged gutters and flashing before repair, rusty and leaking, old zinc work, needs replacement',
    aspect_ratio: 'classic_4_3'
  },
  {
    filename: 'gallery/realisation-03-apres.jpg',
    prompt: 'New zinc gutters and flashing installed, shiny metal work, perfect installation, professional metalwork finish',
    aspect_ratio: 'classic_4_3'
  }
];

/**
 * Fait une requete HTTPS avec promesse
 */
function httpsRequest(url, options, data) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          resolve({ statusCode: res.statusCode, body: JSON.parse(body) });
        } catch (e) {
          resolve({ statusCode: res.statusCode, body });
        }
      });
    });
    req.on('error', reject);
    if (data) req.write(JSON.stringify(data));
    req.end();
  });
}

/**
 * Telecharge une image depuis une URL
 */
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download: ${res.statusCode}`));
        return;
      }
      const fileStream = fs.createWriteStream(filepath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
      fileStream.on('error', reject);
    }).on('error', reject);
  });
}

/**
 * Cree une tache de generation d'image
 */
async function createImageTask(prompt, aspectRatio = 'classic_4_3') {
  const urlObj = new URL(API_ENDPOINT);
  const options = {
    hostname: urlObj.hostname,
    path: urlObj.pathname,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-freepik-api-key': API_KEY
    }
  };

  const requestBody = {
    prompt,
    aspect_ratio: aspectRatio,
    output_format: 'jpeg',
    safety_tolerance: 2
  };

  const response = await httpsRequest(API_ENDPOINT, options, requestBody);

  if (response.statusCode !== 200 && response.statusCode !== 201) {
    throw new Error(`API Error: ${response.statusCode} - ${JSON.stringify(response.body)}`);
  }

  return response.body;
}

/**
 * Verifie le statut d'une tache
 */
async function getTaskStatus(taskId) {
  const url = `${API_ENDPOINT}/${taskId}`;
  const urlObj = new URL(url);
  const options = {
    hostname: urlObj.hostname,
    path: urlObj.pathname,
    method: 'GET',
    headers: {
      'x-freepik-api-key': API_KEY
    }
  };

  const response = await httpsRequest(url, options);

  if (response.statusCode !== 200) {
    throw new Error(`API Error: ${response.statusCode}`);
  }

  return response.body.data || response.body;
}

/**
 * Attend qu'une tache soit terminee
 */
async function waitForTaskCompletion(taskId, maxAttempts = 60) {
  for (let i = 0; i < maxAttempts; i++) {
    await new Promise(resolve => setTimeout(resolve, 2000));

    const status = await getTaskStatus(taskId);
    console.log(`   Status: ${status.status || status.state}`);

    if (status.status === 'COMPLETED' || status.state === 'COMPLETED') {
      return status;
    }

    if (status.status === 'FAILED' || status.state === 'FAILED') {
      throw new Error('Task failed');
    }
  }

  throw new Error('Timeout waiting for task completion');
}

/**
 * Genere une image
 */
async function generateImage(imageConfig, index, total) {
  console.log(`\\n[${index}/${total}] Generation: ${imageConfig.filename}`);
  console.log(`   Prompt: ${imageConfig.prompt.substring(0, 80)}...`);

  try {
    // Creer la tache
    const response = await createImageTask(imageConfig.prompt, imageConfig.aspect_ratio);
    const task = response.data || response;
    const taskId = task.task_id || task.id;

    console.log(`   Task ID: ${taskId}`);

    // Attendre la completion
    const completedTask = await waitForTaskCompletion(taskId);

    // Recuperer l'URL de l'image
    const imageUrl = completedTask.generated?.[0] ||
                     completedTask.image?.url ||
                     completedTask.result?.url ||
                     completedTask.output_url;

    if (!imageUrl) {
      throw new Error('No image URL in response');
    }

    console.log(`   Telechargement...`);

    // Telecharger l'image
    const filepath = path.join(OUTPUT_DIR, imageConfig.filename);
    await downloadImage(imageUrl, filepath);

    console.log(`   ✓ Sauvegardee: ${imageConfig.filename}`);

  } catch (error) {
    console.error(`   ✗ Erreur: ${error.message}`);
    throw error;
  }
}

/**
 * Fonction principale
 */
async function main() {
  console.log('='.repeat(70));
  console.log('GENERATION DES IMAGES - Couvreur-Boutantin.fr');
  console.log('='.repeat(70));
  console.log(`Dossier de sortie: ${OUTPUT_DIR}`);
  console.log(`Nombre d'images a generer: ${imagesToGenerate.length}\\n`);

  const results = {
    success: 0,
    failed: 0,
    errors: []
  };

  for (let i = 0; i < imagesToGenerate.length; i++) {
    try {
      await generateImage(imagesToGenerate[i], i + 1, imagesToGenerate.length);
      results.success++;
    } catch (error) {
      results.failed++;
      results.errors.push({
        filename: imagesToGenerate[i].filename,
        error: error.message
      });
    }

    // Pause entre les requetes
    if (i < imagesToGenerate.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  console.log('\\n' + '='.repeat(70));
  console.log('RESUME DE LA GENERATION');
  console.log('='.repeat(70));
  console.log(`✓ Reussies: ${results.success}`);
  console.log(`✗ Echouees: ${results.failed}`);

  if (results.errors.length > 0) {
    console.log('\\n✗ Erreurs:');
    results.errors.forEach(err => {
      console.log(`   - ${err.filename}: ${err.error}`);
    });
  }

  console.log('\\n✓ Generation terminee!');
  console.log('\\nProchaine etape: Executez "node optimize-images.js" pour convertir en WebP');
}

// Lancer le script
main().catch(console.error);
