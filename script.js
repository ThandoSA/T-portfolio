function toggleMenu(open) {
  const menu = document.querySelector('#mobile-menu');
  const icon = document.querySelector('#mobile-hamburger');
  if (!menu || !icon) return;
}

// SELECT ELEMENTS
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

// TOGGLE MENU FUNCTION
function toggleMenu() {
  const isOpen = mobileMenu.classList.contains('open');

  if (!isOpen) {
    mobileMenu.classList.add('open');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    // Focus first link for keyboard users
    const firstLink = mobileMenu.querySelector('a');
    if (firstLink) firstLink.focus();
  } else {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.focus();
  }
}

// CLICK EVENT
if (hamburger) {
  hamburger.addEventListener('click', toggleMenu);

  // ACCESSIBILITY: Toggle menu with Enter or Space
  hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    } else if (e.key === 'Escape') {
      closeMenu();
    }
  });
}

// CLOSE MENU FUNCTION
function closeMenu() {
  if (mobileMenu.classList.contains('open')) {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
}

// CLOSE MENU WHEN LINK IS CLICKED
const menuLinks = document.querySelectorAll('.mobile-menu a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => closeMenu());
});

// CLOSE MENU WITH ESC KEY
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});
