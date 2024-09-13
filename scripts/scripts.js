document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('header');
  const menuBtn = document.querySelector('.menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

  function toggleMobileMenu() {
      menuBtn.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.classList.toggle('menu-open');
  }

  function closeMobileMenu() {
      menuBtn.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
  }

  menuBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleMobileMenu();
  });

  document.addEventListener('click', function(e) {
      if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
          closeMobileMenu();
      }
  });

  mobileMenuLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
  });

  function handleScroll() {
      if (window.scrollY > 50) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
          closeMobileMenu();
      }
  });
});