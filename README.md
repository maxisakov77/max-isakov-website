# Max AEC Website

Next.js website for `maxaec.com`.

## Production Setup

- Hosting: Vercel
- Domains: `maxaec.com`, `www.maxaec.com`
- Source repo: `https://github.com/maxisakov77/max-isakov-website.git`
- Production branch: `master`

## Project Files

- `app/`: Next.js App Router pages and API routes
- `components/`: shared React components (Navbar, Footer, etc.)
- `public/`: images and static assets
- `app/globals.css`: global styling
- `next.config.ts`: redirects, security headers
- `middleware.ts`: admin route protection

## Local Development

1. Install dependencies:
   - `npm install`
   - `npx playwright install chromium`
2. Start dev server:
   - `npm run dev`
   - Open `http://localhost:3000`
3. Edit files as needed.
4. Run checks:
   - `npm run test:site`

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
- Keep contact details and CTA copy current in `app/contact/page.tsx`.

## Maintenance Runbook

See `MAINTENANCE.md` for deployment checklist, verification steps, and rollback instructions.
