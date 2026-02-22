import { defineConfig } from '@playwright/test';

const baseURL = process.env.BASE_URL ?? 'http://127.0.0.1:5500';

export default defineConfig({
  testDir: './tests',
  timeout: 120_000,
  fullyParallel: false,
  retries: process.env.CI ? 1 : 0,
  workers: 1,
  outputDir: 'output/playwright/test-results',
  reporter: [
    ['line'],
    ['html', { outputFolder: 'output/playwright/report', open: 'never' }],
  ],
  use: {
    baseURL,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    viewport: { width: 1280, height: 720 },
  },
});
