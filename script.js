'use strict';
const filters = document.querySelectorAll('[data-filter]');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => {
    const selected = item === button;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  document.querySelectorAll('[data-category]').forEach(project => {
    project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter;
  });
}));
const copyButton = document.getElementById('copy-email');
copyButton.addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText('cristanemir@gmail.com');
    status.textContent = 'Adresse e-mail copiée !';
  } catch {
    status.textContent = 'Vous pouvez copier cette adresse : cristanemir@gmail.com';
  }
});
document.getElementById('year').textContent = new Date().getFullYear();
