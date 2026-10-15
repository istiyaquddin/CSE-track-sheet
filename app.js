/**
 * Problem Solving Arena - Core Controller
 * IIUC CSE Educational Platform
 */

// Application State
const STATE = {
  theme: localStorage.getItem('iiuc_arena_theme') || 'dark',
  solved: JSON.parse(localStorage.getItem('iiuc_arena_solved') || '{}'),
  activeCategory: 'all',
  selectedJudge: 'all',
  selectedStatus: 'all',
  searchQuery: '',
};

// Initialize default AC records from dataset if user hasn't modified yet
function initDefaultRecords() {
  if (Object.keys(STATE.solved).length === 0) {
    ARENA_DATA.problems.forEach(p => {
      if (p.verdict === 'ac') {
        STATE.solved[p.id] = true;
      }
    });
    saveState();
  }
}

function saveState() {
  localStorage.setItem('iiuc_arena_solved', JSON.stringify(STATE.solved));
}

// Theme Toggle
function initTheme() {
  document.documentElement.setAttribute('data-theme', STATE.theme);
  const themeIcon = document.getElementById('themeIcon');
  if (themeIcon) {
    themeIcon.className = STATE.theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }
}

function toggleTheme() {
  STATE.theme = STATE.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('iiuc_arena_theme', STATE.theme);
  initTheme();
}

// Stats Calculation
function updateStats() {
  const total = ARENA_DATA.problems.length;
  let solvedCount = 0;
  
  ARENA_DATA.problems.forEach(p => {
    if (STATE.solved[p.id]) solvedCount++;
  });

  const percent = total > 0 ? Math.round((solvedCount / total) * 100) : 0;
  
  const elTotal = document.getElementById('statTotal');
  const elSolved = document.getElementById('statSolved');
  const elPercent = document.getElementById('statPercent');
  const elVideos = document.getElementById('statVideos');

  if (elTotal) elTotal.textContent = total;
  if (elSolved) elSolved.textContent = solvedCount;
  if (elPercent) elPercent.textContent = percent + '%';
  if (elVideos) elVideos.textContent = ARENA_DATA.videos.length;
}

// Render Category Pills
function renderCategoryPills() {
  const container = document.getElementById('categoryPills');
  if (!container) return;

  container.innerHTML = ARENA_DATA.categories.map(cat => {
    const isActive = STATE.activeCategory === cat.id ? 'active' : '';
    // Count problems in category
    const count = cat.id === 'all' 
      ? ARENA_DATA.problems.length 
      : ARENA_DATA.problems.filter(p => p.category === cat.id).length;

    return `
      <button class="category-pill ${isActive}" onclick="setCategory('${cat.id}')">
        <i class="${cat.icon}"></i>
        <span>${cat.name}</span>
        <span style="opacity: 0.7; font-size: 0.75rem;">(${count})</span>
      </button>
    `;
  }).join('');
}

function setCategory(catId) {
  STATE.activeCategory = catId;
  renderCategoryPills();
  renderProblems();
}

// Filter Problems
function getFilteredProblems() {
  return ARENA_DATA.problems.filter(p => {
    // Category match
    if (STATE.activeCategory !== 'all' && p.category !== STATE.activeCategory) {
      return false;
    }
    // Judge match
    if (STATE.selectedJudge !== 'all') {
      if (p.judge.toLowerCase() !== STATE.selectedJudge.toLowerCase()) {
        return false;
      }
    }
    // Status match
    const isSolved = !!STATE.solved[p.id];
    if (STATE.selectedStatus === 'ac' && !isSolved) return false;
    if (STATE.selectedStatus === 'todo' && isSolved) return false;

    // Search query
    if (STATE.searchQuery.trim()) {
      const q = STATE.searchQuery.toLowerCase();
      const matchId = p.id.toLowerCase().includes(q);
      const matchTitle = p.title.toLowerCase().includes(q);
      const matchCat = p.category.toLowerCase().includes(q);
      const matchComment = (p.comment || '').toLowerCase().includes(q);
      if (!matchId && !matchTitle && !matchCat && !matchComment) return false;
    }

    return true;
  });
}

// Render Problem Cards
function renderProblems() {
  const container = document.getElementById('problemsContainer');
  if (!container) return;

  const list = getFilteredProblems();

  if (list.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.4;"></i>
        <h3 style="font-family: var(--font-heading); font-size: 1.3rem; margin-bottom: 0.5rem;">No Problems Found</h3>
        <p>Try adjusting your search query, online judge, or category filter.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(p => {
    const isAC = !!STATE.solved[p.id];
    const judgeClass = p.judge.toLowerCase();
    
    // Find matching video if any
    const videoObj = ARENA_DATA.videos.find(v => v.category === p.category);

    return `
      <div class="problem-card ${isAC ? 'status-ac' : 'status-todo'}" id="card-${p.id}">
        <div class="card-top">
          <span class="sl-badge">${p.id}</span>
          <div class="top-badges">
            <span class="judge-badge ${judgeClass}">${p.judge}</span>
            <span class="category-tag">${p.category}</span>
          </div>
        </div>

        <h3 class="problem-title">
          <a href="${p.link}" target="_blank" rel="noopener noreferrer" title="Open problem on online judge">
            ${escapeHTML(p.title)} <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.75rem; opacity: 0.6;"></i>
          </a>
        </h3>

        ${p.comment ? `<div class="meta-comment"><i class="fa-solid fa-circle-info"></i> ${escapeHTML(p.comment)}</div>` : ''}

        <div class="problem-meta">
          <span class="meta-item"><i class="fa-regular fa-clock"></i> ${p.solveTime || '10m'}</span>
          <span class="meta-item"><i class="fa-regular fa-calendar"></i> ${p.date || 'Active'}</span>
        </div>

        ${videoObj ? `
          <div class="card-video-box">
            <span><i class="fa-solid fa-play" style="color: #818cf8; margin-right: 0.3rem;"></i> Session:</span>
            <a href="${videoObj.url}" target="_blank" rel="noopener noreferrer">
              ${escapeHTML(videoObj.title.substring(0, 32))}...
            </a>
          </div>
        ` : ''}

        <!-- 3-Tier AI Hint Drawer -->
        <div class="hint-drawer" id="hint-${p.id}">
          <div class="hint-step">
            <h5><i class="fa-solid fa-lightbulb"></i> Hint 1: Concept & Input/Output</h5>
            <p>${escapeHTML(p.hint1)}</p>
          </div>
          <div class="hint-step">
            <h5><i class="fa-solid fa-gears"></i> Hint 2: Step-by-Step Logic</h5>
            <p>${escapeHTML(p.hint2)}</p>
          </div>
          <div class="hint-step">
            <h5><i class="fa-solid fa-triangle-exclamation"></i> Hint 3: Corner Cases & Gotchas</h5>
            <p>${escapeHTML(p.hint3)}</p>
          </div>
        </div>

        <!-- Verified Solution Code Drawer -->
        <div class="solution-drawer" id="sol-${p.id}">
          <div class="code-header">
            <span><i class="fa-solid fa-code"></i> Solution.c</span>
            <button class="btn-copy-code" onclick="copySolution('${p.id}')" id="copy-btn-${p.id}">
              <i class="fa-regular fa-copy"></i> Copy
            </button>
          </div>
          <pre><code>${escapeHTML(p.solution)}</code></pre>
        </div>

        <div class="card-actions">
          <button class="status-toggle ${isAC ? 'is-ac' : ''}" onclick="toggleStatus('${p.id}')">
            <i class="${isAC ? 'fa-solid fa-check-circle' : 'fa-regular fa-circle'}"></i>
            <span>${isAC ? 'Solved (AC)' : 'Mark Solved'}</span>
          </button>

          <div class="btn-group-right">
            <button class="btn-card-action hint-btn" onclick="toggleHintDrawer('${p.id}')" title="3-Tier AI Hints">
              <i class="fa-solid fa-lightbulb"></i> Hints
            </button>
            <button class="btn-card-action solution-btn" onclick="toggleSolutionDrawer('${p.id}')" title="View C Solution">
              <i class="fa-solid fa-code"></i> Code
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Toggle Solved / AC Status
function toggleStatus(id) {
  if (STATE.solved[id]) {
    delete STATE.solved[id];
  } else {
    STATE.solved[id] = true;
  }
  saveState();
  updateStats();
  renderProblems();
}

// Toggle Hint Drawer
function toggleHintDrawer(id) {
  const drawer = document.getElementById(`hint-${id}`);
  if (!drawer) return;
  const isShown = drawer.style.display === 'block';
  drawer.style.display = isShown ? 'none' : 'block';
}

// Toggle Solution Drawer with Pedagogical Alert
function toggleSolutionDrawer(id) {
  const drawer = document.getElementById(`sol-${id}`);
  if (!drawer) return;

  const isShown = drawer.style.display === 'block';
  if (!isShown) {
    // Show pedagogical encouragement toast or proceed
    drawer.style.display = 'block';
  } else {
    drawer.style.display = 'none';
  }
}

// Toast Notification Helper
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const msg = document.getElementById('toastMessage');
  if (!toast || !msg) return;
  msg.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// Scroll To Top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Copy Solution to Clipboard
function copySolution(id) {
  const problem = ARENA_DATA.problems.find(p => p.id === id);
  if (!problem) return;

  navigator.clipboard.writeText(problem.solution).then(() => {
    const btn = document.getElementById(`copy-btn-${id}`);
    if (btn) {
      btn.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
      setTimeout(() => {
        btn.innerHTML = `<i class="fa-regular fa-copy"></i> Copy`;
      }, 2000);
    }
    showToast(`Solution code for ${problem.id} copied to clipboard!`);
  });
}

// Copy AI Tutor Prompt
function copyAiPrompt() {
  const prompt = ARENA_DATA.aiGuidelines.copyPrompt;
  navigator.clipboard.writeText(prompt).then(() => {
    const btn = document.getElementById('copyPromptBtn');
    if (btn) {
      btn.innerHTML = `<i class="fa-solid fa-check"></i> Prompt Copied!`;
      setTimeout(() => {
        btn.innerHTML = `<i class="fa-solid fa-copy"></i> Copy Tutor Prompt`;
      }, 2500);
    }
    showToast("AI টিউটর প্রম্পট কপি হয়েছে! চ্যাটে পেস্ট করে প্র্যাকটিস শুরু করুন।");
  });
}

// Modals
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.style.display = 'flex';
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.style.display = 'none';
}

// Render Videos Modal
function renderVideosList() {
  const container = document.getElementById('videosListContainer');
  if (!container) return;

  container.innerHTML = ARENA_DATA.videos.map(v => `
    <div class="video-item-card">
      <div class="video-item-info">
        <div class="video-item-meta">${escapeHTML(v.session)} &bull; ${escapeHTML(v.category)}</div>
        <h4 class="video-item-title">${escapeHTML(v.title)}</h4>
        <div class="video-item-date"><i class="fa-regular fa-clock"></i> ${escapeHTML(v.duration)} &bull; ${escapeHTML(v.date)}</div>
      </div>
      <a href="${v.url}" target="_blank" rel="noopener noreferrer" class="nav-btn primary video-watch-btn">
        <i class="fa-solid fa-play"></i> Watch
      </a>
    </div>
  `).join('');
}

// HTML Escape Helper
function escapeHTML(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Search and Filter Listeners
function initListeners() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      STATE.searchQuery = e.target.value;
      renderProblems();
    });
  }

  const judgeFilter = document.getElementById('judgeFilter');
  if (judgeFilter) {
    judgeFilter.addEventListener('change', (e) => {
      STATE.selectedJudge = e.target.value;
      renderProblems();
    });
  }

  const statusFilter = document.getElementById('statusFilter');
  if (statusFilter) {
    statusFilter.addEventListener('change', (e) => {
      STATE.selectedStatus = e.target.value;
      renderProblems();
    });
  }

  // Close modals on overlay click
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      e.target.style.display = 'none';
    }
  });

  // Back to Top button scroll visibility listener
  window.addEventListener('scroll', () => {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }, { passive: true });
}

// Bootstrapper
document.addEventListener('DOMContentLoaded', () => {
  // Check URL query parameters
  const params = new URLSearchParams(window.location.search);
  const q = params.get('search');
  const cat = params.get('category');
  if (q) {
    STATE.searchQuery = q;
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = q;
  }
  if (cat && ARENA_DATA.categories.some(c => c.id === cat)) {
    STATE.activeCategory = cat;
  }

  initDefaultRecords();
  initTheme();
  updateStats();
  renderCategoryPills();
  renderProblems();
  renderVideosList();
  initListeners();
});

