(() => {
  const S = window.SITE;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s = "") => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const finePointer = matchMedia("(hover: hover) and (min-width: 801px)").matches;

  /* ---------- shared bits ---------- */
  const [first, ...rest] = S.name.split(" ");
  $$("[data-name]").forEach(el => (el.textContent = S.name));
  $$("[data-name-short]").forEach(el => (el.innerHTML = `${esc(first)}<b>.</b>`));
  $$("[data-tagline]").forEach(el => (el.textContent = S.tagline));
  $$("[data-hero-sub]").forEach(el => (el.textContent = S.heroSub));
  $$("[data-process-link]").forEach(el => (el.href = S.processLink));
  const year = $("#year"); if (year) year.textContent = new Date().getFullYear();

  /* ---------- HOME PAGE ---------- */
  if ($("#hero")) {
    // hero title lines
    $("#heroTitle").innerHTML = S.heroLine.map(l => `<span class="line"><span>${esc(l)}</span></span>`).join("");
    if (S.heroVideo) $("#heroVideo").src = S.heroVideo; else $("#heroVideo").remove();

    // marquee
    const words = [S.tagline.split("·").map(s => s.trim()), "Courses", "Storytelling", "Video"].flat();
    const row = words.map(w => `<span>${esc(w)}</span><i>✦</i>`).join("");
    $("#marquee").innerHTML = row + row;

    // videos
    const ytThumb = id => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
    const grads = ["#ff5a1f,#7b5cff", "#7b5cff,#1fc8ff", "#ffb347,#ff3d6e", "#1fffa0,#7b5cff", "#ff3d6e,#ffb347", "#1fc8ff,#ff5a1f"];
    $("#videoGrid").innerHTML = S.videos.map((v, i) => {
      const thumb = v.thumb || (v.youtube ? ytThumb(v.youtube) : "");
      const media = thumb
        ? `<img class="thumb" src="${esc(thumb)}" alt="" loading="lazy" onerror="this.src='https://i.ytimg.com/vi/${esc(v.youtube)}/hqdefault.jpg'">`
        : `<div class="ph" style="background:linear-gradient(135deg,${grads[i % grads.length]})">${String(i + 1).padStart(2, "0")}</div>`;
      return `<article class="vcard reveal" data-i="${i}" data-cat="${esc(v.category)}">
        ${media}
        ${v.preview ? `<video src="${esc(v.preview)}" muted loop playsinline preload="none"></video>` : ""}
        <span class="play"></span>
        <div class="vmeta"><div><small>${esc(v.category)}</small><h3>${esc(v.title)}</h3></div><span class="views">${esc(v.views)} views</span></div>
      </article>`;
    }).join("");

    // hover preview
    $$(".vcard").forEach(card => {
      const vid = $("video", card);
      if (!vid) return;
      card.addEventListener("mouseenter", () => vid.play().catch(() => {}));
      card.addEventListener("mouseleave", () => { vid.pause(); vid.currentTime = 0; });
    });

    // filters
    const cats = ["All", ...new Set(S.videos.map(v => v.category))];
    $("#filters").innerHTML = cats.map((c, i) => `<button class="${i ? "" : "active"}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
    $("#filters").addEventListener("click", e => {
      const b = e.target.closest("button"); if (!b) return;
      $$("#filters button").forEach(x => x.classList.toggle("active", x === b));
      $$(".vcard").forEach(card => card.classList.toggle("hide", b.dataset.cat !== "All" && card.dataset.cat !== b.dataset.cat));
    });

    // modal
    const modal = $("#modal"), body = $("#modalBody");
    const openModal = v => {
      if (v.youtube) body.innerHTML = `<iframe src="https://www.youtube.com/embed/${encodeURIComponent(v.youtube)}?autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
      else if (v.file) body.innerHTML = `<video src="${esc(v.file)}" controls autoplay playsinline></video>`;
      else body.innerHTML = `<div class="modal-empty"><h3>${esc(v.title)}</h3><p>Add a YouTube ID or video file for this card in js/content.js</p></div>`;
      modal.classList.add("open"); modal.setAttribute("aria-hidden", "false");
    };
    const closeModal = () => { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); setTimeout(() => (body.innerHTML = ""), 400); };
    $("#videoGrid").addEventListener("click", e => { const c = e.target.closest(".vcard"); if (c) openModal(S.videos[c.dataset.i]); });
    $("#modalClose").addEventListener("click", closeModal);
    modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
    addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

    // about
    const A = S.about;
    const img = $("#aboutPhoto");
    img.onload = () => ($(".photo-fallback").style.display = "none");
    img.onerror = () => img.remove();
    img.src = A.photo;
    $("#aboutHeading").textContent = A.heading;
    $("#aboutBody").innerHTML = A.paragraphs.map(p => `<p class="reveal">${esc(p)}</p>`).join("");
    $("#stats").innerHTML = A.stats.map(s => `<div class="stat reveal"><b data-count="${s.value}" data-suffix="${esc(s.suffix)}">0</b><span>${esc(s.label)}</span></div>`).join("");

    // photo tilt
    const tilt = $("#tilt"), frame = $(".photo-frame");
    if (finePointer) {
      tilt.addEventListener("mousemove", e => {
        const r = tilt.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        frame.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.02)`;
      });
      tilt.addEventListener("mouseleave", () => (frame.style.transform = ""));
    }

    // courses
    $("#courseGrid").innerHTML = S.courses.map((c, i) => `
      <a class="course reveal" href="${esc(c.link)}">
        <span class="num">${String(i + 1).padStart(2, "0")}</span>
        <span class="lvl">${esc(c.level)}</span>
        <h3>${esc(c.title)}</h3><p>${esc(c.desc)}</p>
        <div class="foot"><span class="price">${esc(c.price)}</span><span class="go">→</span></div>
      </a>`).join("");
    $$(".course").forEach(c => c.addEventListener("mousemove", e => {
      const r = c.getBoundingClientRect();
      c.style.setProperty("--mx", `${e.clientX - r.left}px`);
      c.style.setProperty("--my", `${e.clientY - r.top}px`);
    }));

    // contact
    const em = $("#emailLink"); em.textContent = S.email; em.href = `mailto:${S.email}`;
    $("#socials").innerHTML = S.socials.map(s => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`).join("");

    // mobile menu
    const burger = $("#burger"), links = $("#navLinks");
    burger.addEventListener("click", () => { burger.classList.toggle("open"); links.classList.toggle("open"); $("#nav").classList.toggle("menu-open"); });
    $$("a", links).forEach(a => a.addEventListener("click", () => { burger.classList.remove("open"); links.classList.remove("open"); $("#nav").classList.remove("menu-open"); }));

    // loader
    const loader = $("#loader"), bar = $(".loader-bar i");
    document.body.classList.add("loading");
    let p = 0;
    const tick = setInterval(() => { p = Math.min(100, p + Math.random() * 22); bar.style.width = p + "%"; }, 90);
    const finish = () => {
      clearInterval(tick); bar.style.width = "100%";
      setTimeout(() => { loader.classList.add("done"); document.body.classList.remove("loading"); $("#heroTitle").classList.add("in"); }, 250);
    };
    if (document.readyState === "complete") setTimeout(finish, 600); else addEventListener("load", () => setTimeout(finish, 400));
    setTimeout(finish, 3500); // never block on slow assets
  }

  /* ---------- PROCESS PAGE ---------- */
  if ($("#timeline")) {
    const steps = S.process;
    $("#timeline").innerHTML = steps.map(s => `
      <li class="tl ${esc(s.status)} reveal"><span class="tag">${esc(s.date)}</span><h3>${esc(s.step)}</h3><p>${esc(s.desc)}</p></li>`).join("");
    const done = steps.filter(s => s.status === "done").length + steps.filter(s => s.status === "current").length * 0.5;
    const pct = Math.round((done / steps.length) * 100);
    requestAnimationFrame(() => setTimeout(() => {
      $("#overallBar").style.width = pct + "%";
      let n = 0; const t = setInterval(() => { n = Math.min(pct, n + 1); $("#overallPct").textContent = n + "%"; if (n >= pct) clearInterval(t); }, 1400 / Math.max(pct, 1));
    }, 200));
  }

  /* ---------- scroll reveal + counters ---------- */
  const countUp = el => {
    const target = +el.dataset.count, suf = el.dataset.suffix, t0 = performance.now(), dur = 1800;
    const step = now => {
      const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(target * e).toLocaleString() + suf;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (!en.isIntersecting) return;
    en.target.classList.add("in");
    $$("[data-count]", en.target).forEach(countUp);
    io.unobserve(en.target);
  }), { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  $$(".reveal").forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 0.07}s`; io.observe(el); });

  /* ---------- scroll progress + nav ---------- */
  const nav = $("#nav"), prog = $("#progress");
  let lastY = 0;
  addEventListener("scroll", () => {
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    prog.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    if ($("#hero")) {
      nav.classList.toggle("scrolled", y > 40);
      nav.classList.toggle("hidden", y > lastY && y > 400 && !$("#navLinks").classList.contains("open"));
    }
    lastY = y;
  }, { passive: true });

  /* ---------- cursor + magnetic buttons ---------- */
  if (finePointer) {
    const cur = $("#cursor"), label = $("#cursorText");
    let mx = innerWidth / 2, my = innerHeight / 2, cx = mx, cy = my;
    addEventListener("mousemove", e => { mx = e.clientX; my = e.clientY; });
    (function loop() { cx += (mx - cx) * 0.2; cy += (my - cy) * 0.2; cur.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`; requestAnimationFrame(loop); })();
    document.addEventListener("mouseover", e => {
      const v = e.target.closest(".vcard"), a = e.target.closest("a,button");
      cur.classList.toggle("label", !!v); label.textContent = v ? "Play" : "";
      cur.classList.toggle("hover", !v && !!a);
    });
    $$(".magnetic").forEach(m => {
      m.addEventListener("mousemove", e => {
        const r = m.getBoundingClientRect();
        m.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px,${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
      });
      m.addEventListener("mouseleave", () => (m.style.transform = ""));
    });
    // hero parallax
    const blobs = $$(".hero .blob");
    addEventListener("mousemove", e => {
      const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
      blobs.forEach((b, i) => (b.style.translate = `${x * (i + 1) * 30}px ${y * (i + 1) * 30}px`));
    });
  }
})();
