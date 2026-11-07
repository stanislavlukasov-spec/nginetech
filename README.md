# NGINE — nginetech.eu

Marketing site for NGINE contract web development. Next.js static export, hosted free on GitHub Pages.

## Develop

```bash
npm install
npm run dev
```

## Deploy

Push to `main`. The GitHub Action builds `out/` and publishes it to Pages.

One-time setup: repo **Settings → Pages → Source: GitHub Actions**.

### Custom domain (nginetech.eu)

1. Settings → Pages → Custom domain: `nginetech.eu`, tick *Enforce HTTPS*.
2. DNS at your registrar:
   - `A` records for `@`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - `CNAME` for `www`: `stanislavlukasov-spec.github.io`
3. Re-run the workflow so the base path switches from `/nginetech` to `/`.
