const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

// Config
const srcDir = path.resolve(__dirname, '..', 'src', 'assets', 'images', 'hero');
const outDir = path.resolve(__dirname, '..', 'public', 'optimized', 'hero');
const widths = [480, 768, 1024, 1440];
const formats = ['webp', 'avif'];

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function processFile(file) {
  const ext = path.extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) return null;
  const name = path.basename(file, ext);
  const input = path.join(srcDir, file);

  const entry = { name, variants: {} };

  for (const w of widths) {
    for (const fmt of formats) {
      const outName = `${name}-${w}.${fmt}`;
      const outPath = path.join(outDir, outName);
      try {
        await sharp(input)
          .resize({ width: w })
          [fmt]({ quality: 80 })
          .toFile(outPath);
        entry.variants[fmt] = entry.variants[fmt] || [];
        entry.variants[fmt].push({ width: w, url: `/optimized/hero/${outName}` });
      } catch (err) {
        console.error('Failed to process', input, err.message || err);
      }
    }
  }

  return entry;
}

async function run() {
  console.log('Generating responsive images from', srcDir, '→', outDir);
  await ensureDir(outDir);
  const files = await fs.promises.readdir(srcDir);
  const manifest = {};
  for (const f of files) {
    const res = await processFile(f);
    if (res) manifest[res.name] = res.variants;
  }
  // write manifest
  const manifestPath = path.join(outDir, '..', 'manifest.json');
  await fs.promises.writeFile(manifestPath, JSON.stringify(manifest, null, 2));
  console.log('Responsive images generated. Manifest written to', manifestPath);
}

run().catch(err => { console.error(err); process.exit(1); });
