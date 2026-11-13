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

  // Extra blocks under the class list.
  classWhy: {
    kicker: "Why you're here",
    heading: ["There's a Reason", "You Found This"],
    text: "No long theory lectures. In every class you create a real video alongside me, live, and you leave with a portfolio and a clear plan to start earning from it.",
    reasons: [
      "You've been teaching yourself, but the results just aren't showing up.",
      "You've paid for courses before and they never covered what you actually needed.",
      "You've watched my videos and you want to create work like that.",
      "You want your AI videos to start bringing in real income.",
    ],
  },
  classFit: {
    yesTitle: "This is for you if\u2026",
    yes: [
      "You're starting from zero and want a clear, step-by-step path",
      "You want to create polished animations and lifelike videos with generative AI",
      "You have stories and ideas you're itching to bring to the screen",
      "You want to turn this skill into paid client work",
      "You can attend the live sessions and complete every assignment",
    ],
    noTitle: "This isn't for you if\u2026",
    no: [
      "You expect income without putting in the effort",
      "You're hunting for a shortcut or an \u201ceasy AI money\u201d scheme",
      "You tend to buy programmes and never start them",
      "You'd rather debate the method than follow it",
      "The class fee is money you need for essentials right now",
    ],
  },
  classRules: {
    kicker: "How the live class works",
    items: [
      { title: "Be on time", text: "Join every session live. If you miss one, catch the replay before the next class." },
      { title: "Complete every project", text: "Every class ends with a project. Hand it in before the next session and watch your portfolio grow." },
      { title: "Arrive ready", text: "Charge your laptop and check your internet connection before we start." },
      { title: "Speak up", text: "There are no silly questions. Stuck? Say so in class or in the group. Someone else probably is too." },
      { title: "Keep it respectful", text: "Stay muted with your camera off unless you're speaking. No spam or self-promotion in the group." },
      { title: "Keep it in the class", text: "Recordings, templates and prompt files are for enrolled students only." },
    ],
    closing: "Show up and do the work, and the results will follow. Skip it, and nothing changes.",
  },

  // The class curriculum shown in the Courses section.
  // "summary" is the short line shown on the right of each row.
  // A class with "items" shows one list; a class with "groups" shows headed columns.
  // A class can also have "text" (a paragraph) and "prize" (shown with a gold PRIZE tag).
  // A class with none of these just shows its title (no expand button) until you add details.
  classBanner: ["Eight classes.", "Zero to hero."],
  classHeading: "From First Prompt to Final Cut",
  // Big heading: first line white, second line glowing gold.
  classHeadingLines: ["From first prompt", "to final cut"],
  classIntro: "Eight live classes. Each one ends with a project. Submit it before the next class and it becomes your portfolio.",
  classes: [
    { title: "Introduction to AI video creation", summary: "AI platforms vs models, prompting basics, consistent 3D characters and your first 30-second video.", groups: [
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
    { title: "Your first animated advert", summary: "Turn research into an advert script, build your assets and animate it with Seedance 2.5.", items: [
      "Understanding the limitations of AI for video creation",
      "Understanding Claude skills and how to use them",
      "Prompting with your voice",
      "Gathering data to build your advert script",
      "Building your assets: characters, locations, props",
      "Animating with Seedance 2.5",
      "Post-production",
    ] },
    { title: "Your first animated music video", summary: "Script, characters, voices and shot prompts, animated in Magnific with consistent scenes.", items: [
      "Writing your script with the help of Claude",
      "Building your characters, locations and voices",
      "Creating prompts for each shot",
      "Animating in Magnific with consistent characters and scenes",
      "Post-production in CapCut / DaVinci Resolve",
      "How to get noticed and get clients",
    ] },
    { title: "Your first realistic dialogue video", summary: "Write, voice and produce a realistic dialogue film with Seed Audio, ElevenLabs and Higgsfield.", items: [
      "Developing your idea and writing your script",
      "Building characters, locations and character voices with Seed Audio and ElevenLabs",
      "Creating prompts for each shot",
      "Producing your film in Higgsfield / Magnific with consistent characters and scenes",
      "Post-production in CapCut / DaVinci Resolve",
    ] },
    { title: "Post-production in CapCut", summary: "Edit your AI footage, add sound design and music, and start building your portfolio.", items: [
      "How to write a good story with your imagination and Claude",
      "Installing CapCut for Windows",
      "Editing your AI content in CapCut",
      "Basic sound design in CapCut",
      "Where to find copyright-free sound effects and background music",
      "Creating your portfolio",
    ] },
    { title: "Creating AI UGC videos", summary: "Scripts, AI avatars and consistent-voice clips for UGC-style brand videos.", items: [
      "Gathering data for your UGC videos",
      "Creating your script",
      "Creating your characters, locations and props",
      "Creating your AI avatar with Soul 2.0 in Higgsfield",
      "Creating video clips with consistent voices",
      "Post-production",
    ] },
    { title: "Monetization", summary: "Choose your path, follow a 90-day roadmap and find your first paying clients.", items: [
      "Choosing your monetization path",
      "Your roadmap to monetizing in 90 days",
      "Platforms to find clients",
      "Building your portfolio, and where to host it",
      "Q&A",
    ] },
    { title: "Student project display", summary: "Screen the work you built across the programme. Best projects win 240,000 Magnific credits.",
      text: "Every student screens the work they built across the programme: the first pieces of a real portfolio.",
      prize: "Best projects win 240,000 Magnific credits." },
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
  // Footer text.
  footerAbout: "AI filmmaker creating cinematic ads, movies and music videos for brands, and teaching creators how it's done.",
  footerTagline: "AI Filmmaker | Ads | Movies | Music Videos | Classes",
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
