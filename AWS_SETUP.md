# AWS Setup Guide

One-time manual setup in the AWS Console. Takes about 20 minutes.
No Terraform. No third-party tools.

---

## What you'll create

```
GitHub Actions
     │
     │  OIDC (no passwords stored)
     ▼
IAM Role (deploy-only permissions)
     │
     ├─── s3 sync ──► S3 Bucket (your built files)
     │                     │
     └─── invalidate ──► CloudFront (HTTPS + CDN)
                               │
                         Your domain / CloudFront URL
```

---

## Step 1 — S3 Bucket

1. Go to **S3 → Create bucket**
2. **Bucket name**: pick something unique, e.g. `sonit-portfolio-site`
3. **Region**: `us-east-1`
4. **Block all public access**: ✅ keep it ON (CloudFront handles public access, not S3)
5. Leave everything else as default → **Create bucket**

That's it for S3. Don't enable "Static website hosting" — CloudFront handles that.

---

## Step 2 — CloudFront Distribution

1. Go to **CloudFront → Create distribution**
2. **Origin domain**: choose your S3 bucket from the dropdown
3. **Origin access**: select **Origin access control settings (recommended)**
   - Click **Create new OAC** → accept the defaults → Create
   - A yellow banner will appear: *"Copy policy"* — click it, you'll need it in a moment
4. **Viewer protocol policy**: `Redirect HTTP to HTTPS`
5. **Default root object**: `index.html`
6. **Price class**: `Use only North America and Europe` (cheapest)
7. Click **Create distribution**

**After creating — update the S3 bucket policy:**

1. Go back to **S3 → your bucket → Permissions → Bucket policy**
2. Paste the policy you copied in step 3 above
3. Save

**Fix SPA routing (404 → index.html):**

1. In your CloudFront distribution → **Error pages** tab
2. Create custom error response:
   - HTTP error code: `403`
   - Response page path: `/index.html`
   - HTTP response code: `200`
3. Repeat for error code `404`

This makes React Router work correctly — deep links load the app instead of crashing.

---

## Step 3 — HTTPS Certificate (free)

> Skip if you don't have a custom domain — CloudFront gives you a free `*.cloudfront.net` URL with HTTPS already.

1. Go to **ACM (Certificate Manager)** — **must be in `us-east-1`**
2. **Request a public certificate**
3. Enter your domain: `yourdomain.com` and `www.yourdomain.com`
4. Validation method: **DNS validation** (easier)
5. Request → then add the CNAME records shown to your DNS provider
6. Wait ~5 minutes for status to show **Issued**

Then in CloudFront → your distribution → **Edit** → **Custom SSL certificate** → select the cert.

---

## Step 4 — IAM Role for GitHub Actions (OIDC)

This is the security-important part. Instead of storing AWS keys in GitHub, you create a role that GitHub can temporarily assume using a short-lived token.

### 4a — Add GitHub as an OIDC Identity Provider

1. Go to **IAM → Identity providers → Add provider**
2. **Provider type**: OpenID Connect
3. **Provider URL**: `https://token.actions.githubusercontent.com`
4. Click **Get thumbprint**
5. **Audience**: `sts.amazonaws.com`
6. **Add provider**

### 4b — Create the IAM Role

1. Go to **IAM → Roles → Create role**
2. **Trusted entity type**: Web identity
3. **Identity provider**: `token.actions.githubusercontent.com`
4. **Audience**: `sts.amazonaws.com`
5. Skip attaching permissions for now → **Next** → **Next**
6. **Role name**: `github-actions-portfolio-deploy`
7. **Create role**

### 4c — Tighten the trust policy

After creating the role, go to the role → **Trust relationships** → **Edit trust policy**.

Replace the policy with this (swap in your GitHub username and repo name):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::YOUR_ACCOUNT_ID:oidc-provider/token.actions.githubusercontent.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
          "token.actions.githubusercontent.com:sub": "repo:YOUR_GITHUB_USERNAME/YOUR_REPO_NAME:ref:refs/heads/main"
        }
      }
    }
  ]
}
```

> The `sub` condition means **only your repo's main branch** can use this role.
> A compromised fork or any other repo cannot assume it.

### 4d — Attach a permissions policy

In the same role → **Permissions → Add permissions → Create inline policy** → JSON tab.

Paste this (replace bucket name and CloudFront distribution ARN):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "S3Deploy",
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:DeleteObject",
        "s3:GetObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::YOUR_BUCKET_NAME",
        "arn:aws:s3:::YOUR_BUCKET_NAME/*"
      ]
    },
    {
      "Sid": "CloudFrontInvalidate",
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation"
      ],
      "Resource": "arn:aws:cloudfront::YOUR_ACCOUNT_ID:distribution/YOUR_CF_DISTRIBUTION_ID"
    }
  ]
}
```

Name the policy `portfolio-deploy-policy` → **Create policy**.

This role can do exactly two things: write files to your S3 bucket, and invalidate the CloudFront cache. Nothing else.

---

## Step 5 — GitHub Secrets

Go to your GitHub repo → **Settings → Secrets and variables → Actions → Secrets**.

Add these three secrets:

| Secret name | Where to find the value |
|---|---|
| `AWS_ROLE_ARN` | IAM → your role → copy the ARN at the top (e.g. `arn:aws:iam::123456:role/github-actions-portfolio-deploy`) |
| `S3_BUCKET` | The bucket name you chose in Step 1 (e.g. `sonit-portfolio-site`) |
| `CF_DISTRIBUTION_ID` | CloudFront → your distribution → the ID column (e.g. `E1ABCDEF12345`) |

Then go to **Settings → Secrets and variables → Actions → Variables** and add:

| Variable name | Value |
|---|---|
| `SITE_URL` | `https://your-cloudfront-url.cloudfront.net` (or your custom domain) |

---

## Step 6 — Deploy

```bash
git push origin main
```

GitHub Actions will:
1. Lint + build + test your code
2. Assume the IAM role via OIDC (no passwords)
3. Sync `dist/` to S3 with correct cache headers
4. Invalidate `/index.html` in CloudFront

Your site is live.

---

## Cost breakdown

| Service | Cost |
|---|---|
| S3 (< 10 MB portfolio) | ~$0.00 |
| CloudFront (free tier: 1 TB transfer, 10M requests/month) | ~$0.00 |
| ACM certificate | Free |
| Route53 hosted zone (only if custom domain) | $0.50/month |
| **Total** | **$0.00–$0.50/month** |

A portfolio site getting a few hundred visits a month will stay inside the CloudFront free tier indefinitely.

---

## What to tell a recruiter

> "The site is hosted on S3 with CloudFront as the CDN for HTTPS and global edge caching.
> Deployments are automated via GitHub Actions using IAM OIDC — no static AWS credentials are stored anywhere.
> The pipeline lints, builds, and runs Playwright e2e + axe accessibility tests before every deploy.
> Cache headers are set per file type: HTML gets `no-cache` so users always see the latest version, and hashed JS/CSS assets get a 1-year immutable cache."
