// Подключение свайпера
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
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
