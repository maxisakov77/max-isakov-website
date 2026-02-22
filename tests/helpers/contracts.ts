export interface CrawlPageResult {
  url: string;
  status: number | null;
  title: string;
  h1Count: number;
  internalLinks: string[];
  consoleErrors: string[];
}

export type SeoWarningSeverity = 'warning' | 'info';

export type SeoWarningCode =
  | 'missing_canonical'
  | 'missing_og_title'
  | 'missing_og_description'
  | 'missing_robots_txt'
  | 'missing_sitemap_xml'
  | 'missing_favicon'
  | 'blank_target_missing_rel'
  | 'missing_image_dimensions'
  | 'missing_lazy_loading'
  | 'missing_json_ld';

export interface SeoWarning {
  code: SeoWarningCode;
  severity: SeoWarningSeverity;
  url: string;
  detail: string;
  recommendation: string;
}

export interface SiteAuditSummary {
  crawledCount: number;
  criticalFailures: number;
  warnings: number;
}
