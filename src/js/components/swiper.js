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
