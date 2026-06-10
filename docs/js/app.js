/**
 * App runtime — routing, sidebar, bottom nav, content loading, CodeMirror cleanup.
 */

let currentPage = '';

/* ---- Routing ---- */

function getRouteFromHash() {
  let hash = window.location.hash.replace(/^#/, '');
  // Extract path before any fragment separator
  const fragIdx = hash.indexOf('#');
  if (fragIdx !== -1) hash = hash.substring(0, fragIdx);
  return hash.replace(/^\/?/, '') || '';
}

function getTargetFragment() {
  const hash = window.location.hash;
  // Fragment is the last segment after the last '#'
  // URL format: #/path/to/page#fragmentname
  const parts = hash.split('#');
  if (parts.length > 2) return parts[parts.length - 1];
  return null;
}

function getBreadcrumbKey(path) {
  if (!path) return 'home';
  const parts = path.split('/');
  if (parts[0] === 'menyiapkan-kubernetes' && parts[1]) return parts[1];
  if (parts[0] === 'dasar-kubernetes' && parts[1]) return parts[1];
  return parts[0];
}

function getPagePath(path) {
  return PAGE_MAP[path] || 'pages/404.html';
}

/* ---- Sidebar ---- */

function renderSidebar(currentPath) {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  let html = '';
  for (const item of SIDENAVS) {
    const urlPath = item.url.join('/');
    const isActive = currentPath === urlPath;
    const isSection = item.class === 'ml-3' && !/^\d/.test(item.text);

    let href = '#/' + urlPath;
    if (item.fragment) href += '#' + item.fragment;

    let cls = '';
    if (isActive) cls += 'active ';
    if (isSection) cls += 'section ';

    html += `<a href="${href}" class="sidebar-link ${cls.trim()}" style="padding-left:${item.class ? parseInt(item.class.replace('ml-','')) * 12 : 12}px">${item.text}</a>`;
  }
  sidebar.innerHTML = html;
}

/* ---- Bottom Nav ---- */

function renderBottomNav(path) {
  const container = document.getElementById('bottom-nav');
  if (!container) return;

  const key = getBreadcrumbKey(path);
  const links = BOTTOMLINKS[key] || { left: NAVS.empty, center: NAVS.empty, right: NAVS.empty };

  const mkLink = (item, side) => {
    if (!item || !item.url.length) return `<span class="bottom-link disabled invisible">—</span>`;
    const urlPath = item.url.join('/');
    return `<a href="#/${urlPath}" class="bottom-link ${side}">${side === 'left' ? '← ' : ''}${item.text}${side === 'right' ? ' →' : ''}</a>`;
  };

  container.innerHTML = `
    ${mkLink(links.left, 'left')}
    <a href="#/" class="bottom-link center">${links.center.text}</a>
    ${mkLink(links.right, 'right')}
  `;
}

/* ---- CodeMirror Cleanup ---- */

function cleanCodeMirror(container, pagePath) {
  // Extract plain text from Typora CodeMirror blocks
  container.querySelectorAll('pre.md-fences').forEach(pre => {
    const lang = pre.getAttribute('lang') || '';
    const lines = [];
    pre.querySelectorAll('.CodeMirror-line span[role="presentation"]').forEach(span => {
      lines.push(span.textContent || '');
    });
    const cleaned = document.createElement('pre');
    cleaned.className = `code-block${lang ? ' lang-' + lang : ''}`;
    cleaned.innerHTML = `<code>${lines.join('\n')}</code>`;
    pre.replaceWith(cleaned);
  });

  // Fix routerLink → hash links, resolving relative paths
  // For section index pages, TOC links are relative to the section
  const basePath = pagePath || '';

  container.querySelectorAll('a[routerLink]').forEach(a => {
    let link = a.getAttribute('routerLink') || '';
    const fragment = a.getAttribute('fragment');

    // Strip leading/trailing slashes
    link = link.replace(/^\/+|\/+$/g, '');

    // If link is relative (doesn't include the section name), resolve it
    if (basePath && !link.startsWith(basePath.split('/')[0])) {
      link = basePath + '/' + link;
    }

    let href = '#/' + link;
    if (fragment) href += '#' + fragment;
    a.setAttribute('href', href);
    a.removeAttribute('routerLink');
  });

  // Fix md-toc-inner links that use routerLink on parent
  container.querySelectorAll('.md-toc-inner').forEach(a => {
    if (a.getAttribute('href') && a.getAttribute('href').startsWith('#')) return;
    // These are already handled by the parent a[routerLink]
  });
}

/* ---- Load Page ---- */

async function loadPage(path) {
  const contentEl = document.getElementById('content');
  if (!contentEl) return;

  currentPage = path;
  const pageFile = getPagePath(path);

  try {
    const resp = await fetch(pageFile);
    if (!resp.ok) throw new Error('Not found');
    const html = await resp.text();

    contentEl.innerHTML = html;
    cleanCodeMirror(contentEl, path);

    // Handle fragment scrolling (for sidebar sub-item clicks)
    const fragment = getTargetFragment();
    if (fragment) {
      setTimeout(() => {
        const el = document.getElementById(fragment) || contentEl.querySelector(`a[name="${fragment}"]`);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }

    renderSidebar(path);
    renderBottomNav(path);
    updatePageTitle(path);

  } catch (e) {
    contentEl.innerHTML = `<div id='write'><h2>404 — Halaman tidak ditemukan</h2></div>`;
    renderSidebar('');
    renderBottomNav('');
  }
}

function updatePageTitle(path) {
  const titles = {
    '': 'Kubernetes Documentation',
    'pendahuluan': 'Pendahuluan',
    'apa-itu-kubernetes': 'Apa itu Kubernetes?',
    'menyiapkan-kubernetes': 'Menyiapkan Kubernetes',
    'dasar-kubernetes': 'Dasar Kubernetes'
  };
  document.title = (titles[path] || path.replace(/-/g, ' ')) + ' — K8s Docs';
}

/* ---- Mobile Sidebar Toggle ---- */

function initMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  const iconOpen = document.getElementById('sidebar-icon-open');
  const iconClose = document.getElementById('sidebar-icon-close');

  document.getElementById('sidebar-toggle')?.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    const isCollapsed = sidebar.classList.contains('collapsed');
    iconOpen.classList.toggle('hidden', isCollapsed);
    iconClose.classList.toggle('hidden', !isCollapsed);
  });

  // Close sidebar on link click (mobile)
  document.getElementById('sidebar')?.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.classList.contains('sidebar-link')) {
      if (window.innerWidth <= 768) {
        sidebar.classList.add('collapsed');
        iconOpen.classList.remove('hidden');
        iconClose.classList.add('hidden');
      }
    }
  });
}

/* ---- Init ---- */

window.addEventListener('hashchange', () => {
  loadPage(getRouteFromHash());
});

document.addEventListener('DOMContentLoaded', () => {
  initMobileSidebar();
  loadPage(getRouteFromHash());
});
