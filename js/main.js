window.addEventListener('load', () => {
  /* #Closing mega-menu when clicking outside
  ======================================================= */
  const body = document.querySelector('body');
  body.addEventListener('click', (e) => {
    if (!e.target.closest('.header') && window.innerWidth > 992) {
      $('#aboutUsCollapse').collapse('hide');
      $('#contributorsCollapse').collapse('hide');
      $('#communityCollapse').collapse('hide');
      $('#getUbuntuTouchCollapse').collapse('hide');
    } else if (!e.target.closest('.header') && window.innerWidth < 992) {
      $('#headerNav').collapse('hide');
    }
  });

  /* #Adding backdrop on mega-menu
  ======================================================= */

});