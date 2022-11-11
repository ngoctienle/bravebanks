import { Autoplay, Navigation, Pagination } from 'swiper'
import CarouselSlider from '../helpers/effect-carousel.esm'

export const settings = {
  modules: [Autoplay, Navigation, Pagination, CarouselSlider],
  effect: 'carousel',
  grabCursor: true,
  loop: true,
  loopedSlides: 5,
  slidesPerView: 'auto',
  autoplay: {
    delay: 5000
  }
}
