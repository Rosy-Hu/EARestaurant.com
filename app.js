(function () {
  const gate = document.getElementById('passwordGate');
  const pageShell = document.getElementById('pageShell');
  const passwordForm = document.getElementById('passwordForm');
  const passwordInput = document.getElementById('passwordInput');
  const passwordError = document.getElementById('passwordError');
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const modalClose = document.getElementById('modalClose');
  const dealSheet = document.getElementById('dealSheet');
  const dealSheetImage = document.getElementById('dealSheetImage');
  const dealSheetBadge = document.getElementById('dealSheetBadge');
  const dealSheetTitle = document.getElementById('dealSheetTitle');
  const dealSheetDetail = document.getElementById('dealSheetDetail');
  const PASSWORD = '123456';

  const escapeHtml = (value = '') => String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const unlock = () => {
    gate.classList.remove('active');
    gate.setAttribute('aria-hidden', 'true');
    pageShell.setAttribute('aria-hidden', 'false');
    document.body.classList.add('unlocked');
    requestAnimationFrame(() => pageShell.classList.add('rendered'));
  };

  const dealScoreMap = {
    'shenji-bank': { tech: '4.8', competition: '4.6', relationship: '5.0' },
    'niterra-data': { tech: '4.9', competition: '4.3', relationship: '4.8' },
    'niterra-d365': { tech: '4.7', competition: '4.2', relationship: '4.9' },
    'hfjl-sap': { tech: '5.0', competition: '4.9', relationship: '4.9' },
    'mufg-pmo': { tech: '4.9', competition: '4.7', relationship: '4.8' },
    'dior-ams': { tech: '4.7', competition: '4.5', relationship: '4.9' },
    'dior-pm': { tech: '4.8', competition: '4.4', relationship: '5.0' }
  };
  const renderMenu = () => {
    const container = document.getElementById('winList');
    container.innerHTML = APP_DATA.winDeals.map((deal) => `
      <article class="menu-card">
        <div class="menu-thumb">
          <img src="${deal.image}" alt="${escapeHtml(deal.name)}项目图片" loading="lazy" />
        </div>
        <div class="menu-main">
          <h3>${escapeHtml(deal.name)}</h3>
          <span class="menu-industry-tag menu-badge">${escapeHtml(deal.industry)}</span>
          <div class="menu-people">
            <span><b>主厨</b>${escapeHtml(deal.pic)}</span>
            <span><b>总管</b>${escapeHtml(deal.mic)}</span>
            <span><b>后厨班底</b>${escapeHtml(deal.members)}</span>
          </div>
          <div class="menu-scores">
            <span><em>技术含量</em><b>${dealScoreMap[deal.id].tech}</b></span>
            <span><em>竞争指数</em><b>${dealScoreMap[deal.id].competition}</b></span>
            <span><em>客户关系</em><b>${dealScoreMap[deal.id].relationship}</b></span>
          </div>
        </div>
        <button class="menu-view-button" type="button" data-sheet-id="${escapeHtml(deal.id)}">查看</button>
      </article>
    `).join('');
  };

  const renderFeatured = () => {
    document.getElementById('featuredList').innerHTML = APP_DATA.featuredProjects.map((project) => `
      <article class="featured-card">
        <span class="status-chip warm">${escapeHtml(project.tag)}</span>
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.description)}</p>
        <div class="progress" aria-label="内容完成度 ${project.progress}%"><i style="width:${project.progress}%"></i></div>
      </article>
    `).join('');
  };

  const renderReviews = () => {
    const container = document.getElementById('reviewList');
    document.getElementById('reviewCount').textContent = `${APP_DATA.reviews.length} 条评价`;
    container.innerHTML = APP_DATA.reviews.map((review) => {
      const imageHtml = review.images.length
        ? `<div class="review-images">${review.images.map((src) => `<img class="zoomable" src="${src}" alt="${escapeHtml(review.name)}的拿手菜" loading="lazy" />`).join('')}</div>`
        : '';
      return `
        <article class="review-card">
          <div class="review-head">
            <div class="avatar">${escapeHtml(review.avatarText)}</div>
            <div class="review-name">
              <strong>${escapeHtml(review.name)}</strong>
              <span>${'★'.repeat(review.stars)}${'☆'.repeat(5 - review.stars)}</span>
            </div>
          </div>
          <p class="review-text">${escapeHtml(review.text)}</p>
          <span class="review-dish">${escapeHtml(review.dish)}</span>
          ${imageHtml}
        </article>
      `;
    }).join('');
  };

  const renderNews = () => {
    const container = document.getElementById('newsList');
    container.innerHTML = APP_DATA.news.map((item) => `
      <div class="news-gallery">
        ${item.images.map((src, index) => `<img class="zoomable" src="${src}" alt="EA山会现场照片 ${index + 1}" loading="lazy" />`).join('')}
      </div>
      <div class="news-copy">
        <small>${escapeHtml(item.date)} · EA MOUNTAIN FEAST</small>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
      </div>
    `).join('');
  };

  const renderBirthdays = () => {
    const container = document.getElementById('birthdayList');
    container.innerHTML = APP_DATA.birthdays.map((person) => {
      const photo = person.photo
        ? `<img class="birthday-photo" src="${person.photo}" alt="${escapeHtml(person.cn)}" loading="lazy" />`
        : `<div class="birthday-placeholder">${escapeHtml(person.cn.slice(0, 1))}</div>`;
      return `
        <article class="birthday-card">
          ${photo}
          <div class="birthday-copy">
            <strong>${escapeHtml(person.cn)}</strong>
            <span>${escapeHtml(person.en)}</span>
          </div>
        </article>
      `;
    }).join('');
  };

  const openModal = (src) => {
    modalImage.src = src;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
  };

  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    modalImage.src = '';
  };

  const openDealSheet = (id) => {
    const deal = APP_DATA.winDeals.find((item) => item.id === id);
    if (!deal) return;
    dealSheetImage.src = deal.image;
    dealSheetImage.alt = `${deal.name}项目图片`;
    dealSheetImage.classList.add('contain');
    dealSheetBadge.textContent = deal.industry;
    dealSheetTitle.textContent = deal.name;
    dealSheetDetail.textContent = deal.detail;
    dealSheet.classList.add('active');
    dealSheet.setAttribute('aria-hidden', 'false');
    document.body.classList.add('sheet-open');
  };

  const closeDealSheet = () => {
    dealSheet.classList.remove('active');
    dealSheet.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('sheet-open');
    dealSheetImage.src = '';
  };

  passwordForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (passwordInput.value.trim() === PASSWORD) {
      sessionStorage.setItem('eaRestaurantUnlocked', '1');
      passwordError.textContent = '';
      unlock();
      return;
    }
    passwordError.textContent = '口令不对，请再试一次。';
    passwordInput.select();
  });

  document.addEventListener('click', (event) => {
    const sheetButton = event.target.closest('[data-sheet-id]');
    if (sheetButton) {
      openDealSheet(sheetButton.dataset.sheetId);
      return;
    }

    const zoom = event.target.closest('.zoomable');
    if (zoom) openModal(zoom.src);
  });

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });
  document.getElementById('dealSheetClose').addEventListener('click', closeDealSheet);
  document.getElementById('dealSheetScrim').addEventListener('click', closeDealSheet);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
      closeDealSheet();
    }
  });

  renderMenu();
  renderFeatured();
  renderReviews();
  renderNews();
  renderBirthdays();

  if (sessionStorage.getItem('eaRestaurantUnlocked') === '1') {
    unlock();
  } else {
    passwordInput.focus();
  }
})();






