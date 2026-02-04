function navigateToContact() {
  window.location.href = '/contact.html';
}

// Responsive navbar toggle
document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const navbar = document.querySelector('.navbar-container');

  if (!burger || !navbar) return;

  burger.addEventListener('click', function () {
    const isOpen = navbar.classList.toggle('open');
    burger.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close menu when a nav link is clicked
  navbar.addEventListener('click', function (e) {
    if (e.target.closest('a')) {
      navbar.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
});
