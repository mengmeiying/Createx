// Подключение свайпера
import Swiper, { Navigation, Pagination, Thumbs } from 'swiper';
Swiper.use([Navigation, Pagination, Thumbs]);
const portfolioEl = document.querySelector('.portfolio-section__slider');
const portfolioSwiper = new Swiper(portfolioEl, {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.portfolio-section__next',
    prevEl: '.portfolio-section__prev'
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    425: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    }
  }
});

const testimonialsEl = document.querySelector('.testimonials__slider');
const testimonialsSwiper = new Swiper(testimonialsEl, {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.testimonials__next',
    prevEl: '.testimonials__prev'
  }
});

const relatedProjectsEl = document.querySelector('.related-projects__slider');
const relatedProjectsSwiper = new Swiper(relatedProjectsEl, {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.related-projects__next',
    prevEl: '.related-projects__prev'
  }
});



const workImagesElNav = document.querySelector('.work-images__slider-nav');
const workImagesSwiperNav = new Swiper(workImagesElNav, {
  slidesPerView: 10,
  spaceBetween: 20,
  freeMode: true,

});

const workImagesEl = document.querySelector('.work-images__slider');
const workImagesSwiper = new Swiper(workImagesEl, {
  slidesPerView: 1,
  spaceBetween: 10,
  watchSlidesProgress: true,
  thumbs: {
    swiper: workImagesSwiperNav,
  },
  navigation: {
    nextEl: '.work-images__next',
    prevEl: '.work-images__prev'
  },
});

const historyEl = document.querySelector('.history__slider');
const historySwiper = new Swiper(historyEl, {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.history__next',
    prevEl: '.history__prev'
  }
});

const mainHeroEl = document.querySelector('.hero__swiper');
const mainHeroSwiper = new Swiper(mainHeroEl, {
  slidesPerView: 1,
  spaceBetween: 30,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.hero__next',
    prevEl: '.hero__prev'
  },
  pagination: {
    el: '.hero__pag',
    type: 'bullets',
    clickable: true
  }
});

const historyBtns = document.querySelectorAll('.history-nav__btn');

historySwiper.on('slideChange', function() {
  const currentButton = document.querySelector(`.history-nav__btn[data-index="${historySwiper.realIndex}"]`);
  historyBtns.forEach(el => el.classList.remove('history-nav__btn--current'));
    currentButton.classList.add('history-nav__btn--current');
})


historyBtns.forEach((btn, idx) => {
  btn.setAttribute('data-index', idx);
  btn.addEventListener('click', function(e) {
    historyBtns.forEach(el => el.classList.remove('history-nav__btn--current'));
    btn.classList.add('history-nav__btn--current');
    const index = e.currentTarget.dataset.index;
    historySwiper.slideTo(index);
  })
})
