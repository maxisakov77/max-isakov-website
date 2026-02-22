import fs from 'node:fs/promises';
import path from 'node:path';

import type { SeoWarning, SiteAuditSummary } from './contracts';

const OUTPUT_ROOT = path.resolve(process.cwd(), 'output/playwright');

function escapeTableCell(value: string): string {
  return value.replace(/\|/g, '\\|').replace(/\n/g, '<br>');
}

export async function writeCriticalSummary(
  summary: SiteAuditSummary,
  failures: string[],
): Promise<string> {
  await fs.mkdir(OUTPUT_ROOT, { recursive: true });
  const outputPath = path.join(OUTPUT_ROOT, 'critical-summary.json');

  await fs.writeFile(
    outputPath,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        summary,
        failures,
      },
      null,
      2,
    ),
    'utf-8',
  );

  return outputPath;
}

export async function writeSeoWarningArtifacts(
  warnings: SeoWarning[],
  summary: SiteAuditSummary,
): Promise<{ jsonPath: string; markdownPath: string }> {
  await fs.mkdir(OUTPUT_ROOT, { recursive: true });

  const jsonPath = path.join(OUTPUT_ROOT, 'seo-warnings.json');
  const markdownPath = path.join(OUTPUT_ROOT, 'seo-warnings.md');

  await fs.writeFile(
    jsonPath,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        summary,
        warnings,
      },
      null,
      2,
    ),
    'utf-8',
  );

  const markdownLines: string[] = [
    '# SEO and Quality Warning Report',
    '',
    `- Crawled pages: ${summary.crawledCount}`,
    `- Warning count: ${summary.warnings}`,
    `- Generated at: ${new Date().toISOString()}`,
    '',
  ];

  if (warnings.length === 0) {
    markdownLines.push('No warnings found.');
  } else {
    markdownLines.push('| Severity | Code | URL | Detail | Recommendation |');
    markdownLines.push('| --- | --- | --- | --- | --- |');

    for (const warning of warnings) {
      markdownLines.push(
        `| ${escapeTableCell(warning.severity)} | ${escapeTableCell(warning.code)} | ${escapeTableCell(
          warning.url,
        )} | ${escapeTableCell(warning.detail)} | ${escapeTableCell(warning.recommendation)} |`,
      );
    }
  }

  await fs.writeFile(markdownPath, markdownLines.join('\n'), 'utf-8');

  return { jsonPath, markdownPath };
}
