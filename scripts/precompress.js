const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function compressFile(inputPath, algo) {
  return new Promise((resolve, reject) => {
    const source = fs.createReadStream(inputPath);
    const outPath = inputPath + (algo === 'br' ? '.br' : '.gz');
    const dest = fs.createWriteStream(outPath);
    const stream = algo === 'br' ? zlib.createBrotliCompress() : zlib.createGzip();
    source.pipe(stream).pipe(dest).
      on('finish', () => resolve(outPath)).
      on('error', reject);
  });
}

async function walk(dir, exts) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (let file of list) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(await walk(file, exts));
    } else {
      if (exts.includes(path.extname(file).toLowerCase())) results.push(file);
    }
  }
  return results;
}

async function run() {
  const buildStatic = path.resolve(__dirname, '..', 'build');
  const exts = ['.js', '.css', '.html', '.svg', '.json', '.ttf', '.woff', '.woff2', '.eot', '.map'];
  console.log('Scanning', buildStatic, 'for assets to compress');
  const files = await walk(buildStatic, exts);
  console.log('Found', files.length, 'assets to compress');
  let count = 0;
  for (const f of files) {
    try {
      await compressFile(f, 'gz');
      await compressFile(f, 'br');
      count++;
    } catch (err) {
      console.error('Failed to compress', f, err.message || err);
    }
  }
  console.log('Precompression done for', count, 'files.');
}

run().catch(err => { console.error(err); process.exit(1); });
