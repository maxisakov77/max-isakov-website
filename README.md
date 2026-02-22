# Max AEC Website

Static HTML/CSS/JS site for `maxaec.com`.

## Production Setup

- Hosting: Vercel
- Domains: `maxaec.com`, `www.maxaec.com`
- Source repo: `https://github.com/maxisakov77/max-isakov-website.git`
- Production branch: `master`
- Custom domain file: `CNAME`

## Project Files

- `index.html`, `services.html`, `portfolio.html`, `contact.html`, etc.: page content
- `css/style.css`: global styling
- `js/main.js`: shared client-side behavior
- `assets/`: images and static assets
- `CNAME`: custom domain (`maxaec.com`)

## VS Code Workflow

1. Open `website/` as the workspace root.
2. Pull latest:
   - `git pull origin master`
3. Preview locally:
   - `python -m http.server 5500`
   - Open `http://localhost:5500`
4. Edit files as needed.
5. Validate key pages and navigation.

## Publishing (Git Push -> Vercel Auto Deploy)

1. Stage changes:
   - `git add .`
2. Commit with a specific message:
   - `git commit -m "Update contact page copy"`
3. Push to production branch:
   - `git push origin master`
4. Confirm deployment:
   - `https://maxaec.com`
   - `https://www.maxaec.com`

## Contact Method

- No third-party form backend is used.
- Contact uses a direct email CTA:
  - `mailto:info@maxaec.com?subject=Project%20Inquiry%20from%20maxaec.com`
- Keep contact details and CTA copy current in `contact.html`.

## Maintenance Runbook

See `MAINTENANCE.md` for deployment checklist, verification steps, and rollback instructions.
