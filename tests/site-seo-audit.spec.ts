import { expect, test } from '@playwright/test';

import type { SeoWarning, SiteAuditSummary } from './helpers/contracts';
import { crawlSite } from './helpers/crawler';
import { normalizeUrl } from './helpers/normalize';
import { writeSeoWarningArtifacts } from './helpers/reporting';

const DEFAULT_BASE_URL = 'http://127.0.0.1:5500';
const DEFAULT_MAX_CRAWL_PAGES = 200;

function parseMaxPages(): number {
  const value = Number.parseInt(process.env.MAX_CRAWL_PAGES ?? '', 10);
  if (Number.isFinite(value) && value > 0) {
    return value;
  }

  return DEFAULT_MAX_CRAWL_PAGES;
}

function createWarning(
  code: SeoWarning['code'],
  url: string,
  detail: string,
  recommendation: string,
): SeoWarning {
  return {
    code,
    severity: 'warning',
    url,
    detail,
    recommendation,
  };
}

test.describe('SEO and Quality Audit (Warning-Only)', () => {
  test('crawl site and generate warning artifacts', async ({ browser, request }, testInfo) => {
    const baseUrl = process.env.BASE_URL ?? DEFAULT_BASE_URL;
    const maxPages = parseMaxPages();

    const context = await browser.newContext();
    const crawlResults = await crawlSite(context, { baseUrl, maxPages });

    const warnings: SeoWarning[] = [];

    for (const result of crawlResults) {
      const page = await context.newPage();

      try {
        await page.goto(result.url, { waitUntil: 'domcontentloaded' });

        const checks = await page.evaluate(() => {
          const hasCanonical = Boolean(document.querySelector('link[rel="canonical"]'));
          const hasOgTitle = Boolean(document.querySelector('meta[property="og:title"]'));
          const hasOgDescription = Boolean(document.querySelector('meta[property="og:description"]'));
          const hasJsonLd = Boolean(document.querySelector('script[type="application/ld+json"]'));

          const targetBlankMissingRel = Array.from(
            document.querySelectorAll<HTMLAnchorElement>('a[target="_blank"]'),
          )
            .filter((anchor) => {
              const rel = (anchor.getAttribute('rel') ?? '').toLowerCase();
              return !rel.includes('noopener') || !rel.includes('noreferrer');
            })
            .map((anchor) => anchor.getAttribute('href') ?? '(missing href)');

          const images = Array.from(document.querySelectorAll<HTMLImageElement>('img'));
          const missingDimensions = images.filter(
            (image) => !image.hasAttribute('width') || !image.hasAttribute('height'),
          ).length;
          const missingLazyNonHero = images.filter((image) => {
            if (image.closest('.hero')) {
              return false;
            }

            return (image.getAttribute('loading') ?? '').toLowerCase() !== 'lazy';
          }).length;

          return {
            hasCanonical,
            hasOgTitle,
            hasOgDescription,
            hasJsonLd,
            targetBlankMissingRel,
            missingDimensions,
            missingLazyNonHero,
          };
        });

        if (!checks.hasCanonical) {
          warnings.push(
            createWarning(
              'missing_canonical',
              result.url,
              'Missing canonical <link> tag.',
              'Add <link rel="canonical" href="..."> in the <head>.',
            ),
          );
        }

        if (!checks.hasOgTitle) {
          warnings.push(
            createWarning(
              'missing_og_title',
              result.url,
              'Missing Open Graph title meta tag.',
              'Add <meta property="og:title" content="..."> in the <head>.',
            ),
          );
        }

        if (!checks.hasOgDescription) {
          warnings.push(
            createWarning(
              'missing_og_description',
              result.url,
              'Missing Open Graph description meta tag.',
              'Add <meta property="og:description" content="..."> in the <head>.',
            ),
          );
        }

        if (checks.targetBlankMissingRel.length > 0) {
          warnings.push(
            createWarning(
              'blank_target_missing_rel',
              result.url,
              `Found ${checks.targetBlankMissingRel.length} target="_blank" link(s) without rel="noopener noreferrer".`,
              'Add rel="noopener noreferrer" to every target="_blank" link.',
            ),
          );
        }

        if (checks.missingDimensions > 0) {
          warnings.push(
            createWarning(
              'missing_image_dimensions',
              result.url,
              `Found ${checks.missingDimensions} image(s) without both width and height attributes.`,
              'Add explicit width and height attributes to reduce layout shifts.',
            ),
          );
        }

        if (checks.missingLazyNonHero > 0) {
          warnings.push(
            createWarning(
              'missing_lazy_loading',
              result.url,
              `Found ${checks.missingLazyNonHero} non-hero image(s) without loading="lazy".`,
              'Set loading="lazy" on non-critical images below the fold.',
            ),
          );
        }

        if (!checks.hasJsonLd) {
          warnings.push(
            createWarning(
              'missing_json_ld',
              result.url,
              'Missing JSON-LD structured data script.',
              'Add script[type="application/ld+json"] with organization/page schema.',
            ),
          );
        }
      } finally {
        await page.close();
      }
    }

    await context.close();

    const endpointChecks = [
      {
        path: '/robots.txt',
        code: 'missing_robots_txt' as const,
        recommendation: 'Add a robots.txt file and include your sitemap URL.',
      },
      {
        path: '/sitemap.xml',
        code: 'missing_sitemap_xml' as const,
        recommendation: 'Generate and serve sitemap.xml for all canonical pages.',
      },
      {
        path: '/favicon.ico',
        code: 'missing_favicon' as const,
        recommendation: 'Add favicon.ico and reference it with rel="icon".',
      },
    ];

    for (const endpoint of endpointChecks) {
      const url = normalizeUrl(endpoint.path, baseUrl);
      const response = await request.get(url, { failOnStatusCode: false });

      if (response.status() >= 400) {
        warnings.push(
          createWarning(
            endpoint.code,
            url,
            `Endpoint returned HTTP ${response.status()}.`,
            endpoint.recommendation,
          ),
        );
      }
    }

    const summary: SiteAuditSummary = {
      crawledCount: crawlResults.length,
      criticalFailures: 0,
      warnings: warnings.length,
    };

    const { jsonPath, markdownPath } = await writeSeoWarningArtifacts(warnings, summary);
    await testInfo.attach('seo-warnings-json', {
      path: jsonPath,
      contentType: 'application/json',
    });
    await testInfo.attach('seo-warnings-markdown', {
      path: markdownPath,
      contentType: 'text/markdown',
    });

    expect(crawlResults.length).toBeGreaterThan(0);
  });
});
