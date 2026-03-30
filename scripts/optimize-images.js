const imagemin = require('imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');
const webp = require('imagemin-webp');
const svgo = require('imagemin-svgo');
const path = require('path');
const fs = require('fs');

async function run() {
  try {
    const buildMedia = path.resolve(__dirname, '..', 'build', 'static', 'media');
    const patterns = [
      path.join(buildMedia, '*.jpg'),
      path.join(buildMedia, '*.jpeg'),
      path.join(buildMedia, '*.png'),
      path.join(buildMedia, '*.svg')
    ];

    console.log('Optimizing images in:', buildMedia);

    // optimize jpg/png/svg in place
    await imagemin(patterns, {
      destination: buildMedia,
      plugins: [
        mozjpeg({quality: 75}),
        pngquant({quality: [0.65, 0.8]}),
        svgo({plugins: [{removeViewBox: false}]})
      ]
    });

    // create webp copies for browsers that support it
    const webpFiles = await imagemin([path.join(buildMedia, '*.{jpg,jpeg,png}')], {
      destination: buildMedia,
      plugins: [webp({quality: 75})]
    });

    console.log('Optimized', webpFiles.length, 'images and wrote webp versions.');

    // report simple size summary
    const files = fs.readdirSync(buildMedia).filter(f => /\.(jpg|jpeg|png|webp|svg)$/.test(f));
    let total = 0;
    files.forEach(f => { total += fs.statSync(path.join(buildMedia, f)).size; });
    console.log('Total size of image assets after optimization:', (total/1024/1024).toFixed(2), 'MB');
  } catch (err) {
    console.error('Image optimization failed:', err);
    process.exit(1);
  }
}

run();
