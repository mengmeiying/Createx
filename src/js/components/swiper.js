// Подключение свайпера
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const el = document.querySelector('.portfolio-section__slider');
const swiper = new Swiper(el, {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.portfolio-section__next',
    prevEl: '.portfolio-section__prev'
  }
});
