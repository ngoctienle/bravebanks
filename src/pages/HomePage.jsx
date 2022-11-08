import 'swiper/css'
import 'swiper/css/virtual'

import '../assets/effect-carousel.scss'
import '../assets/main.scss'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'

import { Container } from '../components/Global'
import Image1 from '../assets/images/guardians-of-the-galaxy.jpg'
import Image2 from '../assets/images/justice-league.jpg'
import Image3 from '../assets/images/spider-man.jpg'
import Image4 from '../assets/images/suicide-squad.jpg'
import Image5 from '../assets/images/thor-ragnarok.jpg'

import CarouselSlider from '../helpers/effect-carousel.esm'

const HomePage = () => {
  const settings = {
    modules: [Autoplay, Navigation, Pagination, CarouselSlider],
    effect: 'carousel',
    grabCursor: true,
    loop: true,
    loopedSlides: 5,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 3000
    }
  }
  return (
    <Container>
      <Swiper {...settings}>
        <SwiperSlide>
          <div className="swiper-carousel-animate-opacity">
            <img src={Image1} alt="" />
            <div className="slide-content">
              <h2>Guardians Of The Galaxy</h2>
              <p>
                A group of intergalactic criminals must pull together to stop a
                fanatical warrior with plans to purge the universe.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-carousel-animate-opacity">
            <img src={Image2} alt="" />
            <div className="slide-content">
              <h2>Justice League</h2>
              <p>
                Determined to ensure Superman's ultimate sacrifice was not in
                vain, Bruce Wayne aligns forces with Diana Prince with plans to
                recruit a team of metahumans to protect the world from an
                approaching threat of catastrophic proportions.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-carousel-animate-opacity">
            <img src={Image3} alt="" />
            <div className="slide-content">
              <h2>Spider-Man: Far from Home</h2>
              <p>
                Following the events of Avengers: Endgame (2019), Spider-Man
                must step up to take on new threats in a world that has changed
                forever.
              </p>
            </div>
          </div>
        </SwiperSlide>
        
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </Container>
  )
}

export default HomePage
