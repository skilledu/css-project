// script.js – Complete CSS Tutorial Logic
// Two sections: Home Page & Tutorial App

(function () {
  'use strict';

  /* ===========================================================
     STATE
  =========================================================== */
  let currentIndex = -1;
  let completedTopics = new Set();
  let currentCode = '';
  let originalCode = '';
  let filteredIndices = [];

  // Determine base path dynamically to support subdirectories (e.g. /courses/css/)
  let basePath = window.location.pathname;
  if (basePath.includes('/topics/')) {
      basePath = basePath.substring(0, basePath.indexOf('/topics/'));
  } else {
      basePath = basePath.replace(/\/index\.html$/, '');
  }
  if (!basePath.endsWith('/')) {
      basePath += '/';
  }

  /* ===========================================================
     SLUG GENERATION & MAPPING
  =========================================================== */
  const idCounts = {};
  topics.forEach((topic, index) => {
    idCounts[topic.id] = (idCounts[topic.id] || 0) + 1;
    let slug = topic.id;
    if (topic.id === 'colors') {
      slug = idCounts[topic.id] === 1 ? 'colors-basics' : 'colors-advanced';
    } else if (topic.id === 'text') {
      slug = idCounts[topic.id] === 1 ? 'text-basics' : 'text-overflow';
    }
    topic.slug = slug;
    topic.index = index;
  });

  function getTopicIndexBySlug(slug) {
    const topic = topics.find(t => t.slug === slug);
    return topic ? topic.index : -1;
  }

  /* ===========================================================
     DOM REFERENCES
  =========================================================== */
  const homePage           = document.getElementById('home-page');
  const tutorialApp        = document.getElementById('tutorial-app');

  // Home page
  const btnStart           = document.getElementById('btn-start');
  const btnBrowse          = document.getElementById('btn-browse');
  const homeThemeBtn       = document.getElementById('home-theme-btn');
  const previewGrid        = document.getElementById('topics-preview-grid');
  const footerProgress     = document.getElementById('footer-progress-text');
  const totalTopicsCount   = document.getElementById('total-topics-count');
  const homeTopicsSection  = document.getElementById('home-topics-section');

  // Tutorial elements
  const topicList          = document.getElementById('topic-list');
  const topicContent       = document.getElementById('topic-content');
  const progressBar        = document.getElementById('progress-bar');
  const progressCount      = document.getElementById('progress-count');
  const btnPrev            = document.getElementById('btn-prev');
  const btnNext            = document.getElementById('btn-next');
  const menuBtn            = document.getElementById('menu-btn');
  const sidebar            = document.getElementById('sidebar');
  const overlay            = document.getElementById('overlay');
  const searchInput        = document.getElementById('topic-search');
  const tutThemeBtn        = document.getElementById('tut-theme-btn');
  const breadcrumbHomeLink = document.getElementById('breadcrumb-home-link');

  // Bottom Nav
  const btnPrevBottom  = document.getElementById('btn-prev-bottom');
  const btnNextBottom  = document.getElementById('btn-next-bottom');
  const bottomNavInfo  = document.getElementById('bottom-nav-info');

  // Modal
  const modalBackdrop  = document.getElementById('modal-backdrop');
  const codeEditor     = document.getElementById('code-editor');
  const previewFrame   = document.getElementById('preview-frame');
  const btnRun         = document.getElementById('modal-run-btn');
  const btnReset       = document.getElementById('modal-reset-btn');
  const btnModalClose  = document.getElementById('modal-close-btn');

  // Toast
  const toast          = document.getElementById('toast');
  const toastMsg       = document.getElementById('toast-msg');

  /* ===========================================================
     INITIALIZATION
  =========================================================== */
  function init() {
    // Load saved data
    completedTopics = loadCompleted();
    filteredIndices = topics.map((_, i) => i);

    initTheme();
    renderWelcomeGrid();
    updateProgress();
    setupEventListeners();
    
    if (window.__INITIAL_TOPIC__) {
      const idx = getTopicIndexBySlug(window.__INITIAL_TOPIC__);
      if (idx !== -1) {
        loadTopic(idx, true); // true = skipPushState
      } else {
        showHome();
      }
    } else if (window.location.hash.startsWith('#topic-')) {
      const slug = window.location.hash.replace('#topic-', '');
      const idx = getTopicIndexBySlug(slug);
      if (idx !== -1) {
        loadTopic(idx, true);
      } else {
        showHome(true);
      }
    } else {
      showHome(true); // Always start on Home Page, skip pushState to preserve exact URL
    }
  }

  /* ===========================================================
     THEME LOGIC
  =========================================================== */
  function initTheme() {
    const saved = localStorage.getItem('css-tut-theme');
    if (saved) {
      document.documentElement.setAttribute('data-theme', saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('css-tut-theme', next);
  }

  /* ===========================================================
     PAGE SWITCHING
  =========================================================== */
  function showHome(skipPushState = false) {
    const path = window.location.pathname;
    // Don't pushState if we are already at the base path or index.html
    if (!skipPushState && path !== basePath && path !== basePath + 'index.html' && path !== basePath.replace(/\/$/, '')) {
        history.pushState({ isHome: true }, 'CSS Tutorial | Skilledu', basePath);
    }
    homePage.style.display = 'flex';
    tutorialApp.style.display = 'none';
    document.title = 'CSS Tutorial | Skilledu';
    updateProgress();
    renderWelcomeGrid(); // refresh completed state on cards
  }

  function showTutorial() {
    homePage.style.display = 'none';
    tutorialApp.style.display = 'flex';
    renderSidebar(filteredIndices);
    updateNavButtons();
  }

  /* ===========================================================
     SIDEBAR RENDERING
  =========================================================== */
  function renderSidebar(indices) {
    if (!topicList) return;
    const list = (indices && indices.length > 0) ? indices : topics.map((_, i) => i);
    topicList.innerHTML = '';
    list.forEach(i => {
      const topic = topics[i];
      if (!topic) return;
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.className = 'topic-btn' +
        (i === currentIndex ? ' active' : '') +
        (completedTopics.has(i) ? ' done' : '');
      btn.dataset.index = i;
      btn.innerHTML = `
        <span class="topic-num">${String(i + 1).padStart(2, '0')}</span>
        <span class="topic-name">${topic.title}</span>
        ${completedTopics.has(i) ? `<svg class="done-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>` : ''}
      `;
      btn.addEventListener('click', () => loadTopic(i));
      li.appendChild(btn);
      topicList.appendChild(li);
    });
  }

  /* ===========================================================
     HOME TOPICS GRID
  =========================================================== */
  function renderWelcomeGrid() {
    if (!previewGrid) return;
    previewGrid.innerHTML = '';
    if (totalTopicsCount) totalTopicsCount.textContent = topics.length;
    topics.forEach((topic, i) => {
      const card = document.createElement('div');
      card.className = 'chapter-card' + (completedTopics.has(i) ? ' completed' : '');
      card.innerHTML = `
        <div class="chapter-num">Chapter ${i + 1}</div>
        <div class="chapter-title">CSS – ${topic.title.toUpperCase()}</div>
        <div class="chapter-read">Read Chapter &rarr;</div>
      `;
      card.addEventListener('click', () => {
        loadTopic(i);      // load content first
        showTutorial();    // then switch view (loadTopic already calls showTutorial internally, but we need it here too for home→tutorial flow)
      });
      previewGrid.appendChild(card);
    });
  }

  /* ===========================================================
     TOPIC LOADING
     NOTE: loadTopic does NOT call showTutorial() to avoid
     infinite recursion. The caller is responsible for that.
  =========================================================== */
  function loadTopic(index, skipPushState = false) {
    if (index < 0 || index >= topics.length) return;

    // Mark the PREVIOUS topic as completed (the one we are leaving)
    if (currentIndex >= 0 && currentIndex !== index) {
      completedTopics.add(currentIndex);
      saveCompleted();
    }

    currentIndex = index;

    const topic = topics[index];

    // Inject content
    topicContent.innerHTML = topic.content;

    // Update badge to Chapter format
    const badge = topicContent.querySelector('.topic-badge');
    if (badge) badge.textContent = `Chapter ${index + 1} of ${topics.length}`;

    // Update page title
    let pageTitle = /^css\b/i.test(topic.title.trim())
        ? `${topic.title} | Skilledu Tutorial`
        : `CSS ${topic.title} | Skilledu Tutorial`;
    if (topic.slug === 'text-overflow') {
        pageTitle = 'CSS Text Overflow & Breaking | Skilledu Tutorial';
    }
    document.title = pageTitle;

    // Update Meta Description dynamically (mutate existing tag)
    const pMatch = topic.content.match(/<p>([\s\S]*?)<\/p>/i);
    let metaDesc = 'Comprehensive CSS tutorial chapter.';
    if (pMatch && pMatch[1]) {
        let rawText = pMatch[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
        if (rawText.length > 155) {
            let truncated = rawText.substring(0, 155);
            const lastSpace = truncated.lastIndexOf(' ');
            if (lastSpace > 0) truncated = truncated.substring(0, lastSpace);
            metaDesc = truncated + '...';
        } else {
            metaDesc = rawText;
        }
        metaDesc = metaDesc.replace(/"/g, '&quot;');
    }
    const metaTag = document.querySelector('meta[name="description"]');
    if (metaTag) metaTag.setAttribute('content', metaDesc);

    // Update Canonical URL dynamically
    const canonical = document.querySelector('link[rel="canonical"]');
    // We use a placeholder domain pattern here, which will be updated in production
    if (canonical) canonical.setAttribute('href', `https://REPLACE-WITH-REAL-DOMAIN.com/topics/${topic.slug}.html`);

    // Handle History API Routing
    if (!skipPushState) {
        history.pushState({ topicIndex: index }, pageTitle, `${basePath}#topic-${topic.slug}`);
    }

    // Switch to tutorial view (safe - does NOT call loadTopic)
    showTutorial();

    // Update UI
    updateProgress();
    updateNavButtons();

    // Bind code block buttons
    bindCodeBlocks();

    // Scroll content to top
    const contentArea = document.getElementById('content-area');
    if (contentArea) contentArea.scrollTop = 0;

    // Close sidebar on mobile
    if (window.innerWidth <= 768) {
      if (sidebar) sidebar.classList.remove('open');
      if (overlay) overlay.classList.remove('active');
    }
  }

  /* ===========================================================
     CODE BLOCK INTERACTIONS
  =========================================================== */
  function bindCodeBlocks() {
    if (!topicContent) return;
    topicContent.querySelectorAll('.code-wrap').forEach(wrap => {
      const pre = wrap.querySelector('.code-block');
      if (!pre) return;
      const code = pre.innerText || pre.textContent;

      // Copy button
      const copyBtn = wrap.querySelector('.btn-copy');
      if (copyBtn) {
        // Remove old listeners by cloning
        const newCopyBtn = copyBtn.cloneNode(true);
        copyBtn.parentNode.replaceChild(newCopyBtn, copyBtn);
        newCopyBtn.addEventListener('click', () => {
          navigator.clipboard.writeText(code).then(() => {
            showToast('Code copied!');
            newCopyBtn.classList.add('copied');
            setTimeout(() => newCopyBtn.classList.remove('copied'), 2000);
          }).catch(() => {
            // Fallback for non-secure contexts
            try {
              const ta = document.createElement('textarea');
              ta.value = code;
              ta.style.position = 'fixed';
              ta.style.opacity = '0';
              document.body.appendChild(ta);
              ta.select();
              document.execCommand('copy');
              document.body.removeChild(ta);
              showToast('Code copied!');
            } catch (err) {
              showToast('Copy failed');
            }
          });
        });
      }

      // Try It button
      const tryBtn = wrap.querySelector('.btn-try');
      if (tryBtn) {
        const hasHTMLTags = /<[a-z][\s\S]*>/i.test(code);
        
        // Remove 'Try It' button if it's a pure CSS snippet (no HTML tags)
        if (!hasHTMLTags) {
          tryBtn.remove();
        } else {
          const newTryBtn = tryBtn.cloneNode(true);
          tryBtn.parentNode.replaceChild(newTryBtn, tryBtn);
          newTryBtn.addEventListener('click', () => openModal(code));
        }
      }
    });
  }

  /* ===========================================================
     PROGRESS
  =========================================================== */
  function updateProgress() {
    const total = topics.length;
    const done  = completedTopics.size;
    if (progressCount) progressCount.textContent = `${done} / ${total}`;
    if (progressBar)   progressBar.style.width = total ? `${(done / total) * 100}%` : '0%';
    if (footerProgress) {
      footerProgress.textContent = done === 0
        ? '0 topics completed'
        : done === total
        ? `All ${total} topics completed! 🎉`
        : `${done} / ${total} topics completed`;
    }
  }

  /* ===========================================================
     NAV BUTTONS
  =========================================================== */
  function updateNavButtons() {
    const isFirst = currentIndex <= 0;
    const isLast  = currentIndex >= topics.length - 1;

    if (btnPrev) btnPrev.disabled = isFirst;
    if (btnNext) btnNext.disabled = isLast;
    if (btnPrevBottom) btnPrevBottom.disabled = isFirst;
    if (btnNextBottom) btnNextBottom.disabled = isLast;

    if (bottomNavInfo) {
      if (currentIndex >= 0) {
        bottomNavInfo.textContent = `Chapter ${currentIndex + 1} of ${topics.length}`;
      } else {
        bottomNavInfo.textContent = '';
      }
    }
  }

  /* ===========================================================
     MODAL
  =========================================================== */
  function openModal(code) {
    currentCode  = code;
    originalCode = code;
    if (codeEditor) codeEditor.value = code;
    runPreview();
    if (modalBackdrop) modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (modalBackdrop) modalBackdrop.classList.remove('active');
    if (previewFrame)  previewFrame.srcdoc = '';
    document.body.style.overflow = '';
  }

  function runPreview() {
    if (!codeEditor || !previewFrame) return;
    let code = codeEditor.value;
    
    // If it's a full HTML document, just use it
    if (code.trim().toLowerCase().includes('<html')) {
       previewFrame.srcdoc = code;
       return;
    }
    
    // Simply wrap as HTML without injecting any dummy templates.
    // If the editor is empty, it outputs an empty body.
    previewFrame.srcdoc = `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:sans-serif;padding:16px;margin:0;}*{box-sizing:border-box;}</style></head><body>${code}</body></html>`;
  }

  /* ===========================================================
     TOAST
  =========================================================== */
  function showToast(msg) {
    if (!toast || !toastMsg) return;
    toastMsg.textContent = msg || 'Done!';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
  }

  /* ===========================================================
     LOCAL STORAGE
  =========================================================== */
  function loadCompleted() {
    return new Set();
  }

  function saveCompleted() {
    // Intentionally empty: do not save to local storage so progress resets on refresh
  }

  /* ===========================================================
     SEARCH
  =========================================================== */
  function handleSearch(e) {
    const q = e.target.value.toLowerCase().trim();
    if (!q) {
      filteredIndices = topics.map((_, i) => i);
    } else {
      filteredIndices = topics.reduce((acc, t, i) => {
        if (t.title.toLowerCase().includes(q)) acc.push(i);
        return acc;
      }, []);
    }
    renderSidebar(filteredIndices);
  }

  /* ===========================================================
     EVENT LISTENERS
  =========================================================== */
  function setupEventListeners() {

    // Home → Start Learning (hero button)
    if (btnStart) {
      btnStart.addEventListener('click', () => {
        const firstUncompleted = topics.findIndex((_, i) => !completedTopics.has(i));
        loadTopic(firstUncompleted !== -1 ? firstUncompleted : 0);
      });
    }

    // Home → Browse Chapters
    if (btnBrowse && homeTopicsSection) {
      btnBrowse.addEventListener('click', () => {
        homeTopicsSection.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // Theme toggles
    if (homeThemeBtn) homeThemeBtn.addEventListener('click', toggleTheme);
    if (tutThemeBtn)  tutThemeBtn.addEventListener('click', toggleTheme);

    // Home button in topbar
    if (breadcrumbHomeLink) breadcrumbHomeLink.addEventListener('click', () => showHome());

    // Sidebar Brand Logo → Back to Home Page
    const sidebarBrand = document.querySelector('.sidebar-brand');
    if (sidebarBrand) {
      sidebarBrand.addEventListener('click', () => showHome());
      sidebarBrand.style.cursor = 'pointer';
    }

    // Prev / Next (Topbar)
    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        if (currentIndex > 0) loadTopic(currentIndex - 1);
      });
    }
    if (btnNext) {
      btnNext.addEventListener('click', () => {
        if (currentIndex < topics.length - 1) loadTopic(currentIndex + 1);
      });
    }

    // Prev / Next (Bottom bar)
    if (btnPrevBottom) {
      btnPrevBottom.addEventListener('click', () => {
        if (currentIndex > 0) loadTopic(currentIndex - 1);
      });
    }
    if (btnNextBottom) {
      btnNextBottom.addEventListener('click', () => {
        if (currentIndex < topics.length - 1) loadTopic(currentIndex + 1);
      });
    }

    // Mobile menu
    if (menuBtn && sidebar && overlay) {
      menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
      });
      overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
      });
    }

    // Search
    if (searchInput) searchInput.addEventListener('input', handleSearch);

    // Modal
    if (btnRun) btnRun.addEventListener('click', runPreview);
    if (btnReset) {
      btnReset.addEventListener('click', () => {
        if (codeEditor) codeEditor.value = originalCode;
        runPreview();
      });
    }
    if (btnModalClose) btnModalClose.addEventListener('click', closeModal);
    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) closeModal();
      });
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    // Handle History API Back/Forward Buttons
    window.addEventListener('popstate', (e) => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path === basePath || path === basePath + 'index.html' || path === basePath.replace(/\/$/, '')) {
        if (hash.startsWith('#topic-')) {
          const slug = hash.replace('#topic-', '');
          const idx = getTopicIndexBySlug(slug);
          if (idx !== -1) {
            loadTopic(idx, true);
          } else {
            showHome(true);
          }
        } else {
          showHome(true); // skipPushState
        }
      }
    });
  }

  /* ===========================================================
     BOOT
  =========================================================== */
  init();

})();
