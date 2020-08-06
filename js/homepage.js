window.addEventListener('load', () => {
  /* #Contributors Slider
  ======================================================= */
  new Swiper('#contributorsSlider', {
    spaceBetween: 25,
    breakpoints: {
      0: {
        slidesPerView: 1.5
      },
      575: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      992: {
        slidesPerView: 4
      },
      1200: {
        slidesPerView: 6
      }
    }
  });

  /* #Posts Slider
  ======================================================= */
  new Swiper('#postsSlider', {
    spaceBetween: 35,
    autoHeight: true,
    breakpoints: {
      0: {
        slidesPerView: 1.5
      },
      575: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 4
      }
    }
  });
});