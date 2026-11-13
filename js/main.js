(() => {
  const S = window.SITE;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s = "") => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const pad2 = n => String(n).padStart(2, "0");

  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const motion = !!(window.gsap && window.ScrollTrigger) && !reduce;
  const fine = matchMedia("(hover: hover) and (min-width: 901px)").matches;
  const isHome = !!$("#hero");
  if (!motion) document.documentElement.classList.add("no-motion");

  /* ================= CONTENT ================= */
  const [firstName, ...restName] = S.name.split(" ");
  const lastName = restName.join(" ") || firstName;
  $$("[data-name]").forEach(el => (el.textContent = S.name));
  $$(".yr").forEach(el => (el.textContent = new Date().getFullYear()));
  $$("[data-process-link]").forEach(el => (el.href = S.processLink));
  $$("[data-hero-sub]").forEach(el => (el.textContent = S.heroSub));
  $$("[data-socials]").forEach(el => {
    el.classList.add("socials");
    el.innerHTML = S.socials.map(s => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`).join("");
  });

  const PH = [
    "radial-gradient(120% 90% at 20% 10%, #6b4e1f, #120e07 60%)",
    "radial-gradient(100% 100% at 85% 15%, #4a3818, #0a0907 58%)",
    "linear-gradient(135deg, #1a140a, #5c431b 50%, #0c0a06)",
    "radial-gradient(90% 120% at 50% 100%, #7a5a25, #0d0b07 62%)",
    "radial-gradient(80% 80% at 10% 90%, #4a3816, #0b0a08 60%)",
    "linear-gradient(200deg, #2d2210, #090806 60%, #3f2f12)",
  ];
  const media = (v, i) => {
    const thumb = v.thumb || (v.youtube ? `https://i.ytimg.com/vi/${encodeURIComponent(v.youtube)}/maxresdefault.jpg` : "");
    return thumb
      ? `<img class="media" src="${esc(thumb)}" alt="" loading="lazy" onerror="this.onerror=null;this.src='https://i.ytimg.com/vi/${esc(v.youtube)}/hqdefault.jpg'">`
      : `<div class="media ph" style="background:${PH[i % PH.length]}"><b>${pad2(i + 1)}</b></div>`;
  };

  // split headings into words for reveal animations (keeps <em> styling)
  const splitWords = el => {
    const out = [];
    el.childNodes.forEach(n => {
      const tag = n.nodeType === 1 ? n.tagName.toLowerCase() : null;
      n.textContent.split(/(\s+)/).forEach(t => {
        if (!t.trim()) return out.push(t);
        out.push(`<span class="w"><span>${tag ? `<${tag}>${esc(t)}</${tag}>` : esc(t)}</span></span>`);
      });
    });
    el.innerHTML = out.join("");
  };

  // scale text so it exactly fills its container width
  const fitters = [];
  const fit = (el, inner, maxH) => {
    const run = () => {
      el.style.fontSize = "100px";
      const w = inner.getBoundingClientRect().width;
      const cs = getComputedStyle(el);
      const avail = el.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      let size = (100 * avail) / w;
      if (maxH) size = Math.min(size, maxH());
      el.style.fontSize = size * 0.995 + "px";
    };
    fitters.push(run); run();
  };

  /* ---------- modal ---------- */
  const modal = $("#modal"), mBody = $("#modalBody");
  let lenis = null;
  const openModal = v => {
    if (!modal) return;
    if (v.youtube) mBody.innerHTML = `<iframe src="https://www.youtube.com/embed/${encodeURIComponent(v.youtube)}?autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
    else if (v.file) mBody.innerHTML = `<video src="${esc(v.file)}" controls autoplay playsinline></video>`;
    else mBody.innerHTML = `<div class="modal-empty"><h3>${esc(v.title || "Your reel")}</h3><p>Add a YouTube ID or video file for this in js/content.js</p></div>`;
    modal.classList.add("open"); modal.setAttribute("aria-hidden", "false");
    lenis && lenis.stop();
  };
  const closeModal = () => {
    if (!modal || !modal.classList.contains("open")) return;
    modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true");
    lenis && lenis.start();
    setTimeout(() => (mBody.innerHTML = ""), 500);
  };
  if (modal) {
    $("#modalClose").addEventListener("click", closeModal);
    modal.addEventListener("click", e => e.target === modal && closeModal());
    addEventListener("keydown", e => e.key === "Escape" && closeModal());
  }

  /* ---------- HOME CONTENT ---------- */
  if (isHome) {
    $(".ht-king em").textContent = firstName;
    const hn = $("#heroName");
    hn.innerHTML = `<span class="inner">${[...lastName].map(c => `<span class="ch">${c === " " ? "&nbsp;" : esc(c)}</span>`).join("")}</span>`;
    fit(hn, $(".inner", hn), () => innerHeight * 0.5);

    if (S.heroVideo) $("#heroVideo").src = S.heroVideo; else $("#heroVideo").remove();

    $("#heroTiles").innerHTML = S.videos.slice(0, 3).map((v, i) =>
      `<div class="tile t${i + 1}" data-i="${i}">${media(v, i)}<small>${esc(v.title)}</small></div>`).join("");
    $("#heroTiles").addEventListener("click", e => { const t = e.target.closest(".tile"); if (t) openModal(S.videos[t.dataset.i]); });
    $("#reelBtn").addEventListener("click", () => openModal(S.reel && (S.reel.youtube || S.reel.file) ? { ...S.reel, title: "The reel" } : S.videos[0] || {}));

    $("#statementText").innerHTML = S.statement.split(/\s+/).map(w => {
      const g = /^\*.*\*$/.test(w) || /^\*.*\*[.,!?]$/.test(w);
      return `<span class="sw${g ? " g" : ""}">${esc(w.replace(/\*/g, ""))}</span>`;
    }).join(" ");

    $("#workTrack").innerHTML = S.videos.map((v, i) => `
      <article class="vcard" data-i="${i}">
        <div class="vframe">${media(v, i)}${v.preview ? `<video src="${esc(v.preview)}" muted loop playsinline preload="none"></video>` : ""}<span class="play"></span></div>
        <div class="vinfo"><h3><span class="vnum">${pad2(i + 1)}</span>${esc(v.title)}</h3>
          <div class="vtags"><span>${esc(v.category)}</span><span class="views">${esc(v.views)} views</span></div></div>
      </article>`).join("");
    $("#workTotal").textContent = pad2(S.videos.length);
    $("#workTrack").addEventListener("click", e => { const c = e.target.closest(".vcard"); if (c) openModal(S.videos[c.dataset.i]); });
    $$(".vcard").forEach(card => {
      const vid = $("video", card); if (!vid) return;
      card.addEventListener("mouseenter", () => vid.play().catch(() => {}));
      card.addEventListener("mouseleave", () => { vid.pause(); vid.currentTime = 0; });
    });

    // services
    const SV = S.services || [];
    $("#svcList").innerHTML = SV.map((v, i) => `
      <li class="svc"><a href="#contact" data-scroll data-i="${i}">
        <span class="svc-num">${pad2(i + 1)}</span><span class="svc-title">${esc(v.title)}</span>
        <span class="svc-desc">${esc(v.desc)}</span><span class="svc-arrow">→</span></a></li>`).join("");
    $("#svcPreviewInner").innerHTML = SV.map((v, i) => `<div>${media(v, i)}<small>${esc(v.title)}</small></div>`).join("");

    const mItem = `<span>${esc(S.name)} <i class="mq-sep">✦</i></span>`;
    $(".marquee-track").innerHTML = mItem.repeat(8);

    const A = S.about;
    const img = $("#aboutPhoto");
    img.onload = () => ($(".photo-fallback").style.display = "none");
    img.onerror = () => img.remove();
    img.src = A.photo;
    $("#aboutHeading").textContent = A.heading;
    $("#aboutBody").innerHTML = A.paragraphs.map(p => `<p>${esc(p)}</p>`).join("");
    $("#stats").innerHTML = A.stats.map(s => `<div class="stat"><b data-count="${+s.value}" data-suffix="${esc(s.suffix)}">${motion ? "0" : (+s.value).toLocaleString()}${motion ? "" : esc(s.suffix)}</b><span>${esc(s.label)}</span></div>`).join("");

    $("#courseStack").innerHTML = S.courses.map((c, i) => `
      <article class="course" style="top:calc(12vh + ${i * 22}px)">
        <div class="course-info">
          <div class="course-top"><span class="course-num">No. ${pad2(i + 1)}</span><span class="course-lvl">${esc(c.level)}</span></div>
          <h3>${esc(c.title)}</h3><p>${esc(c.desc)}</p>
          <div class="course-foot"><span class="course-price">${esc(c.price)}</span><a class="btn magnetic" href="${esc(c.link || S.coursesUrl)}" target="_blank" rel="noopener"><span>Enroll now ↗</span></a></div>
        </div>
        <div class="course-art"><div class="orb"></div><span class="big">${pad2(i + 1)}</span></div>
      </article>`).join("");

    const all = $("#allCourses");
    all.href = S.coursesUrl; $("span", all).textContent = `All courses on ${S.coursesPlatform || "our platform"} ↗`;

    const em = $("#emailLink"); em.textContent = S.email; em.href = `mailto:${S.email}`;
  }

  /* ---------- PROCESS CONTENT ---------- */
  let processPct = 0;
  if ($("#timeline")) {
    const steps = S.process;
    const label = { done: "Complete", current: "We are here", upcoming: "Up next" };
    $("#timeline").innerHTML = steps.map(s => `
      <li class="tl ${esc(s.status)}"><span class="tl-date">${esc(s.date)}</span>
        <div><h3>${esc(s.step)}</h3><p>${esc(s.desc)}</p></div>
        <span class="tl-status">${label[s.status] || ""}</span></li>`).join("");
    const done = steps.filter(s => s.status === "done").length + steps.filter(s => s.status === "current").length * 0.5;
    processPct = Math.round((done / steps.length) * 100);
    const cur = steps.find(s => s.status === "current") || [...steps].reverse().find(s => s.status === "done");
    $("#nowStep").textContent = cur ? cur.step : steps[0].step;
    if (!motion) {
      $("#overallPct").textContent = processPct + "%";
      $("#ringFg").style.strokeDashoffset = 326.73 * (1 - processPct / 100);
    }
  }

  $$("[data-fit]").forEach(el => { if (el.id !== "heroName") fit(el, el.firstElementChild || el); });
  let rt; addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => { fitters.forEach(f => f()); window.ScrollTrigger && ScrollTrigger.refresh(); }, 150); });
  document.fonts && document.fonts.ready.then(() => { fitters.forEach(f => f()); window.ScrollTrigger && ScrollTrigger.refresh(); });

  /* ---------- menu ---------- */
  const menuBtn = $("#menuBtn");
  const setMenu = open => {
    document.body.classList.toggle("menu-open", open);
    menuBtn && menuBtn.setAttribute("aria-expanded", open);
    $(".mb-text") && ($(".mb-text").textContent = open ? "Close" : "Menu");
    lenis && (open ? lenis.stop() : lenis.start());
  };
  menuBtn && menuBtn.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
  $$(".menu a").forEach(a => a.addEventListener("click", () => setMenu(false)));

  /* ---------- smooth anchor links ---------- */
  $$("[data-scroll]").forEach(a => a.addEventListener("click", e => {
    const id = a.getAttribute("href");
    if (!id || !id.startsWith("#")) return;
    const target = id === "#top" ? 0 : $(id);
    if (target === null) return;
    e.preventDefault();
    if (lenis) lenis.scrollTo(target, { duration: 1.6 });
    else (target === 0 ? scrollTo({ top: 0, behavior: "smooth" }) : target.scrollIntoView({ behavior: "smooth" }));
  }));

  /* ---------- gold dust canvas ---------- */
  const canvas = $("#dust");
  const mouse = { x: -9999, y: -9999 };
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let W, H, parts = [], running = true;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const size = () => {
      const r = canvas.getBoundingClientRect();
      W = r.width; H = r.height;
      canvas.width = W * dpr; canvas.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(160, Math.round((W * H) / 8000));
      parts = Array.from({ length: n }, () => ({
        x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.8 + 0.3,
        vx: (Math.random() - 0.5) * 0.15, vy: -(Math.random() * 0.35 + 0.05),
        t: Math.random() * Math.PI * 2, s: Math.random() * 0.02 + 0.005,
      }));
    };
    size(); addEventListener("resize", size);
    canvas.parentElement.addEventListener("mousemove", e => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
    canvas.parentElement.addEventListener("mouseleave", () => { mouse.x = mouse.y = -9999; });
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = "lighter";
      for (const p of parts) {
        if (!reduce) {
          const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
          if (d < 160) { const f = (1 - d / 160) * 1.6; p.x += (dx / d) * f; p.y += (dy / d) * f; }
          p.x += p.vx; p.y += p.vy; p.t += p.s;
          if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W; }
          if (p.x < -10) p.x = W + 10; if (p.x > W + 10) p.x = -10;
        }
        const a = 0.35 + Math.sin(p.t) * 0.3;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        g.addColorStop(0, `rgba(246,226,174,${a})`); g.addColorStop(1, "rgba(217,180,108,0)");
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2); ctx.fill();
      }
      if (running && !reduce) requestAnimationFrame(draw);
    };
    new IntersectionObserver(([en]) => { const was = running; running = en.isIntersecting; if (running && !was) draw(); }).observe(canvas);
    draw();
  }

  /* ================= NO-MOTION FALLBACK ================= */
  if (!motion) {
    $("#loader") && $("#loader").remove();
    navScroll();
    return;
  }

  /* ================= MOTION ================= */
  gsap.registerPlugin(ScrollTrigger);
  if (window.Lenis) {
    lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  navScroll();

  $$(".split").forEach(splitWords);
  const words = el => $$(".w > span", el);

  // scroll-in word reveals for headings (hero/process titles handled by intro)
  $$(".split").forEach(el => {
    if (el.classList.contains("pp-title")) return;
    gsap.from(words(el), { yPercent: 115, rotate: 5, duration: 1.3, ease: "expo.out", stagger: 0.07, scrollTrigger: { trigger: el, start: "top 86%" } });
  });
  $$(".kicker, .about-text p, .stats, .email, .contact .socials, .work-counter").forEach(el => {
    if (el.closest(".pp-hero")) return;
    gsap.from(el, { y: 40, opacity: 0, duration: 1.2, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 90%" } });
  });

  // counters
  $$("[data-count]").forEach(el => {
    const o = { v: 0 }, target = +el.dataset.count, suf = el.dataset.suffix;
    ScrollTrigger.create({ trigger: el, start: "top 90%", once: true, onEnter: () =>
      gsap.to(o, { v: target, duration: 2.2, ease: "power3.out", onUpdate: () => (el.textContent = Math.round(o.v).toLocaleString() + suf) }) });
  });

  // footer name rise
  $$(".footer-name").forEach(el => gsap.from(el, { yPercent: 40, opacity: 0.2, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom bottom", scrub: true } }));

  /* ---------- cursor + magnetic ---------- */
  if (fine) {
    const dot = $("#cursorDot"), ring = $("#cursorRing"), txt = $("#cursorText");
    const dx = gsap.quickTo(dot, "x", { duration: 0.08 }), dy = gsap.quickTo(dot, "y", { duration: 0.08 });
    const rx = gsap.quickTo(ring, "x", { duration: 0.5, ease: "power3" }), ry = gsap.quickTo(ring, "y", { duration: 0.5, ease: "power3" });
    addEventListener("mousemove", e => { dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY); });
    document.addEventListener("mouseover", e => {
      const play = e.target.closest(".vcard, .tile"), link = e.target.closest("a, button");
      ring.classList.toggle("label", !!play); txt.textContent = play ? "Play" : "";
      ring.classList.toggle("hover", !play && !!link);
      gsap.to(dot, { scale: play || link ? 0 : 1, duration: 0.3 });
    });
    $$(".magnetic").forEach(m => {
      const mx = gsap.quickTo(m, "x", { duration: 0.6, ease: "elastic.out(1,.4)" }), my = gsap.quickTo(m, "y", { duration: 0.6, ease: "elastic.out(1,.4)" });
      m.addEventListener("mousemove", e => { const r = m.getBoundingClientRect(); mx((e.clientX - r.left - r.width / 2) * 0.35); my((e.clientY - r.top - r.height / 2) * 0.35); });
      m.addEventListener("mouseleave", () => { mx(0); my(0); });
    });
  }

  /* ================= HOME MOTION ================= */
  if (isHome) {
    const chars = $$("#heroName .ch"), tiles = $$(".tile");
    const heroBits = [".hero-sub", ".hero-cta", ".hero-top", ".reel-badge"];

    // ----- intro -----
    document.body.classList.add("is-loading");
    lenis && lenis.stop();
    gsap.set(chars, { yPercent: 115 });
    gsap.set(".ht-king em", { yPercent: 110 });
    gsap.set(tiles, { opacity: 0, scale: 0.6, filter: "blur(12px)" });
    gsap.set(heroBits, { opacity: 0, y: 30 });
    gsap.set(".loader-name span", { yPercent: 110 });

    const count = { v: 0 };
    const intro = gsap.timeline({ delay: 0.2 });
    intro
      .to(".loader-name span", { yPercent: 0, duration: 1, ease: "expo.out" })
      .to(count, { v: 100, duration: 1.6, ease: "power2.inOut", onUpdate: () => ($("#count").textContent = Math.round(count.v)) }, 0)
      .to(".loader-inner", { opacity: 0, y: -30, duration: 0.6, ease: "power2.in" }, 1.8)
      .to(".loader-panel.top", { yPercent: -100, duration: 1.2, ease: "expo.inOut" }, 2.2)
      .to(".loader-panel.bottom", { yPercent: 100, duration: 1.2, ease: "expo.inOut" }, 2.2)
      .to(".ht-king em", { yPercent: 0, duration: 1.4, ease: "expo.out" }, 2.75)
      .to(chars, { yPercent: 0, duration: 1.5, ease: "expo.out", stagger: 0.06 }, 2.8)
      .to(tiles, { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.6, ease: "expo.out", stagger: 0.12 }, 3.0)
      .to(heroBits, { opacity: 1, y: 0, duration: 1.2, ease: "expo.out", stagger: 0.08 }, 3.2)
      .add(() => { $("#loader").remove(); document.body.classList.remove("is-loading"); lenis && lenis.start(); ScrollTrigger.refresh(); }, 3.4);

    // ----- hero mouse interactions -----
    if (fine) {
      const cy = chars.map(c => gsap.quickTo(c, "y", { duration: 0.6, ease: "power3" }));
      const tx = tiles.map(t => gsap.quickTo(t, "x", { duration: 1.2, ease: "power3" }));
      const ty = tiles.map(t => gsap.quickTo(t, "yPercent", { duration: 1.2, ease: "power3" }));
      const depth = [1, 1.8, 0.7];
      $("#hero").addEventListener("mousemove", e => {
        const fs = parseFloat($("#heroName").style.fontSize) || 200;
        chars.forEach((c, i) => {
          const r = c.getBoundingClientRect(), d = Math.abs(e.clientX - (r.left + r.width / 2));
          const k = Math.max(0, 1 - d / (fs * 0.9));
          cy[i](-k * fs * 0.09); c.classList.toggle("lit", k > 0.55);
        });
        const nx = e.clientX / innerWidth - 0.5, ny = e.clientY / innerHeight - 0.5;
        tiles.forEach((t, i) => { tx[i](nx * 60 * depth[i]); ty[i](ny * 14 * depth[i]); });
      });
      $("#hero").addEventListener("mouseleave", () => { chars.forEach((c, i) => { cy[i](0); c.classList.remove("lit"); }); });
    }

    // ----- hero scroll parallax -----
    const heroST = { trigger: "#hero", start: "top top", end: "bottom top", scrub: true };
    gsap.to(".hero-title", { yPercent: 18, ease: "none", scrollTrigger: heroST });
    tiles.forEach((t, i) => gsap.to(t, { y: -innerHeight * [0.35, 0.6, 0.25][i], ease: "none", scrollTrigger: heroST }));
    gsap.to(".hero-glow", { scale: 1.5, opacity: 0, ease: "none", scrollTrigger: heroST });

    // ----- statement words light up -----
    gsap.to(".statement-text .sw", { opacity: 1, ease: "none", stagger: 0.1, scrollTrigger: { trigger: ".statement", start: "top 70%", end: "bottom 65%", scrub: true } });

    // ----- services rows + cursor-follow preview -----
    gsap.from(".svc", { y: 60, opacity: 0, duration: 1.2, ease: "expo.out", stagger: 0.1, scrollTrigger: { trigger: "#svcList", start: "top 85%" } });
    gsap.from(".svc-cta", { y: 40, opacity: 0, duration: 1.2, ease: "expo.out", scrollTrigger: { trigger: ".svc-cta", start: "top 92%" } });
    if (fine) {
      const pv = $("#svcPreview"), inner = $("#svcPreviewInner");
      const px = gsap.quickTo(pv, "x", { duration: 0.7, ease: "power3" }), py = gsap.quickTo(pv, "y", { duration: 0.7, ease: "power3" });
      const pr = gsap.quickTo(pv, "rotation", { duration: 0.8, ease: "power3" });
      let lastX = 0;
      $("#svcList").addEventListener("mousemove", e => { if (e.target.closest(".svc a")) pv.classList.add("on"); px(e.clientX); py(e.clientY); pr(Math.max(-12, Math.min(12, (e.clientX - lastX) * 0.6))); lastX = e.clientX; });
      $$(".svc a").forEach(a => a.addEventListener("mouseenter", () => { inner.style.transform = `translateY(${-a.dataset.i * 100}%)`; pv.classList.add("on"); }));
      $("#svcList").addEventListener("mouseleave", () => { pv.classList.remove("on"); pr(0); });
      lenis && lenis.on("scroll", () => pv.classList.remove("on"));
    }

    // ----- horizontal video reel (desktop) -----
    const mm = gsap.matchMedia();
    mm.add("(min-width: 901px)", () => {
      const track = $("#workTrack"), n = S.videos.length;
      const dist = () => Math.max(0, track.scrollWidth - innerWidth);
      const tween = gsap.to(track, {
        x: () => -dist(), ease: "none",
        scrollTrigger: {
          trigger: "#work", start: "top top", end: () => "+=" + dist(), pin: true, scrub: 1, invalidateOnRefresh: true,
          onUpdate: self => {
            gsap.set("#workBar", { scaleX: self.progress });
            $("#workNow").textContent = pad2(Math.min(n, Math.floor(self.progress * n) + 1));
          },
        },
      });
      $$(".vcard").forEach(card => {
        const m = $(".media", card);
        gsap.fromTo(m, { xPercent: -6 }, { xPercent: 6, ease: "none", scrollTrigger: { trigger: card, containerAnimation: tween, start: "left right", end: "right left", scrub: true } });
        gsap.from($(".vinfo", card), { y: 30, opacity: 0, duration: 1, ease: "expo.out", scrollTrigger: { trigger: card, containerAnimation: tween, start: "left 85%" } });
      });
    });
    mm.add("(max-width: 900px)", () => {
      $$(".vcard").forEach(card => gsap.from(card, { y: 60, opacity: 0, duration: 1.2, ease: "expo.out", scrollTrigger: { trigger: card, start: "top 90%" } }));
    });

    // ----- marquee driven by scroll velocity -----
    const mt = gsap.to(".marquee-track", { xPercent: -50, repeat: -1, duration: 40, ease: "none" });
    mt.totalTime(40 * 500);
    let dir = 1, boost = 0;
    if (lenis) lenis.on("scroll", e => { if (e.direction) dir = e.direction; boost = Math.min(Math.abs(e.velocity), 60) / 5; });
    gsap.ticker.add(() => { boost *= 0.93; mt.timeScale(dir * (1 + boost)); });

    // ----- about photo reveal -----
    gsap.fromTo("#photoMask", { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.8, ease: "expo.inOut", scrollTrigger: { trigger: "#photoMask", start: "top 80%" } });
    gsap.fromTo(["#aboutPhoto", ".photo-fallback"], { scale: 1.35 }, { scale: 1, ease: "none", scrollTrigger: { trigger: ".about", start: "top bottom", end: "bottom top", scrub: true } });
    gsap.from(".photo-tag", { x: -60, opacity: 0, rotate: -20, duration: 1.4, ease: "expo.out", scrollTrigger: { trigger: "#photoMask", start: "top 50%" } });

    // ----- stacked course cards -----
    const cards = $$(".course");
    cards.forEach((c, i) => {
      gsap.from(c, { y: 120, opacity: 0, duration: 1.2, ease: "expo.out", scrollTrigger: { trigger: c, start: "top 95%" } });
      if (i === cards.length - 1) return;
      gsap.to(c, { scale: 0.9, filter: "brightness(.4)", ease: "none",
        scrollTrigger: { trigger: cards[i + 1], start: "top bottom", end: () => `top ${innerHeight * 0.12 + (i + 1) * 22}px`, scrub: true } });
    });

    // ----- process CTA -----
    gsap.fromTo(".pc-ring", { rotate: -40, scale: 0.7 }, { rotate: 40, scale: 1.15, ease: "none", scrollTrigger: { trigger: ".process-cta", start: "top bottom", end: "bottom top", scrub: true } });
    gsap.from(".pc-btn", { scale: 0, rotate: -90, duration: 1.4, ease: "expo.out", scrollTrigger: { trigger: ".process-cta", start: "top 60%" } });
  }

  /* ================= PROCESS MOTION ================= */
  if ($("#timeline")) {
    const C = 326.73, o = { p: 0 };
    gsap.timeline({ delay: 0.15 })
      .from(words($(".pp-title")), { yPercent: 115, rotate: 5, duration: 1.4, ease: "expo.out", stagger: 0.07 })
      .from(".pp-hero .kicker, .pp-overall", { y: 40, opacity: 0, duration: 1.2, ease: "expo.out", stagger: 0.1 }, 0.3)
      .to(o, { p: processPct, duration: 2, ease: "power3.inOut", onUpdate: () => {
        $("#overallPct").textContent = Math.round(o.p) + "%";
        $("#ringFg").style.strokeDashoffset = C * (1 - o.p / 100);
      } }, 0.6);
    gsap.to("#tlFill", { scaleY: 1, ease: "none", scrollTrigger: { trigger: ".pp-timeline", start: "top 70%", end: "bottom 70%", scrub: true } });
    $$(".tl").forEach(li => gsap.from(li, { x: 80, opacity: 0, duration: 1.2, ease: "expo.out", scrollTrigger: { trigger: li, start: "top 88%" } }));
  }

  /* ---------- nav hide/show ---------- */
  function navScroll() {
    const nav = $("#nav"); let last = 0;
    const on = y => {
      nav.classList.toggle("scrolled", y > 40);
      nav.classList.toggle("hidden", y > last && y > 500 && !document.body.classList.contains("menu-open"));
      last = y;
    };
    if (lenis) lenis.on("scroll", e => on(e.scroll)); else addEventListener("scroll", () => on(scrollY), { passive: true });
  }
})();
