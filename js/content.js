/* =====================================================================
   SITE CONTENT: edit this file to update the website.
   You never need to touch the HTML/CSS to swap in your own content.
   ===================================================================== */

window.SITE = {
  name: "King Francis",
  heroSub: "I create AI ads, movies and music videos for clients, and teach students exactly how it's done.",

  // Optional looping background video for the hero (muted). Leave "" for the animated gold dust only.
  heroVideo: "", // e.g. "assets/videos/showreel.mp4"
  // Video that plays when someone clicks the round "Play reel" badge. Leave both "" to use your first video.
  reel: { youtube: "", file: "" },

  // Big sentence that lights up word by word as you scroll. Wrap words in *stars* to make them gold.
  statement:
    "AI is the camera. The *story* is still mine. Every frame is built to be *felt,* *shared* and *remembered* long after the screen goes dark.",

  /* ---------------- POPULAR VIDEOS ----------------
     Each video can be EITHER:
       youtube: "VIDEO_ID"           (the part after watch?v=)
       file:    "assets/videos/x.mp4" (a local video you upload)
     thumb:   optional image; YouTube thumbnails are pulled automatically.
     preview: optional short muted mp4 that plays on hover.            */
  videos: [
    { title: "Video Title One",   category: "Ad",          views: "2.4M", youtube: "", file: "", thumb: "", preview: "" },
    { title: "Video Title Two",   category: "Music Video", views: "1.1M", youtube: "", file: "", thumb: "", preview: "" },
    { title: "Video Title Three", category: "Movie",       views: "870K", youtube: "", file: "", thumb: "", preview: "" },
    { title: "Video Title Four",  category: "Ad",          views: "640K", youtube: "", file: "", thumb: "", preview: "" },
    { title: "Video Title Five",  category: "Music Video", views: "520K", youtube: "", file: "", thumb: "", preview: "" },
    { title: "Video Title Six",   category: "Movie",       views: "410K", youtube: "", file: "", thumb: "", preview: "" },
  ],

  /* ---------------- SERVICES (client work) ----------------
     thumb: optional image shown in the hover preview.                 */
  services: [
    { title: "Ads & Commercials",    desc: "Scroll-stopping AI ads for brands and products, built to sell.", thumb: "" },
    { title: "Movies & Short Films", desc: "Cinematic AI storytelling, from first concept to final cut.",     thumb: "" },
    { title: "Music Videos",         desc: "Visuals that match the energy of the track and the artist.",      thumb: "" },
    { title: "Brand Content & More", desc: "Social content, visuals and anything else your brand can imagine.", thumb: "" },
  ],

  /* ---------------- ABOUT ---------------- */
  about: {
    photo: "assets/images/me.jpg", // put your photo here (portrait works best)
    heading: "The man behind the frame.",
    paragraphs: [
      "Replace this with your story: how you got into AI filmmaking, what you create, and why people keep coming back to watch.",
      "Add a second paragraph about your mission, your audience, and what makes your approach different.",
    ],
    stats: [
      { value: 10, suffix: "M+", label: "Total views" },
      { value: 250, suffix: "K", label: "Followers" },
      { value: 120, suffix: "+", label: "Videos made" },
      { value: 3000, suffix: "+", label: "Students" },
    ],
  },

  /* ---------------- COURSES ----------------
     Your course platform. Every course button opens this unless a course has its own "link".  */
  coursesUrl: "https://nestuge.me/king-francis",
  coursesPlatform: "Nestuge",

  courses: [
    { title: "Course One",   level: "Beginner",     desc: "Short description of what students learn in this course.", price: "$—", link: "" },
    { title: "Course Two",   level: "Intermediate", desc: "Short description of what students learn in this course.", price: "$—", link: "" },
    { title: "Course Three", level: "Advanced",     desc: "Short description of what students learn in this course.", price: "$—", link: "" },
  ],

  // The "Where are we in our process?" button. Points to the built-in process page by default;
  // change to an external URL (e.g. your course platform) if you prefer.
  processLink: "process.html",

  /* ---------------- PROCESS PAGE ----------------
     status: "done" | "current" | "upcoming"                             */
  process: [
    { step: "Discovery",   status: "done",     date: "Phase 01", desc: "We learn your goals and where you're starting from." },
    { step: "Foundations", status: "done",     date: "Phase 02", desc: "Core skills: storytelling, hooks, and structure." },
    { step: "Production",  status: "current",  date: "Phase 03", desc: "Hands-on: generating, directing and editing films with AI tools." },
    { step: "Launch",      status: "upcoming", date: "Phase 04", desc: "Publish, grow, and analyse what works." },
    { step: "Mastery",     status: "upcoming", date: "Phase 05", desc: "Scale your channel and build a lasting brand." },
  ],

  /* ---------------- CONTACT / SOCIALS ---------------- */
  email: "hello@example.com",
  socials: [
    { label: "YouTube",   url: "#" },
    { label: "Instagram", url: "#" },
    { label: "TikTok",    url: "#" },
    { label: "X",         url: "#" },
  ],
};
