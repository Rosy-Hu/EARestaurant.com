const data = window.EA_NEWSLETTER;
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const stars = (count) => "★".repeat(count) + "☆".repeat(5 - count);
const appHeader = $("#appHeader");
let menuExpanded = false;
let reviewsExpanded = false;

function toast(message) {
  const el = $("#toast");
  if (!el) return;
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 1800);
}

function openModal({ kicker, title, subtitle, body, html, meta = [], theme = "" }) {
  const modal = $("#detailModal");
  $("#modalKicker").textContent = kicker || "";
  $("#modalTitle").textContent = title || "";
  $("#modalSubtitle").textContent = subtitle || "";
  $("#modalBody").innerHTML = html || "";
  if (!html) $("#modalBody").textContent = body || "";
  $("#modalMeta").innerHTML = meta.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join("");
  modal.classList.toggle("mid-autumn", theme === "mid-autumn");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal() {
  $("#detailModal").classList.remove("open");
  $("#detailModal").setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function renderPackages() {
  const grid = $("#packageGrid");
  if (!grid) return;
  grid.innerHTML = data.menu.slice(0, 2).map((item, index) => `
    <article class="package-card">
      <span class="package-badge">${index === 0 ? "商家推荐" : "本季新品"}</span>
      <img src="${item.image}" alt="${item.name}">
      <div class="package-body">
        <h3>${item.name}</h3>
        <div class="package-bottom">
          <div>
            <div class="package-price">¥${index === 0 ? "54" : "45.9"}<del>¥96</del></div>
            <div class="package-sales">本月已上桌 ${index === 0 ? "50" : "14"}</div>
          </div>
          <button type="button" class="orange-button" data-project="${item.id}">查看</button>
        </div>
      </div>
    </article>
  `).join("");
}

function renderFilters() {
  const chips = $("#filterChips");
  if (!chips) return;
  const categories = ["全部", ...new Set(data.menu.map((item) => item.category))];
  chips.innerHTML = categories.map((category, index) => `<button type="button" class="filter-chip ${index === 0 ? "active" : ""}" data-filter="${category}">${category}</button>`).join("");
}

function renderDeals() {
  const list = $("#dealList");
  if (!list) return;
  const visible = menuExpanded ? data.menu : data.menu.slice(0, 2);
  list.innerHTML = visible.map((item) => `
    <article class="deal-item" data-category="${item.category}">
      <img src="${item.image}" alt="${item.name}">
      <div class="deal-copy">
        <h3>${item.name}</h3>
        <p>${item.lead} · ${item.team}</p>
        <div class="deal-price">¥${item.price === "战略级" ? "29.9" : "158"}<del>¥48</del></div>
      </div>
      <div class="deal-action">
        <button type="button" class="orange-button" data-project="${item.id}">查看</button>
        <small>本月已上桌 ${item.category === "战略客户" ? "61" : "11"}</small>
      </div>
    </article>
  `).join("");
}

function renderDishes() {
  const scroll = $("#dishScroll");
  if (scroll) {
    scroll.innerHTML = data.menu.map((item, index) => `
      <article class="dish-card">
        <img src="${item.image}" alt="${item.name}">
        <div class="dish-card-body">
          ${index === 0 ? '<span class="dish-label">主推</span>' : ""}
          <h3>${item.name}</h3>
          <span>${item.tags[0]} · ${index + 6}人推荐</span>
        </div>
      </article>
    `).join("");
  }
  const people = $("#peopleDishScroll");
  if (people) {
    people.innerHTML = data.reviews.slice(0, 4).map((review, index) => `
      <article class="dish-card">
        <img src="${data.menu[index % data.menu.length].image}" alt="${review.dish}">
        <div class="dish-card-body">
          <h3>${review.dish}</h3>
          <span>${index + 7}人推荐</span>
        </div>
      </article>
    `).join("");
  }
}

function renderReviews() {
  const list = $("#reviewList");
  if (!list) return;
  const visible = reviewsExpanded ? data.reviews : data.reviews.slice(0, 3);
  list.innerHTML = visible.map((review, index) => `
    <article class="review-item">
      <div class="review-user">
        <span class="review-avatar">${review.initials}</span>
        <div class="review-user-copy"><strong>${review.id}</strong><span>Lv.${7 + (index % 2)} ${review.dishes[0]}</span></div>
        <span class="review-date">${review.date}</span>
      </div>
      <div class="review-stars-line"><span class="score-box">${review.stars}.0</span><span>${stars(review.stars)}</span><b>${index % 2 ? "打卡后评价" : "很棒"}</b></div>
      <p class="review-text">${review.story}${review.quote}</p>
      <div class="review-images">
        <img src="${data.menu[index % data.menu.length].image}" alt="评价图片">
        <img src="${data.reviews[(index + 1) % data.reviews.length].avatar === "jade" ? "assets/sharing-event.jpg" : "assets/menu-chicken.jpg"}" alt="评价图片">
        <img src="assets/birthday-banquet.jpg" alt="评价图片">
      </div>
      <div class="helpful">${index + 2}人认为有帮助</div>
    </article>
  `).join("");
}

function renderStatic() {
  $("#ratingStars").innerHTML = "<i>★★★★★</i>";
  $("#reviewCountButton").textContent = `${data.restaurant.reviewCount}条 ›`;
  $("#pricePerson").textContent = data.restaurant.perCapita;
  $("#newsDate").textContent = "09月20日";
  $("#newsText").textContent = `${data.event.title}。${data.event.summary}`;
  $("#activityTitle").textContent = data.signature.name;
  $("#activityDesc").textContent = data.signature.description;
}

function bindProjectButtons() {
  $$("[data-project]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = data.menu.find((menu) => menu.id === button.dataset.project) || data.menu[0];
      openModal({
        kicker: item.category,
        title: item.name,
        subtitle: `${item.client} · ${item.date}`,
        body: item.detail,
        meta: [["负责人", item.lead], ["团队", item.team], ["等级", item.price], ["标签", item.tags.join(" / ")]]
      });
    });
  });
}

function bindEvents() {
  window.addEventListener("scroll", () => {
    appHeader.classList.toggle("scrolled", window.scrollY > 215);
  }, { passive: true });

  const track = $("#photoTrack");
  const dots = $("#galleryDots");
  if (track && dots) {
    dots.innerHTML = Array.from({ length: 3 }, (_, index) => `<i class="${index === 0 ? "active" : ""}"></i>`).join("");
    track.addEventListener("scroll", () => {
      const active = Math.round(track.scrollLeft / track.clientWidth);
      $$("i", dots).forEach((dot, index) => dot.classList.toggle("active", index === active));
    }, { passive: true });
  }

  $$(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = document.getElementById(tab.dataset.target);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const sections = ["couponSection", "dishSection", "reviewSection"].map((id) => document.getElementById(id)).filter(Boolean);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      $$(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.target === entry.target.id));
    });
  }, { rootMargin: "-35% 0px -60% 0px", threshold: 0.01 });
  sections.forEach((section) => observer.observe(section));

  $("#filterChips")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    $$(".filter-chip").forEach((chip) => chip.classList.remove("active"));
    button.classList.add("active");
    $$(".deal-item").forEach((item) => item.classList.toggle("hidden", button.dataset.filter !== "全部" && item.dataset.category !== button.dataset.filter));
  });

  $("#viewMoreMenu")?.addEventListener("click", (event) => {
    menuExpanded = true;
    renderDeals();
    bindProjectButtons();
    event.currentTarget.style.display = "none";
  });

  $("#viewMoreReviews")?.addEventListener("click", (event) => {
    reviewsExpanded = true;
    renderReviews();
    event.currentTarget.textContent = "已显示全部评价";
    event.currentTarget.disabled = true;
  });

  $("#reviewCountButton")?.addEventListener("click", () => $("#reviewSection").scrollIntoView({ behavior: "smooth" }));
  $("#activityButton")?.addEventListener("click", () => openModal({
    kicker: data.signature.kicker,
    title: data.signature.name,
    subtitle: data.signature.subtitle,
    body: data.signature.description,
    meta: [["阶段目标", "92%"], ["参与成员", "18"], ["协作团队", "6"], ["项目亮点", data.signature.highlights.join("；")]]
  }));
  $("#newsMoreButton")?.addEventListener("click", () => openModal({
    kicker: "商家新鲜事",
    title: data.event.title,
    subtitle: `${data.event.date} · ${data.event.place}`,
    body: data.event.summary,
    meta: [["分享人", data.event.speaker], ["核心观点", data.event.takeaways.join("；")]]
  }));
  $("#birthdayButton")?.addEventListener("click", () => {
    openModal({
      kicker: "",
      title: "本月寿星",
      subtitle: "金秋九月，恰逢月圆中秋。在桂香与月色之下，祝九月过生日的伙伴们生辰喜乐，月圆人安！",
      theme: "mid-autumn",
      html: `<div class="birthday-people-grid">${data.birthdays.map((person) => `<button type="button" class="birthday-person" data-birthday="${person.name}">${person.photo ? `<img src="${person.photo}" alt="${person.name}">` : `<div class="birthday-person-empty"></div>`}<strong>${person.name}</strong></button>`).join("")}</div>`,
      meta: []
    });
  });
  $("#bottomWrite")?.addEventListener("click", () => $("#reviewSection").scrollIntoView({ behavior: "smooth" }));
  $("#checkInButton")?.addEventListener("click", () => toast("打卡成功，EA中餐馆已记录你的到访"));
  $("#topCollectButton")?.addEventListener("click", () => toast("已收藏 EA中餐馆"));
  $("#bottomCollect")?.addEventListener("click", () => toast("已收藏 EA中餐馆"));

  async function share() {
    const payload = { title: "EA中餐馆｜2026年9月 Newsletter", text: data.restaurant.slogan, url: location.href };
    try {
      if (navigator.share) return await navigator.share(payload);
      await navigator.clipboard.writeText(location.href);
      toast("链接已复制");
    } catch (error) {
      if (error?.name !== "AbortError") toast("请复制浏览器地址栏链接");
    }
  }
  $("#shareButton")?.addEventListener("click", share);
  $("#topShareButton")?.addEventListener("click", share);
  $$("[data-close-modal]").forEach((element) => element.addEventListener("click", closeModal));
  const sheet = $(".modal-sheet");
  if (sheet) {
    let dragging = false;
    let startY = 0;
    let startTop = 0;
    sheet.addEventListener("pointerdown", (event) => {
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      dragging = true;
      startY = event.clientY;
      startTop = sheet.scrollTop;
      sheet.classList.add("dragging");
      sheet.setPointerCapture(event.pointerId);
    });
    sheet.addEventListener("pointermove", (event) => {
      if (!dragging) return;
      sheet.scrollTop = startTop - (event.clientY - startY);
    });
    const stopDrag = (event) => {
      if (!dragging) return;
      dragging = false;
      sheet.classList.remove("dragging");
      if (sheet.hasPointerCapture(event.pointerId)) sheet.releasePointerCapture(event.pointerId);
    };
    sheet.addEventListener("pointerup", stopDrag);
    sheet.addEventListener("pointercancel", stopDrag);
    sheet.addEventListener("pointerleave", stopDrag);
  }  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeModal(); });
}

function init() {
  if (!data) return;
  renderStatic();
  renderPackages();
  renderFilters();
  renderDeals();
  renderDishes();
  renderReviews();
  bindEvents();
  bindProjectButtons();
}

document.addEventListener("DOMContentLoaded", init);


