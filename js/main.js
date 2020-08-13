window.addEventListener('load', () => {
  /* #Mega Menu
  ======================================================= */
  const body = document.querySelector('body');
  const headerDropdownsTogglers = document.querySelectorAll('.header-dropdown-toggler');
  const headerDropdownsMenus = document.querySelectorAll('.header-dropdown-menu');

  // Display dropdowns on desktops (but preserve visibility hidden)
  if (window.innerWidth > 991) {
    headerDropdownsMenus.forEach((item) => {
      item.style.display = 'block';
    });
  }
  
  headerDropdownsTogglers.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const toggler = e.currentTarget;
      const dropdown = toggler.parentElement.querySelector('.header-dropdown-menu');

      // Close dropdown if already openned
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
        toggler.removeAttribute('aria-expanded', 'true');

        if (window.innerWidth > 991) {
          body.classList.remove('backdrop');
        }

        return;
      }

      // Close all other dropdown menus
      headerDropdownsMenus.forEach((item) => {
        item.classList.remove('show');
      });
      headerDropdownsTogglers.forEach((item) => {
        item.removeAttribute('aria-expanded', 'true');
      });

      // Show dropdown menu & backdrop
      if (window.innerWidth > 991) {
        body.classList.add('backdrop');
      }
      dropdown.classList.add('show');
      toggler.setAttribute('aria-expanded', 'true');
    });
  });

  // Close Header Dropdown when clicking outside
  body.addEventListener('click', (e) => {
    if (!e.target.closest('.header-dropdown') && window.innerWidth > 992) {
      headerDropdownsMenus.forEach((item) => {
        item.classList.remove('show');
        body.classList.remove('backdrop');
      });
      headerDropdownsTogglers.forEach((item) => {
        item.removeAttribute('aria-expanded', 'true');
      });
    }
  });

  // Add backdrop on mobile hamburger menu
  $('#headerNav').on('show.bs.collapse', function () {
    body.classList.add('backdrop');
  });
  $('#headerNav').on('hide.bs.collapse', function () {
    body.classList.remove('backdrop');
  });
});