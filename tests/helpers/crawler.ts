import type { BrowserContext } from '@playwright/test';

import type { CrawlPageResult } from './contracts';
import { isCrawlableHref, isSameOrigin, normalizeUrl } from './normalize';

export interface CrawlOptions {
  baseUrl: string;
  maxPages: number;
}

const EXCLUDED_PATH_PREFIXES = ['/admin'];

function isExcludedUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return EXCLUDED_PATH_PREFIXES.some((prefix) => parsed.pathname === prefix || parsed.pathname.startsWith(`${prefix}/`));
  } catch {
    return false;
  }
}

export async function crawlSite(
  context: BrowserContext,
  options: CrawlOptions,
): Promise<CrawlPageResult[]> {
  const startUrl = normalizeUrl('/', options.baseUrl);
  const baseOrigin = new URL(startUrl).origin;

  const queue: string[] = [startUrl];
  const enqueued = new Set(queue);
  const visited = new Set<string>();
  const results: CrawlPageResult[] = [];

  while (queue.length > 0 && visited.size < options.maxPages) {
    const targetUrl = queue.shift();
    if (!targetUrl) {
      break;
    }

    enqueued.delete(targetUrl);
    if (visited.has(targetUrl)) {
      continue;
    }

    if (isExcludedUrl(targetUrl)) {
      continue;
    }

    visited.add(targetUrl);

    const page = await context.newPage();
    const consoleErrors: string[] = [];

    page.on('console', (message) => {
      if (message.type() === 'error') {
        consoleErrors.push(message.text());
      }
    });

    page.on('pageerror', (error) => {
      consoleErrors.push(`Page error: ${error.message}`);
    });

    let status: number | null = null;
    let title = '';
    let h1Count = 0;
    let hrefs: string[] = [];

    try {
      const response = await page.goto(targetUrl, { waitUntil: 'domcontentloaded' });
      status = response ? response.status() : null;
      title = await page.title();

      const pageData = await page.evaluate(() => {
        const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href]'))
          .map((anchor) => anchor.getAttribute('href') ?? '')
          .filter(Boolean);

        return {
          h1Count: document.querySelectorAll('h1').length,
          links,
        };
      });

      h1Count = pageData.h1Count;
      hrefs = pageData.links;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      consoleErrors.push(`Navigation failure: ${message}`);
    } finally {
      await page.close();
    }

    const internalLinks = new Set<string>();

    for (const href of hrefs) {
      if (!isCrawlableHref(href)) {
        continue;
      }

      try {
        const normalized = normalizeUrl(href, targetUrl);
        if (!isSameOrigin(normalized, baseOrigin)) {
          continue;
        }

        if (isExcludedUrl(normalized)) {
          continue;
        }

        internalLinks.add(normalized);

        const canQueueMore = visited.size + queue.length < options.maxPages;
        if (canQueueMore && !visited.has(normalized) && !enqueued.has(normalized)) {
          queue.push(normalized);
          enqueued.add(normalized);
        }
      } catch {
        // Ignore malformed href values.
      }
    }

    results.push({
      url: targetUrl,
      status,
      title,
      h1Count,
      internalLinks: Array.from(internalLinks).sort(),
      consoleErrors,
    });
  }

  return results;
}
