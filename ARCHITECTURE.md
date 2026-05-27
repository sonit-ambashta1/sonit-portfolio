# Architecture

Simple, cost-efficient static site hosting on AWS. No servers. Near-zero cost.

---

## Overview

```
GitHub (push to main)
    │
    │  GitHub Actions CI/CD
    │
    ├─── lint + build + test
    │
    └─── deploy (OIDC auth — no stored keys)
              │
              ├── aws s3 sync ──► S3 Bucket
              │                   (private, all files)
              │
              └── aws cloudfront create-invalidation
                            │
                  ┌─────────▼──────────────────────────┐
                  │         CloudFront                  │
                  │  HTTPS · CDN · OAC · TLS 1.2+       │
                  └─────────────────────────────────────┘
                                    │
                             Your browser
```

---

## AWS Services

### S3 — file storage

Stores the built `dist/` folder (HTML, JS, CSS, images).

- **Private bucket** — no public access. Only CloudFront can read it, via Origin Access Control (OAC). This means the raw S3 URL is never exposed.
- S3 website hosting is **not** enabled. CloudFront handles routing.

### CloudFront — CDN and HTTPS

Sits in front of S3 and does the work that actually matters for users:

- **HTTPS** — with a free ACM certificate
- **Global edge caching** — files are cached at AWS edge locations worldwide
- **SPA routing** — 403/404 errors from S3 return `index.html` with a 200 status, so React Router deep links work correctly
- **OAC (Origin Access Control)** — CloudFront signs every request to S3 with sigv4. S3 rejects anything that isn't signed by this distribution.

### ACM — TLS certificate

Free, auto-renews, provisioned in `us-east-1` (required for CloudFront).

### IAM Role (OIDC)

GitHub Actions assumes this role using a short-lived OIDC token. No `AWS_ACCESS_KEY_ID` or `AWS_SECRET_ACCESS_KEY` is stored anywhere.

The role's trust policy restricts access to:
- This specific GitHub repository
- The `main` branch only

The role's permission policy allows exactly two things:
- `s3:PutObject`, `s3:DeleteObject`, `s3:ListBucket` on the portfolio bucket
- `cloudfront:CreateInvalidation` on this distribution

---

## Caching strategy

Vite adds a content hash to every JS, CSS, and image filename:

```
index.html          → no content hash  (same name every build)
assets/index-CpRuD90J.js  → hash changes when content changes
assets/index-Cfv-p4HA.css → hash changes when content changes
```

This lets you set aggressive cache headers safely:

| File | Cache-Control | Reason |
|---|---|---|
| `index.html` | `no-cache` | Must always be re-fetched to pick up new asset filenames |
| `/assets/*` | `public, max-age=31536000, immutable` | Filename changes with content — safe to cache forever |

Result: returning visitors load the site from their browser cache in milliseconds. New deploys are picked up immediately because `index.html` is always fresh.

**CloudFront invalidation:** only `/index.html` and `/` are invalidated on deploy. Hashed assets don't need invalidation — their filename already changed.

---

## CI/CD pipeline

```
push → main
   │
   ├─ Prettier format check
   ├─ ESLint
   ├─ Stylelint
   ├─ Vite build
   ├─ Playwright e2e tests
   ├─ axe accessibility scan
   │
   └─ (if all pass) deploy to AWS
```

Two jobs. Fast feedback. Deploy only runs if every check passes.

---

## Cost

| Service | Monthly cost |
|---|---|
| S3 (< 10 MB site) | < $0.01 |
| CloudFront (free tier) | $0.00 |
| ACM certificate | $0.00 |
| Route53 (optional, custom domain) | $0.50 |
| **Total** | **$0.00 – $0.50** |

The CloudFront free tier includes 1 TB of data transfer and 10 million HTTP requests per month. A portfolio site will never exceed this.
