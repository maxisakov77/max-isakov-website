# Regtime Deployment Instructions for AI Agent

## 1) Naming Rule (Required)

- Use `Regtime` exactly (capital `R`, lowercase `egtime`) in all user-facing text.
- Do not use `RegTime` or any other variation.

## 2) Objective

Deploy the existing Regtime app to `https://regtime.maxaec.com` on Vercel.

This repository already contains the app and routing/auth logic. Your job is to deploy and verify it, not redesign it.

## 3) Project Context

- Framework: Next.js (App Router)
- Hosting: Vercel
- Production branch: `master`
- Repo already includes Regtime subdomain handling in `middleware.ts`
- Repo already allows auth origin `https://regtime.maxaec.com` in `app/api/auth/google/route.ts`

## 4) Prerequisites

You must have:

- GitHub access to this repository
- Vercel project access
- DNS access for `maxaec.com`

Required Vercel Production environment variables:

- `SESSION_SECRET`
- `GOOGLE_CLIENT_ID`
- `NEXT_PUBLIC_GOOGLE_CLIENT_ID`
- `NEXT_PUBLIC_SITE_URL`
- `ADMIN_ALLOWED_EMAILS` (admin-related, include for completeness)

## 5) Deployment Steps

1. Update local repository to production baseline:
   - `git checkout master`
   - `git pull origin master`
2. Install dependencies:
   - `npm install`
3. Run build:
   - `npm run build`
4. Run checks:
   - `npm run test:site`
5. Confirm Regtime routes exist in source:
   - `/regtime/login`
   - `/regtime`
6. In Vercel, add or confirm domain:
   - `regtime.maxaec.com` is assigned to the same project
7. In DNS, add or confirm:
   - `CNAME` record for host `regtime` pointing to the Vercel-provided target
8. If any deployment commit is needed, push to production branch:
   - `git push origin master`

## 6) Post-Deploy Verification

Verify all of the following:

- `https://regtime.maxaec.com/login` loads
- Google sign-in renders and works
- After successful auth, user lands on `https://regtime.maxaec.com/`
- Unauthenticated access to `https://regtime.maxaec.com/` redirects to `/login`
- Logout clears session and returns user to login flow
- No blocking console/network errors during login flow

## 7) Rollback Procedure

If deployment is bad:

1. Identify commit:
   - `git log --oneline`
2. Revert:
   - `git revert <COMMIT_SHA>`
3. Push revert:
   - `git push origin master`
4. Re-verify Regtime login and root route behavior on `regtime.maxaec.com`

## 8) Required Output Format from Executing AI

Your final report must include:

- Commands run
- Files changed
- Vercel actions taken
- DNS actions taken
- URLs tested and observed results
- Final status: `DEPLOYED` or `BLOCKED`
- If `BLOCKED`, include exact blockers and next required action

## 9) Acceptance Criteria

All criteria below must pass:

1. Another AI can execute deployment using only this file.
2. Repo commands and file references are valid.
3. DNS + Vercel domain mapping is explicitly covered.
4. Naming is consistent: user-facing name is `Regtime`.
