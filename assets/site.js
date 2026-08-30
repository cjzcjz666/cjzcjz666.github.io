// Content remains fully readable if JavaScript is unavailable.
document.documentElement.classList.add('js');

const filters = document.querySelectorAll('.filter');
const publications = document.querySelectorAll('.publication');
const filterStatus = document.querySelector('#filter-status');

filters.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    let count = 0;
    filters.forEach((filter) => {
      const active = filter === button;
      filter.classList.toggle('is-active', active);
      filter.setAttribute('aria-pressed', String(active));
    });
    publications.forEach((publication) => {
      const visible = category === 'all' || publication.dataset.category === category;
      publication.hidden = !visible;
      if (visible) count += 1;
    });
    const label = button.childNodes[0].textContent.trim();
    filterStatus.textContent = `Showing ${count} ${label === 'All work' ? '' : label + ' '}publication${count === 1 ? '' : 's'}.`;
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const navLinks = [...document.querySelectorAll('.main-nav a')];
const sections = [...document.querySelectorAll('#top, #about, #publications, #background, #contact')];
let navigationFrame = null;

function updateNavigation() {
  navigationFrame = null;
  const atBottom = Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 2;
  const passedSections = sections.filter((section) => section.getBoundingClientRect().top <= 160);
  const current = atBottom ? 'contact' : passedSections.at(-1)?.id;
  navLinks.forEach((link) => {
    const active = link.hash === `#${current}`;
    link.classList.toggle('is-current', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}

function queueNavigationUpdate() {
  if (navigationFrame === null) navigationFrame = requestAnimationFrame(updateNavigation);
}

window.addEventListener('scroll', queueNavigationUpdate, { passive: true });
window.addEventListener('resize', queueNavigationUpdate);
window.addEventListener('load', queueNavigationUpdate);
queueNavigationUpdate();
