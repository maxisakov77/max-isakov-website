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
3. Start local preview server:
   - `python -m http.server 5500`
4. Preview at:
   - `http://localhost:5500`

## 3) Pre-Publish Checklist

- [ ] Main navigation links work on desktop and mobile.
- [ ] Mobile nav toggle opens/closes correctly.
- [ ] Updated pages render correctly.
- [ ] Browser console has no missing asset errors.
- [ ] Email CTA opens default mail client with recipient `info@maxaec.com`.
- [ ] Email CTA includes subject `Project Inquiry from maxaec.com`.

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
