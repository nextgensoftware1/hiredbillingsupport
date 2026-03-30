import React, { useRef, useEffect } from 'react';
import { globalLazyLoader } from '../utils/lazyImageLoader';

const LazyImage = ({ src, alt = '', className = '', style = {}, placeholder, eager = false }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If eager requested, set src immediately
    if (eager) {
      el.loading = 'eager';
      if (typeof src === 'string') el.src = src;
      return;
    }

    // Prepare sources array for the global loader (fallback to single original)
    const sources = [];
    if (Array.isArray(src)) {
      for (const s of src) sources.push({ type: 'original', url: s });
    } else if (typeof src === 'string') {
      sources.push({ type: 'original', url: src });
    } else if (src && src.url) {
      sources.push({ type: 'original', url: src.url });
    }

    globalLazyLoader.registerImage(el, sources, { placeholder });
    return () => globalLazyLoader.unobserve(el);
  }, [src, eager, placeholder]);

  return <img ref={ref} alt={alt} className={className} style={style} />;
};

export default LazyImage;
