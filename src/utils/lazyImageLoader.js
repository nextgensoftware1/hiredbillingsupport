// Lazy Image Loader - Utility for efficient image loading
// Supports WebP, AVIF, and fallback formats with lazy loading

export class LazyImageLoader {
  constructor() {
    this.observer = null;
    this.imageMap = new Map();
    this.initializeObserver();
  }

  initializeObserver() {
    // Use Intersection Observer for efficient lazy loading
    const options = {
      root: null,
      rootMargin: '50px', // Start loading 50px before element enters viewport
      threshold: 0.01
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadImage(entry.target);
          this.observer.unobserve(entry.target);
        }
      });
    }, options);
  }

  registerImage(element, sources, options = {}) {
    // Store image registration for later loading
    this.imageMap.set(element, { sources, options });
    
    // Set placeholder or blur effect
    if (options.placeholder) {
      element.style.backgroundImage = `url('${options.placeholder}')`;
      element.style.backgroundSize = 'cover';
    }
    
    element.classList.add('lazy-image-loading');
    this.observer.observe(element);
  }

  loadImage(element) {
    const imageData = this.imageMap.get(element);
    if (!imageData) return;

    const { sources, options } = imageData;
    const img = new Image();

    // Preload image
    img.onload = () => {
      this.applyImage(element, img.src, options);
      element.classList.remove('lazy-image-loading');
      element.classList.add('lazy-image-loaded');
      
      if (options.onLoad) {
        options.onLoad(element);
      }
    };

    img.onerror = () => {
      element.classList.remove('lazy-image-loading');
      element.classList.add('lazy-image-error');
      console.error('Failed to load image from sources:', sources);
      
      if (options.onError) {
        options.onError(element);
      }
    };

    // Try sources in order (WebP, AVIF, original)
    img.src = this.selectBestSource(sources);
  }

  selectBestSource(sources) {
    // Check browser support for modern formats
    const supportsWebP = this.checkWebPSupport();
    const supportsAVIF = this.checkAVIFSupport();

    for (const source of sources) {
      if (source.type === 'avif' && supportsAVIF) return source.url;
      if (source.type === 'webp' && supportsWebP) return source.url;
      if (source.type === 'original' || source.type === 'jpg' || source.type === 'png') {
        return source.url;
      }
    }

    // Fallback
    return sources[sources.length - 1]?.url || '';
  }

  checkWebPSupport() {
    if (typeof window === 'undefined') return false;
    
    // Check cached value
    if (window.__webpSupport !== undefined) {
      return window.__webpSupport;
    }

    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    
    const result = canvas.toDataURL('image/webp').indexOf('image/webp') === 5;
    window.__webpSupport = result;
    return result;
  }

  checkAVIFSupport() {
    if (typeof window === 'undefined') return false;
    
    // Check cached value
    if (window.__avifSupport !== undefined) {
      return window.__avifSupport;
    }

    // AVIF support is still limited, check via feature detection
    // Most modern browsers will support by 2025
    const ua = navigator.userAgent;
    const isChrome = ua.indexOf('Chrome') > -1 || ua.indexOf('Chromium') > -1;
    const isFirefox = ua.indexOf('Firefox') > -1;
    const isSafari = ua.indexOf('Safari') > -1 && ua.indexOf('Chrome') === -1;

    let result = false;
    
    // Chrome 85+, Firefox 93+, Safari 16+
    if (isChrome) {
      const chromeVersion = parseInt(ua.match(/Chrome\/(\d+)/)?.[1] || 0);
      result = chromeVersion >= 85;
    } else if (isFirefox) {
      const firefoxVersion = parseInt(ua.match(/Firefox\/(\d+)/)?.[1] || 0);
      result = firefoxVersion >= 93;
    } else if (isSafari) {
      const safariVersion = parseInt(ua.match(/Version\/(\d+)/)?.[1] || 0);
      result = safariVersion >= 16;
    }

    window.__avifSupport = result;
    return result;
  }

  applyImage(element, src, options) {
    if (element.tagName === 'IMG') {
      element.src = src;
      if (options.alt) element.alt = options.alt;
      if (options.title) element.title = options.title;
    } else {
      // For div/section elements, use background-image
      element.style.backgroundImage = `url('${src}')`;
      if (options.backgroundSize) {
        element.style.backgroundSize = options.backgroundSize;
      }
      if (options.backgroundPosition) {
        element.style.backgroundPosition = options.backgroundPosition;
      }
    }
  }

  unobserve(element) {
    if (this.observer) {
      this.observer.unobserve(element);
    }
    this.imageMap.delete(element);
  }

  unobserveAll() {
    if (this.observer) {
      this.observer.disconnect();
    }
    this.imageMap.clear();
  }
}

// Utility function to generate image sources for modern formats
export function generateImageSources(basename, formats = ['avif', 'webp', 'original']) {
  const sources = [];
  
  if (formats.includes('avif')) {
    sources.push({
      type: 'avif',
      url: `${basename}.avif`,
      mimeType: 'image/avif'
    });
  }
  
  if (formats.includes('webp')) {
    sources.push({
      type: 'webp',
      url: `${basename}.webp`,
      mimeType: 'image/webp'
    });
  }
  
  // Original format (jpg/png) as fallback
  if (formats.includes('original')) {
    const ext = basename.includes('.') ? 
      basename.substring(basename.lastIndexOf('.')) : 
      '.jpg';
    sources.push({
      type: ext.replace('.', ''),
      url: `${basename}${ext}`,
      mimeType: `image/${ext.replace('.', '')}`
    });
  }
  
  return sources;
}

// Initialize global lazy loader
export const globalLazyLoader = new LazyImageLoader();

// CSS for lazy loading states
export const LAZY_IMAGE_CSS = `
  .lazy-image-loading {
    opacity: 0.7;
    background-color: #f0f0f0;
    transition: opacity 0.3s ease;
  }

  .lazy-image-loaded {
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  .lazy-image-error {
    opacity: 0.5;
    background-color: #e0e0e0;
  }

  img.lazy-image-loading {
    filter: blur(10px);
  }

  img.lazy-image-loaded {
    filter: blur(0);
    transition: filter 0.3s ease;
  }
`;
