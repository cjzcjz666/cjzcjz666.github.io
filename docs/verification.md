# Verification — 2026-08-31

- Static preview at `http://127.0.0.1:4173` returns HTTP 200.
- Checked desktop (1710px), tablet (768px), and phone (390px and 320px) layouts. No horizontal document overflow at those widths.
- Inspected the hero, publication list, education/industry section, and contact/footer visually in the browser.
- All four publication filters return the intended counts: all 4; Video-LLMs 2; recognition 1; efficiency 1. Active state and screen-reader announcement update.
- Honors expand by click and collapse with Enter. Top navigation and back-to-top links work; contact highlights correctly at the document bottom.
- Four individual BibTeX links point to four distinct existing files. All local links, fonts, CSS resources, and fragment targets resolve; IDs are unique; the page has one h1.
- The paper image loaded successfully. No browser console warnings or errors were recorded from the site.
- `node --check assets/site.js` and `git diff --check` passed.
- Main content and citation downloads are static HTML. Filters are only shown once JavaScript runs; reduced-motion and print styles are included. No separate no-JavaScript browser emulation was performed.
- All three arXiv abstract links, the linked PDF, GitHub profile/repository, Google Scholar, and SPIE DOI destination responded successfully in HTTP checks. The IEEE DOI resolves to the intended IEEE document with HTTP 202; full publisher content was not verified.
- Tianjin University's old English path was replaced with its currently indexed official English site, `https://en.tju.edu.cn/`. Search independently confirms that destination; direct command-line HTTPS access encounters a TLS connection error in this environment, so it is not claimed to pass the local HTTP probe.
- GitHub API confirmed the existing Pages source: `main`, `/`, legacy build, custom domain `junzhec.top`. The initial preview did not change remote content, deployment settings, or DNS records. The owner subsequently authorized publishing to this existing source.
- Screenshots are saved locally under `.preview/` (gitignored).

The previous homepage remains in Git history. On 2026-08-31 the owner confirmed JHU dates (January 2024–May 2025), their Ph.D. status at Tianjin University, and authorization to publish this redesign to the existing `main` branch. Deployment completion must be checked against the Pages build status and the live homepage.
