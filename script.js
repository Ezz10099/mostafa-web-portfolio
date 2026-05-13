// Get the current year and place it in the footer.
const yearElement = document.querySelector('#year');
yearElement.textContent = new Date().getFullYear();

// Simple mobile menu toggle for smaller screens.
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  const menuIsOpen = navLinks.classList.toggle('show');
  navToggle.setAttribute('aria-expanded', menuIsOpen);
});

// Close the mobile menu after a visitor clicks a navigation link.
navLinks.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    navLinks.classList.remove('show');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});
