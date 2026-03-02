#!/usr/bin/env node

/**
 * Submit all public URLs to IndexNow (Bing, Yandex, DuckDuckGo, etc.)
 *
 * Usage:
 *   node scripts/submit-indexnow.mjs
 *
 * This reads the live sitemap.xml and pushes every URL to the IndexNow API.
 * Run after each deploy to get pages indexed fast.
 */

const SITE = 'https://www.maxaec.com';
const KEY = '048e678f0d5bde7d38283bf4bfec3691';

async function main() {
  // Fetch the live sitemap
  const res = await fetch(`${SITE}/sitemap.xml`);
  if (!res.ok) {
    console.error(`Failed to fetch sitemap: ${res.status}`);
    process.exit(1);
  }

  const xml = await res.text();

  // Extract all <loc>…</loc> URLs
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  console.log(`Found ${urls.length} URLs in sitemap:\n`);
  urls.forEach((u) => console.log(`  ${u}`));

  // Submit to IndexNow
  const payload = {
    host: 'www.maxaec.com',
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList: urls,
  };

  console.log(`\nSubmitting ${urls.length} URLs to IndexNow…`);

  const submit = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });

  if (submit.ok || submit.status === 202) {
    console.log(`✓ IndexNow accepted (HTTP ${submit.status})`);
  } else {
    const body = await submit.text();
    console.error(`✗ IndexNow rejected (HTTP ${submit.status}): ${body}`);
    process.exit(1);
  }
}

main();
