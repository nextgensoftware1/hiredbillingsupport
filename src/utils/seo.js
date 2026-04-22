export function truncateToWord(str = '', max = 160) {
  if (!str) return '';
  if (str.length <= max) return str;
  const trimmed = str.slice(0, max - 1);
  // try to avoid cutting mid-word
  const lastSpace = trimmed.lastIndexOf(' ');
  if (lastSpace > Math.floor(max * 0.6)) return trimmed.slice(0, lastSpace) + '…';
  return trimmed + '…';
}

export function enforceMeta(pageMeta = {}, site = {}) {
  const title = pageMeta.title || site.name || '';
  const description = pageMeta.description || '';
  const keywords = pageMeta.keywords || '';
  const slug = pageMeta.slug || '';
  const baseUrl = (site.baseUrl || '').replace(/\/$/, '');
  const url = slug ? `${baseUrl}/${slug}` : baseUrl || '';
  const image = pageMeta.ogImage || site.logo || '';

  return {
    title: truncateToWord(title, 60),
    description: truncateToWord(description, 160),
    keywords,
    url,
    image
  };
}

export function validateAllMetadata(metaObj = {}, limits = { title: 60, description: 160 }) {
  const issues = [];

  function walk(obj, path = '') {
    if (!obj || typeof obj !== 'object') return;
    const keys = Object.keys(obj);
    // if object looks like a page meta (has title or description)
    if (obj.title || obj.description) {
      const titleLen = obj.title ? obj.title.length : 0;
      const descLen = obj.description ? obj.description.length : 0;
      if (titleLen > limits.title || descLen > limits.description) {
        issues.push({ path: path || '/', titleLen, descLen, title: obj.title, description: obj.description });
      }
    }
    keys.forEach((k) => walk(obj[k], path ? `${path}/${k}` : k));
  }

  walk(metaObj, '');
  return issues;
}

export function buildOrganizationJsonLd(site = {}) {
  const baseUrl = (site.baseUrl || '').replace(/\/$/, '');
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name || '',
    url: baseUrl || '',
    logo: site.logo || '',
    sameAs: site.social || []
  };
}
