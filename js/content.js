/* =====================================================================
   SITE CONTENT — edit this file to update the website.
   You never need to touch the HTML/CSS to swap in your own content.
   ===================================================================== */

window.SITE = {
  name: "Francis Unigwe",
  tagline: "Creator · Storyteller · Educator",
  heroLine: ["I make stories", "people can't", "stop watching."],
  heroSub:
    "Videos that move millions, and courses that teach you how to do the same.",

  // Optional looping background video for the hero (muted). Leave "" to use the animated gradient.
  heroVideo: "", // e.g. "assets/videos/showreel.mp4"

  /* ---------------- POPULAR VIDEOS ----------------
     Each video can be EITHER:
       youtube: "VIDEO_ID"           (the part after watch?v=)
       file:    "assets/videos/x.mp4" (a local video you upload)
     thumb:   optional image; YouTube thumbnails are pulled automatically.
     preview: optional short muted mp4 that plays on hover.            */
  videos: [
    { title: "Video Title One",   category: "Viral",       views: "2.4M", youtube: "", file: "", thumb: "", preview: "" },
    { title: "Video Title Two",   category: "Documentary", views: "1.1M", youtube: "", file: "", thumb: "", preview: "" },
    { title: "Video Title Three", category: "Short Film",  views: "870K", youtube: "", file: "", thumb: "", preview: "" },
    { title: "Video Title Four",  category: "Viral",       views: "640K", youtube: "", file: "", thumb: "", preview: "" },
    { title: "Video Title Five",  category: "Documentary", views: "520K", youtube: "", file: "", thumb: "", preview: "" },
    { title: "Video Title Six",   category: "Short Film",  views: "410K", youtube: "", file: "", thumb: "", preview: "" },
  ],

  /* ---------------- ABOUT ---------------- */
  about: {
    photo: "assets/images/me.jpg", // put your photo here (portrait works best)
    heading: "Hi, I'm Francis.",
    paragraphs: [
      "Replace this with your story: where you started, what you create, and why people keep coming back to watch.",
      "Add a second paragraph about your mission, your audience, and what makes your approach different.",
    ],
    stats: [
      { value: 10, suffix: "M+", label: "Total views" },
      { value: 250, suffix: "K", label: "Followers" },
      { value: 120, suffix: "+", label: "Videos made" },
      { value: 3000, suffix: "+", label: "Students" },
    ],
  },

  /* ---------------- COURSES ---------------- */
  courses: [
    { title: "Course One",   level: "Beginner",     desc: "Short description of what students learn.", price: "$—", link: "#" },
    { title: "Course Two",   level: "Intermediate", desc: "Short description of what students learn.", price: "$—", link: "#" },
    { title: "Course Three", level: "Advanced",     desc: "Short description of what students learn.", price: "$—", link: "#" },
  ],

  // The "Where are we in our process?" button. Points to the built-in process page by default;
  // change to an external URL (e.g. your course platform) if you prefer.
  processLink: "process.html",

  /* ---------------- PROCESS PAGE ----------------
     status: "done" | "current" | "upcoming"                             */
  process: [
    { step: "Discovery",   status: "done",     date: "Phase 1", desc: "We learn your goals and where you're starting from." },
    { step: "Foundations", status: "done",     date: "Phase 2", desc: "Core skills: storytelling, hooks, and structure." },
    { step: "Production",  status: "current",  date: "Phase 3", desc: "Hands-on: shooting, editing, and creating with AI tools." },
    { step: "Launch",      status: "upcoming", date: "Phase 4", desc: "Publish, grow, and analyse what works." },
    { step: "Mastery",     status: "upcoming", date: "Phase 5", desc: "Scale your channel and build a lasting brand." },
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
