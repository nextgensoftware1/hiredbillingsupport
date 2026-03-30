import { globalLazyLoader } from './lazyImageLoader';

function initImageHandling() {
  if (typeof window === 'undefined') return;

  // Run after DOM ready
  const run = () => {
    // Convert native lazy-loading to eager for immediate render where present
    try {
      const nativeLazy = document.querySelectorAll('img[loading="lazy"]');
      nativeLazy.forEach(img => img.setAttribute('loading', 'eager'));
    } catch (e) {
      // ignore
    }

    // Register images explicitly opting into the global loader.
    // Mark images with `data-use-global-lazy` and `data-src` (optional).
    try {
      const imgs = document.querySelectorAll('img[data-use-global-lazy]');
      imgs.forEach(img => {
        const src = img.getAttribute('data-src') || img.getAttribute('src');
        if (!src) return;
        globalLazyLoader.registerImage(img, [{ type: 'original', url: src }], { placeholder: img.getAttribute('data-placeholder') || undefined });
      });
    } catch (e) {
      // ignore
    }
  };

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    run();
  } else {
    document.addEventListener('DOMContentLoaded', run);
  }
}

initImageHandling();
