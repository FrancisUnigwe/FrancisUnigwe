# King Francis — Portfolio

A static portfolio site for King Francis (no build step). Open `index.html` in a browser to preview.
Animation libraries (GSAP + ScrollTrigger, Lenis smooth scroll) are bundled in `js/vendor/`.

## Updating content
All text, videos, courses and the process roadmap live in **`js/content.js`**. You don't need to edit the HTML.

- **Your photo:** save it as `assets/images/me.jpg` (a portrait works best).
- **Popular videos:** for each video, set `youtube: "VIDEO_ID"`, or upload an mp4 to `assets/videos/` and set `file:`.
  Optional `preview:` is a short muted clip that plays when someone hovers over the card.
- **Background video (top of page):** set `heroVideo: "assets/videos/showreel.mp4"`. Keep it short (15–30s), muted-friendly and compressed (under ~10 MB).
- **Top headline:** edit `heroLines` (last line is gold), `heroMeta` and `heroSub`.
- **Vision statement:** edit `statement`; wrap words in `*stars*` to make them gold.
- **Services:** edit the `services` list (ads, movies, music videos…). `thumb` is the hover preview image.
- **Courses:** edit the `courses` list. Buttons open your Nestuge page (`coursesUrl`) unless a course has its own `link`.
- **"Where are we in our process?"** opens `process.html`. Update the `process` steps
  (`done` / `current` / `upcoming`), or point `processLink` to an external URL.

## Contact form
- Project-type buttons come from `projectTypes`.
- Briefs are sent to `formEmail` through FormSubmit (`formEndpoint`). The first submission triggers an activation email to that address; click the link once to start receiving briefs.
- If sending fails, the form falls back to opening the visitor's email app, addressed to `formEmail`.
- `email` is the public address shown on the site.

## Pages
- `index.html`: hero, popular videos, services (client work), about me, courses, contact
- `process.html`: course progress roadmap
