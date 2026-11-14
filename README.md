# Bite Buzz website

## Run locally
Double-click `index.html`, or for a phone-friendly preview:
    npx serve .
then open the address it prints (use your computer's network address on your phone).

## Edit content
Everything (names, prices, photos, availability, trending, taglines, feedback link) is in `menuData.js`.
- `available: false`  -> shows SOLD OUT
- `trending: true`    -> appears in Trending Now

## Photos
All photos are in `images/`. To swap one, replace the file (keep the name) or change the `image:` path in `menuData.js`. Square, ~600x600px, under 150 KB is ideal.

## Deploy free on Vercel
1. Push this folder to a GitHub repo (or run `npx vercel` inside it).
2. On vercel.com: New Project -> import the repo -> Deploy. No settings needed (static site).
