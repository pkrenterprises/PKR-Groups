# PKR Groups — Cloudflare Ready

This package is prepared for direct Cloudflare deployment with Wrangler.

## Structure

- `wrangler.toml` — Cloudflare Workers Static Assets configuration
- `public/` — complete PKR Groups website
- `public/index.html` — main page
- `public/brands/` — brand SEO pages
- `public/directors/` — director/profile SEO pages
- `public/sectors/` — sector SEO pages
- `public/sitemap.xml` — sitemap
- `public/robots.txt` — crawler instructions
- `public/assets/` — website assets

## Deploy

From this folder:

```bash
npx wrangler login
npx wrangler deploy
```

## Important

The sitemap in the source package may contain the final website domain configured for the project. Verify `public/sitemap.xml` after deployment and replace the domain if your actual Cloudflare domain is different.

After deployment, submit the sitemap to Google Search Console and Bing Webmaster Tools.
