# Deploying a Pagesmith site to Netlify

## The gotcha

Pagesmith builds Astro sites targeting **Cloudflare Workers**. Every
Pagesmith export ships an `astro.config.mjs` wired with the Cloudflare
adapter (`@astrojs/cloudflare`) plus Cloudflare-specific `session` config.

If you push that repo straight to Netlify (Pagesmith → GitHub → Netlify
native Git deploy), Netlify runs `astro build` and the Cloudflare adapter
emits Workers output (a `_worker.js` bundle + KV/session provisioning)
instead of a plain static `dist/`. There is also no `netlify.toml`, so
Netlify has no publish directory pinned. The result: **nothing valid at the
site root, so every path returns Netlify's default "Page not found" 404.**

## The fix

These sites are fully static (all pages prerender; the `.ts` endpoints are
build-time generated), so they don't need the Cloudflare adapter at all on
Netlify.

1. **Add `netlify.toml`** at the repo root:

   ```toml
   [build]
     command = "npm run build"
     publish = "dist"
   ```

2. **Strip the Cloudflare bits from `astro.config.mjs`:**
   - Remove `import cloudflare from '@astrojs/cloudflare';`
   - Remove `import { sessionDrivers } from 'astro/config';`
   - Remove the `adapter: cloudflare({ ... })` block
   - Remove the `session: { driver: sessionDrivers.lruCache() }` block

   With `output: 'static'` and no adapter, Astro builds straight to `dist/`,
   which Netlify serves directly.

After committing both changes, Netlify auto-redeploys and the site resolves.

> If a Pagesmith site ever has real SSR/API routes (not the case here), use
> the `@astrojs/netlify` adapter instead of removing the adapter entirely.
