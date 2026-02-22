import { expect, test } from '@playwright/test';

import type { SiteAuditSummary } from './helpers/contracts';
import { crawlSite } from './helpers/crawler';
import { writeCriticalSummary } from './helpers/reporting';

const DEFAULT_BASE_URL = 'http://127.0.0.1:5500';
const DEFAULT_MAX_CRAWL_PAGES = 200;
const DEFAULT_ALLOWLIST_PATTERNS = 'favicon\\.ico';

function parseMaxPages(): number {
  const value = Number.parseInt(process.env.MAX_CRAWL_PAGES ?? '', 10);
  if (Number.isFinite(value) && value > 0) {
    return value;
  }

  return DEFAULT_MAX_CRAWL_PAGES;
}

function parseAllowlistPatterns(): RegExp[] {
  const rawValue = process.env.ALLOW_CONSOLE_ERROR_PATTERNS ?? DEFAULT_ALLOWLIST_PATTERNS;

  return rawValue
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((pattern) => {
      try {
        return new RegExp(pattern, 'i');
      } catch {
        return new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
      }
    });
}

test.describe('Critical Site Regressions', () => {
  test('crawl, route health, structure, and runtime checks', async ({ browser }, testInfo) => {
    const baseUrl = process.env.BASE_URL ?? DEFAULT_BASE_URL;
    const maxPages = parseMaxPages();
    const allowlistPatterns = parseAllowlistPatterns();

    const context = await browser.newContext();
    const results = await crawlSite(context, { baseUrl, maxPages });
    await context.close();

    const failures: string[] = [];

    if (results.length === 0) {
      failures.push('Crawler discovered zero pages.');
    }

    for (const result of results) {
      if (result.status === null) {
        failures.push(`${result.url}: missing HTTP status (navigation failed).`);
      } else if (result.status >= 400) {
        failures.push(`${result.url}: HTTP status ${result.status}.`);
      }

      if (!result.title.trim()) {
        failures.push(`${result.url}: missing <title>.`);
      }

      if (result.h1Count !== 1) {
        failures.push(`${result.url}: expected exactly 1 <h1>, found ${result.h1Count}.`);
      }

      const disallowedErrors = result.consoleErrors.filter(
        (message) => !allowlistPatterns.some((pattern) => pattern.test(message)),
      );

      for (const error of disallowedErrors) {
        failures.push(`${result.url}: console error "${error}".`);
      }
    }

    const summary: SiteAuditSummary = {
      crawledCount: results.length,
      criticalFailures: failures.length,
      warnings: 0,
    };

    const summaryPath = await writeCriticalSummary(summary, failures);
    await testInfo.attach('critical-summary', {
      path: summaryPath,
      contentType: 'application/json',
    });

    expect(failures, failures.join('\n')).toEqual([]);
  });

  test('contact CTA mailto uses expected recipient and subject', async ({ page }) => {
    await page.goto('/contact.html', { waitUntil: 'domcontentloaded' });

    const cta = page.locator('.contact-cta-card a[href^="mailto:"]').first();
    await expect(cta).toBeVisible();

    const href = await cta.getAttribute('href');
    expect(href).toBeTruthy();

    const mailtoUrl = new URL(href ?? '');
    expect(mailtoUrl.protocol).toBe('mailto:');
    expect(mailtoUrl.pathname.toLowerCase()).toBe('info@maxaec.com');
    expect(mailtoUrl.searchParams.get('subject')).toBe('Project Inquiry from maxaec.com');
  });

  test('mobile nav toggles open and closes after clicking a nav link', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const navToggle = page.locator('.nav-toggle');
    const navMenu = page.locator('.nav-menu');
    const firstNavLink = page.locator('.nav-menu a').first();

    await expect(navToggle).toBeVisible();

    await navToggle.click();
    await expect(navMenu).toHaveClass(/active/);

    await firstNavLink.click();
    await expect(navMenu).not.toHaveClass(/active/);
  });
});
