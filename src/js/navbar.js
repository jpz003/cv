/**
 * navbar.js
 * Controla la apertura y cierre del menú en mobile/tablet
 */

const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('icon-open');
  const iconClose = document.getElementById('icon-close');
  const links = menu.querySelectorAll('.mobile-link');

  function openMenu() {
    menu.style.maxHeight = menu.scrollHeight + 'px';
    btn.setAttribute('aria-expanded', 'true');
    iconOpen.classList.add('hidden');
    iconClose.classList.remove('hidden');
  }

  function closeMenu() {
    menu.style.maxHeight = '0';
    btn.setAttribute('aria-expanded', 'false');
    iconOpen.classList.remove('hidden');
    iconClose.classList.add('hidden');
  }

  btn.addEventListener('click', () => {
    menu.style.maxHeight === '0px' || !menu.style.maxHeight ? openMenu() : closeMenu();
  });

  links.forEach(link => link.addEventListener('click', closeMenu));