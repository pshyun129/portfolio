const body = document.body;
const viewToggle = document.querySelector('[data-view-toggle]');
const projectIds = new Set(['ait', 'brix']);
const projectLinks = document.querySelectorAll('[data-project-link]');
const projectBackLinks = document.querySelectorAll('.project-back');
let overviewScrollY = null;

function setView(view, projectId = '') {
  body.classList.remove('view-full', 'view-detail', 'detail-ait', 'detail-brix');

  if (view === 'full') body.classList.add('view-full');
  if (view === 'detail' && projectIds.has(projectId)) {
    body.classList.add('view-detail', `detail-${projectId}`);
  }

  const isFull = view === 'full';
  viewToggle?.setAttribute('aria-pressed', String(isFull));
  if (viewToggle) viewToggle.textContent = isFull ? '카드 보기' : '전체 보기';
}

function syncViewFromLocation() {
  const id = location.hash.slice(1);
  if (projectIds.has(id)) {
    setView('detail', id);
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: 'start' }));
    return;
  }
  if (body.classList.contains('view-full')) return;
  setView('overview');
}

projectLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const projectId = link.dataset.projectLink;
    if (!projectIds.has(projectId)) return;

    event.preventDefault();
    overviewScrollY = window.scrollY;
    history.pushState(null, '', `#${projectId}`);
    setView('detail', projectId);
    requestAnimationFrame(() => document.getElementById(projectId)?.scrollIntoView({ block: 'start' }));
  });
});

projectBackLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    history.replaceState(null, '', '#projects');
    setView('overview');
    requestAnimationFrame(() => {
      const returnScrollY = overviewScrollY ?? document.getElementById('projects')?.offsetTop ?? 0;
      window.scrollTo({ top: returnScrollY, behavior: 'auto' });
    });
  });
});

viewToggle?.addEventListener('click', () => {
  if (body.classList.contains('view-full')) {
    history.pushState(null, '', '#projects');
    setView('overview');
    document.getElementById('projects')?.scrollIntoView({ block: 'start' });
  } else {
    history.pushState(null, '', '#top');
    setView('full');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

window.addEventListener('hashchange', syncViewFromLocation);
syncViewFromLocation();

document.querySelector('[data-print]')?.addEventListener('click', () => window.print());
