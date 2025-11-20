/**
 * Script d'optimisation des images pour le SEO
 * Convertit les images JPEG en WebP et reduit leur poids
 * Utilise Sharp pour des performances optimales
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_DIR = path.join(__dirname, 'public', 'images');
const OUTPUT_DIR = path.join(__dirname, 'public', 'images');

// Configuration d'optimisation
const OPTIMIZATION_CONFIG = {
  webp: {
    quality: 82,        // Qualite WebP (82 = excellent compromis)
    effort: 6          // Niveau de compression (0-6, 6 = meilleur)
  },
  resize: {
    width: 1920,       // Largeur max (Full HD)
    withoutEnlargement: true
  }
};

/**
 * Obtient la taille d'un fichier en KB
 */
function getFileSizeKB(filepath) {
  const stats = fs.statSync(filepath);
  return (stats.size / 1024).toFixed(2);
}

/**
 * Parcourt recursivement un dossier
 */
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

/**
 * Optimise une image JPEG vers WebP
 */
async function optimizeImage(inputPath, outputPath) {
  const inputSize = getFileSizeKB(inputPath);

  await sharp(inputPath)
    .resize(OPTIMIZATION_CONFIG.resize)
    .webp(OPTIMIZATION_CONFIG.webp)
    .toFile(outputPath);

  const outputSize = getFileSizeKB(outputPath);
  const reduction = ((1 - outputSize / inputSize) * 100).toFixed(1);

  return {
    inputSize,
    outputSize,
    reduction
  };
}

/**
 * Fonction principale
 */
async function main() {
  console.log('='.repeat(70));
  console.log('OPTIMISATION DES IMAGES - Couvreur-Boutantin.fr');
  console.log('='.repeat(70));
  console.log(`Dossier source : ${INPUT_DIR}`);
  console.log(`Dossier destination : ${OUTPUT_DIR}`);
  console.log(`Configuration :`);
  console.log(`   - Format : WebP (qualite ${OPTIMIZATION_CONFIG.webp.quality})`);
  console.log(`   - Largeur max : ${OPTIMIZATION_CONFIG.resize.width}px`);
  console.log('');

  // Lire tous les fichiers JPEG/JPG
  const allFiles = getAllFiles(INPUT_DIR);
  const files = allFiles
    .filter(file => /\.(jpg|jpeg)$/i.test(file))
    .map(file => ({
      absolute: file,
      relative: path.relative(INPUT_DIR, file)
    }));

  if (files.length === 0) {
    console.log('✗ Aucune image JPEG trouvee dans le dossier');
    return;
  }

  console.log(`Images a optimiser: ${files.length}\\n`);

  let totalInputSize = 0;
  let totalOutputSize = 0;
  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const inputPath = file.absolute;
    const relativePath = file.relative;
    const outputFilename = relativePath.replace(/\.(jpg|jpeg)$/i, '.webp');
    const outputPath = path.join(OUTPUT_DIR, outputFilename);

    console.log(`[${i + 1}/${files.length}] ${relativePath}`);

    try {
      const result = await optimizeImage(inputPath, outputPath);

      console.log(`   ✓ ${result.inputSize} KB → ${result.outputSize} KB (-${result.reduction}%)`);
      console.log(`   Sauvegarde: ${outputFilename}\\n`);

      totalInputSize += parseFloat(result.inputSize);
      totalOutputSize += parseFloat(result.outputSize);
      successCount++;

      // Supprimer l'image JPEG originale
      fs.unlinkSync(inputPath);
      console.log(`   ✓ Image JPEG supprimee\\n`);

    } catch (error) {
      console.log(`   ✗ Erreur : ${error.message}\\n`);
      errorCount++;
    }
  }

  // Resume
  console.log('='.repeat(70));
  console.log('RESUME DE L\'OPTIMISATION');
  console.log('='.repeat(70));
  console.log(`✓ Images optimisees : ${successCount}`);
  console.log(`✗ Erreurs : ${errorCount}`);
  console.log(`Poids total avant : ${totalInputSize.toFixed(2)} KB`);
  console.log(`Poids total apres : ${totalOutputSize.toFixed(2)} KB`);
  console.log(`Gain d'espace : ${(totalInputSize - totalOutputSize).toFixed(2)} KB`);
  console.log(`Reduction : ${((1 - totalOutputSize / totalInputSize) * 100).toFixed(1)}%`);
  console.log('');
  console.log('✓ Optimisation terminee !');
  console.log('');
  console.log('Les images sont pretes a etre utilisees.');
}

// Lancer le script
main().catch(console.error);
