# Sing-Yu Chen Portfolio

Professional bilingual portfolio and resume website for Sing-Yu Chen, focused on production AI applications, full-stack engineering, LLM/RAG systems, data engineering, and cloud delivery.

**Live site:** [https://singyu0118.github.io/singyu_cv/](https://singyu0118.github.io/singyu_cv/)

## Overview

This repository contains a dependency-free static website built with semantic HTML, CSS, and vanilla JavaScript. It is designed for GitHub Pages and supports desktop, tablet, and mobile layouts without a build step.

The portfolio includes:

- Chinese and English interfaces with persistent language selection
- Light and dark themes
- Responsive navigation and accessible keyboard focus states
- Professional profile, engineering impact, experience, projects, skills, community events, and contact sections
- Seven project detail views with core features, role, architecture, challenges, solutions, impact, and technology stack
- BraveTalk Club product screenshots with image enlargement and separate feature details
- Public Chinese and English CV downloads
- Passphrase-protected full Chinese and English CV downloads
- A securely flattened 104 resume PDF

## Technology

- HTML5
- CSS3 with custom properties and responsive breakpoints
- Vanilla JavaScript
- Web Crypto API for AES-GCM resume decryption
- PBKDF2 with SHA-256 and 210,000 iterations for passphrase-derived keys
- GitHub Pages for static hosting

No package installation or production build command is required.

## Repository structure

```text
singyu_cv/
├── index.html                 # Page structure and resume dialogs
├── styles.css                # Themes, layout, responsive styles and dialogs
├── script.js                 # Translations, UI interactions and CV decryption
├── design.md                 # Visual and content design reference
├── assets/                   # Portfolio, product and event images
├── downloads/                # Public CV and 104 PDF downloads
│   ├── SingYuChen_Public_CV_Chinese.pdf
│   ├── SingYuChen_Public_CV_English.pdf
│   └── SingYuChen_104_Resume.pdf
├── protected/                # Encrypted full CV payloads and vault check file
│   ├── check.enc
│   ├── cv-zh.enc
│   └── cv-en.enc
├── scripts/
│   └── encrypt_cv.mjs        # Interactive AES-GCM encryption utility
└── .nojekyll                 # Disables Jekyll processing on GitHub Pages
```

## Page sections

1. Hero and current role
2. Engineering impact
3. Professional experience and education
4. Selected projects
5. Skills, certifications, and training
6. BraveTalk Club side project
7. Technical community and events
8. Contact and resume downloads

## Local preview

Run a local static server from the repository root:

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:8765/
```

Opening `index.html` directly also works for most UI review, but an HTTP server is recommended for testing encrypted downloads and browser security behavior.

## Updating public resume downloads

Public files are linked directly from `index.html`. Keep these destination filenames stable:

```text
downloads/SingYuChen_Public_CV_Chinese.pdf
downloads/SingYuChen_Public_CV_English.pdf
downloads/SingYuChen_104_Resume.pdf
```

Before publishing a public resume:

1. Remove phone numbers, street addresses, and other private contact details.
2. Confirm that hidden PDF text, annotations, and metadata do not retain the removed information.
3. Render every page and inspect it visually.
4. Verify the final filename and download link.

The current 104 resume is flattened so the visually removed phone number cannot be recovered from its text layer. Flattening intentionally makes that PDF image-based.

## Updating protected Full CV files

The browser downloads encrypted payloads from `protected/` and decrypts them only after the correct passphrase is entered. The plaintext Full CV PDFs must never be committed to this repository.

Use the existing passphrase when replacing either encrypted file:

```bash
node scripts/encrypt_cv.mjs /absolute/path/to/SingYuChen_CV_Chinese_Final.pdf protected/cv-zh.enc
node scripts/encrypt_cv.mjs /absolute/path/to/SingYuChen_CV_English_Final.pdf protected/cv-en.enc
```

The utility requests the passphrase interactively and does not store it in the repository. Both encrypted CVs must use the same passphrase as `protected/check.enc`.

After encryption, test all of the following locally:

- Incorrect passphrases remain rejected
- The correct passphrase reveals both download buttons
- The Chinese and English downloads open as valid PDFs
- The downloaded filenames remain correct
- No plaintext Full CV is present in Git status or repository history

If the passphrase changes, `check.enc`, `cv-zh.enc`, and `cv-en.enc` must all be regenerated together.

## Content and translation updates

Static page content lives in `index.html`. Language-specific copy and project detail data live in `script.js`.

When adding or changing translated content:

1. Add matching Chinese and English translation keys.
2. Keep project detail sections structurally consistent in both languages.
3. Test the language switch in the page and in open dialogs.
4. Confirm that headings, buttons, accessible labels, and download states are translated.

When changing CSS or JavaScript, update the cache-busting query string in `index.html` so GitHub Pages visitors receive the new asset version.

## Deployment

The site is published from the `main` branch through GitHub Pages.

```bash
git add .
git commit -m "your commit message"
git push origin main
```

After pushing, confirm the deployment at the live-site URL and test the public and protected resume downloads again.

## Quality checklist

Before deployment:

- Run `node --check script.js`
- Run `git diff --check`
- Preview both languages
- Preview light and dark themes
- Test desktop and mobile navigation
- Open every project detail dialog
- Test both product image enlargements
- Test public CV and 104 downloads
- Test Full CV unlock and both decrypted downloads
- Check the browser console for errors and warnings
- Confirm that no passphrase or plaintext protected CV is tracked

## Security notes

- Do not commit the Full CV passphrase.
- Do not commit plaintext Full CV PDFs.
- Visual covering alone is not secure PDF redaction; removed information must also be absent from the text layer.
- Treat files under `downloads/` as public internet content.
- Keep third-party links on HTTPS and use `rel="noreferrer"` for new-tab links.

## License and personal content

The source code may be used as a reference. Resume content, personal information, photographs, project descriptions, and portfolio assets remain the property of Sing-Yu Chen and are not licensed for reuse.
