const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'public/images');
const files = fs.readdirSync(imgDir);

async function optimize() {
  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      if (file === 'noise.png' || file === 'fav-icon-icreatepixels.png') continue;
      
      const inputPath = path.join(imgDir, file);
      const ext = path.extname(file);
      const name = path.basename(file, ext);
      const outputPath = path.join(imgDir, name + '.webp');
      
      try {
        let pipeline = sharp(inputPath);
        if (file === 'logo_white.png') {
            pipeline = pipeline.resize(400, null, { withoutEnlargement: true }).webp({ quality: 90 });
        } else {
            pipeline = pipeline.resize(1200, null, { withoutEnlargement: true }).webp({ quality: 75 });
        }
        await pipeline.toFile(outputPath);
        console.log(`Optimized ${file} to ${name}.webp`);
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
}
optimize();
