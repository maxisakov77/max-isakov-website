const SKIPPED_SCHEMES = ['mailto:', 'tel:', 'javascript:'];

export function isCrawlableHref(href: string): boolean {
  const value = href.trim();
  if (!value || value.startsWith('#')) {
    return false;
  }

  const normalized = value.toLowerCase();
  return !SKIPPED_SCHEMES.some((scheme) => normalized.startsWith(scheme));
}

export function normalizeUrl(input: string, baseUrl: string): string {
  const url = new URL(input, baseUrl);

  url.hash = '';

  if (url.pathname.endsWith('/index.html')) {
    const pathname = url.pathname.slice(0, -'/index.html'.length);
    url.pathname = pathname || '/';
  }

  if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1);
  }

  return url.toString();
}

export function isSameOrigin(url: string, baseUrl: string): boolean {
  const target = new URL(url);
  const base = new URL(baseUrl);
  return target.origin === base.origin;
}
