# King Francis — Portfolio

A static portfolio site for King Francis (no build step). Open `index.html` in a browser to preview.
Animation libraries (GSAP + ScrollTrigger, Lenis smooth scroll) are bundled in `js/vendor/`.

## Updating content
All text, videos, courses and the process roadmap live in **`js/content.js`**. You don't need to edit the HTML.

- **Your photo:** save it as `assets/images/me.jpg` (a portrait works best).
- **Popular videos:** for each video, set `youtube: "VIDEO_ID"`, or upload an mp4 to `assets/videos/` and set `file:`.
  Optional `preview:` is a short muted clip that plays when someone hovers over the card.
- **Hero background video:** set `heroVideo: "assets/videos/showreel.mp4"`.
- **Play the reel badge:** set `reel.youtube` or `reel.file` (defaults to your first video).
- **Vision statement:** edit `statement`; wrap words in `*stars*` to make them gold.
- **Services:** edit the `services` list (ads, movies, music videos…). `thumb` is the hover preview image.
- **Courses:** edit the `courses` list. Each `link` goes to your course checkout or page.
- **"Where are we in our process?"** opens `process.html`. Update the `process` steps
  (`done` / `current` / `upcoming`), or point `processLink` to an external URL.

## Pages
- `index.html`: hero, popular videos, services (client work), about me, courses, contact
- `process.html`: course progress roadmap
