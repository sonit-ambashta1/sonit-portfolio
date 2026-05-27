# Sonit Tambashta — Portfolio

[![CI/CD](https://github.com/sonitambashta/sonit-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/sonitambashta/sonit-portfolio/actions/workflows/ci.yml)

Personal portfolio built with React + Vite, hosted on AWS, deployed automatically on every push.

---

## Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite 5, Tailwind CSS 3, Framer Motion |
| Testing | Playwright (e2e), axe-core (accessibility) |
| Hosting | AWS S3 + CloudFront |
| TLS | AWS ACM (free, auto-renews) |
| CI/CD | GitHub Actions with OIDC — no stored AWS credentials |

## Local development

```bash
cd portfolio
npm install
npm run dev        # http://localhost:3000
npm run build      # production build → dist/
npm run test:e2e   # Playwright e2e tests
npm run test:a11y  # axe accessibility scan
```

## Infrastructure setup

See [AWS_SETUP.md](./AWS_SETUP.md) for a step-by-step guide to set up
S3, CloudFront, ACM, and the OIDC IAM role in the AWS Console (~20 min, one time).

## How deployment works

```
push to main
   │
   ├─ lint (Prettier + ESLint + Stylelint)
   ├─ build (Vite)
   ├─ test (Playwright e2e + axe a11y)
   │
   └─ deploy
        ├─ OIDC → temporary AWS credentials (no static keys)
        ├─ s3 sync  HTML files   → Cache-Control: no-cache
        ├─ s3 sync  /assets/*    → Cache-Control: max-age=31536000, immutable
        └─ CloudFront invalidation → /index.html, /
```

**Why two-pass sync?**
Vite content-hashes every JS/CSS/image filename (e.g. `index-CpRuD90J.js`).
When the file changes, the filename changes — the browser fetches it automatically.
So `/assets/*` can be cached for a year with no invalidation needed.
`index.html` is the only file that must always be fresh.

## Cost

~$0/month. CloudFront free tier covers 1 TB transfer and 10M requests/month —
more than enough for a portfolio. Only Route53 adds cost ($0.50/mo) if you use a custom domain.