/* =====================================================================
   SITE CONTENT: edit this file to update the website.
   You never need to touch the HTML/CSS to swap in your own content.
   ===================================================================== */

window.SITE = {
  name: "King Francis",
  // Top of the page. The last line is shown in gold.
  heroLines: ["Stories made with AI.", "Crafted for brands.", "Built to be remembered."],
  heroMeta: ["AI Filmmaking & Direction", "2,000+ Projects", "50+ Brands"],
  heroSub: "King Francis creates AI ads, movies and music videos for brands, and teaches creators exactly how it's done.",

  // Video that plays full-screen behind the top of the page (muted, looping). e.g. "assets/videos/showreel.mp4"
  // Until you add one, an animated gold background is shown instead.
  heroVideo: "assets/videos/showreel.mp4",
  heroPoster: "assets/images/showreel-poster.jpg", // still frame shown while the video loads
  // Your social handle shown under the buttons (optional), e.g. "@kingfrancis"
  handle: "",

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
    { title: "New Music", category: "Music Video", views: "", youtube: "",
      file: "assets/videos/new-music.mp4", thumb: "assets/images/new-music.jpg", preview: "assets/videos/new-music-preview.mp4" },
    { title: "UGC Brand Story", category: "Ad", views: "", youtube: "",
      file: "assets/videos/ugc-brand-story.mp4", thumb: "assets/images/ugc-brand-story.jpg", preview: "assets/videos/ugc-brand-story-preview.mp4" },
    { title: "Everything Chi", category: "Ad", views: "", youtube: "",
      file: "assets/videos/everything-chi.mp4", thumb: "assets/images/everything-chi.jpg", preview: "assets/videos/everything-chi-preview.mp4" },
    { title: "Car Race", category: "Ad", views: "", youtube: "",
      file: "assets/videos/car-race.mp4", thumb: "assets/images/car-race.jpg", preview: "assets/videos/car-race-preview.mp4" },
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
      "I'm King Francis, an AI filmmaker, creative content producer and visual storyteller passionate about pushing the boundaries of what's possible with creativity and technology.",
      "Over the past two years, I've dedicated myself to AI filmmaking, transforming ideas into cinematic brand commercials, product advertisements and visually compelling stories. With over 2,000 creative projects completed and collaborations with more than 50 brands in the last two years, I've built experience creating content that connects creativity with brand storytelling.",
      "My work has generated over 2 million views across multiple platforms, reaching an audience of over 10,000 and counting.",
      "But for me, filmmaking goes beyond creating beautiful visuals. It's about telling stories that capture attention, communicate value and leave a lasting impression.",
      "Today, I work with brands looking to bring their ideas to life through innovative AI-powered visual content, while also helping aspiring creators discover, learn and master the art of AI filmmaking.",
      "Whether you're a brand looking for your next creative partner or a creator ready to explore the future of filmmaking, you're in the right place.",
    ],
    signoff: "Let's create something extraordinary.",
    stats: [
      { value: 2000, suffix: "+",  label: "Creative projects" },
      { value: 50,   suffix: "+",  label: "Brands worked with" },
      { value: 2,    suffix: "M+", label: "Views across platforms" },
      { value: 10,   suffix: "K+", label: "Audience and counting" },
    ],
  },

  /* ---------------- COURSES ----------------
     Your course platform. Every course button opens this unless a course has its own "link".  */
  coursesUrl: "https://nestuge.me/king-francis",
  coursesPlatform: "Nestuge",

  // The class curriculum shown in the Courses section.
  // A class with "items" shows one list; a class with "groups" shows headed columns.
  // A class with neither just shows its title (no expand button) until you add details.
  classBanner: ["Eight classes.", "Zero to pro."],
  classHeading: "From \u201cWhat If\u201d to Final Frame",
  classIntro: "Eight live classes. Each one ends with a project. Submit it before the next class and it becomes your portfolio.",
  classes: [
    { title: "Introduction to AI video creation", groups: [
      { heading: "Overview", items: [
        "The difference between AI platforms and AI models",
        "Understanding image, video and audio models",
        "The interfaces of Higgsfield, Kling, Magnific and Flow AI",
        "Introduction to Claude and Claude skills",
        "Introduction to prompting",
        "How to create 3D Pixar characters",
      ] },
      { heading: "Character consistency in 3D Pixar animation", items: [
        "Using a character design sheet to keep characters consistent",
        "Creating consistent characters in scenes with Nano Banana Pro",
      ] },
      { heading: "Image generation + storyboarding", items: [
        "Using Flow Agents to mass-generate images",
        "Using the Flow AI storyboard builder template",
      ] },
      { heading: "Your first 30-second video with Wan and Seedance", items: [
        "Coming up with an idea and expanding it with Claude",
        "Writing character and location prompts",
        "Image and animation prompts in Claude (tagging your references)",
        "Animating with Wan and Seedance",
        "Post-production in CapCut",
      ] },
    ] },
    { title: "Your first animated advert", items: [
      "Understanding the limitations of AI for video creation",
      "Understanding Claude skills and how to use them",
      "Prompting with your voice",
      "Gathering data to build your advert script",
      "Building your assets: characters, locations, props",
      "Animating with Seedance 2.5",
      "Post-production",
    ] },
    { title: "Your first animated short film", items: [
      "Writing your script with the help of Claude",
      "Building your characters, locations and voices",
      "Creating prompts for each shot",
      "Animating in Magnific with consistent characters and scenes",
      "Post-production in CapCut / DaVinci Resolve",
      "How to get noticed and get clients",
    ] },
    { title: "Your first realistic dialogue video" },
    { title: "Post-production in DaVinci Resolve" },
    { title: "Creating AI UGC videos" },
    { title: "Monetization" },
    { title: "Student project display" },
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
  // Project types shown as buttons in the contact form.
  projectTypes: ["Ads & Commercials", "Movies & Short Films", "Music Videos", "Brand Content", "Creative Direction", "Training & Speaking"],
  // Where contact-form briefs are delivered (via FormSubmit, a free form-to-email service).
  // The first time someone submits, FormSubmit emails this address an activation link: click it once.
  formEmail: "kingspetsng@gmail.com",
  formEndpoint: "https://formsubmit.co/ajax/kingspetsng@gmail.com",
  // Short note under the social icons in the contact section.
  responseNote: "Response within 12–24 hours by email",
  // Public email shown on the site (Send a Mail button and next to the form).
  email: "franchizerich@gmail.com",
  socials: [
    { label: "YouTube",   url: "#" },
    { label: "Instagram", url: "#" },
    { label: "TikTok",    url: "#" },
    { label: "X",         url: "#" },
  ],
};
