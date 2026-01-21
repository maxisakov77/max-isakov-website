# Max Isakov Architecture Website

Static HTML website ready for deployment.

## Files
- `index.html` - Homepage
- `about.html` - About page
- `services.html` - Services page
- `portfolio.html` - Portfolio page
- `contact.html` - Contact page
- `css/style.css` - Styles
- `js/main.js` - Navigation/form scripts
- `assets/` - Images

## Deploy to Netlify (Easiest - Free)

1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag the entire `website` folder onto the Netlify dashboard
3. Done! You get a URL like `random-name.netlify.app`
4. Connect your domain: Settings → Domain Management → Add custom domain → `maxisakov.com`

## Deploy to Vercel (Also Free)

1. Go to [vercel.com](https://vercel.com) and sign up
2. Install Vercel CLI: `npm i -g vercel`
3. Run `vercel` in the `website` folder
4. Connect domain in Vercel dashboard

## To Edit the Website

Just open any `.html` file and edit directly. Common edits:

| To change... | Edit this file |
|--------------|----------------|
| Homepage text | `index.html` |
| Services content | `services.html` |
| Portfolio projects | `portfolio.html` |
| About bio | `about.html` |
| Contact info | `contact.html` |
| Colors/fonts | `css/style.css` |

## Contact Form

The form uses Formspree. To activate:
1. Go to [formspree.io](https://formspree.io)
2. Create a form, get your form ID
3. In `contact.html`, replace `YOUR_FORM_ID` with your actual ID
