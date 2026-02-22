# Website Maintenance Runbook

This runbook defines how `maxaec.com` is maintained and published from VS Code.

## 1) Source of Truth

- Repo: `https://github.com/maxisakov77/max-isakov-website.git`
- Branch: `master` is production
- Host: Vercel
- Domain: `maxaec.com` (see `CNAME`)

## 2) Local Workflow

1. Open the `website/` folder in VS Code.
2. Pull latest production branch:
   - `git pull origin master`
3. Install dependencies (first run or after dependency updates):
   - `npm install`
   - `npx playwright install chromium`
4. Start local preview server:
   - `python -m http.server 5500`
5. Preview at:
   - `http://localhost:5500`
6. In a second terminal, run automation checks:
   - `npm run test:site`

## 3) Pre-Publish Checklist

- [ ] Main navigation links work on desktop and mobile.
- [ ] Mobile nav toggle opens/closes correctly.
- [ ] Updated pages render correctly.
- [ ] Browser console has no missing asset errors.
- [ ] Email CTA opens default mail client with recipient `info@maxaec.com`.
- [ ] Email CTA includes subject `Project Inquiry from maxaec.com`.
- [ ] `npm run test:site` passes critical checks.
- [ ] Review `output/playwright/seo-warnings.md` and confirm warning-only items are accepted or queued.

## 4) Publish Steps

1. Stage all intended changes:
   - `git add .`
2. Commit with a clear scope:
   - `git commit -m "Update portfolio project copy"`
3. Push:
   - `git push origin master`

Vercel will auto-deploy from `master`.

## 5) Post-Deploy Verification

- [ ] `https://maxaec.com` serves updated content.
- [ ] `https://www.maxaec.com` serves updated content.
- [ ] SSL lock is valid.
- [ ] Contact details and email CTA are accurate on desktop and mobile.
- [ ] Production automation check passes:
  - PowerShell: `$env:BASE_URL='https://www.maxaec.com'; npm run test:site`
  - Bash: `BASE_URL=https://www.maxaec.com npm run test:site`

## 6) Rollback

If a bad change reaches production:

1. Find the bad commit:
   - `git log --oneline`
2. Revert it:
   - `git revert <COMMIT_SHA>`
3. Push the revert:
   - `git push origin master`
4. Re-verify production after Vercel redeploys.

## 7) Operational Guardrails

- Keep deploy-relevant changes in git.
- Do not rely on manual, out-of-band production edits.
- Use descriptive commit messages tied to the files/features changed.

## 8) Playwright Automation Reference

### Standard Commands

- Local checks against preview server:
  - `npm run test:site`
- Headed debugging:
  - `npm run test:site:headed`
- Production checks:
  - `npm run test:site:prod`
- CI-like reporter output:
  - `npm run test:site:ci`
- View HTML report:
  - `npm run test:site:report`

### Environment Variables

- `BASE_URL` (default: `http://127.0.0.1:5500`)
- `MAX_CRAWL_PAGES` (default: `200`)
- `ALLOW_CONSOLE_ERROR_PATTERNS` (default includes `favicon.ico` pattern)

### Artifacts

- HTML report: `output/playwright/report`
- Test outputs: `output/playwright/test-results`
- Critical summary JSON: `output/playwright/critical-summary.json`
- SEO warnings JSON: `output/playwright/seo-warnings.json`
- SEO warnings Markdown: `output/playwright/seo-warnings.md`

### Result Interpretation

- Critical failures: block release. These include page availability, required title/H1 structure, disallowed console errors, contact CTA integrity, and mobile navigation behavior.
- SEO/quality warnings: informational by default. They are written to artifacts and should be triaged, but do not fail the suite.
