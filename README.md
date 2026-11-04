# BrynBrands Group - refined website

A dependency-free static build, using supplied client photography, logo and audio.

## Local preview

Run `npm run build`, `npm run check`, then `npm start`. Preview: http://localhost:8092

## Deployment

Vercel: Framework Other; build `npm run build`; output `dist`; no dependencies required. Source is connected to RonanJaeger721/BryanBrands-Group. All routes are generated as actual HTML directories. Vercel redirects preserve the former /challenge/*.html entry points.

## Content

Edit src/data.mjs for divisions, products, heritage names, art captions, tracks and albums. Layouts live in build.mjs and src/contact.mjs; styling and interactions in public/assets/. Rebuild after changes. MEDIA-SOURCES.json records source provenance.

## Contact behavior

The enquiry form prepares an email in the visitor's application and offers Copy brief. It has no server-side submission, CRM or delivery confirmation. This is stated on the page. Audio is user-initiated, uses local MP3s and native browser controls.

## Next client refinement

Confirm business email, current operating brands and division descriptions; supply approved product photos, pack formats and product brand names; confirm gallery titles, dimensions, materials and availability; confirm official social profile URLs. Search-result links for music are labelled Find on, not official artist profiles. Historical business names are labelled as such. No invented project values, fleets, land holdings or compliance claims are included. The original CV contains private personal data and is not published.

## Verification

28 generated pages, 700 local link/asset references checked. Initial browser checks passed for world tabs, brand filters, gallery dialog, audio playback and mobile menu. Complete release evidence is recorded separately in outputs after deployment.
